import Campeonato from '../models/campeonato';

class CampeonatoController{
    async index(req, res) {
        let campeonato = await Campeonato.findAll();

        return res.json(campeonato);
    }

    async show(req, res) {
        let { id } = req.params;

        let campeonato = await Campeonato.findByPk(id, {
            where: { id: id },
        });

        return res.json(campeonato);
    }

    async store(req, res) {
        let { name, data_inicio, data_fim } = req.body;

        let campeonato = await Campeonato.create({
            name,
            data_inicio,
            data_fim,
            created_at: new Date(),
        });

        return res.json(campeonato);
    }

    async update(req, res) {
        let { id } = req.params;
        let { name,
            data_inicio,
            data_fim } = req.body;

        let [retorno] = await Campeonato.update({
            name,
            data_inicio,
            data_fim
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
        let delCampeonato = await Campeonato.destroy({
            where: { id: id }
        });

        if (delCampeonato != 0) {
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

export default new CampeonatoController();