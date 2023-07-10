
<!doctype html>
<html>

<head>
<script>
        const BASE_URL="{{url('/')}}/";
        </script>
        
        <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> spedizione_new</title>
    <link rel="stylesheet" href="{{url('css/6_style_spedizione.css')}}">
    <script src="{{url('js/6_dinamic_spedizione.js')}}" defer> </script>
   
    <link rel="shortcut icon" href="{{url('img/box.png')}}" > 
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

<!-- <input name='_token' type='hidden' value=".csrf_token()." -->

<input type="hidden" class="cl_hidden" value=<?php echo $h ?>>

<div>
    <nav>
        <div class="cl_utente">

            <div id="id_miniTitolo"> <a href=" home ">  M&N </a> </div>
            
            <div id="id_nomeUtente"> <a href=" impostazioni ">
                utente: {{$username}}
                </a>
                </div>
        </div>
    
        <form action=" home " method="get" id="id_formBarra" name="f_cerca">
            <input id="id_barra" name="barra" type="text"  > 
            <div id="id_bnCerca">
                    <input  type="submit" value="🔎">
             </div>
        </form>

        <div id="id_menu">
            <span id="id_listaPreferiti">
                <div><a href=" lista "> 💌 </a></div>
            </span>
            <span class="cl_carrello">
            <span class="cl_carrelloNum"> 0</span>
            <span id="id_carrello"><a href=" carrello ">🛒 </a></span>
        </span>
            <span id="id_impostazioni"> <a href=" impostazioni ">⚙️</a>
             </span>
       </div>

        <div id="id_menuTendina"> 
                <div id="id_bnTendina"> 👍     </div>
                <div id="id_tendina"> 
                    
            
                    <span class="cl_carrelloTendina">
                    <span id="id_carrelloTendina"><a href=" carrello ">🛒 </a></span>
                    </span>
                    <span class="cl_listaTendina"> <a href=" lista "> 💌 </a> </span>
                    <span  class="cl_impostazioni"> <a href=" impostazioni "> ⚙️ </a></span>
                </div> 
        </div>

    </nav>

    <div id="id_sfondo">
   
        <span id="id_titoloSpedizione">  Spedizione </span>
        <span id="id_soldiTotali" class="cl_soldiTotali">
            <!-- totale 10£ -->
        </span>
    </div>

</div>



    <div id="id_bloccoHome">
<!-- sezione 1== elenco prodotti per categoria -->
    <div class="cl_xSezione" data-n_blocchi=0>
        

        <div class="cl_blocchi" >
           
        <div class="cl_prodotto" data-id="-1" data-prezzo="0" data-spedizione="0" data-category="">
             <input type="checkbox" class="cl_check">
            
             <form action=" prodotto " method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                
                
            <div class="cl_descrizione">
               <p class="cl_titoloProdotto" >titolo  </p> 
               <span class="cl_operazioniProdotto"> 
                 <span class="cl_boxPrezzo"> Prezzo: <span class="cl_prezzo"> x$ </span>  </span> 

                  <span class="cl_bnSpedizione">   <span > <span class="cl_nomeSpedizione" data-spedizioneselezionato="0"> spedizione </span>👇</span>
                        <div class="cl_spedizioneTendina" data-open="0">
                    
                       <div class="cl_rigaSpedizione">
                            <span> provider</span> 
                            <span > $  </span> 
                            <span>stima</span>
                        </div>
                           
                        <div class="cl_spedizione"  data-spedizione="">
                           
                            <span class="cl_provider"> ... </span> 
                            <span class="cl_prezzoSpedizione">... </span> 
                            <span class="cl_tempoStimato"> ... </span>
                          
                        </div>
                      


                        </div>
                  </span> 
                </span>
             </div>
        </div>

                
        </div>
    </div>



    
    </div>


    <div id="id_soldiFissi">
         <span class="cl_soldiTotali">
          <!-- totale 10£ -->
        </span>
    </div>


<div class="cl_notifica">  </div>
<!-- <div class="cl_carica">
    ...
</div> -->

<footer>
    <h2> © 1997-2023 M&N, Inc. o società affiliate</h2>
</footer>


</body>

</html>