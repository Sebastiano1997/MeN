// console.log("sto funzionando bastardo");

const link_carrelloListaDb=BASE_URL+"carrelloListaDb";

const misure=[
    {
        "category":["fragrances","skincare","sunglasse"],
        "misure": {"length":"25","width":"25","height":"25","distance_unit":"cm", "weight":"0.5","mass_unit":"kg"}
    },
    {
        "category":["home-decoration","furniture"],
        "misure": {"length":"50","width":"50","height":"50","distance_unit":"cm", "weight":"20","mass_unit":"kg"}
    }, 
    {
        "category":["top","women","men","light"],
        "misure": {"length":"25","width":"25","height":"50","distance_unit":"cm", "weight":"1","mass_unit":"kg"}
    }
];



let datiPersonali_utente;
let datiNazioneUtente="";

// if(datiNazioneUtente!="US")
// {    
//     eventoCorrente.querySelector(".cl_spedizione .cl_provider").textContent="versione M&N free non supporta indirizzi non US ";
// }

//  +++++++++++++++ function



//  json indirizzo

function onJsonIndirizzo(json)
{
    console.log(json);
datiPersonali_utente=json;
datiNazioneUtente=json["nazione"];
}

//  spedizione

function onClickSpedizione(event){

console.log("spedizione=="+event.currentTarget.dataset.spedizione);

let d_bnSpedizione=event.currentTarget;
let d_prodotto;
while(d_bnSpedizione.className!="cl_bnSpedizione")
{
    d_bnSpedizione=d_bnSpedizione.parentNode;
}
d_prodotto=d_bnSpedizione;
while(d_prodotto.className!="cl_prodotto")
{
d_prodotto=d_prodotto.parentNode;
}

console.log(d_bnSpedizione.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato);
console.log(event.currentTarget.dataset.spedizione);

if(d_prodotto.querySelector(".cl_check").checked){
prezzoTotale-=parseFloat(d_bnSpedizione.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato);
prezzoTotale+=parseFloat(event.currentTarget.dataset.spedizione);
prezzoTotale=prezzoTotale.toFixed(2);
for(let d of d_prezzoTotale)
         d.textContent="totale "+prezzoTotale+"$";
}

console.log("prezzo tot=="+prezzoTotale);

d_bnSpedizione.querySelector(".cl_nomeSpedizione").textContent=event.currentTarget.dataset.spedizione+"$";
d_bnSpedizione.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato=event.currentTarget.dataset.spedizione;

}

function onJsonRates(json,eventoCorrente)
{
    let rates=json["rates"];

    console.log(json);
    console.log(eventoCorrente.querySelector(".cl_spedizioneTendina").dataset.open);
   
 if(eventoCorrente.querySelector(".cl_spedizioneTendina").dataset.open!=="0")
  { 

    // rimuovi le righe di spedizioni ancora presenti , tranne il primo
    let c=0;
    for(let d of eventoCorrente.querySelectorAll(".cl_spedizione "))
    {
        if(c!=0)
            d.remove();
        c++;
    }

    if(rates.length!=0)
    {
        eventoCorrente.querySelector(".cl_spedizione .cl_provider").textContent="...";
        eventoCorrente.querySelector(".cl_spedizione").style.display="none";
        for(let rate of rates)
        {
        let oj=document.createElement("div");
        oj.classList="cl_spedizione";
        oj.setAttribute("data-spedizione",rate["amount"]); 

        
        let x=eventoCorrente.querySelector(".cl_spedizione");
        oj.innerHTML=x.innerHTML;

        oj.style.display="flex";
        oj.querySelector(".cl_provider").textContent=rate["provider"];
        oj.querySelector(".cl_prezzoSpedizione").textContent=rate["amount"]+"$";
        oj.querySelector(".cl_tempoStimato").textContent=rate["estimated_days"]+"d";

        oj.addEventListener("click",onClickSpedizione);
        eventoCorrente.appendChild(oj);
        
        }
    }
    else
    {
        for(let d_tab of  evento.querySelectorAll(".cl_spedizione *"))
        {
              d_tab.textContent="";
        }
        
        eventoCorrente.querySelector(".cl_spedizione .cl_provider").textContent="indirizzo erroneo/corriere non trovato";

    }
  }
}

function richiestaShippo(api_misure,event)
{
    

    let data = {
        address_to: {
          name: datiPersonali_utente["nome"], //+" "+datiPersonali_utente["cognome"],
          street1: datiPersonali_utente["indirizzo"],
          city: datiPersonali_utente["citta"],
          state: datiPersonali_utente["stato"],
          zip: datiPersonali_utente["zipcode"],
          country: datiPersonali_utente["nazione"]
        },
        parcels: [
          api_misure
        ],
        async: false
      };

      let evento=event.currentTarget;

      const formdata = new FormData();
      // formdata.append("var1", "value1");
      formdata.append("async","false");
      
       let s0="address_to";
       {
          let s="name";
          formdata.append(s0+"_"+s,data[s0][s]);
          s="city";
          formdata.append(s0+"_"+s,data[s0][s]);
          s="country";
          formdata.append(s0+"_"+s,data[s0][s]);
          s="state";
          formdata.append(s0+"_"+s,data[s0][s]);
          s="street1";
          formdata.append(s0+"_"+s,data[s0][s]);
          s="zip";
          formdata.append(s0+"_"+s,data[s0][s]);
      }
      s0="parcels"
      {
          let s="distance_unit";
          formdata.append(s0+"_"+s,data[s0][0][s]);
          s="height";
          formdata.append(s0+"_"+s,data[s0][0][s]);
          s="length";
          formdata.append(s0+"_"+s,data[s0][0][s]);
          s="mass_unit";
          formdata.append(s0+"_"+s,data[s0][0][s]);
          s="weight";
          formdata.append(s0+"_"+s,data[s0][0][s]);
          s="width";
          formdata.append(s0+"_"+s,data[s0][0][s]);
      }
      var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


      formdata.append("_token",csrfToken);

      fetch(BASE_URL+"spedizioneApi", 
      {method: "post",
      body: formdata})
      .then(res=>res.json())
      .then(json => {
        console.log(json);
        onJsonRates(json,evento);
      }).catch(error => {
          // Gestisci eventuali errori qui
          console.log(datiNazioneUtente+"----------");
        
          for(let d_tab of  evento.querySelectorAll(".cl_spedizione *"))
          {
                d_tab.textContent="";
          }

          if(datiNazioneUtente!="US")
              {    
                  evento.querySelector(".cl_spedizione .cl_provider").textContent="versione M&N free non supporta indirizzi non US ";
              }
              else
              {
                evento.querySelector(".cl_spedizione .cl_provider").textContent="indirizzo erroneo/corriere non trovato ";
              }
          // console.error(error);
        });

 
}

function onClickBnSpedizione(event)
{
    console.log("click bn spedizione");
    const d_spedizione=event.currentTarget.querySelector(".cl_spedizioneTendina");

    let d_prodotto=event.currentTarget;
    let api_misure="";

    while(d_prodotto.className!="cl_prodotto")
    {
        d_prodotto=d_prodotto.parentNode;
    }

    let b=false;
    if(d_spedizione.style.display=="none")
    {
        d_spedizione.style.display="flex";
        event.currentTarget.querySelector(".cl_spedizioneTendina").dataset.open="1";
        event.currentTarget.querySelector(".cl_spedizioneTendina .cl_rigaSpedizione").style.display="flex";
        d_spedizione.querySelector(".cl_spedizione").style.display="flex";
        // spedizione

        for(let i of misure)
        {
            for (let i2 of i["category"])
            {
                console.log("i2=="+i2+"   ctagory=="+d_prodotto.dataset.category);
                if(d_prodotto.dataset.category.indexOf(i2)!==-1  )
                {
                    api_misure=i["misure"];
                    // console.log("api_misure==");
                    // console.log(api_misure);
                    
                    richiestaShippo(api_misure,event);
                    
                    b=true;
                    break;
                }
                // console.log(i2);
            }
            if(b)
            break;
        }

    }
    else
    {
        let c=0;
        event.currentTarget.querySelector(".cl_spedizioneTendina").dataset.open="0";
        const spedizioni= event.currentTarget.querySelectorAll(".cl_spedizione");
        for(let i of spedizioni)
        {
            if(c!=0)
            i.remove();

            c++;
        }
        d_spedizione.style.display="none";
    }
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

    

    console.log(d_prodotto.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato);
    if(event.currentTarget.checked)
    {
      d_blocchi.style.backgroundColor="rgba(0, 0, 0, 0.429)";

     
      prezzoTotale=parseFloat(prezzoTotale)+parseFloat(d_prodotto.dataset.prezzo);
      prezzoTotale=parseFloat(prezzoTotale)+parseFloat(d_prodotto.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato);
     prezzoTotale=prezzoTotale.toFixed(2);
   
      for(let d of d_prezzoTotale)
         d.textContent="totale "+prezzoTotale+"$";
        
    }
    else
    {
        d_blocchi.style.backgroundColor="rgba(94, 85, 85, 0.429)";

        prezzoTotale-=parseFloat(d_prodotto.dataset.prezzo);
        prezzoTotale-=parseFloat(d_prodotto.querySelector(".cl_nomeSpedizione").dataset.spedizioneselezionato);
        prezzoTotale=prezzoTotale.toFixed(2);

        for(let d of d_prezzoTotale)
        d.textContent="totale "+prezzoTotale+"$";
        
    }
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
         d_prodotto.dataset.category=json["category"];
         d_prodotto.querySelector(".cl_h").value=json["id"];
         d_prodotto.querySelector("img").src=json["images"][0];
         d_prodotto.querySelector(".cl_titoloProdotto").textContent=json["title"];
         d_prodotto.querySelector(".cl_operazioniProdotto .cl_prezzo").textContent=json["price"]+"$";
   

         for(let d of d_prezzoTotale)
         d.textContent="totale "+prezzoTotale+"$";



}

function onArrayIdCarrelloProdotto(ids)
{
    console.log("ids=="+ids);

    for(let id of ids)
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
            i.dataset.spedizione="0";
            i.dataset.category="";
            i.querySelector(".cl_check").checked=true;
            i.querySelector("img").src="";
            i.querySelector(".cl_titoloProdotto").textContent="";
            i.querySelector(".cl_prezzo").textContent="";

            i.querySelector(".cl_check").addEventListener("click",onCheck)
            i.querySelector(".cl_bnSpedizione").addEventListener("click",onClickBnSpedizione);
    
        d_bloccoCentrale.appendChild(oj);

        // console.log('https://dummyjson.com/products/'+id);

        fetch('https://dummyjson.com/products/'+id)
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
    console.log("n carrello=="+text);
    let d=document.querySelector(".cl_carrelloNum");
    if(parseFloat(text))
    {
        nElementiCarrello=text;
        d.textContent=text;  
    }  
    
}





// ++++++++++++ MAIN

let nElementiCarrello=0;
let prezzoTotale=0;
const d_prezzoTotale=document.querySelectorAll(".cl_soldiTotali");

// indirizzo utente
let k_get="indirizzo";
    fetch(link_carrelloListaDb+'?get='+k_get)
    .then(res => res.json())
    .then(onJsonIndirizzo);

// tendina
const d_bnTendina=document.querySelector("#id_bnTendina");
d_bnTendina.addEventListener("click",onClickTendina);

// cerca id prodotti 

const d_hidden=document.querySelector(".cl_hidden");
let ids=d_hidden.value.split(',');
onArrayIdCarrelloProdotto(ids);




// num carrello

numElementiCarrello();  // numero di elementi di un carrello dell'utente


// 
