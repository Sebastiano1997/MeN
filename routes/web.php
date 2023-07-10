<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return redirect('reg-log');

});



Route::get('reg-log','App\Http\Controllers\RegLogController@get_regLog_form');
Route::post('reg-log','App\Http\Controllers\RegLogController@regLog_form');

Route::get('logout','App\Http\Controllers\RegLogController@logout');

Route::get('home','App\Http\Controllers\HomeController@home');

Route::get('carrelloListaDb','App\Http\Controllers\CarrelloListaDbController@richiestaget_db');

Route::get('lista','App\Http\Controllers\ListaController@lista');
Route::get('carrello','App\Http\Controllers\CarrelloController@carrello');

Route::get('impostazioni','App\Http\Controllers\ImpostazioniController@impostazioni_get');
Route::post('impostazioni','App\Http\Controllers\ImpostazioniController@impostazioni_post');


Route::get('prodotto','App\Http\Controllers\ProdottoController@prodotto');

Route::get('spedizione','App\Http\Controllers\SpedizioneController@spedizione');

Route::post('spedizioneApi','App\Http\Controllers\SpedizioneApiController@spedizioneApi');



