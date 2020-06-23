const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const user_id = request.headers.authorization;
    const { page = 1 } = request.query;

    const pedidos = await connection("pedidos")
      .where("user_id", user_id)
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    return response.json(pedidos);
  },

  async create(request, response) {
    const { quantity } = request.body;
    const user_id = request.headers.authorization;
    const name = request.headers.authorization2;
    const price = request.headers.authorization3;

    const [id] = await connection("pedidos").insert({
      name,
      quantity,
      price,
      user_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const pedidos = await connection('pedidos')
      .where('id', id)
      .select('user_id')
      .first();

    if (pedidos.user_id !== user_id) {
      return response.status(401).json({ error: "Item Não Deletado." });
    }

    await connection("pedidos").where('id', id).delete();

    return response.status(204).send();
  },
};