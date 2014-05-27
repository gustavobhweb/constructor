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
	
	var width, height, background;
}

function Obj()
{
	var data;
	this.data = new Data();

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
	}

	this.Create = function(id)
	{
		this.data.obj = $('<div></div>');
		$('#configs').find('.menu-title').html('Configurações - '+id)
		this.data.obj.attr('id', id);
		this.data.obj.attr('class', 'objCreated');
		this.data.obj.css('position', 'absolute');

		this.data.id = id;

		this.data.obj.appendTo('#canvasArea');
		this.Select({width: 100, height: 100, left: 0, top: 0, background: '#ADD555'});
	}

	this.Change = function(data)
	{
		this.Set(data);
	}

	this.Select = function(data)
	{
		this.data.obj.css('outline', '#00FF00 dotted 2px');
		this.Set(data);
	}

	this.Unselect = function()
	{
		this.data.obj.css('outline', 'none');
	}

	this.Delete = function()
	{

	}
}