// console.log("sto funzionando bastardo");

let n_img=0;
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

// bn freccia img
function onJsonProxImg(json,d_sezione)
{
    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const d_prodotto=d_blocco.querySelector(".cl_prodotto");

   
    if((json["images"]).length <=n_img)
    n_img=0;

     d_prodotto.querySelector("img").src=json["images"][n_img];
         

}

function onClickFreccia(event)
{
    n_img++;
    const k_id=document.querySelector(".cl_prodotto").dataset.id;

fetch('https://dummyjson.com/products/'+k_id)
.then(onResponse)
.then(json=> {
    onJsonProxImg(json,oj);
});


}

//  verifica carrello

function verificaInDb_prodottoInCarello(d_prodotto,json_prodotto)
{
    let k_get="prodottoListaCarrello";

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=carrello&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInCarrelloText(text,d_prodotto);});

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=lista&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInListaText(text,d_prodotto);});
}

function onProdottoInListaText(text,d_prodotto)
{
    if(parseInt(text)>=1)
    {
        d_prodotto.querySelector(".cl_cuore").textContent="❤️";
    }
    else{
        d_prodotto.querySelector(".cl_cuore").textContent="🤍";
    }
    
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

// bn prodotto , carrello e cuore

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

}





//
function onJsonProdottoLista(json,d_sezione)
{
    console.log(json);
    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const d_prodotto=d_blocco.querySelector(".cl_prodotto");

         d_prodotto.style.visibility="visible";
         d_prodotto.querySelector("img").src=json["images"][0];
         d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["title"];
         d_prodotto.querySelector(".cl_brandProdotto").textContent="brand:  "+json["brand"];
         d_prodotto.querySelector(".cl_prezzo").textContent=json["price"]+"$";
        document.querySelector(".cl_dettagli").textContent=json["description"];
         verificaInDb_prodottoInCarello(d_prodotto,json);


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


// bn cuore e carrello , per ogni prodotto

const d_cuore=document.querySelector(".cl_cuore");
d_cuore.addEventListener("click",onClickCuore);

const d_carrello=document.querySelector(".cl_carrelloProdotto");
d_carrello.addEventListener("click",onClickCarrelloProdotto);

// click altre foto

const d_freccia=document.querySelector(".cl_freccia");
d_freccia.addEventListener("click",onClickFreccia);

// cerca id prodotto
let oj=document.querySelector(".cl_xSezione");
const k_id=document.querySelector(".cl_prodotto").dataset.id;

fetch('https://dummyjson.com/products/'+k_id)
.then(onResponse)
.then(json=> {
    onJsonProdottoLista(json,oj);
});





// num carrello

numElementiCarrello();  // numero di elementi di un carrello dell'utente

