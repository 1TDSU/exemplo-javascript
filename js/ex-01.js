
//Esse é um comentário de linha
/*
  Comentário de Bloco
  Mais algumas palavras!!!
*/

banner2();

function banner1(){
  document.getElementById('lateral1').src = "./img/banner-1.gif";
  document.getElementById('img-1').href = "http://pudim.com.br";
  setTimeout("banner2()", 4000);
}
function banner2(){
  document.getElementById('lateral1').src = "./img/banner-2.gif";
  document.getElementById('img-1').href = "https://fontawesome.com/";
  setTimeout("banner3()", 3000);
}
function banner3(){
  document.getElementById('lateral1').src = "./img/banner-3.gif";
  document.getElementById('img-1').href = "https://unsplash.com/t/business-work";
  setTimeout("banner1()", 3000);
}
