import Time from '../models/time'


class TimeController {
    async index(req, res) {
        let times = await Time.findAll();

        return res.json(times);
    }

    async show(req, res) {
        let { id } = req.params;

        let time = await Time.findByPk(id, {
            where: { id: id },
        });

        return res.json(time);
    }

    async store(req, res) {
        let { name, city, state, fundation } = req.body;

        let time = await Time.create({
            name,
            city,
            state,
            fundation,
            created_at: new Date(),
        });

        return res.json(time);
    }

    async update(req, res) {
        let { id } = req.params;
        let { name, fundation } = req.body;

        let [retorno] = await Time.update({
            name,
            fundation
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
        let delTime = await Time.destroy({
            where: { id: id }
        });

        if (delTime != 0) {
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

export default new TimeController();