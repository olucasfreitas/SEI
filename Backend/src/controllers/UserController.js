const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const estabelecimento_id = request.headers.authorization;
    const { page = 1 } = request.query;

    const user = await connection("user")
      .where("estabelecimento_id", estabelecimento_id)
      .limits(5)
      .offset(page - 1)
      .select("*");

    return response.json(user);
  },

  async create(request, response) {
    const { name } = request.body;
    const quantity_items, preco_total = 0;
    const id = crypto.randomBytes(3).toString("HEX").toUpperCase();

    await connection("user").insert({
      id,
      name,
      quantity_items,
      preco_total,
    });

    // return response.json({ PENSAR DEPOIS });
  },

  async delete(request, response) {
    const { id } = request.params;
    
    await connection("user").where("id", id).delete();

    return response.status(204).send();
  },
};
