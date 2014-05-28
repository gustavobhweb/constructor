<!DOCTYPE html>
<html>
<head>
	<title>Constructor</title>
	<meta charset='utf-8'>
	<link rel="shortcut icon" href="<?=base_url('public/static/img/favicon.png');?>" />
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
			<img src='<?=base_url('public/static/img/logo.png')?>' width='250px' />
		</div><!--header-configs-->

		<div class='menu'>

			<div class='menu-title'>
				Objetos
			</div><!--menu-title-->

			<button class='btn-send' id='btn-new-object' style='float:left;margin:10px 0 0 10px'>+ Nova caixa</button>

			<div class='clear'></div>

		</div><!--menu-->

		<div class='menu configsObj' style='display:none' id='configs'>

			<div class='menu-title'>
				Configurações
			</div><!--menu-title-->

			<div class='content-menu'>
				<table border='0'>
					<tr>
						<td>Width:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-width' /></td>
					</tr>
					<tr>
						<td>Height:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-height' /></td>
					</tr>
					<tr>
						<td>Background:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-background' /></td>
					</tr>
					<tr>
						<td>Top Left Rd:</td>
						<td style='width:170px;padding:0 20px'><div id='slider-tlr' style='width:100%'></div></td>
						<td><input type='text' style='width:50px' class='txt-default' id='txt-tlr' /></td>
					</tr>
					<tr>
						<td>Top Right Rd:</td>
						<td style='width:170px;padding:0 20px'><div id='slider-trr' style='width:100%'></div></td>
						<td><input type='text' style='width:50px' class='txt-default' id='txt-trr' /></td>
					</tr>
					<tr>
						<td>Bottom Right Rd:</td>
						<td style='width:170px;padding:0 20px'><div id='slider-brr' style='width:100%'></div></td>
						<td><input type='text' style='width:50px' class='txt-default' id='txt-brr' /></td>
					</tr>
					<tr>
						<td>Bottom Left Rd:</td>
						<td style='width:170px;padding:0 20px'><div id='slider-blr' style='width:100%'></div></td>
						<td><input type='text' style='width:50px' class='txt-default' id='txt-blr' /></td>
					</tr>
					<tr>
						<td>Left:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-left' /></td>
					</tr>
				</table>
			</div><!--content-menu-->

		</div><!--menu-->

	</div><!--configs-->

	<div class='canvas'>
		
		<input type='text' id='txt-id-object' style='display:none' class='txt-default txt-id-object' placeholder='ID do objeto' />

		<div id='canvasArea' class='canvasArea'>

		</div><!--canvasArea-->

		<button class='btn-send' onclick='Save()' style='position:fixed;bottom:30px;right:30px'>Salvar como HTML</button>

	</div><!--canvas-->

</body>
</html>