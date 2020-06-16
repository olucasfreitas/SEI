const connection = require("../database/connection");
module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const itens = await connection("itens")
            .limit(5)
            .offset(page - 1)
            .select("*");

        return response.json(itens);
    },

    async create(request, response) {
        const { title, description, value, category } = request.body;
        const estabelecimento_id = request.headers.authorization;

        const [id] = await connection("itens").insert({
            title,
            description,
            value,
            estabelecimento_id,
            category,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const estabelecimento_id = request.headers.authorization;

        const item = await connection("itens")
            .where("id", id)
            .select("estabelecimento_id")
            .first();

        if (item.estabelecimento_id !== estabelecimento_id) {
            return response.status(401).json({ error: "Operação não permitida." });
        }

        await connection("itens").where("id", id).delete();

        return response.status(204).send();
    },
};