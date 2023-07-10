<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;

class SpedizioneController extends BaseController
{



    public function spedizione()
    {
        if(Session::get("username")!==null) 
        {
            $s_errore="";

            if(request("h_id")!="")
            {
                $h=request("h_id");
            }
  



        return view('spedizione')
        ->with("username",Session::get("username"))
        ->with("h",$h)
        ->with("s_errore",$s_errore);
        }
        else
        {
            return redirect('reg-log');
        }
        
        
    }




}
