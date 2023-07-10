<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class T_dummy_prodotti extends Model
{
    protected $primaryKey="username";
    protected $autoIncrement=false;
    protected $keyType="string";

    public function user_carrello_lista()
    {
        return $this->belongsTo('App\Models\T_user');
    }

}


?>