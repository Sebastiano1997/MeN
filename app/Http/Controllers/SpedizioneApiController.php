<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;

class SpedizioneApiController extends BaseController
{



    public function spedizioneApi()
    {
        if(Session::get("username")!==null) 
        {
            
            // $apiToken = 'shippo_test_a926ddb5a3ee8ea10ea718f6dcb24d07aaf86aa7';
            $apiToken=env('API_TOKEN');
            $apiUrl = 'https://api.goshippo.com/shipments/';

            $nomeSito="M&N";
            $indirizzo_sito=array(
                "nazione"=>"US",
                "stato"=>"CA",
                "citta"=>"San Francisco",
                "indirizzo"=>"215 Clayston St.",
                "zipcode"=> 94117
            );
            
            
            
            $A="address_from";
            $B="address_to";
            $P="parcels";
            $sx="name";
            
            
            $dati=array("$A"=>array("name"=> $nomeSito,"city"=> $indirizzo_sito["citta"],"country"=> $indirizzo_sito["nazione"],"state"=> $indirizzo_sito["stato"],"street1"=> $indirizzo_sito["indirizzo"],"zip"=> $indirizzo_sito["zipcode"]),
            "$B"=>array("name"=> request($B."_name"),"city"=> request($B."_city"),"country"=> request($B."_country"),"state"=> request($B."_state"),"street1"=> request($B."_street1"),"zip"=> request($B."_zip")),
            "async"=>"false" ,
            "$P"=>[array("distance_unit"=> request($P."_distance_unit"),"height"=> request($P."_height"),"length"=> request($P."_length"),"mass_unit"=> request($P."_mass_unit"),"weight"=> request($P."_weight"),"width"=> request($P."_width"))]
            );
            //  $dati = http_build_query($dati);
            $dati=json_encode($dati);
            
            // $dati = array("var1" => "value1", "var2" => "value2");
            // $dati = http_build_query($dati);
            
            
            $header=array("Content-Type: application/json",
                  "Authorization: ShippoToken ".$apiToken);
            
            $curl=curl_init();
            curl_setopt($curl,CURLOPT_URL,$apiUrl);
            curl_setopt($curl,CURLOPT_POST,1);
            curl_setopt($curl,CURLOPT_POSTFIELDS,$dati);
            curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
            curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
            
            $result=curl_exec($curl);
            curl_close($curl);
            
            return ($result);
            
               
        
        }
       
        
        
    }




}
