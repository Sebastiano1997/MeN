<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use App\Models\T_dummy_prodotti;

class CarrelloController extends BaseController
{



    public function carrello()
    {
        if(Session::get("username")!==null) 
        {  

        return view('carrello')
        ->with("username",Session::get("username"))
        ;
        }
        else
        {
            return redirect('reg-log');
        }
        
        
    }




}
