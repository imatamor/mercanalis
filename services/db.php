<?php
class db
{
        var $host = '';
        var $database = '';
        var $username = '';
        var $password = '';
        var $mysqli;
        function __construct()
        {
                include('config.php');
                $this->host = $config['host'];
                $this->database = $config['database'];
                $this->username = $config['username'];
                $this->password = $config['password'];
                @$this->mysqli = new mysqli($this->host, $this->username, $this->password, $this->database) or exit('Error en la conexion en la seleccion BD' . mysqli_error());
                if(mysqli_connect_errno()) {
                        echo  'Error en la conexion --> '. mysqli_connect_error();
                        exit();
                }
        }
        function Select($sql)
        {
                $rs = $this->mysqli->query($sql) or die('Error en el query -' . $sql . ' --> '. mysqli_error($this->mysqli) );
                if ($rs) {
                        $i       = 0;
                        $arreglo = array();
                        while ($reg = $rs->fetch_assoc()) {
                                array_push($arreglo, $reg);
                        }
                        if (isset($arreglo))
                                return $arreglo;
                        else
                                return null;
                }
        }
        function parametro($variable)
        {
                return trim(htmlspecialchars(mysqli_real_escape_string($this->mysqli, $variable)));
        }
        function array_max_depth($array, $depth = 0)
        {
                if (is_array($array)) {
                        $this->array_max_depth($array[0], $depth++);
                } else {
                        echo $depth;
                }
        }
        function SelectUnico($sql)
        {
                $rs        = $this->mysqli->query($sql);
                $row       = $rs->fetch_array();
                $resultado = $row[0];
                return $resultado;
        }
        function SelectNumber($sql)
        {
                $this->conexion();
                $rs = $this->mysqli->query($sql) or die('Error en el query -' . $sql . '');
                if ($rs) {
                        $i       = 0;
                        $arreglo = array();
                        while ($reg = $rs->fetch_assoc()) {
                                array_push($arreglo, $reg);
                        }
                        if (isset($arreglo))
                                return $arreglo;
                        else
                                return null;
                }
        }
        function Insert($sql)
        {
                                // $sql = mysqli_real_escape_string($this->mysqli,$sql);
                $result = $this->mysqli->query($sql) or die('Error en el query -' . $sql . '');
                return $this->mysqli->insert_id;
        }
        function Update($sql)
        {
                return $result = $this->mysqli->query($sql) or die('Error en el query -' . $sql . '');
        }
        function CallSP($sp)
        {
                $sp     = 'call ' . $sp;
                $result = $this->mysqli->query($sp);
                if ($result) {
                        $i             = 0;
                        $numero_campos = mysqli_field_count($this->mysqli);
                        while ($reg = $result->fetch_array()) {
                                $j = 0;
                                while ($numero_campos > $j) {
                                        $arreglo[$i][$j] = $reg[$j];
                                        $j++;
                                }
                                $i++;
                        }
                        if (isset($arreglo))
                                return $arreglo;
                        else
                                return null;
                }
        }
        function __destruct()
        {
                @mysqli_close($this->mysqli);
        }
}
?>
