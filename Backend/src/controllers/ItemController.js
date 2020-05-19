const connection = require('../database/connection');
const multer =  require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const uploads = multer({ dest: '../uploads'})


module.exports = {

    async index(request, response) {
        const {page = 1} = request.query;

        
        const itens = await connection('itens')
            .limits(5)
            .offset((page - 1))
            .select('*');

        return response.json(itens);
    },

    async create(request, response) {
        const { title, description, value , category} = request.body;
        const estabelecimento_id = request.headers.authorization;

        const [id] = await connection('itens').insert({
            title,
            description,
            value,
            estabelecimento_id,
            category
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const estabelecimento_id = request.headers.authorization;

        const item = await connection('itens')
            .where('id', id)
            .select('estabelecimento_id')
            .first();

        if (item.estabelecimento_id !== estabelecimento_id) {
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        await connection('itens').where('id', id).delete();

        return response.status(204).send();
    },
}