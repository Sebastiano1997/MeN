<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class T_user extends Model
{
    protected $primaryKey="username";
    protected $autoIncrement=false;
    protected $keyType="string";

    public function carrello_list_prodotti()
    {
        return $this->hasMany('App\Models\T_dummy_prodotti');
    }

    

    public function dati_personali()
    {
        return $this->hasOne('App\Models\T_dati');
    }

}


?>