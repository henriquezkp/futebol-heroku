import Marcador from '../models/marcadores'


class MarcadorController {
    async index(req, res) {
        let marcador = await Marcador.findAll();

        return res.json(marcador);
    }

    async show(req, res) {
        let { id } = req.params;

        let marcador = await Marcador.findByPk(id, {
            where: { id: id },
        });

        return res.json(marcador);
    }

    async store(req, res) {
        let { partida_id,player,tempo } = req.body;

        let player = await Marcador.create({
            partida_id,
            player,
            tempo,
            created_at: new Date(),
        });

        return res.json(player);
    }

    /*async update(req, res) {
        let { id } = req.params;
        let { name, peso, altura } = req.body;

        let [retorno] = await Marcador.update({
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

    }*/

    async delete(req, res) {
        let { id } = req.params;
        let delPlayer = await Marcador.destroy({
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

export default new MarcadorController();