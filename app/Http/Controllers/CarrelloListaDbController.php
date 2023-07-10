<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Session;
use App\Models\T_dummy_prodotti;
use App\Models\T_dati;

class CarrelloListaDbController extends BaseController
{

 
    public function richiestaGet_db()
    {
    
        if(Session::get("username")!==null) 
        {
            if(request("get")!==null)
            {
                if(request("get")==="nCarrello")
                {
                   $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("carrello","1")->get();
                   return count($rows);
                }
                elseif(request('get')==="prodottoListaCarrello"){
                
                    $id=request('id');
    
                    if(request('get1')==="lista")
                    {
                
                        $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("lista_preferiti","1")->where("id_prodotto",$id)->get();
                        return count($rows);

                    }elseif(request('get1')==="carrello")
                    {
                        $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("carrello","1")->where("id_prodotto",$id)->get();
                        return count($rows); 
                    }
                }elseif(request('get')==="listaProdotto")
                {
                    $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("lista_preferiti","1")->get();
                    return (($rows));
    
                }
                elseif(request('get')==="listaCarrello")
                {
                    $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("carrello","1")->get();
                    return (($rows));
        
                }
                elseif(request("get")=="indirizzo")
                 {     
                    $rows= T_dati::where("username",Session::get("username"))->first();
                    return (($rows));  
                }
            }


            
            if(request('set')!==null)
            {
                if(request('set')==="cuore")
                {
                   return $this->set_cuoreCarrello("❤️","🤍","lista_preferiti","carrello");
                }
                elseif(request('set')==="carrelloProdotto")
                {
                   return $this->set_cuoreCarrello("green","black","carrello","lista_preferiti");
                }
            }
    
        }

        
        return 0;

    }

    private function set_cuoreCarrello($messo,$ntMesso,$nome_attr,$antiNome_attr)
    {
    
         $id=request('id');
        
        if($id>=0)
        {
           
            $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("id_prodotto",$id);
    
            if(count($rows->get())>=1)
            {

                // =0 , esiste la riga ma l'attr lista è =0
              if($rows->first()->$nome_attr===0)
                {
                // modifica la riga username,id

                $rows->update([$nome_attr=>1]);

                    return "$messo";
                    
                }
                 else // >=1 , esiste la riga e l'attr lista è =1 , e lista va messo a 0
                {

                    // modifica se carrello =1
                    if($rows->first()->$antiNome_attr>=1)
                    {
    
                        $rows->update([$nome_attr=>0]);
        
                        return "$ntMesso";
                    }
                    // elimina la riga se carrello=0
                    else
                    {
                        $rows= T_dummy_prodotti::where("username",Session::get("username"))->where("id_prodotto",$id)->where($antiNome_attr,0)->delete();

                        return "$ntMesso";
                  
                    }
                }
                
            }
            else
            {
                //  inserisci riga
              
                $prodotto= new T_dummy_prodotti;
                $prodotto->username=Session::get("username");
                $prodotto->id_prodotto=$id;
                $prodotto->$nome_attr=1;
                $prodotto->$antiNome_attr=0;
                $prodotto->save();

                        return "$messo";
                
    
            }
    
        }
        else
        {
            return "$ntMesso";
        }
    }

    





}
