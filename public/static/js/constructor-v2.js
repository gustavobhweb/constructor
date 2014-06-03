function Checkpoint()
{
	var checklist;
	this.checklist = new Array();

	this.Set = function()
	{
		var canvas = document.getElementById('canvasArea');
		canvas = canvas.innerHTML.replace('  ', '');
    	this.checklist.push(canvas);
	}

	this.Get = function()
	{
		return this.checklist[this.checklist.length];
	}

}

function verify(s)
{
	if(s==null || typeof(s)=='undefined' || s=='')
	{
		return false;
	}
	else
	{
		return true;
	}
}

function Data()
{
	var obj, id, ckp;
	
	var width, height, background, tlr, trr, brr, brl, left, top, right, bottom;
}

function Obj()
{
	var data, selected;
	this.data = new Data();
	this.selected = false;
	this.data.ckp = new Checkpoint();

	this.Set = function(data)
	{
		if(verify(data.width))
		{
			this.data.width = data.width;
			this.data.obj.css('width', this.data.width);
			$('#txt-width').val(data.width);
		}
		if(verify(data.height))
		{
			this.data.height = data.height;
			this.data.obj.css('height', this.data.height);
			$('#txt-height').val(data.height);
		}
		if(verify(data.background))
		{
			this.data.background = data.background;
			this.data.obj.css('background', this.data.background);
			$('#txt-background').val(data.background);
		}
		if(verify(data.tlr))
		{
			this.data.tlr = data.tlr;
			this.data.obj.css('border-top-left-radius', this.data.tlr);
			$('#txt-tlr').val(data.tlr);
		}
		if(verify(data.trr))
		{
			this.data.trr = data.trr;
			this.data.obj.css('border-top-right-radius', this.data.trr);
			$('#txt-trr').val(data.trr);
		}
		if(verify(data.brr))
		{
			this.data.brr = data.brr;
			this.data.obj.css('border-bottom-right-radius', this.data.brr);
			$('#txt-brr').val(data.brr);
		}
		if(verify(data.blr))
		{
			this.data.blr = data.blr;
			this.data.obj.css('border-bottom-left-radius', this.data.blr);
			$('#txt-blr').val(data.blr);
		}
		if (verify(data.left)) {
			this.data.left = data.left;
			this.data.obj.css('left', this.data.left);
			$('#txt-left').val(data.left);
		}
		if(verify(data.top))
		{
			this.data.top = data.top;
			this.data.obj.css('top', this.data.top);
			$('#txt-top').val(data.top);
		}
		if(verify(data.right))
		{
			this.data.right = data.right;
			this.data.obj.css('right', this.data.right);
			$('#txt-right').val(data.right);
		}
		if(verify(data.bottom))
		{
			this.data.bottom = data.bottom;
			this.data.obj.css('bottom', this.data.bottom);
			$('#txt-bottom').val(data.bottom);
		}
	}

	this.Get = function(id)
	{
		var $obj = $('#'+id);
		var $data = {width: $obj.css('width'),
					 height: $obj.css('height'),
					 background: $obj.css('background'),
					 tlr: $obj.css('border-top-left-radius'),
					 trr: $obj.css('border-top-right-radius'),
					 brr: $obj.css('border-bottom-right-radius'),
					 blr: $obj.css('border-bottom-left-radius'),
					 left: $obj.css('left'),
					 top: $obj.css('top'),
					 right: $obj.css('right'),
					 bottom: $obj.css('bottom'),
					 id: id};
		return $data;
	}

	this.Create = function(id, data)
	{
		this.data.obj = $('<div></div>');
		$('#configs').show();
		$('#configs').find('.menu-title').html('Configurações - '+id);
		this.data.obj.attr('id', id);
		this.data.obj.attr('class', 'objCreated');
		this.data.obj.css('position', 'absolute');

		this.data.id = id;

		this.data.obj.appendTo('#nameProject');
		if(!verify(data))
		{
			this.Select({width: '100px', height: '100px', left: 0, top: 0, background: '#ADD555'});
		}
		else
		{
			this.Select(data);
		}
	}

	this.Change = function(data)
	{
		this.data.ckp.Set();
		this.Set(data);
	}

	this.Select = function(data)
	{
		this.selected = true;
		if(verify(data.id))
		{
			this.data.obj = $('#'+data.id);
			$('#configs').show();
			$('#configs').find('.menu-title').html('Configurações - '+data.id);
			$('#txt-id-object').show();
			$('#txt-id-object').val(data.id);
			this.data.obj.css('outline', '#00FF00 dotted 2px');
			this.Set(data);
		}
		else
		{
			$('#txt-id-object').show();
			$('#txt-id-object').val(this.data.id);
			this.data.obj.css('outline', '#00FF00 dotted 2px');
			this.Set(data);
		}
	}

	this.Unselect = function()
	{
		$('#configs').hide();
		$('#txt-id-object').hide(0, function(){
			$(this).val('');
		});
		this.selected = false;
		this.data.obj.css('outline', 'none');
	}

	this.Delete = function()
	{

	}
}
function base(url){
	var l = window.location;
	return base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1]+url;
}