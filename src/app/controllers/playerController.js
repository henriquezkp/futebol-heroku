import Player from '../models/player'


class PlayerController {
    async index(req, res) {
        let player = await Player.findAll();

        return res.json(player);
    }

    async show(req, res) {
        let { id } = req.params;

        let player = await Player.findByPk(id, {
            where: { id: id },
        });

        return res.json(player);
    }

    async store(req, res) {
        let { name, position, altura, peso, data_nasc, time_id } = req.body;

        let player = await Player.create({
            name,
            position,
            altura,
            peso,
            data_nasc,
            time_id,
            created_at: new Date(),
        });

        return res.json(player);
    }

    async update(req, res) {
        let { id } = req.params;
        let { name, peso, altura } = req.body;

        let [retorno] = await Player.update({
            name,
            peso,
            altura
        }, {
            where: {
                id: id
            },
        });

        if (retorno != 0) {
            return res.json(`
            Usuário ${name} editado com sucesso.
            `);
        } else {
            return res.json(`
            Nenhum usuário com o id:${id} encontrado.
            `);
        }

    }

    async delete(req, res) {
        let { id } = req.params;
        let delPlayer = await Player.destroy({
            where: { id: id }
        });

        if (delPlayer != 0) {
            return res.json(`
            Usuário deletado com sucesso.
            `);
        } else {
            return res.json(`
            Nenhum usuário com o id:${id} encontrado.
            `);
        }
    }
}

export default new PlayerController();