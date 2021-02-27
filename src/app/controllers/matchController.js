import Match from '../models/match';

class MatchController {
    async index(req, res) {
        let match = await Match.findAll();

        return res.json(match);
    }

    async show(req, res) {
        let { id } = req.params;

        let match = await Match.findByPk(id, {
            where: { id: id },
        });

        return res.json(match);
    }

    async store(req, res) {
        let { time_casa,
            time_visitante,
            placar_time_casa,
            placar_time_visitante,
            campeonato_id,
            data_jogo, } = req.body;

        let match = await Match.create({
            time_casa,
            time_visitante,
            placar_time_casa,
            placar_time_visitante,
            campeonato_id,
            data_jogo,
            created_at: new Date(),
        });

        return res.json(match);
    }

    /*async update(req, res) {
        let { id } = req.params;
        let { name, capacity } = req.body;

        let [retorno] = await Match.update({
            name,
            capacity
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

    }*/

    async delete(req, res) {
        let { id } = req.params;
        let delMatch = await Match.destroy({
            where: { id: id }
        });

        if (delMatch != 0) {
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

export default new MatchController();