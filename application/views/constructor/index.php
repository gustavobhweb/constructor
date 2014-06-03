<!DOCTYPE html>
<html>
<head>
	<title>Constructor</title>
	<meta charset='utf-8'>
	<link rel="shortcut icon" href="<?=base_url('public/static/img/favicon.png');?>" />
	<link rel='stylesheet' href='<?=base_url('public/static/css/ux.css')?>' type='text/css' />
	<link rel='stylesheet' href='<?=base_url('public/static/js/jquery-ui/css/smoothness/jquery-ui-1.10.4.custom.min.css')?>' />
	<link rel='stylesheet' href="<?=base_url('public/static/css/jquery.colorpicker.css')?>" type="text/css" />
	<script type='text/javascript' src='<?=base_url('public/static/js/jquery.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/jquery-ui/js/jquery-ui-1.10.4.custom.min.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/constructor-v2.js')?>'></script>
	<script type='text/javascript' src='<?=base_url('public/static/js/ux.js')?>'></script>
	<script src="<?=base_url('public/static/js/colorpicker/jquery.colorpicker.js');?>"></script>
	<script src="<?=base_url('public/static/js/colorpicker/jquery.ui.colorpicker-pt-br.js');?>"></script>
	<script src="<?=base_url('public/static/js/colorpicker/jquery.ui.colorpicker-memory.js');?>"></script>
</head>
<body>

	<!--<span id="colorpicker-preview" style="position:fixed;z-index:1000;left:400px;top:120px" value="fe9810"></span>-->

	<div class='configs'>

		<div class='header-configs'>
			<img src='<?=base_url('public/static/img/logo.png')?>' width='250px' />
		</div><!--header-configs-->

		<div class='menu'>

			<div class='menu-title'>
				Objetos
			</div><!--menu-title-->

			<button class='btn-send' id='btn-new-object' style='float:left;margin:10px 0 0 10px'>+ Nova caixa</button>
			<button class='btn-send' id='btn-load-object' style='float:left;margin:10px 0 0 10px' onclick='$("#importObj").show(0, function(){$(this).focus();});$("#importObj").val("")'>Importar objeto</button>
			<button class='btn-send' id='btn-open-object' style='float:left;margin:10px 0 0 10px'>Abrir...</button>
			<textarea id='importObj' class='txt-default' style='margin:10px 0 0 10px;width:90%;height:120px;display:none'></textarea>

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
						<td colspan='2'><input type='text' class='txt-default' id='txt-background' style='width:80px' /></td>
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
					<tr>
						<td>Top:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-top' /></td>
					</tr>
					<!-- <tr>
						<td>Right:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-right' /></td>
					</tr>
					<tr>
						<td>Bottom:</td>
						<td colspan="2"><input type='text' class='txt-default' id='txt-bottom' /></td>
					</tr> -->
				</table>
			</div><!--content-menu-->

		</div><!--menu-->

	</div><!--configs-->

	<div class='canvas'>
		
		<input type='text' id='txt-id-object' style='display:none' class='txt-default txt-id-object' placeholder='ID do objeto' />

		<div id='canvasArea' class='canvasArea'>
			<div id='nameProject' style='position:relative;float:left;top:0;left:0;margin:0'></div>
		</div><!--canvasArea-->

		<button class='btn-send' onclick='Save()' style='position:fixed;bottom:30px;right:30px'>Salvar como HTML</button>

	</div><!--canvas-->

</body>
</html>