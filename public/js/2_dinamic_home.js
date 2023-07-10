

// const link_carrelloListaDb="http://localhost//progetto/source/2_carrelloListaDb.php";
const link_carrelloListaDb=BASE_URL+"carrelloListaDb";
const link_apiDummy="https://dummyjson.com/products/";


const lista_valoriPermessiNelleCategorie=["shirt","fragrance","skincare",
"home-decoration","furniture",
"top","dresse","shoes","watches","bag","jewellery",
"sunglasse","lighting"];
const lista_valoriNonPermessiCategorie=["laptop"];

let l_categorie=0;
let n_elementiCategoria=0;
let n_viewCategorie=0;

let x_home_cerca=0;  // =0 home ,=2,1 cerca/categoria 
if(document.querySelector("#id_hidden_cerca").value!="" || document.querySelector("#id_hidden_cerca").value!="" )
{
    x_home_cerca=2;
}
let s_categoria_cerca="";


// ++++++++++ function

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

//  bn cuore e carrello per ogni prodotto


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
    console.log("set cuore id=="+d_prodotto.dataset.id);

}

// filtra i prodotti indesiderati dal cerca , incoerenti nel sito
function filtroJson(json)
{
    let c1=0;
    let j={"products":Array()};
     for(let i_p of json["products"])
     {   
         i_c=i_p["category"];
        for( let i_s of lista_valoriPermessiNelleCategorie)
        {
        if(i_c.indexOf(i_s)!=-1 )
             {
                let b=true;
                for(let i2 of lista_valoriNonPermessiCategorie)
                {
                    if(i_c.indexOf(i2)!=-1)
                    {
                        b=false;
                        delete json["products"][c1];
                        break; 
                    }
                }
                if(b)
                j["products"].push(i_p);

                break;
            }
        }
        c1++;
     }

    return j;
}

// ------------------- in o non in : lista e carrello in ogni prodotto 
function onProdottoInListaText(text,d_prodotto){

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

function verificaInDb_prodottoInListaCarrello(d_prodotto,json_prodotto)
{
    let k_get="prodottoListaCarrello";

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=lista&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInListaText(text,d_prodotto);});

    fetch(link_carrelloListaDb+'?get='+k_get+"&get1=carrello&id="+json_prodotto["id"])
    .then(res => res.text())
    .then(text=>{onProdottoInCarrelloText(text,d_prodotto);});
}

//  numero elementi carrello


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


// -----------------



function onClickCarica2(event){
    if(x_home_cerca==1 || x_home_cerca==2){
      
        const d_bloccoCentrale=document.querySelector("#id_blocco2");

        let n_sezioni=d_bloccoCentrale.querySelectorAll(".cl_xSezione").length;
        let n_prodotti=d_bloccoCentrale.querySelector(".cl_xSezione").querySelectorAll(".cl_prodotto").length;

        
        if(n_elementiCategoria>(n_sezioni*n_prodotti)){
        let oj=document.createElement("div");
        oj.classList="cl_xSezione";
        oj.setAttribute("data-n_blocchi","0"); 
    
        let x=d_bloccoCentrale.querySelector(".cl_xSezione");
        oj.innerHTML=x.innerHTML;
    
        let c=0;
        for(let i of oj.querySelectorAll(".cl_prodotto"))
        {
            i.dataset.id="-1";
            i.querySelector("img").src="";
            i.querySelector(".cl_titoloProdotto").textContent="";
            i.querySelector(".cl_prezzo").textContent="";
            i.querySelector(".cl_cuore").textContent="🤍";
            i.querySelector(".cl_carrelloProdotto").style.backgroundColor="black";

            i.querySelector(".cl_cuore").addEventListener("click",onClickCuore);
            i.querySelector(".cl_carrelloProdotto").addEventListener("click",onClickCarrelloProdotto);
            c++;
        }
      
        d_bloccoCentrale.appendChild(oj);

        console.log("s_categoria=="+s_categoria_cerca);

        if(x_home_cerca==1)
        {
          fetch(link_apiDummy+'category/'+s_categoria_cerca)
        .then(onResponse)
        .then(json=> {
            // Chiamata della funzione di callback con parametri aggiuntivi
            onJsonProdottiCategoria_cerca(json, oj)});
        }

        if(x_home_cerca==2)
        {
          
        
            let s=encodeURIComponent(document.querySelector("#id_barra").value);

            fetch(link_apiDummy+'search?q='+s)
            .then(onResponse)
            .then(json=> {
                onJsonProdottiCategoria_cerca(json,oj);
              });
        }

        }
        else{
            event.currentTarget.style.display="none";
        }

    }
}

function onClickCarica(event){
    if(x_home_cerca==0)
    {
    const d_bloccoCentrale=document.querySelector("#id_bloccoHome");
    let n_sezioni=d_bloccoCentrale.querySelectorAll(".cl_xSezione").length;
     
 if(l_categorie>n_sezioni)
   {
     let oj=document.createElement("div");
    oj.classList="cl_xSezione";
    oj.setAttribute("data-n_blocchi","0"); 

    let x=d_bloccoCentrale.querySelector(".cl_xSezione");
    oj.innerHTML=x.innerHTML;

    oj.querySelector(".cl_titoloBlocco").textContent="";

    for(let i of oj.querySelectorAll(".cl_prodotto"))
    {
        i.dataset.id="-1";
        i.querySelector("img").src="";
        i.querySelector(".cl_titoloProdotto").textContent="";
        i.querySelector(".cl_prezzo").textContent="";
        i.querySelector(".cl_cuore").textContent="🤍";
        i.querySelector(".cl_carrelloProdotto").style.backgroundColor="black";


        i.querySelector(".cl_cuore").addEventListener("click",onClickCuore);
        i.querySelector(".cl_carrelloProdotto").addEventListener("click",onClickCarrelloProdotto);
       

    }
  
    d_bloccoCentrale.appendChild(oj);
  

        for (let i of d_bloccoCentrale.querySelectorAll(".cl_xSezione .cl_bnSxDx"))
        i.addEventListener("click",onClickProdottiSxDx);

    fetch(link_apiDummy+'/categories')
.then(res => res.json())
.then(json=>{onJsonCategorie(json,n_sezioni-1);});
   }
   else{
    event.currentTarget.style.display="none";
   }
    }
}


function onClickProdottiSxDx(event){
let k_classePadre=event.currentTarget;
    while(k_classePadre.className!=="cl_xSezione")
    {
       k_classePadre= k_classePadre.parentNode;

    }
    let l_prodotti=k_classePadre.querySelectorAll(".cl_blocchi .cl_prodotto").length;

    let k_categoria=k_classePadre.querySelector(".cl_titoloBlocco").textContent;

    
   
     k_classePadre.dataset.n_blocchi=(parseInt( k_classePadre.dataset.n_blocchi)+parseInt(event.currentTarget.dataset.sx_dx));
    
     if(k_classePadre.dataset.n_blocchi<0){
    k_classePadre.dataset.n_blocchi=0;
    }

   
    fetch(link_apiDummy+'category/'+k_categoria+"?limit="+l_prodotti+"&skip="+(l_prodotti*k_classePadre.dataset.n_blocchi))
    .then(onResponse)
    .then(json=> {
        // Chiamata della funzione di callback con parametri aggiuntivi
        onJsonProdottiCategoria(json, k_classePadre);
      });

    // k_classePadre.dataset.n_blocchi=0;

}


// -------------

function onJsonProdottiCategoria_cerca(json,d_sezione){

    l_categorie=json.length;

    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const ds_prodotto=d_blocco.querySelectorAll(".cl_prodotto");

    const ds= document.querySelectorAll("#id_blocco2 .cl_xSezione");


//  modifica il json per filtrare prodotti non inerenti al sito , nel cerca
    if(x_home_cerca==2)
    {   
       json= filtroJson(json);
    }


    let c=0;

    for(let d_prodotto of ds_prodotto)
    { 
        let x=(ds.length-1)*ds_prodotto.length+c;

        
        
      
        if(x<json["products"].length)
        {
            d_prodotto.style.visibility="visible";
            d_prodotto.dataset.id=json["products"][x]["id"];
         d_prodotto.querySelector("img").src=json["products"][x]["thumbnail"];
         d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["products"][x]["title"];
         d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent=json["products"][x]["price"]+"$";
         d_prodotto.querySelector(".cl_h").value=json["products"][x]["id"];
        
         verificaInDb_prodottoInListaCarrello(d_prodotto,json["products"][x]);
            

        }
        else if(x>=json["products"].length)
         {
            d_prodotto.style.visibility="hidden";
            d_prodotto.querySelector("img").src="";
            d_prodotto.querySelector(".cl_titoloProdotto").textContent="";
            d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent="";

         }
         c++;
    }
}


function onJsonProdottiCategoria(json,d_sezione){

    //  cerca
    if(x_home_cerca==2)
    {
        json=filtroJson(json);
    }
   
    n_elementiCategoria=json["products"].length;

    console.log(json);

    const d_blocco=d_sezione.querySelector(".cl_blocchi");
    const ds_prodotto=d_blocco.querySelectorAll(".cl_prodotto");




    let c=0;
    for(let d_prodotto of ds_prodotto)
    { 
        d_prodotto.style.visibility="hidden";
        if(c<json["products"].length)
        {
            d_prodotto.style.visibility="visible";
            d_prodotto.dataset.id=json["products"][c]["id"];
            d_prodotto.querySelector("img").src=json["products"][c]["thumbnail"];
            d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["products"][c]["title"];
            d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent=json["products"][c]["price"]+"$";
            d_prodotto.querySelector(".cl_h").value=json["products"][c]["id"];


            verificaInDb_prodottoInListaCarrello(d_prodotto,json["products"][c]);
            
        }
        else if(c>=json["products"].length)
         {
            d_prodotto.style.visibility="hidden";
            d_prodotto.querySelector("img").src="";
            d_prodotto.querySelector(".cl_titoloProdotto").textContent="";
            d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent="";

            d_sezione.dataset.n_blocchi=0;
         }
         c++;
    }
}

function getSezioniApi(j_categorie,x_minGetSezione){
    
    const d=document.querySelector("#id_bloccoHome");
    const d_xSezione=d.querySelectorAll(".cl_xSezione");

   let c_sezione=0;
   let x=0;
    for(let d_sezione of d_xSezione)
    {
        if(c_sezione>x_minGetSezione || x_minGetSezione==0)  // per generare solo l'ultimo , e non tutti ogni volta
        {
        console.log( j_categorie[c_sezione]);
        d_sezione.querySelector(".cl_titoloBlocco").textContent=j_categorie[c_sezione];
        
            fetch(link_apiDummy+'category/'+j_categorie[c_sezione])
            .then(onResponse)
            .then(json=> {
                // Chiamata della funzione di callback con parametri aggiuntivi
                onJsonProdottiCategoria(json, d_sezione);
          });
        }

        c_sezione++;
    }
    // getCategorieApiTitolo(d_xSezione,i,x);

}


function onClickCategorieSxDx(event){

    const n_sxDx=parseInt(event.target.dataset.n);
n_viewCategorie+=n_sxDx;

fetch(link_apiDummy+'categories')
.then(res => res.json())
.then(onJsonCategorie);

}

function getCategorieApi(f_list_categorie,skip){
    let d=document.querySelectorAll("#id_categoria .cl_bnCategorie");

    let c=0;
    let x=0;

    if(skip<0)
    {
        skip=0;
        n_viewCategorie=0;
    }
  

    for (let i of f_list_categorie)
    {
        if(x>=skip*d.length)
        {
            d[c].style.visibility="visible";
            d[c].textContent=i;
        c++;
        }
    if(c>=d.length)
    break;

    x++;
    }
    while(c<d.length)
    {
        n_viewCategorie=-1;
        d[c].style.visibility="hidden";
        d[c].textContent="";
        c++;
    }
}

function onJsonCategorie(json,x_minGetSezione){

    let j=Array(); // filtra i prodotti
    for(let i of json)
    {
        for( let i_s of lista_valoriPermessiNelleCategorie)
        {
        if(i.indexOf(i_s)!=-1 )
             {
                let b=true;
                for(let i2 of lista_valoriNonPermessiCategorie)
                {
                    if(i.indexOf(i2)!=-1)
                    {
                        b=false;
                        break; 
                    }
                }
                if(b)
                j.push(i);

                break;
            }
        }


    }


    l_categorie=j.length;  // usato per non caricare altri blocchi , con bn carica

    getCategorieApi(j,n_viewCategorie);

    if(x_home_cerca==0)
    getSezioniApi(j,x_minGetSezione);
}

function onClick_categoria(event){

    const d=document.querySelector("#id_bloccoHome");
    const d2=document.querySelector("#id_blocco2");
    d.style.display="none";
    d2.style.display="block";

    x_home_cerca=1;
    document.querySelector(".cl_carica").style.display="block";
    
    const d_titolo=document.querySelector("#id_cerca_categoria");
    d_titolo.textContent=event.currentTarget.textContent;

    s_categoria_cerca=event.currentTarget.textContent;


    const d_sezione=document.querySelector("#id_blocco2 .cl_xSezione");

    let c=0;
    for(let i of document.querySelectorAll("#id_blocco2 .cl_xSezione"))
    {

        if(c>=1)
        i.remove();

        c++;
    }

 
    fetch(link_apiDummy+'category/'+event.currentTarget.textContent)
    .then(onResponse)
    .then(json=> {
        // Chiamata della funzione di callback con parametri aggiuntivi
        onJsonProdottiCategoria(json, d_sezione);
      });
   



}
function onClick_cerca(event){

    if(document.querySelector("#id_barra").value!="")
    {
    const d=document.querySelector("#id_bloccoHome");
    const d2=document.querySelector("#id_blocco2");
    d.style.display="none";
    d2.style.display="block";

    x_home_cerca=2;
    document.querySelector(".cl_carica").style.display="block";
    
    const d_titolo=document.querySelector("#id_cerca_categoria");
    d_titolo.textContent= document.querySelector("#id_barra").value;

    s_categoria_cerca=document.querySelector("#id_barra").value;


    const d_sezione=document.querySelector("#id_blocco2 .cl_xSezione");

    let c=0;
    for(let i of document.querySelectorAll("#id_blocco2 .cl_xSezione"))
    {

        if(c>=1)
        i.remove();

        c++;
    }

    let s=encodeURIComponent(document.querySelector("#id_barra").value);

    fetch(link_apiDummy+'search?q='+s)
    .then(onResponse)
    .then(json=> {
        onJsonProdottiCategoria(json, d_sezione);
      });
   
     if(event!=null)
        event.preventDefault();

    }

}

function onClick_titolo(event)
{
    document.querySelector("#id_bloccoHome").style.display="block";
    document.querySelector("#id_blocco2").style.display="none";
    
    x_home_cerca=0;

    fetch(link_apiDummy+'categories')
.then(res => res.json())
.then(json=>{onJsonCategorie(json,0);}); // json, x_minGetSezione il min valore in cui partire per creare le sessione



}





function onResponse(response){
    return response.json();
}






// ++++++++++++++++++++ MAIN





// bn categorie(°/cerca)  
const d=document.querySelectorAll("#id_categoria .cl_bnCategorie");
for (let item of d)
item.addEventListener("click",onClick_categoria);

d_cerca=document.querySelector("#id_formBarra");
d_cerca.addEventListener("submit",onClick_cerca);



// carina i nomi delle categorie di dummy

fetch(link_apiDummy+'categories')
.then(res => res.json())
.then(json=>{onJsonCategorie(json,0);}); // json, x_minGetSezione il min valore in cui partire per creare le sessione



// categorie , sx e dx
const d_bnsCategorie=document.querySelectorAll("#id_categoria .cl_bnSxDx");

for (let i of d_bnsCategorie)
i.addEventListener("click",onClickCategorieSxDx);


// bn sx e dx , sezione

const d_bnSezione=document.querySelectorAll("#id_bloccoHome .cl_xSezione .cl_bnSxDx");

for (let i of d_bnSezione)
i.addEventListener("click",onClickProdottiSxDx);

// bn carica

const d_carica=document.querySelector(".cl_carica");
d_carica.addEventListener("click",onClickCarica);
d_carica.addEventListener("click",onClickCarica2);


// carrello/i e lista 

numElementiCarrello();  // numero di elementi di un carrello dell'utente


// bn cuore e carrello , per ogni prodotto

const d_cuore=document.querySelectorAll(".cl_cuore");
for(let i of d_cuore)
i.addEventListener("click",onClickCuore);

const d_carrello=document.querySelectorAll(".cl_carrelloProdotto");
for(let i of d_carrello)
i.addEventListener("click",onClickCarrelloProdotto);

//  cerca chiesto da fuori

if(document.querySelector("#id_hidden_cerca").value!="")
{
    document.querySelector("#id_barra").value=document.querySelector("#id_hidden_cerca").value;

    onClick_cerca(null);
    console.log("get cerca::"+document.querySelector("#id_hidden_cerca").value);
}

//  va nella home
document.querySelector("#id_titolo").addEventListener("click",onClick_titolo);

// tendina
const d_bnTendina=document.querySelector("#id_bnTendina");
d_bnTendina.addEventListener("click",onClickTendina);


// background

document.querySelector("#id_titolo").style.backgroundImage='url('+BASE_URL+"img/sfondo3.jpg"+')';

document.querySelector("#id_titolo h1").style.backgroundImage='url('+BASE_URL+"img/men.png"+')';











