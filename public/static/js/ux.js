var obj = new Obj();
var dataCopy;
function ObjClick()
{
    $('.objCreated').resizable();
    $('.objCreated').draggable();
    $('.objCreated').click(function(e){
        var $id = $(this).attr('id');
        if(verify(obj.data.obj))
        {
            obj.Unselect();
        }
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
    var name = 'untitled'+$('#nameProject').find('.objCreated').size();
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

    $('#importObj').keyup(function(e){
        if(e.keyCode==13)
        {
            $('#nameProject').html($('#nameProject').html()+$(this).val());
            ObjClick();
            $(this).hide();
        }
        e.stopPropagation();
    });

    $('#importObj').keydown(function(e){
        e.stopPropagation();
    });

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

    // LEFT
    $('#txt-left').keyup(function(e){
        if (e.keyCode == 13) {
            if (verify(obj.data.id)) {
                if ($(this).val() == '') {
                    $(this).val('0px');
                }
                obj.Change({left: $(this).val()});
            } else {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#txt-left').blur(function(){
        if (verify(obj.data.id)) {
            if ($(this).val() == '') {
                $(this).val('0px');
            }
            obj.Change({left: $(this).val()});
        } else {
            alert('Selecione ou crie um objeto.');
        }
    });

    // TOP
    $('#txt-top').keyup(function(e){
        if (e.keyCode == 13) {
            if (verify(obj.data.id)) {
                if ($(this).val() == '') {
                    $(this).val('0px');
                }
                obj.Change({top: $(this).val()});
            } else {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#txt-top').blur(function(){
        if (verify(obj.data.id)) {
            if ($(this).val() == '') {
                $(this).val('0px');
            }
            obj.Change({top: $(this).val()});
        } else {
            alert('Selecione ou crie um objeto.');
        }
    });

    // RIGHT
    $('#txt-right').keyup(function(e){
        if (e.keyCode == 13) {
            if (verify(obj.data.id)) {
                if ($(this).val() == '') {
                    $(this).val('0px');
                }
                obj.Change({right: $(this).val()});
            } else {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#txt-right').blur(function(e){
        if (verify(obj.data.id)) {
            if ($(this).val() == '') {
                $(this).val('0px');
            }
            obj.Change({right: $(this).val()});
        } else {
            alert('Selecione ou crie um objeto.');
        }
    });

    // BOTTOM
    $('#txt-bottom').keyup(function(e){
        if (e.keyCode == 13) {
            if (verify(obj.data.id)) {
                if ($(this).val() == '') {
                    $(this).val('0px');
                }
                obj.Change({bottom: $(this).val()});
            } else {
                alert('Selecione ou crie um objeto.');
            }
        }
    });

    $('#txt-bottom').blur(function(e){
        if (verify(obj.data.id)) {
            if ($(this).val() == '') {
                $(this).val('0px');
            }
            obj.Change({bottom: $(this).val()});
        } else {
            alert('Selecione ou crie um objeto.');
        }
    });

    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67, zKey = 90;

    $(document).keydown(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = true;
    }).keyup(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = false;
    });

    $('input').keydown(function(e){
        e.stopPropagation();
    });

    $(document).keydown(function(e)
    {
        /* CTRL + C and CTRL + V */
        if (ctrlDown && (e.keyCode == cKey)) {
            dataCopy = obj.Get(obj.data.id);
        }
        else if (ctrlDown && (e.keyCode == vKey)) 
        {
            if (verify(obj.data.id)) {
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

        /* CTRL + Z */
        if (ctrlDown && (e.keyCode == zKey)) {
            // console.log(obj.data.ckp.Get());
            // $('#canvasArea').html(obj.data.ckp.checklist);
        }
        /* CTRL + Z */

        /* DELETE */
        if (e.keyCode==46) {
            obj.Unselect();
            obj.data.obj.remove();
        }
        /* DELETE */

        /* AROWS*/

            var leftVal, topVal, rightVal, bottomVal;
            
            // Left
            if (e.keyCode == 37) {
                if (leftVal == '') {
                    $('#txt-left').val('0px');
                    obj.Change({left: '0px'});
                }
                leftVal = obj.data.obj.css('left');
                leftVal = parseInt(leftVal.replace('px', ''));
                leftVal--;
                obj.Change({left: leftVal+'px'});
            }

            // Top
            else if (e.keyCode == 38) {
                if (topVal == '') {
                    $('#txt-top').val('0px');
                    obj.Change({top: '0px'});
                }
                topVal = obj.data.obj.css('top');
                topVal = parseInt(topVal.replace('px', ''));
                topVal--;
                obj.Change({top: topVal+'px'});
            }

            // Right
            else if (e.keyCode == 39) {
                if (rightVal == '') {
                    $('#txt-right').val('0px');
                    obj.Change({right: '0px'});
                }
                leftVal = obj.data.obj.css('left');
                leftVal = parseInt(leftVal.replace('px', ''));
                leftVal++;
                obj.Change({left: leftVal+'px'});
            }

            // Bottom
            else if (e.keyCode == 40) {
                if (bottomVal == '') {
                    $('#txt-bottom').val('0px');
                    obj.Change({bottom: 0});
                }
                bottomVal = obj.data.obj.css('top');
                bottomVal = parseInt(bottomVal.replace('px', ''));
                bottomVal++;
                obj.Change({top: bottomVal+'px'});
            }
        
    });

    $('#txt-id-object').keyup(function(e){
        obj.data.id = $(this).val().replace(' ', '-');
        obj.data.obj.attr('id', obj.data.id);
        if(e.keyCode==32)
        {
            $(this).val($(this).val().replace(' ', '-'));
        }
    });

    $(function() {
        $('#colorpicker-preview').hide();
        $('#txt-background').click(function(){
            $('#colorpicker-preview').fadeIn();
        });
        $('#txt-background').colorpicker({
            flat: true,
            parts:          'full',
            colorFormat: 'RGBA',
            alpha:          true,
            showOn:         'both',
            buttonColorize: true,
            showNoneButton: true,
            regional: 'pt-br',
            select: function(h, n){
                obj.Change({background: n.formatted});
            }
        });
        $('.ui-button-text').parent().css('outline', 'none');
        $('.ui-button-text').find('img').each(function(){
            $(this).attr('src', base("/public/static/css/images/ui-colorpicker.png"));
        })
        $('#colorpicker-preview').draggable({
            handle: $('.ui-dialog-titlebar')
        });
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
    $.ajax({
        url: 'index.php/constructor/Save/',
        type: 'POST',
        data: {canvas: canvas},
        dataType: 'json',
        success: function(data){
            window.location.assign(data.path);
        },
        error: function(){
            alert('Problemas na conexão! Atualize a página e tente novamente.');
        }
    });
}