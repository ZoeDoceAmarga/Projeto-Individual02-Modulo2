
var mensagem=document.getElementById("msg")
var resultado=document.getElementById("resultado")
var base64=document.getElementById("Option1")
var cesar=document.getElementById("Option2")
var chave=document.getElementById("incremento")


//fazer o incremento aparecer e desaparecer o incremento de cesar
var selecaoCod=document.addEventListener("click",function(){
    var radios=document.getElementsByName("opcao")
    for(var i=0;i<radios.length;i++ ){
        if(radios[i].checked){
            incremento.style.display="block"
        }else{
            incremento.style.display="none"
        }
    }
})
//fim do incremento

//criação do botão
var btn=document.createElement('button');
// btn.innerHTML="Resultado"//adicionando o texto ao botão
btn.classList="botao"
var areaButton=document.getElementById('area_button')
areaButton.appendChild(btn) //adicionando o botão na div
;

//fim

var radio=document.querySelectorAll('.inputRadio');
var botao=document.querySelector('.botao')
// var mensagem =document.getElementById('msg')
// var resultado=document.getElementById('area_resultado')



  //botao codificar/decodificar
  radio[0].addEventListener("click", function () {
    if (radio[0].checked) {
      botao.style.display = 'block';
      botao.innerText = 'Codificar';
    }
  });
  
  radio[1].addEventListener("click", function () {
    if (radio[1].checked) {
      botao.style.display = 'block';
      botao.innerText = 'Decodificar';
    }
  });

  //fim



function codificarCesar(msg,chave){
    return msg
    .map((str)=>{
        var entrada=str.charCodeAt();
        if(entrada>=65 && entrada<=90){
            return String.fromCharCode(((entrada-65+chave)%26)+65);
        }else if(entrada >=97 && entrada <=122){
            return String.fromCharCode(((entrada-97+chave)%26)+97);
        }else{
            return str;
        }
    })
    .join("");
}

function decodificarCesar(msg, chave) {
    return msg
    .map((str) => {
        var entrada = str.charCodeAt();
        if (entrada >= 65 && entrada <= 90) {
            if (entrada - 65 - chave < 0) {
                return String.fromCharCode(((entrada - 65 - chave + 26) % 26) + 65);
            } else {
                return String.fromCharCode(((entrada - 65 - chave) % 26) + 65);
            }
        } 
        else if (entrada >= 97 && entrada <= 122) {
            if (entrada - 97 - chave < 0) {
                return String.fromCharCode(((entrada - 97 - chave + 26) % 26) + 97);
            } else {
                return String.fromCharCode(((entrada - 97 - chave) % 26) + 97);
            }
        } 
        else {
            return str;
        }
    })
    .join(" ");
}





botao.addEventListener("click",function(e){
    e.preventDefault();
    if(radio[0].checked && cesar.checked){
    // area_resultado.style.display="block"
    var valormsg=mensagem.split("");
    var valorChave=parseInt(chave.value);
    resultado.value=codificarCesar(valormsg,valorChave);//chamando a função codificarCesar
    }
    else if(cesar.checked && radio[1].checked){
        var valormsg=mensagem.split("");
        var valorChave=parseInt(chave.value);
        resultado.value=decodificadorCesar(valormsg,valorChave)//chamando a função decodificarCesar
    }

    //base64
    else if(base64.checked && radio[0].checked){
        var valormsg=mensagem.value;
        resultado.value=btoa(valormsg)

    }
    
    else{
        var valormsg=mensagem.value;
        resultado.value=atob(valormsg);
        
    }
    
});

///como deixar a area de texto  do resultado limpa depois que selecionar o campo da area da mensagem 