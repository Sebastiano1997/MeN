<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class T_dati extends Model
{
    protected $primaryKey="username";
    protected $autoIncrement=false;
    protected $keyType="string";

    public function user_dati()
    {
        return $this->belongsTo('App\Models\T_user');
    }


}


?>