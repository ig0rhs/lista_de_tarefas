$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
    })

    $('#cadastra').on('click', function(){
        const nomeTarefa = $('#nome-da-tarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${nomeTarefa}`
        $('ul').append(li)
        $('#nome-da-tarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('tarefa-concluida')
        })
    })
})