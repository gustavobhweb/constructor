$(document).ready(function(){

    var canvas = new Canvas();
    canvas.Generate({id: 'world', width: '100%', height: '100%', background: 'white'});

    var obj = new Obj();

    obj.Generate({parent: 'world', id: 'teste'});

    $('#txt-width').keyup(function(){
        var $this = $(this);
        obj.Change({width: $this.val()+'px'});
    });

    $('#txt-height').keyup(function(){
        var $this = $(this);
        obj.Change({height: $this.val()+'px'});
    });

    $('#txt-border-tl-radius').keyup(function(){
        var $this = $(this);
        obj.Change({borderTopLeftRadius: $this.val()});
    });

    $('#txt-border-tr-radius').keyup(function(){
        var $this = $(this);
        obj.Change({borderTopRightRadius: $this.val()});
    });

    $('#txt-border-bl-radius').keyup(function(){
        var $this = $(this);
        obj.Change({borderBottomLeftRadius: $this.val()});
    });

    $('#txt-border-br-radius').keyup(function(){
        var $this = $(this);
        obj.Change({borderBottomRightRadius: $this.val()});
    });

    $('#txt-background').keyup(function(){
        var $this = $(this);
        obj.Change({background: $this.val()});
    });
});