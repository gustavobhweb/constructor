<?php

class Constructor extends CI_Controller
{
	
	public function index()
	{
		$dataView = array();
		$this->load->view('constructor/index', $dataView);
	}

	public function Save()
	{
		header('Content-type: application/json');
		
		$filename = $this->getIp().'_'.time();
		if (!is_dir(FCPATH.'/public/saves')) mkdir(FCPATH.'/public/saves');
		$fullpath = '/public/saves/'.$filename.'.txt';
		$savepath = FCPATH . $fullpath;
		$path = base_url($fullpath);
		$fp = fopen($savepath, 'a');
		$write = fwrite($fp, $this->input->post('canvas'));
		fclose($fp);
		echo json_encode(array('path' => $path));
	}

	private function getIp()
	{
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {

	        $ip = $_SERVER['HTTP_CLIENT_IP'];

	    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {

	        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];

	    } else {

	        $ip = $_SERVER['REMOTE_ADDR'];

	    }
	 
	    return $ip;
	}

}