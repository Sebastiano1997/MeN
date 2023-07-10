

<!doctype html>
<html>

<head>
<script>
        const BASE_URL="{{url('/')}}/";
        </script>

    <title> lista_new</title>
    <link rel="stylesheet" href="{{url('css/4_style_lista.css')}}">
    <script src="{{url('js/4_dinamic_lista.js')}}" defer> </script>
  
    
    
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
        <span class="cl_carrello">
            <span class="cl_carrelloNum"> 0</span>
            <span id="id_carrello"><a href="carrello">🛒 </a></span>
        </span>
        <span id="id_impostazioni"> <a href="impostazioni">
            ⚙️
            </a>
            </span>

   
    </div>

        <div id="id_menuTendina"> 
                    <div id="id_bnTendina"> 👍     </div>
                    <div id="id_tendina"> 
                        
                
                <span class="cl_carrelloTendina">
                    <span id="id_carrelloTendina"><a href="carrello">🛒 </a></span>
                </span>
            <span  class="cl_impostazioniTendina"> <a href="impostazioni"> ⚙️ </a></span>
                    </div> 
            </div>
        
     </nav>

    <div id="id_sfondo">
        <h1>
       Lista dei preferiti ❤️
        </h1>
    </div>

</div>

    <div id="id_bloccoHome">
<!-- sezione 1== elenco prodotti per categoria -->
    <div class="cl_xSezione" data-n_blocchi=0>
        

        <div class="cl_blocchi" >
           
            <div class="cl_prodotto" data-id="-1">
            
            <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                
                
            <div class="cl_descrizione">
               <p class="cl_titoloProdotto" >titolo  </p> 
               <span class="cl_operazioniProdotto"> 
                <span class="cl_cestino">🗑️</span>
                 <span class="cl_carrelloProdotto">🛒</span>
                  <span class="cl_prezzo"> 10£ </span>   
                </span>
             </div>
            </div>

                
        </div>
    </div>



    
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