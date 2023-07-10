<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use App\Models\T_user;

class HomeController extends BaseController
{



    public function home()
    {
        $cerca="";
        $s_errore="";
        if(Session::get("username")!==null) 
        {
    
            if(request("barra")!==null)
        {
            
                $cerca=request("barra");
                
        }

        return view('home')
        ->with("cerca",$cerca)
        ->with("username",Session::get("username"))
        ->with("s_errore",$s_errore);
        }
        else
        {
            return redirect('reg-log');
        }
        
        
    }




}
