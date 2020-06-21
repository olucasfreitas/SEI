const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const estabelecimentos = await connection('estabelecimentos')
            .limit(5)
            .offset((page - 1))
            .select('*');

        return response.json(estabelecimentos);
    },

    async create(request, response) {
        const { name, password, adress, email, number, description } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('estabelecimentos').insert({
            id,
            name,
            password,
            adress,
            email,
            number,
            description,
        });

        return response.json({ id });
    }
}