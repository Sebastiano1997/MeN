

<!doctype html>
<html>

<head>
<script>
        const BASE_URL="{{url('/')}}/";
        </script>
    <title> Impostazioni</title>
    <link rel="stylesheet" href="{{url('css/3_style_impostazioni.css')}}">
    <script src="{{url('js/3_dinamic_impostazioni.js')}}" defer> </script>

    
    <link rel="shortcut icon" href="{{url('img/box.png')}}" > 
     <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

    <div id="id_sfondo">
       <a href="home" value=""> 
        <div>
        </div>
        </a>
    </div>

    <div id=id_sezione1>
        <div id="id_titolo">
            Impostazioni
        </div>
        <div id="id_utente">
            utente : {{ $username }}
        </div>
    </div>

    <div class="cl_notifica"> {{$s_errore}}</div>

    <form 
    class="cl_modificaDati"  id="id_datiPersonali"
    action=""
    method="post"
     >
     @csrf
         dati personali  <button class="cl_bnAdd"> +</button>
        <input type="hidden" name="get" value="datiPersonali">
        <div class="cl_figlioModifica">
        
            <div class="cl_modificaDatiFigli" data-attrdb="nome">
                nome : <span class="cl_nome"> {{$nome }}</span> <button class="cl_bnModifica" > +</button> <input class="cl_barraModifica" type="text" name="nome">
            </div>
            <div class="cl_modificaDatiFigli" data-attrdb="cognome">
                cognome : <span class="cl_cognome"> {{$cognome }}  </span> <button class="cl_bnModifica" > +</button> <input class="cl_barraModifica" type="text" name="cognome">
            </div>
            <div class="cl_modificaDatiFigli" data-attrdb="data">
                data di nascita : <span class="cl_dataNascita"> {{$data}} </span> <button class="cl_bnModifica" > +</button> <input class="cl_barraModifica" type="date" name="data">
            </div>
            <div class="cl_genere" data-attrdb="genere">
            M<input type="radio" name="genere" value="M" @if($genere=="M") checked @endif>
            F<input type="radio" name="genere" value="F" @if($genere=="F") checked @endif>
            </div>
            <div class="cl_modificaDatiFigli" data-attrdb="password">
                password  <button class="cl_bnModifica"> +</button> <input class="cl_barraModifica" type="password" name="password">
            </div>
            <div>
                <input type="submit" class="cl_salva" id="id_salvaDatiPersonali" value="salva">
            </div>
           

        </div>
    </form>


    <form 
    action=""
    method="post"class="cl_modificaDati" id="id_indirizzo">
    @csrf
        indirizzo di spedizione <button class="cl_bnAdd"> +</button>

        <input type="hidden" name="get" value="indirizzo">

        <div class="cl_figlioModifica">

            <div class="cl_modificaDatiFigli" data-attrdb="nazione">
               nazione: <span class="cl_nazione"> {{$nazione }}</span> <button class="cl_bnModifica"> +</button> <input class="cl_barraModifica" type="text" name="nazione">
            </div>
            <div class="cl_modificaDatiFigli" data-attrdb="paese">
               stato/provincia: <span class="cl_paese"> {{$stato }}</span> <button class="cl_bnModifica"> +</button> <input class="cl_barraModifica" type="text" name="stato">
            </div>

            <div class="cl_modificaDatiFigli" data-attrdb="citta">
                citta : <span class="cl_citta"> {{$citta }} </span><button class="cl_bnModifica" > +</button> <input class="cl_barraModifica" type="text" name="citta">
            </div>

            <div class="cl_modificaDatiFigli" data-attrdb="indirizzo">
                indirizzo: <span class="cl_indirizzo"> {{$indirizzo }}</span>  <button class="cl_bnModifica"> +</button> <input class="cl_barraModifica" type="text" name="indirizzo">
            </div>
            <div class="cl_modificaDatiFigli" data-attrdb="paese">
               zip code: <span class="cl_zipcode"> {{$zipcode }}</span> <button class="cl_bnModifica"> +</button> <input class="cl_barraModifica" type="text" name="zipcode">
            </div>

            <div>
                <input type="submit" class="cl_salva" id="id_salvaIndirizzo" value="salva">
            </div>
            
            

        </div>
    </form>

    <div id="id_logout">
      <a href="logout"> <button>LogOut</button> </a>
    </div>
    <div id="id_home">
      <a href="home">  Home </a>
    </div>

    <footer>
    <h2> © 1997-2023 M&N, Inc. o società affiliate</h2>
</footer>

  


</body>

</html>