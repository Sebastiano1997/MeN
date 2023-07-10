<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use App\Models\T_dati;
use App\Models\T_user;

class ImpostazioniController extends BaseController
{



    public function impostazioni_get()
    {
        if(Session::get("username")!==null) 
        {
            
               if(SESSION::get("username")!==null)
               {
                $s_errore="";

                $row=T_dati::where("username",Session::get("username"))->first();

    

                return view('impostazioni')
                ->with("s_errore",$s_errore)
                ->with('username',$row["username"])
                ->with('nome',$row["nome"])
                ->with('cognome',$row["cognome"])
                ->with('stato',$row["stato"])
                ->with('citta',$row["citta"])
                ->with('indirizzo',$row["indirizzo"])
                ->with('data',$row["data"])
                ->with('genere',$row["genere"])
                ->with('nazione',$row["nazione"])
                ->with('zipcode',$row["zipcode"]);
                  
               }
            
        }
        else
        {
            
             return redirect('reg-log');
        }
        
        
    }

    public function impostazioni_post()
    {


        $s_errore="";


//  main


   if(SESSION::get("username")!=="")
   {
    

        // controllo parametri 

        // modificaParametri($conn);
        if(request("get")!=="")
        {
            if(request("get")==="datiPersonali")
            {
                $ss=SESSION::get("username");

                
                $s="nome";
               if(request($s)!="")
               { 
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="cognome";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="data";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="genere";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="password";
               if(request($s)!="")
               {
                $dato=T_user::where("username",Session::get("username"))->first();
                $dato->$s=password_hash( request($s),PASSWORD_BCRYPT);
                $dato->save();

                $s_errore="dati salvati";
               }
              
            }
            if($_POST["get"]==="indirizzo")
            {
                $ss=SESSION::get("username");

                $s="nazione";
                if(request($s)!="")
                {
                    $dato=T_dati::where("username",Session::get("username"))->first();
                    if($dato->$s!=request($s))
                    {
                        $dato->$s=request($s);
                        $dato->save();
    
                        $s_errore="dati salvati";
                    }
                }
                
                $s="stato";
                if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="citta";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
               $s="indirizzo";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }

               $s="zipcode";
               if(request($s)!="")
               {
                $dato=T_dati::where("username",Session::get("username"))->first();
                if($dato->$s!=request($s))
                {
                    $dato->$s=request($s);
                    $dato->save();

                    $s_errore="dati salvati";
                }
               }
              
            }
        }

        // visualizza parametri

        $row=T_dati::where("username",Session::get("username"))->first();

    

                return view('impostazioni')
                ->with("s_errore",$s_errore)
                ->with('username',$row["username"])
                ->with('nome',$row["nome"])
                ->with('cognome',$row["cognome"])
                ->with('stato',$row["stato"])
                ->with('citta',$row["citta"])
                ->with('indirizzo',$row["indirizzo"])
                ->with('data',$row["data"])
                ->with('genere',$row["genere"])
                ->with('nazione',$row["nazione"])
                ->with('zipcode',$row["zipcode"]);

       



   
 
   }
   else
   {
    
    return redirect('reg-log');
   }


    }




}
