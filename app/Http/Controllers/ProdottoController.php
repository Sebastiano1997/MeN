<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;


class ProdottoController extends BaseController
{



    public function prodotto()
    {
        if(Session::get("username")!=="") 
        {
    
            $id="-1";
           
            if(request("h_id")!=="")
            {
                $id=request("h_id");
            }
         
               
        return view('prodotto')
        ->with("username",Session::get("username"))
        ->with("id",$id);

        }
        else
        {
            return redirect('reg-log');
        }
        
        
    }




}
