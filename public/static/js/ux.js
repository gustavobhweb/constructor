$(document).ready(function(){

    var obj = new Obj();

    $('#btn-new-object').click(function(){
        if(verify(obj.data.id))
        {
            obj.Unselect();
        }
        var n = $('#canvasArea').find('*').size();
        obj.Create('untitled'+n);

        $('.objCreated').click(function(e){
            var $id = $(this).attr('id');
            obj.Unselect();
            obj.Select(obj.Get($id));
            e.stopPropagation();

            if(obj.selected)
            {
                $('.objCreated').resizable();
                $('.objCreated').draggable();
            }

            $(window).keyup(function(e){
                var left = obj.data.obj.css('left');
                var top = obj.data.obj.css('top');

                e.stopPropagation();
            });
        });

        $('.canvasArea').click(function(){
            obj.Unselect();
        });

    });

    $('#txt-width').keyup(function(){
        if(verify(obj.data.id))
        {
            obj.Change({width: $(this).val()});
        }
        else
        {
            alert('Selecione ou crie um objeto.');
        }
    });

    $('#txt-height').keyup(function(){
        if(verify(obj.data.id))
        {
            obj.Change({height: $(this).val()});
        }
        else
        {
            alert('Selecione ou crie um objeto.');
        }
    });

    $('#txt-background').keyup(function(){
        if(verify(obj.data.id))
        {
            obj.Change({background: $(this).val()});
        }
        else
        {
            alert('Selecione ou crie um objeto.');
        }
    });

    $('#slider-tlr').slider({
        slide: function( event, ui ) {
            $('#txt-tlr').val(ui.value+'px');
            if(verify(obj.data.id))
            {
                obj.Change({tlr: $('#txt-tlr').val()});
            }
            else
            {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#slider-trr').slider({
        slide: function( event, ui ) {
            $('#txt-trr').val(ui.value+'px');
            if(verify(obj.data.id))
            {
                obj.Change({trr: $('#txt-trr').val()});
            }
            else
            {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#slider-brr').slider({
        slide: function( event, ui ) {
            $('#txt-brr').val(ui.value+'px');
            if(verify(obj.data.id))
            {
                obj.Change({brr: $('#txt-brr').val()});
            }
            else
            {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#slider-blr').slider({
        slide: function( event, ui ) {
            $('#txt-blr').val(ui.value+'px');
            if(verify(obj.data.id))
            {
                obj.Change({blr: $('#txt-blr').val()});
            }
            else
            {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

});