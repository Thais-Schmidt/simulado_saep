$(document).ready(function () {

    axios.get(`${localStorage.getItem('ipApi')}listarUsuarios`)

            .then(response => {
                console.log(response);
                const userSelect = $('#nomeUser');
                userSelect.empty();
                userSelect.append('<option value="">Selecione...</option>')

                const users = response.data.users;
                users.forEach(user => {
                    userSelect.append(`<option value="${user.id_usuario}">${user.nome}</option>`)
                });


                // alert('Usuario cadastrado com sucesso.')
            }).catch(error => {
                console.log(error);
                // alert('Ocorreu um erro')
            })

    $(document).off('submit', '#novaTarefa');
    $(document).on('submit', '#novaTarefa', async function (event) {

        event.preventDefault();

        const formData = {
            descricao: document.getElementById('descricao').value,
            equipe: document.getElementById('equipe').value,
            prioridade: document.getElementById('prioridade').value,
            id_usuario: document.getElementById('nomeUser').value
            
        }

        axios.post(`${localStorage.getItem('ipApi')}novaTarefa`, formData)
        .then(response => {
            console.log(response);
            alert('Tarefa cadastrada com sucesso.')

        }).catch(error => {
            console.log(error);
            alert('Ocorreu um erro')

        })

    })
})
