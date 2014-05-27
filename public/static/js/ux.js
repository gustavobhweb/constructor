$(document).ready(function(){

    var obj = new Obj();

    $('#btn-new-object').click(function(){
        var n = $('#canvasArea').find('*').size();
        obj.Create('untitled'+n);
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
            $('#txt-tlr').val(ui.value+'%');
        }
    });

});