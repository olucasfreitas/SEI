const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const estabelecimentos = await connection('estabelecimentos').select('*');

        return response.json(estabelecimentos);
    },

    async create(request, response) {
        const { name, password, address, email, number, waiting_time } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('estabelecimentos').insert({
            id,
            name,
            password,
            address,
            email,
            number,
            waiting_time,
        });

        return response.json({ id, password });
    }
}