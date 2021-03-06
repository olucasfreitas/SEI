const connection = require("../database/connection");
const crypto = require('crypto');
module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const estabelecimento_id = request.headers.authorization;

        const itens = await connection("itens")
            .where('estabelecimento_id', estabelecimento_id)
            .limit(5)
            .offset((page - 1) * 5)
            .select("*");

        return response.json(itens);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const estabelecimento_id = request.headers.authorization;
        const item_id = crypto.randomBytes(4).toString('HEX');

        const [id] = await connection("itens").insert({
            item_id,
            title,
            description,
            value,
            estabelecimento_id,
        });

        return response.json({ item_id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const estabelecimento_id = request.headers.authorization;

        const item = await connection("itens")
            .where("item_id", id)
            .select("estabelecimento_id",)
            .first();

        if (item.estabelecimento_id !== estabelecimento_id) {
            return response.status(401).json({ error: "Operação não permitida." });
        }

        await connection("itens").where("item_id", id).delete();

        return response.status(204).send();
    },
};