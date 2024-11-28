$(document).ready(function () {
    sessionStorage.removeItem('taskId');
    $(document).off('submit', '#formUsuario');
    $(document).on('submit', '#formUsuario', async function (event) {

        event.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value
        }

        axios.post(`${localStorage.getItem('ipApi')}novoUsuario`, formData)
            .then(response => {
                console.log(response);
                window.location.reload();
                alert('Usuario cadastrado com sucesso.')
            }).catch(error => {
                console.log(error);
                alert('Ocorreu um erro')
            })

    })
})