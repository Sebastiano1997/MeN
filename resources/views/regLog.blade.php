<!doctype html>
<html>

<head>
    <script>
        const BASE_URL="{{url('/')}}/";
    </script>
        
    <title> Reg/Log</title>
    <link rel="stylesheet" href="{{ url('css/1_style_reg-log.css')}}">
    <script src="{{url('js/1_dinamic_reg-log.js')}}" defer> </script>

    
    <link rel="shortcut icon" href=""> 

    <meta name="viewport"
content="width=device-width, initial-scale=1">

</head>

<body>



<input id='id_h' type='hidden' value={{$stato}}>



<div id="id_sfondo">
    <h1>
        
    </h1>
</div>

 
<div id="id_login">

    <h2>
        Login
    </h2>

    <form  id="id_loginParametri"
        method="post"  
        name="form_logIn">
        @csrf
        <div>
            username 
            <input type="text" name="username">
        </div>
        <div>
            password
            <input type="password" name="password">
        </div>

         <input type="submit" value="login">
         <input type="hidden" name="hidden_logIn" value="true">
  </form>
        
            @if($s_erroreLogin!="")
            <div class="cl_errore">{{$s_erroreLogin}}</div>
            @endif

    <div class="cl_linkRegLog">
        registrati
    </div>
    
</div>

<div id="id_reg">

        <h2>
            Registrazione
        </h2>
    
        <div id="id_regParametri">
    
        <form id="id_form_reg" 
        method="post"  
        name="form_reg">
        @csrf
            <div>
                nome 
                <input type="text" name="nome" >
            </div>
    
            <div>
                cognome
                <input type="text" name="cognome">
            </div>
    
            <div>
                nazione
                <input type="text" name="country">
            </div>
            <div>
                stato/provincia
                <input type="text" name="state">
            </div>
    
            <div>
                citta
                <input type="text" name="city">
            </div>
    
            <div>
                indirizzo
                <input type="text" name="indirizzo">
            </div>
            <div>
                zip code
                <input type="text" name="zipcode">
            </div>
            <div>
                data di nascita
                <input type="date" name="birth-date">
            </div>
    
            <div>

            M<input type="radio" name="genere" value="M">
            F<input type="radio" name="genere" value="F">

            </div>
    
    
         <div>
            username 
            <input type="text" name="username">
            </div>

         <div>
            password
            <input type="password" name="password">
            </div>
             <div>
         <input type="checkbox" name="condizioniPrivacy"> condizioni sulla privacy
            </div>
            <div>
         <input type="hidden" name="hidden_reg" value="true"> 
            </div>
         <div>
            <input id="id_submit" type="submit" value="registrati">
            </div> 
            
        </form>

            @if ($s_errore!="")
            <div class="cl_errore">  {{$s_errore}} </div>
            @endif
        
            <div class="cl_linkRegLog">
                login
            </div>
            </div>
</div>



    







</body>

</html>