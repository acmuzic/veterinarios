<?php 

//$host="localhost";
$host="50.63.244.203";
$user_name="proplandb"; 
$password="Pr19io!s7akH"; 
$db="proplandb";

define("C_DB_HOST",$host); 
define("C_DB_USER",$user_name); 
define("C_DB_PASS",$password); 
define("C_DB_NAME",$db); 


class db 
{ 
    var $Host = C_DB_HOST;            // Hostname of our MySQL server 
    var $Database = C_DB_NAME;        // Logical database name on that server 
    var $User = C_DB_USER;            // Database user 
    var $Password = C_DB_PASS;        // Database user's password 
    var $Link_ID = 0;                // Result of mysql_connect() 
    var $Query_ID = 0;                // Result of most recent mysql_query() 
    var $Record    = array();            // Current mysql_fetch_array()-result 
    var $Row;                        // Current row number 
    var $Errno = 0;                    // Error state of query 
    var $Error = ""; 

    function halt($msg) 
    { 
        echo("</TD></TR></TABLE><B>Database error:</B> $msg<BR>\n"); 
        echo("<B>MySQL error</B>: $this->Errno ($this->Error)<BR>\n"); 
        die("Session halted."); 
    } 

    function connect() 
    { 
        if($this->Link_ID == 0) 
        { 
            $this->Link_ID = mysql_connect($this->Host, $this->User, $this->Password); 
            if (!$this->Link_ID) 
            { 
                $this->halt("Link_ID == false, connect failed"); 
            } 
            $SelectResult = mysql_select_db($this->Database, $this->Link_ID); 
            if(!$SelectResult) 
            { 
                $this->Errno = mysql_errno($this->Link_ID); 
                $this->Error = mysql_error($this->Link_ID); 
                $this->halt("cannot select database <I>".$this->Database."</I>"); 
            } 
        } 
    } 

    function query($Query_String) 
    { 
        $this->connect(); 
        $this->Query_ID = mysql_query($Query_String,$this->Link_ID); 
        $this->Row = 0; 
        $this->Errno = mysql_errno(); 
        $this->Error = mysql_error(); 
        if (!$this->Query_ID) 
        { 
            $this->halt("Invalid SQL: ".$Query_String); 
        } 
        return $this->Query_ID; 
    } 
    
	function query_fetch($fetch=0) 
	{ 
		if($fetch==0) { 
			$result=@$gplusid($this->Query_ID); 
		} else { 
			$result=@mysql_fetch_array($this->Query_ID); 
		} 
		
		if(!is_array($result)) 
		return false; 
		$this->total_field=mysql_num_fields($this->Query_ID); 
	
		foreach($result as $key=>$val){ 
			$result[$key]=trim(htmlspecialchars($val)); 
		} 
		 return $result; 
	} 

	function num_field() 
	{ 
		return mysql_num_fields($this->Query_ID); 
	} 
	/* 
	function fetch_field() 
	{ 
		return mysql_fetch_field($this->Query_ID,2); 
	} 
	*/ 
	function next_record() 
    { 
        $this->Record = mysql_fetch_array($this->Query_ID); 
        $this->Row += 1; 
        $this->Errno = mysql_errno(); 
        $this->Error = mysql_error(); 
        $stat = is_array($this->Record); 
        if (!$stat) 
        { 
            mysql_free_result($this->Query_ID); 
            $this->Query_ID = 0;
        } 
        return $this->Record; 
    } 

    function num_rows() 
    { 
        return mysql_num_rows($this->Query_ID); 
    } 
    function maxRow($tablename,$field) 
    { 
        $sql="select max($field) from $tablename"; 
        $this->query($sql); 
        $result=@mysql_fetch_array($this->Query_ID); 
        return $result[0]; 
    } 
    function affected_rows() 
    { 
        return mysql_affected_rows($this->Link_ID); 
    } 

    function optimize($tbl_name) 
    { 
        $this->connect(); 
        $this->Query_ID = @mysql_query("OPTIMIZE TABLE $tbl_name",$this->Link_ID); 
    } 

    function clean_results() 
    { 
        if($this->Query_ID != 0) mysql_freeresult($this->Query_ID); 
    } 

    function close() 
    { 
        if($this->Link_ID != 0) mysql_close($this->Link_ID); 
    }
	
	/*------------------------------------------------------*/
	/*-------------------- FUNCIONES -----------------------*/
	/*------------------------------------------------------*/
	
	function checkParticipante($email)
	{	
		$this->connect();
		$string = "SELECT id FROM participantes
		WHERE email='".$email."'
		ORDER BY id
		LIMIT 1";
		$response = $this->query($string);
		if($response)
		{
			$fetch=mysql_fetch_assoc($response);
			//echo '$fetch[id]: '.$fetch['id'];
			return $fetch['id'];
		}else{
			return false;
		}
	}
	
	function cargarDatos($nombre,$apellido,$email,$provincia,$tecnologia)
	{
		$this->connect();
		
		$string = "INSERT INTO participantes (nombre,apellido,email,provincia,tecnologia,carga_fecha)
		VALUES ('".utf8_decode($nombre)."','".utf8_decode($apellido)."','".$email."','".utf8_decode($provincia)."','".$tecnologia."',NOW())";
		
		$this->query($string);
		
		$response = mysql_insert_id();
		
		//echo 'nuevo id: '.$response;
		
		return $response;
	}
	
	function cargarRespuesta($id,$pregunta,$respuesta)
	{
		$this->connect();
		
		$string = "UPDATE participantes
		SET ".$pregunta."='".$respuesta."'
		WHERE id='".$id."'";
		$response = $this->query($string);
		
		return $response;
	}
	
	function cargarDatosApp($nombre,$apellido,$email,$provincia,$tecnologia,$carga_fecha,$pregunta1,$pregunta2,$pregunta3)
	{
		$this->connect();
		
		$string = "INSERT INTO participantes (nombre,apellido,email,provincia,tecnologia,carga_fecha,pregunta1,pregunta2,pregunta3)
		VALUES ('".utf8_decode($nombre)."','".utf8_decode($apellido)."','".$email."','".utf8_decode($provincia)."','".$tecnologia."','".$carga_fecha."','".$pregunta1."','".$pregunta2."','".$pregunta3."');";
				
		$this->query($string);
		
		$response = mysql_insert_id();
		
		return $response;
	}
	
} 
?>