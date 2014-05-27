<!DOCTYPE html>
<html>
<head>
	<title>Constructor</title>
	<meta charset='utf-8'>
	<link rel='stylesheet' type='text/css' href='<?=base_url('public/static/css/ux.css')?>' />
	<link rel='stylesheet' href='<?=base_url('public/static/js/jquery-ui/css/smoothness/jquery-ui-1.10.4.custom.min.css')?>' />
	<script type='text/javascript' src='<?=base_url('public/static/js/jquery.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/jquery-ui/js/jquery-ui-1.10.4.custom.min.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/constructor-v2.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/ux.js')?>'></script>
</head>
<body>

	<div class='configs'>

		<div class='header-configs'>
			<img src='<?=base_url('public/static/img/logo.png')?>' width='200px' />
			<p>A new way to develop web art</p>
		</div><!--header-configs-->

		<div class='menu'>

			<div class='menu-title'>
				Objetos
			</div><!--menu-title-->

			<button class='btn-send' id='btn-new-object'>+ Novo objeto</button>

			<div class='clear'></div>

		</div><!--menu-->

		<div class='menu configsObj' id='configs'>

			<div class='menu-title'>
				Configurações
			</div><!--menu-title-->

			<div class='content-menu'>
				<p>Width: <input type='text' class='txt-default' id='txt-width' /></p>
				<p>Height: <input type='text' class='txt-default' id='txt-height' /></p>
				<p>Background: <input type='text' class='txt-default' id='txt-background' /></p>
				<p>Top Left Rd: <input type='text' class='txt-default' id='txt-tlr' style='width:50px' /><div id='slider-tlr' style='width:100px;float:right'></div></p>
				<p>Top Right Rd: <input type='text' class='txt-default' id='txt-trd' /></p>
				<p>Bottom Right Rd: <input type='text' class='txt-default' id='txt-brr' /></p>
				<p>Bottom Left Rd: <input type='text' class='txt-default' id='txt-blr' /></p>
			</div><!--content-menu-->

		</div><!--menu-->

	</div><!--configs-->

	<div class='canvas'>
		
		<input type='text' id='txt-id-object' class='txt-default txt-id-object' placeholder='ID do objeto' />

		<div id='canvasArea' class='canvasArea'>

		</div><!--canvasArea-->

	</div><!--canvas-->

</body>
</html>