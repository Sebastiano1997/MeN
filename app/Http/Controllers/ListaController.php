<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
class ListaController extends BaseController
{



    public function lista()
    {
        if(Session::get("username")!==null) 
        {

        return view('lista')
        ->with("username",Session::get("username"));
        }
        else
        {
            return redirect('reg-log');
        }
        
        
    }




}
