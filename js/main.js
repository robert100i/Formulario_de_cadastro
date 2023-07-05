$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            telefone: "Este campo é obrigatório",
            nome: "Este campo é obrigatório",
            email: "Este campo é obrigatório",
            cpf: "Este campo é obrigatório",
            cep: "Este campo é obrigatório",
            endereco: "Este campo é obrigatório",
            
            },
        })
    })
