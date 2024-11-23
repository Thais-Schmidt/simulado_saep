import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController.js';
import { TarefaController } from '../controller/TarefaController.js';

const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);
router.get('/listarUsuarios', UsuarioController.listarUsuarios);
router.post('/novaTarefa', TarefaController.novaTarefa);

export default router;