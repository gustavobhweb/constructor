var obj = new Obj();
var dataCopy;
function ObjClick()
{
    $('.objCreated').resizable();
    $('.objCreated').draggable();
    $('.objCreated').click(function(e){
        var $id = $(this).attr('id');
        obj.Unselect();
        obj.Select(obj.Get($id));
        e.stopPropagation();

        $(window).keyup(function(e){
            var left = obj.data.obj.css('left');
            var top = obj.data.obj.css('top');

            e.stopPropagation();
        });
    });
}
var n=0;
function nameObj()
{
    n++;
    var name = 'untitled'+$('#canvasArea').find('.objCreated').size();
    var name1 = 'untitled'+n;

    if($('#'+name).length<=0)
    {
        return name;
    }
    else
    {
        return name1;
    }
}
function getDataCopy()
{
    return dataCopy;
}
$(document).ready(function(){

    $('#btn-new-object').click(function(){
        if(verify(obj.data.id))
        {
            obj.Unselect();
        }
        obj.Create(nameObj());

        ObjClick();

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

    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67;

    $(document).keydown(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = true;
    }).keyup(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = false;
    });

    $(document).keydown(function(e)
    {
        /* CTRL + C and CTRL + V */
        if (ctrlDown && (e.keyCode == cKey))
        {
            dataCopy = obj.Get(obj.data.id);
        }
        else if (ctrlDown && (e.keyCode == vKey)) 
        {
            if(verify(obj.data.id))
            {
                obj.Unselect();
            }
            obj.Create(nameObj());
            obj.Change(getDataCopy());

            ObjClick();

            $('.canvasArea').click(function(){
                obj.Unselect();
            });
        }
        /* CTRL + C and CTRL + V */

        /* DELETE */
        if(e.keyCode==46)
        {
            obj.Unselect();
            obj.data.obj.remove();
        }
        /* DELETE */
    });

    $('#txt-id-object').keyup(function(e){
        obj.data.id = $(this).val().replace(' ', '-');
        obj.data.obj.attr('id', obj.data.id);
        if(e.keyCode==32)
        {
            $(this).val($(this).val().replace(' ', '-'));
        }
    });

});

function Save()
{
    obj.Unselect();

    $('.objCreated').removeClass('ui-resizable');
    $('.objCreated').removeClass('ui-draggable');
    $('.ui-resizable-handle').remove();

    var canvas = document.getElementById('canvasArea');
    canvas = canvas.innerHTML.replace('  ', '');
    console.log(canvas);
}