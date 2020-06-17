const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;
    const estabelecimento_id = request.headers.authorization;

    const user = await connection("user")
      .where("estabelecimento_id", estabelecimento_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    return response.json(user);
  },

  async create(request, response) {
    const estabelecimento_id = request.headers.authorization;
    const { name } = request.body;
    const quantity_items = 0;
    const preco_total = 0;
    const id = crypto.randomBytes(3).toString("HEX").toUpperCase();

    await connection("user").insert({
      id,
      name,
      quantity_items,
      preco_total,
      estabelecimento_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const estabelecimento_id = request.headers.authorization;

    const user = await connection("user")
      .where('id', id)
      .select('estabelecimento_id')
      .first();

    if (user.estabelecimento_id !== estabelecimento_id) {
      return response.status(401).json({ error: 'Operação não permitida. ' });
    }

    await connection("user").where("id", id).delete();
    await connection("pedidos").where("user_id", id).delete();

    return response.status(204).send();
  },
};
