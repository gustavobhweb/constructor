<?php

class Defaultobject extends CI_Model
{
	public function select()
	{
		$qr = 'SELECT * FROM tbl_default_objects';
		return $this->db->query($qr)->result();
	}
}