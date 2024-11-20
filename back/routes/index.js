import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController.js';

const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);

export default router;