import { Router } from 'express';
import timesController from './app/controllers/timeController';
import stadiumController from './app/controllers/stadiumController';
import matchController from './app/controllers/matchController';
import campeonatoController from './app/controllers/campeonatoController';
import playerController from './app/controllers/playerController';
import campeonatoTimeController from './app/controllers/campeonatoTimeController';
import marcadoresController from './app/controllers/marcadoresController';


const routes = new Router();

routes.get('/', (req, res) => {
    res.json({ msg: `Futebol - Heroku` });
});

// ROTA DOS TIMES
routes.get('/times', timesController.index);
routes.get('/times/:id', timesController.show);
routes.post('/times', timesController.store);
routes.put('/times/:id', timesController.update);
routes.delete('/times/:id', timesController.delete);

// ROTA DOS ESTADIOS
routes.get('/stadium', stadiumController.index);
routes.get('/stadium/:id', stadiumController.show);
routes.post('/stadium', stadiumController.store);
routes.put('/stadium/:id', stadiumController.update);
routes.delete('/stadium/:id', stadiumController.delete);

// ROTA DAS PARTIDAS
routes.get('/matchs', matchController.index);
routes.get('/matchs/:id', matchController.show);
routes.post('/matchs', matchController.store);
//routes.put('/matchs/:id', matchController.update);
routes.delete('/matchs/:id', matchController.delete);

// ROTA DOS CAMPEONATOS
routes.get('/campeonato', campeonatoController.index);
routes.get('/campeonato/:id', campeonatoController.show);
routes.post('/campeonato', campeonatoController.store);
routes.put('/campeonato/:id', campeonatoController.update);
routes.delete('/campeonato/:id', campeonatoController.delete);

// ROTA DOS JOGADORES
routes.get('/player', playerController.index);
routes.get('/player/:id', playerController.show);
routes.post('/player', playerController.store);
routes.put('/player/:id', playerController.update);
routes.delete('/player/:id', playerController.delete);

// ROTA DOS MARCADORES
routes.get('/marcador', marcadoresController.index);
routes.get('/marcador/:id', marcadoresController.show);
routes.post('/marcador', marcadoresController.store);
//routes.put('/marcador/:id', marcadoresController.update);
routes.delete('/marcador/:id', marcadoresController.delete);

export default routes;