import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController.js';
import { TarefaController } from '../controller/TarefaController.js';

const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);
router.post('/novaTarefa', TarefaController.novaTarefa);

router.get('/listarUsuarios', UsuarioController.listarUsuarios);
router.get('/listarTarefas', TarefaController.listarTarefas);
router.get('/listarTarefa/:id', TarefaController.listarTarefa);

router.put('/atualizarStatus/:id', TarefaController.atualizarStatus);
router.put('/atualizarTarefa/:id', TarefaController.atualizarTarefa);

router.delete('/excluirTarefa/:id', TarefaController.excluirTarefa);

export default router;