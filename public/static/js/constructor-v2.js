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
	var obj, id;
	
	var width, height, background, tlr, trr, brr, brl;
}

function Obj()
{
	var data, selected;
	this.data = new Data();
	this.selected = false;

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

		this.data.obj.appendTo('#canvasArea');
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