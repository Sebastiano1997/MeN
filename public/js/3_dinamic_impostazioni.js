

// console.log("sto funzionando bastardo");


//  verifica dati inseriti
function onSalvaIndirizzo(event){
   
    console.log("verifica");
 let d=document.querySelector("#id_indirizzo");

    onVerifica_nome(event,"paese",d);
    onVerifica_nome(event,"citta",d);
    onVerifica_nome(event,"indirizzo",d);
   
}

function onSalvaPersonali(event){
   
    console.log("verifica");
 let d=document.querySelector("#id_datiPersonali");

    onVerifica_nome(event,"nome",d);
    onVerifica_nome(event,"cognome",d);
    onVerifica_nome(event,"data",d);
    onVerifica_nome(event,"password",d);
   
}

function onVerifica_nome(event,name,d){
    let s_messaggioErrore="errore: "+name+"! valore assente";


    const d_padre=d.querySelector(".cl_modificaDatiFigli[data-attrdb='"+name+"']");
    const d_figlio=d_padre.querySelector(".cl_barraModifica");
    let d_existErrore=d_padre.querySelector(".cl_errore");

    if( d_figlio.value!=="" && d_figlio.value.replace(/\s/g,"").length==0  )
    {

      console.log("incorretto valore");
        if(null===d_existErrore)
        {
        let dd=document.createElement("div");
        dd.classList.add("cl_errore");
        dd.textContent=s_messaggioErrore;

        d_padre.appendChild(dd);
        }

        event.preventDefault();

       }
    else{
        if(null!==d_existErrore)
        {
           d_existErrore.remove();
        }

    }
   
}

// -----------------

function onClickPrevent(event)
{
    event.preventDefault();
}




// ------------------


function onClickFiglio(event)
{
    event.stopPropagation();
}

function onClickAdd(event){


    const d_figlio=event.currentTarget.querySelector(".cl_figlioModifica");
    const d_bn=event.currentTarget.querySelector(".cl_bnAdd");

    

    if(d_figlio.style.display==="none")
    {
    d_bn.textContent="-";
    d_figlio.style.display="block";
    }
    else{
        d_bn.textContent="+";
    d_figlio.style.display="none";
    }

  
}


function onClickAdd2(event){

    const d_bn=event.currentTarget.querySelector(".cl_bnModifica");
    const d_input=event.currentTarget.querySelector(".cl_barraModifica");


    if(d_input.style.visibility==="hidden")
    {
    d_bn.textContent="-";
    d_input.style.visibility="visible";
    }
    else{
        d_input.value="";
        d_bn.textContent="+";
        d_input.style.visibility="hidden";
    }

  
}











// ++++++++++++++ MAIN


const d=document.querySelectorAll(".cl_modificaDati");

for(let i of d)
{
    i.addEventListener("click",onClickAdd);
    i.querySelector(".cl_figlioModifica").style.display="none";
    i.querySelector(".cl_figlioModifica").addEventListener("click",onClickFiglio);
    
}

const d2=document.querySelectorAll(".cl_modificaDatiFigli");

for(let i of d2)
{
    i.addEventListener("click",onClickAdd2);
    i.querySelector(".cl_barraModifica").style.visibility="hidden";
    i.querySelector(".cl_barraModifica").addEventListener("click",onClickFiglio);
    
}



// prevent i bn


let ds_bn=document.querySelectorAll("#id_datiPersonali button");
for(let i of ds_bn)
i.addEventListener("click",onClickPrevent);

 ds_bn=document.querySelectorAll("#id_indirizzo button");
for(let i of ds_bn)
i.addEventListener("click",onClickPrevent);

//  verifica dati

{
    document.querySelector("#id_datiPersonali").addEventListener("submit",onSalvaPersonali);
    
    document.querySelector("#id_indirizzo").addEventListener("submit",onSalvaIndirizzo);
    
}

//  background

document.querySelector("#id_sfondo").style.backgroundImage="url('"+BASE_URL+"img/sfondo.jpg')";

document.querySelector("#id_sfondo div").style.backgroundImage="url('"+BASE_URL+"img/men.png')";