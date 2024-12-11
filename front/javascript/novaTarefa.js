$(document).ready(function () {

    const taskId = sessionStorage.getItem("taskId");
    console.log("Editar tarefa:", taskId);

    if (taskId) {
        let receiveUsers;
        axios.get(`${localStorage.getItem('ipApi')}listarUsuarios`)

            .then(response => {
                const userSelect = $('#nomeUser');
                userSelect.empty();
                userSelect.append('<option value="">Selecione...</option>')

                console.log(response.data.users)
                console.log(response.data)
                const users = response.data.users;
                receiveUsers = users
                users.forEach(user => {
                    userSelect.append(`<option value="${user.id_usuario}" id="${user.id_usuario}">${user.nome}</option>`)
                });
                carregarDados();


                // alert('Usuario cadastrado com sucesso.')
            }).catch(error => {
                console.log(error);
                // alert('Ocorreu um erro')
            })
    }

    function carregarDados() {
        if (taskId) {
            axios.get(`${localStorage.getItem('ipApi')}listarTarefa/${taskId}`)
                .then(response => {
                    console.log(response)
                    const tarefa = response.data.tarefa[0];
                    document.getElementById("descricao").value = tarefa.descricao;
                    document.getElementById("equipe").value = tarefa.equipe;

                    const nomeUserSelect = document.getElementById("nomeUser"); //
                    nomeUserSelect.innerHTML += `<option id="${tarefa.id_usuario}" value="${tarefa.id_usuario}" selected>${tarefa.nome}</option>`

                    $('#nomeUser').find('option').each(function () {
                        let valor = $(this).val();
                        if (valor === tarefa.id_usuario) {
                            $(this).remove()
                        }
                    });

                    const prioridadeSelect = document.getElementById("prioridade");
                    prioridadeSelect.value = tarefa.prioridade;

                }).catch(error => {
                    console("Erro ao buscar tarefa:", error)
                })
        }
    }

    $(document).off('submit', '#novaTarefa');
    $(document).on('submit', '#novaTarefa', async function (event) {

        event.preventDefault();

        const formData = {
            descricao: document.getElementById('descricao').value,
            equipe: document.getElementById('equipe').value,
            prioridade: document.getElementById('prioridade').value,
            id_usuario: document.getElementById('nomeUser').value
        }

        if (!taskId) {

            axios.post(`${localStorage.getItem('ipApi')}novaTarefa`, formData)
                .then(response => {
                    console.log(response);
                    alert('Tarefa cadastrada com sucesso.')

                }).catch(error => {
                    console.log(error);
                    alert('Ocorreu um erro')

                })

        } else {
            axios.put(`${localStorage.getItem('ipApi')}atualizarTarefa/${taskId}`, formData)
                .then(response => {
                    console.log(response);
                    alert('Tarefa cadastrada com sucesso.')
                    sessionStorage.removeItem('taskId');
                }).catch(error => {
                    console.log(error);
                    alert('Ocorreu um erro')

                })
        }
    })

})
