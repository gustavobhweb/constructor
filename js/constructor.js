function Canvas()
{
	var canvas, id, width, height, background;

	this.Generate = function(data)
	{
		this.Set(data);

		this.canvas = $('<div></div>');
		this.canvas.css('position', 'fixed');
		this.canvas.attr('id', this.id);
		this.canvas.css('width', this.width);
		this.canvas.css('height', this.height);
		this.canvas.css('background', this.background);

		$('body').append(this.canvas);
	}

	this.Set = function(data)
	{
		if(typeof(data) == 'object')
		{
			this.id = data.id;
			this.width = data.width;
			this.height = data.height;
			this.background = data.background;
		}
		else
		{
			alert('O parâmetro deve ser um objeto.');
		}
	}
}

function Obj()
{
	var obj, gen = false, parent, id, classObj, width, height, background, borderTopLeftRadius, 
	borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius;

	this.Generate = function(data)
	{
		this.Set(data);
		
		this.obj = $('<div></div>');
		this.obj.attr('id', this.id);
		this.obj.css('position', 'fixed');

		$('#'+this.parent).append(this.obj);
	}

	this.Change = function(data)
	{
		this.Set(data);

		this.obj.attr('class', this.classObj);
		this.obj.css('width', this.width);
		this.obj.css('height', this.height);
		this.obj.css('background', this.background);
		this.obj.css('border-top-left-radius', this.borderTopLeftRadius);
		this.obj.css('border-top-right-radius', this.borderTopRightRadius);
		this.obj.css('border-bottom-left-radius', this.borderBottomLeftRadius);
		this.obj.css('border-bottom-right-radius', this.borderBottomRightRadius);
	}

	this.Set = function(data)
	{
		if(typeof(data) == 'object')
		{
			this.parent = data.parent;
			this.id = data.id;
			this.class = data.class;
			this.width = data.width;
			this.height = data.height;
			this.background = data.background;
			this.borderTopLeftRadius = data.borderTopLeftRadius;
			this.borderTopRightRadius = data.borderTopRightRadius;
			this.borderBottomLeftRadius = data.borderBottomLeftRadius;
			this.borderBottomRightRadius = data.borderBottomRightRadius;
		}
		else
		{
			alert('O parâmetro deve ser um objeto.');
		}
	}

}