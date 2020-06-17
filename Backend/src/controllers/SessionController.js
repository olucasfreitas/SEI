const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;

        const estabelecimento = await connection('estabelecimentos')
            .where('email', email)
            .select('name')
            .first();

        const senha = await connection('estabelecimentos')
            .where('password', password)
            .select('name')
            .first();

        if (!estabelecimento) {
            return response.status(400).json({ error: 'E-mail incorreto!' });
        }

        if (!senha) {
            return response.status(400).json({ error: 'Senha incorreta!' });
        }

        return response.json(estabelecimento);
    }
};
