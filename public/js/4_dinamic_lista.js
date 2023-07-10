

const link_carrelloListaDb=BASE_URL+"carrelloListaDb";



//  +++++++++++++++ function

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

//  verifica carrello

function verificaInDb_prodottoInCarello(d_prodotto,json_prodotto)
{
    let k_get="prodottoListaCarrello";

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=carrello&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInCarrelloText(text,d_prodotto);});
}

function onProdottoInCarrelloText(text,d_prodotto){

    if(parseInt(text)>=1)
    {
        d_prodotto.querySelector(".cl_carrelloProdotto").style.backgroundColor="green";
    }
    else{
        d_prodotto.querySelector(".cl_carrelloProdotto").style.backgroundColor="black";
    }
    

}

// bn prodotto



function onClickCarrelloProdottoText(text,d)
{
d.querySelector(".cl_carrelloProdotto").style.backgroundColor=text;
numElementiCarrello();
}

function onClickCarrelloProdotto(event)
{
    const k_set="carrelloProdotto";
    let d_prodotto=event.currentTarget;
    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }

  fetch(link_carrelloListaDb+'?set='+k_set+"&id="+d_prodotto.dataset.id)
    .then(res => res.text())
    .then(text=>{onClickCarrelloProdottoText(text,d_prodotto);});

    console.log("id_carrello=="+d_prodotto.dataset.id);

}

function onClickCestinoText(text,d)
{
    if(text!="")
    {
        d.remove();
    }
}

function onClickCestino(event)
{
    const k_set="cuore";
    let d_prodotto=event.currentTarget;
    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }

  fetch(link_carrelloListaDb+'?set='+k_set+"&id="+d_prodotto.dataset.id)
    .then(res => res.text())
    .then(text=>{onClickCestinoText(text,d_prodotto);});

}


//
function onJsonProdottoLista(json,d_sezione)
{
    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const d_prodotto=d_blocco.querySelector(".cl_prodotto");

         d_prodotto.style.visibility="visible";
         d_prodotto.dataset.id=json["id"];
         d_prodotto.querySelector(".cl_h").value=json["id"];
         d_prodotto.querySelector("img").src=json["images"][0];
         d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["title"];
         d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent=json["price"]+"$";
        
         verificaInDb_prodottoInCarello(d_prodotto,json);


}

function onJsonIdListaProdotto(json)
{
    console.log("ids json=="+json);
    console.log(json);

    for(let row of json)
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
            i.querySelector("img").src="";
            i.querySelector(".cl_titoloProdotto").textContent="";
            i.querySelector(".cl_prezzo").textContent="";
            i.querySelector(".cl_carrelloProdotto").style.backgroundColor="black";

            i.querySelector(".cl_cestino").addEventListener("click",onClickCestino);
            i.querySelector(".cl_carrelloProdotto").addEventListener("click",onClickCarrelloProdotto);
        
    
        d_bloccoCentrale.appendChild(oj);

        // console.log('https://dummyjson.com/products/'+id);

        fetch('https://dummyjson.com/products/'+row["id_prodotto"])
        .then(onResponse)
        .then(json=> {
            onJsonProdottoLista(json,oj);
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
    d.textContent=text; 
    else
    {
        d.textContent=0;
    }     
    
}





// ++++++++++++ MAIN

// tendina
const d_bnTendina=document.querySelector("#id_bnTendina");
d_bnTendina.addEventListener("click",onClickTendina);

// // barra cerca
// let d_cerca=document.querySelector("#id_formBarra");
// d_cerca.addEventListener


// cerca id prodotti di lista
const k_get="listaProdotto";

fetch(link_carrelloListaDb+'?get='+k_get+"&num=1")
.then(onResponse)
.then(onJsonIdListaProdotto);





// num carrello

numElementiCarrello();  // numero di elementi di un carrello dell'utente

