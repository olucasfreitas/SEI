const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const user_id = request.headers.authorization;
    const { page = 1 } = request.query;

    const pedidos = await connection("pedidos")
      .where("user_id", user_id)
      .limits(5)
      .offset(page - 1)
      .select("*");

    return response.json(pedidos);
  },

  async create(request, response) {
    const { name, quantity, price, orders, user_id } = request.body;

    const id = crypto.randomBytes(3).toString("HEX").toUpperCase();

    await connection("user").insert({
      id,
      name,
      quantity_items,
      preco_total,
    });

    return response.json({ id, password });
  },

  async delete(request, response) {
    const { id } = request.params;
    const estabelecimento_id = request.headers.authorization;

    const user = await connection("user")
      .where("id", id)
      .select("estabelecimento_id")
      .first();

    if (user.estabelecimento_id !== estabelecimento_id) {
      return response.status(401).json({ error: "Item Não Deletado." });
    }

    await connection("user").where("id", id).delete();

    return response.status(204).send();
  },
};
