




function onReg(event){
    console.log(form_reg.nome.value);
    onVerifica_nome(event,"nome");
    onVerifica_nome(event,"cognome");
    onVerifica_nome(event,"country");
    onVerifica_nome(event,"state");
    onVerifica_nome(event,"city");
    onVerifica_nome(event,"indirizzo");
    onVerifica_nome(event,"zipcode");
    onVerifica_nome(event,"birth-date");
    onVerifica_genere(event,"genere");
    onVerifica_nome(event,"username");
    onVerifica_nome(event,"password");
    onVerifica_checkbox(event,"condizioniPrivacy");

    
   
}
function onVerifica_checkbox(event,name){
    let s_messaggioErrore="errore: "+name+"!segnare condizioni sulla privacy";
    let d_padre=form_reg.querySelector("input[name='"+name+"']").parentNode;
    let d_existErrore=d_padre.querySelector(".cl_errore");

    if(!form_reg.condizioniPrivacy.checked)
    {

      
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

function onVerifica_genere(event,name){
    let s_messaggioErrore="errore: "+name+"!valore assente";
    // form_reg.genere.value;
    let d_padre=form_reg.querySelector("input[name='"+name+"']").parentNode;
    let d_existErrore=d_padre.querySelector(".cl_errore");

    if(form_reg.genere.value==="")
    {

      
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

function onVerifica_nome(event,name){
    let s_messaggioErrore="errore: "+name+"! valore assente";

    let d_figlio=form_reg.querySelector("input[name='"+name+"']");
    let d_padre=d_figlio.parentNode;
    let d_existErrore=d_padre.querySelector(".cl_errore");

    if(d_figlio.value==="")
    {

      
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







function bn_regLog(event){


    const d_login=document.querySelector("#id_login");
    const d_reg=document.querySelector("#id_reg");


if(stato===0)
{
    stato=1;

    d_login.style.display="block";
    d_reg.style.display="none";
}
else if(stato===1){

    stato=0;

    d_login.style.display="none";
    d_reg.style.display="block";
}

}





// +++++++++ MAIN
//  , reg <--> log

let stato=parseInt(document.querySelector("#id_h").value);

{
const q=document.querySelectorAll(".cl_linkRegLog");
for(let i of q)
i.addEventListener("click",bn_regLog);


const d_login=document.querySelector("#id_login");
const d_reg=document.querySelector("#id_reg");

if(stato===0)
{
    d_login.style.display="none";
    d_reg.style.display="block";

}
else if(stato===1){
    d_login.style.display="block";
    d_reg.style.display="none";

}

}
{
    document.querySelector("#id_form_reg").addEventListener("submit",onReg);
    
}


// background

document.querySelector("#id_sfondo").style.backgroundImage='url('+BASE_URL+"img/sfondo1.jpg"+')';

document.querySelector("#id_sfondo h1").style.backgroundImage='url('+BASE_URL+"img/men.png"+')';

// 


console.log(" reg-log");


