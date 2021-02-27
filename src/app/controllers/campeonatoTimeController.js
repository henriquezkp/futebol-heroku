import CampeonatoTime from '../models/CampeonatoTime-time';

class CampeonatoTimeController{
    async index(req, res) {
        let campeonatoT = await CampeonatoTime.findAll();

        return res.json(campeonatoT);
    }

    async show(req, res) {
        let { id } = req.params;

        let campeonatoT = await CampeonatoTime.findByPk(id, {
            where: { id: id },
        });

        return res.json(campeonatoT);
    }

    async store(req, res) {
        let { name, data_inicio, data_fim } = req.body;

        let campeonatoT = await CampeonatoTime.create({
            name,
            data_inicio,
            data_fim,
            created_at: new Date(),
        });

        return res.json(campeonatoT);
    }

    async update(req, res) {
        let { id } = req.params;
        let { name,
            data_inicio,
            data_fim } = req.body;

        let [retorno] = await CampeonatoTime.update({
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
        let delCampeonatoTime = await CampeonatoTime.destroy({
            where: { id: id }
        });

        if (delCampeonatoTime != 0) {
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

export default new CampeonatoTimeTimeController();