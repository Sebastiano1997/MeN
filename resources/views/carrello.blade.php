


<!doctype html>
<html>

<head>
<script>
        const BASE_URL="{{url('/')}}/";
        </script>

    <title> carrello_new</title>
    <link rel="stylesheet" href="{{url('css/4_style_carrello.css')}}">
    <script src="{{url('js/4_dinamic_carrello.js')}}" defer> </script>
  
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
                <div><a href="lista"> 💌 </a></div>
            </span>
            <span id="id_impostazioni"> <a href="impostazioni">⚙️</a>
             </span>
       </div>

        <div id="id_menuTendina"> 
                <div id="id_bnTendina"> 👍     </div>
                <div id="id_tendina"> 
                    
            
                    <span class="cl_listaTendina"> <a href="lista"> 💌 </a> </span>
                    <span  class="cl_impostazioni"> <a href="impostazioni"> ⚙️ </a></span>
                </div> 
        </div>

    </nav>

    <div id="id_sfondo">
   
        <div class="cl_carrelloTotale">
        <span class="cl_carrello">
            <span class="cl_carrelloNum"> 0</span>
            <span id="id_carrello"><a href="carrello">🛒 </a></span>
        </span>
        <span id="id_soldiTotali" class="cl_soldiTotali">
            <!-- totale 10£ -->
        </span>
        </div>

        <form  class="cl_formSpedizione"
                action="spedizione"
                method="get">
                <input type="hidden" value="" class="cl_hSpedizione" name="h_id">
                <input type="submit" value="Procedi all'ordine 👉"> 
            </form>
        
    </div>

</div>

    <div id="id_bloccoHome">
<!-- sezione 1== elenco prodotti per categoria -->
    <div class="cl_xSezione" data-n_blocchi=0>
        

        <div class="cl_blocchi" >
           
        <div class="cl_prodotto" data-id="-1" data-prezzo="0">
             <input type="checkbox" class="cl_check">
            
             <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src=""> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                
                
            <div class="cl_descrizione">
               <p class="cl_titoloProdotto" >titolo  </p> 
               <span class="cl_operazioniProdotto"> 
                <span class="cl_cestino">🗑️</span>
                 <span class="cl_cuore">🤍</span>
                  <span class="cl_prezzo"> 10£ </span>   
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

<div class="cl_notifica"> </div>
<!-- <div class="cl_carica">
    ...
</div> -->

<footer>
    <h2> © 1997-2023 M&N, Inc. o società affiliate</h2>
</footer>


</body>

</html>