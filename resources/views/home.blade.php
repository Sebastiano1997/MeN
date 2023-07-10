
<!doctype html>
<html>

<head>
    <script>
        const BASE_URL="{{url('/')}}/";
        </script>

    <title> M&N</title>
    <link rel="stylesheet" href="{{url('css/2_style_home.css')}}">
    <script src="{{url('js/2_dinamic_home.js')}}" defer> </script>
    <!-- <script src="2_dinamic_home2.js" defer> </script> -->

    
    
   <link rel="shortcut icon" href="{{url('img/box.png')}}" > 
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body>

<input type="hidden" name="hidden_cerca" id="id_hidden_cerca" value= "{{$cerca}}" >

    <div class="cl_notifica"> </div>

    

    <img id="id" src="">

    
    <div id="id_titolo">
       
         <h1> </h1> 
    </div>

<nav>
        <div class="cl_utente">
         
            
            <div id="id_nomeUtente"> 
                <a href="impostazioni">
                 utente:  {{$username}}
                 </a>
                 </div>
            <a id="id_logout" href="logout">LogOut</a>
        </div>
    
        <form action="" method="get" id="id_formBarra" name="f_cerca">
            <input id="id_barra" name="barra" type="text"  value="{{$cerca}}"> 
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


      


    <!-- sezione== clicca categorie -->
    <div id="id_categoria" >
        <span>
            <button class="cl_bnSxDx" data-n="-1"> 👈 </button>
        </span>
        <button class="cl_bnCategorie">...</button>
        <button class="cl_bnCategorie">...</button>
        <button class="cl_bnCategorie">...</button>
        <button class="cl_bnCategorie">...</button>
        
        <span>
            <button class="cl_bnSxDx" data-n="1"> 👉 </button>
        </span>
    </div>


<!-- sezione molte categorie -->
    <div id="id_bloccoHome">
<!-- sezione 1== elenco prodotti per categoria -->
    <div class="cl_xSezione" data-n_blocchi=0>
        <div class="cl_titoloBlocco">
            categoria 1/cerca
        </div>

        <div class="cl_blocchi" >
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="-1"> 👈 </button>
            </span>
            <span class="cl_prodotto" data-id="-1">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
               <p class="cl_titoloProdotto" >titolo  </p> 
               <div class="cl_operazioniProdotto"> 
                <span class="cl_cuore">🤍</span>
                 <span class="cl_carrelloProdotto">🛒</span>
                  <span class="cl_prezzo"> 10£ </span>   
                </div>
            </span>

            <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo">  </span>   
                    </div>
                </span>
                <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                   <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo"> 10£ </span>   
                    </div>
                </span>
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="1"> 👉 </button>
            </span>
        </div>
    </div>
    
<!-- sezione 2== elenco prodotti per categoria -->
<div class="cl_xSezione" data-n_blocchi=0>
        <div class="cl_titoloBlocco">
            categoria 1/cerca
        </div>

        <div class="cl_blocchi" >
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="-1"> 👈 </button>
            </span>
            <span class="cl_prodotto" data-id="-1">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
               <p class="cl_titoloProdotto" >titolo  </p> 
               <div class="cl_operazioniProdotto"> 
                <span class="cl_cuore">🤍</span>
                 <span class="cl_carrelloProdotto">🛒</span>
                  <span class="cl_prezzo"> 10£ </span>   
                </div>
            </span>

            <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo">  </span>   
                    </div>
                </span>
                <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                   <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo"> 10£ </span>   
                    </div>
                </span>
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="1"> 👉 </button>
            </span>
        </div>
    </div>
    
<!-- sezione 3== elenco prodotti per categoria -->
<div class="cl_xSezione" data-n_blocchi=0>
        <div class="cl_titoloBlocco">
            categoria 1/cerca
        </div>

        <div class="cl_blocchi" >
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="-1"> 👈 </button>
            </span>
            <span class="cl_prodotto" data-id="-1">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
               <p class="cl_titoloProdotto" >titolo  </p> 
               <div class="cl_operazioniProdotto"> 
                <span class="cl_cuore">🤍</span>
                 <span class="cl_carrelloProdotto">🛒</span>
                  <span class="cl_prezzo"> 10£ </span>   
                </div>
            </span>

            <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo">  </span>   
                    </div>
                </span>
                <span class="cl_prodotto">
                <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
                   <p class="cl_titoloProdotto">titolo</p> 
                   <div class="cl_operazioniProdotto"> 
                    <span class="cl_cuore">🤍</span>
                     <span class="cl_carrelloProdotto">🛒</span>
                      <span class="cl_prezzo"> 10£ </span>   
                    </div>
                </span>
            <span>
                <button  class="cl_bnSxDx" data-sx_dx="1"> 👉 </button>
            </span>
        </div>
    </div>
    

<!---- fine ==sezione N -->
</div>
<!-- fine s_m_c -->



<div id="id_blocco2">
<div>
    <div id="id_cerca_categoria" class="cl_titoloBlocco">
    Cerca/Banana? :
    </div>

    <!-- riga 1 -->
    <div class="cl_xSezione" data-n_blocchi=0>
    <div class="cl_blocchi" >
    <span class="cl_prodotto">
        <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
           <p class="cl_titoloProdotto">titolo  </p> 
           <div class="cl_operazioniProdotto"> 
            <span class="cl_cuore">🤍</span>
             <span class="cl_carrelloProdotto">🛒</span>
              <span class="cl_prezzo"> 10£ </span>   
            </div>
    </span>
    <span class="cl_prodotto">
        <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
           <p class="cl_titoloProdotto">titolo  </p> 
           <div class="cl_operazioniProdotto"> 
            <span class="cl_cuore">🤍</span>
             <span class="cl_carrelloProdotto">🛒</span>
              <span class="cl_prezzo"> 10£ </span>   
            </div>
    </span>
    <span class="cl_prodotto">
        <form action="prodotto" method="get">
                
                <img  class="cl_imgProdotto" onclick="submit()" src="img/oggetto.png"> 
                <input  type="hidden" class="cl_h" name="h_id" value="">
                
                </form>
           <p class="cl_titoloProdotto">titolo  </p> 
           <div class="cl_operazioniProdotto"> 
            <span class="cl_cuore">🤍</span>
             <span class="cl_carrelloProdotto">🛒</span>
              <span class="cl_prezzo"> 10£ </span>   
            </div>
    </span>
    </div>
   
    </div>
    <!-- riga 2 -->
    
    
</div>
</div>

<div class="cl_carica">
    ...
</div>

@if($s_errore!==null)
<div> {{$s_errore}}   </div>
@endif
<footer>
    <h2> © 1997-2023 M&N, Inc. o società affiliate</h2>
</footer>


</body>

</html>