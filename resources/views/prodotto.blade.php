

<!doctype html>
<html>

<head>
<script>
        const BASE_URL="{{url('/')}}/";
        </script>
    <title> lista_new</title>
    <link rel="stylesheet" href="{{url('css/5_style_prodotto.css')}}">
    <script src="{{url('js/5_dinamic_prodotto.js')}}" defer> </script>
 
    <link rel="shortcut icon" href="{{url('img/box.png')}}" > 
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

<div>
    <nav>
        <div class="cl_utente">

            <div id="id_miniTitolo"> <a href="home">  M&N </a> </div>
            
            <div id="id_nomeUtente"> <a href="impostazioni">
                utente: {{$username}}
                </a>
                </div>
        </div>
    
        <form action="home" method="get" id="id_formBarra" name="f_cerca">
            <input id="id_barra" name="barra" type="text"  > 
            <div id="id_bnCerca">
                    <input  type="submit" value="🔎">
             </div>
        </form>
        <div id="id_menu">
        <span id="id_listaPreferiti">
            <div>
           <a href="lista"> 💌 </a>
            </div>
        </span>

        <span class="cl_carrello">
            <span class="cl_carrelloNum"> 0</span>
            <span id="id_carrello"> <a href="carrello"> 🛒 </a> </span>
        </span>
        
        <span id="id_impostazioni"> <a href="impostazioni">
            ⚙️ </a>
        </span>
    </div>

        <div id="id_menuTendina"> 
            <div id="id_bnTendina"> 👍     </div>
            <div id="id_tendina"> 
                
                <span  class="cl_listaPreferiti">
                    <div>
                <a href="lista"> 💌 </a>
                    </div>
                </span>
        
                <span class="cl_carrellotendina">
                    <span  class="cl_linkCarrello"> <a href="carrello"> 🛒 </a> </span>
                </span>
                
                <span  class="cl_impostazioni"> <a href="impostazioni">
                    ⚙️ </a>
                </span>
            </div> 
        </div>

    </nav>

   

</div>

<div id="id_notifica"></div>

    <div id="id_bloccoHome">
<!-- sezione 1== elenco prodotti per categoria -->
    <div class="cl_xSezione" data-n_blocchi=0>
        

        <div class="cl_blocchi" >
           
        <div class="cl_prodotto" data-id=<?php echo $id ?>>
            
          <div class="cl_parteSx">
            <img src="" alt=""> 

            <div class="cl_freccia">➡️</div>
            <span class="cl_operazioniProdotto"> 
                <span class="cl_carrelloProdotto">🛒</span>
                 <span class="cl_cuore">🤍</span>
            </span>

          </div> 
                
                
            <div class="cl_descrizione" class="cl_parteDx">
                 
                <div class="cl_prodottoIntestazione">
                    <p class="cl_titoloProdotto" >titolo  </p>
                    <p class="cl_brandProdotto"> brand  </p> 
                </div>  
                  <span class="cl_prezzo"> 10£ </span>   
                </span>
             </div>
            </div>

                
        </div>
    </div>



    
    </div>

    <div id="id_bloccoDettagli">
        <div class="cl_titoloDettagli" > dettagli:</div>
        <div class="cl_dettagli">dfygyuhjk fccfghjklm df</div>

    </div>




<div class="cl_notifica"> </div>
<!-- <div class="cl_carica">
    ...
</div> -->

<footer>
    <h2> © 1997-2023 M&N, Inc. o società affiliate</h2>
</footer>


</body>

</html>