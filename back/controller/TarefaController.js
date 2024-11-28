import Tarefa from "../models/TarefaModel.js";

export const TarefaController = {

    novaTarefa: async (req, res) => {
        try {

            const { id_usuario, descricao, equipe, prioridade } = req.body;
            const status = "não iniciado";
            const tarefa = new Tarefa({ id_usuario, descricao, equipe, prioridade, status });
            const result = await tarefa.insertTarefa();
            res.json({ result });
        } catch (error) {
            res.json({ message: error })
        }
    },

    listarUsuarios: async (req, res) => {
        try {

            const users = await Tarefa.listarUsuarios();
            console.log(users);
            res.json({ users });

        } catch (error) {
            res.json({ message: error })
        }
    },

    listarTarefas: async (req, res) => {
        try {
            const tarefas = await Tarefa.listarTarefas();
            console.log(tarefas);
            res.json({ tarefas });
        } catch (error) {
            res.json({ message: error })
        }
    },

    atualizarStatus: async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;
            //const newStatus = status.toUpperCase(); //caso o drop esteja mandando em letra maiuscula, no nosso caso não esta
            const tarefas = await Tarefa.atualizarStatus(id, status);
            console.log(tarefas);
            res.json({ tarefas });
        } catch (error) {
            res.json({ message: error })
        }
    },

    excluirTarefa: async (req, res) => {
        try {
            const { id } = req.params;
            //const newStatus = status.toUpperCase(); //caso o drop esteja mandando em letra maiuscula, no nosso caso não esta
            const tarefas = await Tarefa.atualizarStatus(id);
            console.log(tarefas);
            res.json({ tarefas });
        } catch (error) {
            res.json({ message: error })
        }
    },

    listarTarefa: async (req, res) => {
        try {
            const { id } = req.params;
            const tarefa = await Tarefa.listarTarefa(id);
            console.log(tarefa);
            res.json({ tarefa });
        } catch (error) {
            res.json({ message: error })
        }
    },

    atualizarTarefa: async (req, res) => {
        try {
            const { id } = req.params;
            const { id_usuario, descricao, equipe, prioridade } = req.body;
            const tarefa = new Tarefa({ id_usuario, descricao, equipe, prioridade });
            console.log("aqui:");
            const result = await tarefa.atualizarTarefa(id);
            
            res.json({ result });

        } catch (error) {
            res.json({ message: error })
        }
    }

}