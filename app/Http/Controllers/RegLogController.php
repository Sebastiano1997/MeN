<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use App\Models\T_user;
use App\Models\T_dati;

class RegLogController extends BaseController
{

    public function get_regLog_form()
    {
        if(Session::get("username")!==null) // se il cookie esiste va nella home
        {
    
            return redirect('home');
        }

        return view('regLog')
    ->with("stato",1)
    ->with("s_errore","")
    ->with("s_erroreLogin","");
    }

public function regLog_form()
{
    $stato=1;
    $s_erroreReg="";
    $s_erroreLogin="";

    if(Session::get("username")!==null) // se il cookie esiste va nella home
    {

        return redirect('home');
    }

    if(!empty(request("hidden_reg")))
    {
        $stato=0;
     if(!empty(request('nome')) && !empty(request('cognome')) &&
        !empty(request('country')) && !empty(request('city'))&& 
        !empty(request('indirizzo'))&& !empty(request('birth-date'))&& 
        !empty(request('genere'))&& 
        !empty(request('username'))&& !empty(request('password')) && 
        !empty(request('state'))&& 
        !empty(request('zipcode')))
        {
            if(T_user::where('username',request('username'))->first()) // se t->username== $_POST[username] // true=se esiste
            {
                $s_erroreReg="username gia' esistente";
            }
            else
            {
                $t_user=new T_user;
                $t_user->username=request('username');
                $t_user->password=password_hash(request('password'),PASSWORD_BCRYPT);
                // $t_user->password=request('password');

                $t_user->save();
                

                // inserimento dati

                $t_dati=new T_dati;
                $t_dati->username=request('username');
                $t_dati->nome=request('nome');
                $t_dati->cognome=request('cognome');
                $t_dati->nazione=request('country');
                $t_dati->stato=request('state');
                $t_dati->citta=request('city');
                $t_dati->indirizzo=request('indirizzo');
                $t_dati->zipcode=request('zipcode');
                $t_dati->data=request('birth-date');
                $t_dati->genere=request('genere');
                $t_dati->save();

                $s_erroreReg="registrato";

                Session::put("username",request('username'));

                return redirect('home');
                
            }

        }
        else
        {
            $s_erroreReg="valori mancanti o incorretti";
        }
    }
    if(!empty(request("hidden_logIn")))
    {
        $stato=1;
        $user=T_user::where('username',request('username'))->first();
       
       if($user)
       {
        if(password_verify(request('password'),$user->password) ) // se t->username== $_POST[username] // true=se esiste
        {
            $s_erroreLogin="Login";
            
            Session::put("username",request('username'));
            return redirect('home');
        }
        else
        {
            $s_erroreLogin="username e/o password errati";
        }
        }
        else
        {
            $s_erroreLogin="username e/o password errati";
        }
    }


    return view('regLog')
    ->with("stato",$stato)
    ->with("s_errore",$s_erroreReg)
    ->with("s_erroreLogin",$s_erroreLogin);
    
}

public function logout()
{
    Session::flush();
    return redirect ('reg-log');
}


}
