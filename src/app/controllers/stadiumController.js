import Stadium from '../models/stadium';

class StadiumController{
    async index(req, res) {
        let stadium = await Stadium.findAll();

        return res.json(stadium);
    }

    async show(req, res) {
        let { id } = req.params;

        let stadium = await Stadium.findByPk(id, {
            where: { id: id },
        });

        return res.json(stadium);
    }

    async store(req, res) {
        let { name, capacity, time_id } = req.body;

        let stadium = await Stadium.create({
            name,
            capacity,
            time_id,
            created_at: new Date(),
        });

        return res.json(stadium);
    }

    async update(req, res) {
        let { id } = req.params;
        let { name, capacity } = req.body;

        let [retorno] = await Stadium.update({
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

    }

    async delete(req, res) {
        let { id } = req.params;
        let delStadium = await Stadium.destroy({
            where: { id: id }
        });

        if (delStadium != 0) {
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

export default new StadiumController();