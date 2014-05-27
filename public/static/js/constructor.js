function Vars()
{
	var obj, gen, parent, id, classObj, width, height, background, borderTopLeftRadius, 
	borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius, left, 
	top, right, bottom, configs;
	this.gen = false;
	this.id = false;
}

function Configs()
{
	var status, vars;
	this.vars = false;

	this.Show = function(vars)
	{
		this.vars = vars;
		$('#configs').attr('id', 'configs-'+this.vars.id);
		$('#configs-'+this.vars.id).show();
		$('#configs-'+this.vars.id).find('.menu-title').html('Configurações - '+this.vars.id)
	}

	this.Hide = function()
	{
		if(this.vars)
		{
			$('#configs-'+this.vars.id).attr('id', 'configs');
			$('#configs').fadeOut();
		}
	}
}

function Obj()
{

	var vars;
	this.vars = new Vars();
	this.vars.configs = new Configs();

	this.Generate = function(data)
	{
		this.Set(data);

		this.vars.obj = $('<div></div>');
		this.vars.obj.attr('id', this.id);
		this.vars.obj.css('position', 'absolute');
		this.vars.obj.css('left', 0);
		this.vars.obj.css('top', 0);

		this.Select(data);

		$('#'+this.vars.parent).append(this.vars.obj);
	}

	this.Change = function(data)
	{
		this.Set(data);

		this.vars.obj.attr('class', this.vars.classObj);
		this.vars.obj.css('width', this.vars.width);
		this.vars.obj.css('height', this.vars.height);
		this.vars.obj.css('background', this.vars.background);
		this.vars.obj.css('border-top-left-radius', this.vars.borderTopLeftRadius);
		this.vars.obj.css('border-top-right-radius', this.vars.borderTopRightRadius);
		this.vars.obj.css('border-bottom-left-radius', this.vars.borderBottomLeftRadius);
		this.vars.obj.css('border-bottom-right-radius', this.vars.borderBottomRightRadius);
		this.vars.obj.css('left', this.vars.left);
		this.vars.obj.css('top', this.vars.top);
		this.vars.obj.css('right', this.vars.right);
		this.vars.obj.css('bottom', this.vars.bottom);

		$(this.vars.obj).appendTo('#'+this.vars.parent);
	}

	this.Set = function(data)
	{
		if(typeof(data) == 'object')
		{
			this.vars.parent = data.parent;
			this.vars.id = data.id;
			this.vars.class = data.class;
			this.vars.width = data.width;
			this.vars.height = data.height;
			this.vars.background = data.background;
			this.vars.borderTopLeftRadius = data.borderTopLeftRadius;
			this.vars.borderTopRightRadius = data.borderTopRightRadius;
			this.vars.borderBottomLeftRadius = data.borderBottomLeftRadius;
			this.vars.borderBottomRightRadius = data.borderBottomRightRadius;
			this.vars.left = data.left;
			this.vars.top = data.top;
			this.vars.right = data.right;
			this.vars.bottom = data.bottom;
		}
		else
		{
			alert('O parâmetro deve ser um objeto.');
		}
	}

	this.Select = function(vars)
	{
		if(this.vars.id && vars==null)
		{
			this.vars.configs.Hide();
			this.vars.configs.Show(this.vars);
		}
		else
		{
			this.Set(vars);
			this.vars.configs.Show(this.vars);
		}

		this.vars.obj.css('outline', '#00FF00 dotted 2px');
	}

	this.Unselect = function()
	{
		this.vars.configs.Hide();

		this.vars.obj.css('outline', 'none');
		this.vars = false;
	}

}