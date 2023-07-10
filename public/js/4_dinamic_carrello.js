// console.log("sto funzionando bastardo");

const link_carrelloListaDb=BASE_URL+"carrelloListaDb";

//  +++++++++++++++ function

// spedizione

function onSubOrdine(event)
{
    let id_spedire=Array();
    const ds_sezione=document.querySelectorAll(".cl_xSezione");
    
    for(let i of ds_sezione)
    {
         if(i.querySelector(".cl_prodotto .cl_check").checked)
        {
          id_spedire.push(i.querySelector(".cl_prodotto").dataset.id);
        }
    }
    event.currentTarget.querySelector(".cl_hSpedizione").value=id_spedire;
   console.log(event.currentTarget.querySelector(".cl_hSpedizione").value);

}

// tedina
function onClickTendina(event)
{
   if(document.querySelector("nav #id_tendina").style.display=="none" )
    {
        event.currentTarget.textContent="👍";
        document.querySelector("nav #id_tendina").style.display="block";
    }
    else
    {
        event.currentTarget.textContent="👇";
        document.querySelector("nav #id_tendina").style.display="none";
    }
}

//  check

function onCheck(event)
{
    let d_blocchi;
    let d_prodotto=event.currentTarget;
   

    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }
    d_blocchi=d_prodotto;
    while(d_blocchi.className!="cl_blocchi")
    {
        d_blocchi=d_blocchi.parentNode;
    }

    

    if(event.currentTarget.checked)
    {
      d_blocchi.style.backgroundColor="rgba(0, 0, 0, 0.429)";

      prezzoTotale+=parseInt(d_prodotto.dataset.prezzo);

      let d_soldi=document.querySelectorAll(".cl_soldiTotali");
      for(let d of d_soldi) 
      d.textContent="totale "+prezzoTotale+"$";
        
    }
    else
    {
        d_blocchi.style.backgroundColor="rgba(94, 85, 85, 0.429)";

        prezzoTotale-=parseInt(d_prodotto.dataset.prezzo);

       let d_soldi=document.querySelectorAll(".cl_soldiTotali");
      for(let d of d_soldi) 
      d.textContent="totale "+prezzoTotale+"$"; 
    }
}
//  verifica carrello

function verificaInDb_prodottoInCarello(d_prodotto,json_prodotto)
{
    let k_get="prodottoListaCarrello";

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=lista&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInCarrelloText(text,d_prodotto);});
}

function onProdottoInCarrelloText(text,d_prodotto){

    if(parseInt(text)>=1)
    {
        d_prodotto.querySelector(".cl_cuore").textContent="❤️";
    }
    else{
        d_prodotto.querySelector(".cl_cuore").textContent="🤍";
    }
    

}

// bn prodotto



function onClickCuoreText(text,d)
{
d.querySelector(".cl_cuore").textContent=text;
}

function onClickCuore(event)
{
    const k_set="cuore";
    let d_prodotto=event.currentTarget;
    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }

  fetch(link_carrelloListaDb+'?set='+k_set+"&id="+d_prodotto.dataset.id)
    .then(res => res.text())
    .then(text=>{onClickCuoreText(text,d_prodotto);});

}

function onClickCestinoText(text,d)
{
    if(text!="")
    {
        let d_prodotto=d.querySelector(".cl_prodotto");
        
        prezzoTotale-=parseInt(d_prodotto.dataset.prezzo);
        let d_soldi=document.querySelectorAll(".cl_soldiTotali");
      for(let d of d_soldi) 
      d.textContent="totale "+prezzoTotale+"$";
        d.remove();
        numElementiCarrello();
    }
}

function onClickCestino(event)
{
    const k_set="carrelloProdotto";
    let d_prodotto=event.currentTarget;
    let d_sezione;
    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }

d_sezione=d_prodotto;
    while(d_sezione.className!="cl_xSezione")
    {
        d_sezione=d_sezione.parentNode;
    }


  fetch(link_carrelloListaDb+'?set='+k_set+"&id="+d_prodotto.dataset.id)
    .then(res => res.text())
    .then(text=>{onClickCestinoText(text,d_sezione);});

}


//
function onJsonProdottoCarrello(json,d_sezione)
{
    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const d_prodotto=d_blocco.querySelector(".cl_prodotto");

        prezzoTotale+=json["price"];
         d_prodotto.style.visibility="visible";
         d_prodotto.dataset.id=json["id"];
         d_prodotto.dataset.prezzo=json["price"];
         d_prodotto.querySelector(".cl_h").value=json["id"];
         d_prodotto.querySelector("img").src=json["images"][0];
         d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["title"];
         d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent=json["price"]+"$";
        
         let d_soldi=document.querySelectorAll(".cl_soldiTotali");
            for(let d of d_soldi) 
            d.textContent="totale "+prezzoTotale+"$"; verificaInDb_prodottoInCarello(d_prodotto,json);


}

function onJsonIdCarrelloProdotto(json)
{
    console.log("ids json=="+json);

    for(let id of json)
    {
    
      const d_bloccoCentrale=document.querySelector("#id_bloccoHome");

    
        let oj=document.createElement("div");
        oj.classList="cl_xSezione";
        oj.setAttribute("data-n_blocchi","0"); 

        let x=d_bloccoCentrale.querySelector(".cl_xSezione");
        oj.innerHTML=x.innerHTML;

        oj.style.display="block";

        let i=oj.querySelector(".cl_prodotto");
 
            i.dataset.id="-1";
            i.dataset.prezzo="0";
            i.querySelector(".cl_check").checked=true;
            i.querySelector("img").src="";
            i.querySelector(".cl_titoloProdotto").textContent="";
            i.querySelector(".cl_prezzo").textContent="";
            i.querySelector(".cl_cuore").textContent="🤍";

            i.querySelector(".cl_check").addEventListener("click",onCheck)
            i.querySelector(".cl_cestino").addEventListener("click",onClickCestino);
            i.querySelector(".cl_cuore").addEventListener("click",onClickCuore);
        
    
        d_bloccoCentrale.appendChild(oj);

        // console.log('https://dummyjson.com/products/'+id);

        fetch('https://dummyjson.com/products/'+id["id_prodotto"])
        .then(onResponse)
        .then(json=> {
            onJsonProdottoCarrello(json,oj);
        });
    }

    
}

function onResponse(response){
    return response.json();
}

// 
function numElementiCarrello()
{
    let k_get="nCarrello";
    fetch(link_carrelloListaDb+'?get='+k_get)
    .then(res => res.text())
    .then(onNCarelloText);
}

function  onNCarelloText(text) {
    console.log(text);
    let d=document.querySelector(".cl_carrelloNum");
    if(parseInt(text))
    {
        nElementiCarrello=text;
        d.textContent=text;
        for(let d of document.querySelectorAll(".cl_formSpedizione"))
        {
            d.style.visibility="visible";
        }
    } 
    else
    {
        nElementiCarrello=0;
        d.textContent=0;

        for(let d of document.querySelectorAll(".cl_formSpedizione"))
        {
            d.style.visibility="hidden";
        }
    } 
    
}





// ++++++++++++ MAIN

let nElementiCarrello=0;
let prezzoTotale=0;

// procedi alla spedizione

const d_procediOrdine=document.querySelector(".cl_formSpedizione");
d_procediOrdine.addEventListener("submit",onSubOrdine);

// tendina
const d_bnTendina=document.querySelector("#id_bnTendina");
d_bnTendina.addEventListener("click",onClickTendina);

// cerca id prodotti di lista
const k_get="listaCarrello";

fetch(link_carrelloListaDb+'?get='+k_get+"&num=1")
.then(onResponse)
.then(onJsonIdCarrelloProdotto);





// num carrello

numElementiCarrello();  // numero di elementi di un carrello dell'utente


console.log(document.querySelector("#id").value);



