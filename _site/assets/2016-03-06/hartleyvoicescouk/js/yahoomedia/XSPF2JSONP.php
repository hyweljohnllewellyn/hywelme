<?php
$callback = $_GET['callback'];
$xspf = $_GET['xspf'];
    $xmlNode = simplexml_load_file($xspf); 

function xmlToArray($xml, $options = array()) { 
// Code from Tamlyn Rhodes from http://outlandish.com/blog/xml-to-json/
    $defaults = array( 
        'namespaceSeparator' => ';',//you may want this to be something other than a colon 
        'attributePrefix' => '@',   //to distinguish between attributes and nodes with the same name 
        'alwaysArray' => array(),   //array of xml tag names which should always become arrays 
        'autoArray' => true,        //only create arrays for tags which appear more than once 
        'textContent' => '$',       //key used for the text content of elements 
        'autoText' => true,         //skip textContent key if node has no attributes or child nodes 
        'keySearch' => false,       //optional search and replace on tag and attribute names 
        'keyReplace' => false       //replace values for above search values (as passed to str_replace()) 
    ); 
    $options = array_merge($defaults, $options); 
    $namespaces = $xml->getDocNamespaces(); 
    $namespaces[''] = null; //add base (empty) namespace 
  
    //get attributes from all namespaces 
    $attributesArray = array(); 
    foreach ($namespaces as $prefix => $namespace) { 
        foreach ($xml->attributes($namespace) as $attributeName => $attribute) { 
            //replace characters in attribute name 
            if ($options['keySearch']) $attributeName = 
                    str_replace($options['keySearch'], $options['keyReplace'], $attributeName); 
            $attributeKey = $options['attributePrefix'] 
                    . ($prefix ? $prefix . $options['namespaceSeparator'] : '') 
                    . $attributeName; 
            $attributesArray[$attributeKey] = (string)$attribute; 
        } 
    } 
  
    //get child nodes from all namespaces 
    $tagsArray = array(); 
    foreach ($namespaces as $prefix => $namespace) { 
        foreach ($xml->children($namespace) as $childXml) { 
            //recurse into child nodes 
            $childArray = xmlToArray($childXml, $options); 
            list($childTagName, $childProperties) = each($childArray); 
  
            //replace characters in tag name 
            if ($options['keySearch']) $childTagName = 
                    str_replace($options['keySearch'], $options['keyReplace'], $childTagName); 
            //add namespace prefix, if any 
            if ($prefix) $childTagName = $prefix . $options['namespaceSeparator'] . $childTagName; 
  
            if (!isset($tagsArray[$childTagName])) { 
                //only entry with this key 
                //test if tags of this type should always be arrays, no matter the element count 
                $tagsArray[$childTagName] = 
                        in_array($childTagName, $options['alwaysArray']) || !$options['autoArray'] 
                        ? array($childProperties) : $childProperties; 
            } elseif ( 
                is_array($tagsArray[$childTagName]) && array_keys($tagsArray[$childTagName]) 
                === range(0, count($tagsArray[$childTagName]) - 1) 
            ) { 
                //key already exists and is integer indexed array 
                $tagsArray[$childTagName][] = $childProperties; 
            } else { 
                //key exists so convert to integer indexed array with previous value in position 0 
                $tagsArray[$childTagName] = array($tagsArray[$childTagName], $childProperties); 
            } 
        } 
    } 
  
    //get text content of node 
    $textContentArray = array(); 
    $plainText = trim((string)$xml); 
//	echo "<script type='text/javascript'>alert('$plainText');</script>";
    if ($plainText !== '') $textContentArray[$options['textContent']] = $plainText; 
  
    //stick it all together 
    $propertiesArray = !$options['autoText'] || $attributesArray || $tagsArray || ($plainText === '') 
            ? array_merge($attributesArray, $tagsArray, $textContentArray) : $plainText; 
  
    //return node as array 
    return array( 
        $xml->getName() => $propertiesArray
    ); 
}

function arrayChangeKeyCase(&$array, $case=CASE_LOWER, $flag_rec=false){
      $array = array_change_key_case($array, $case);
      if ( $flag_rec ) {
        foreach ($array as $key => $value) {
            if ( is_array($value) ) {
                arrayChangeKeyCase($array[$key], $case, true);
            }
        }
      }
}

$arrayData = xmlToArray($xmlNode,array(
    'alwaysArray' => array('track'))); 

arrayChangeKeyCase($arrayData, CASE_LOWER,true);

$playlist = array("playlist" => array("creator" => $arrayData["playlist"]["creator"], "title" => $arrayData["playlist"]["title"], "track" => $arrayData["playlist"]["tracklist"]["track"]));

echo $callback . '({"query":{"count":1,"created":"2014-01-20T21:33:48Z","lang":"nl","results":' . str_replace('\\/','/',json_encode($playlist)) . '}});';
?>
