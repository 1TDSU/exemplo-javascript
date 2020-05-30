
//Esse é um comentário de linha
/*
  Comentário de Bloco
  Mais algumas palavras!!!
*/

function minhaPrimeiraFuncao(){
      console.log("Olá Mundo!");
  }

function validaForm(frm) {

  var cp1 = frm.campo1.value;
  var cp2 = parseInt(frm.campo2.value);

  if(cp1 == "" || cp2 == ""){
      alert("Todos os campos devem ser preenchidos!");
  }else {
    return true;
  }

}
