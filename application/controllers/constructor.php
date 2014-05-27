<?php

class Constructor extends CI_Controller
{
	
	public function index()
	{
		$this->load->model('DefaultObject');
		$dataView = array();
		$dataView['defaultObjects'] = $this->DefaultObject->select();
		$this->load->view('constructor/index', $dataView);
	}

}