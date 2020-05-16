
//Esse é um comentário de linha
/*
  Comentário de Bloco
  Mais algumas palavras!!!
*/

banner2();

function banner1(){
  document.getElementById('lateral1').src = "./img/banner-1.gif";
  document.getElementById('img-1').href = "http://pudim.com.br";
  document.getElementById('lateral2').src = "./img/banner-3.gif";
  document.getElementById('img-2').href = "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6";

  setTimeout("banner2()", 4000);
}
function banner2(){
  document.getElementById('lateral1').src = "./img/banner-2.gif";
  document.getElementById('img-1').href = "https://fontawesome.com/";
  document.getElementById('lateral2').src = "./img/banner-3.gif";
  document.getElementById('img-2').href = "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/05/Alpes.jpg";

  setTimeout("banner3()", 4000);
}
function banner3(){
  document.getElementById('lateral1').src = "./img/banner-3.gif";
  document.getElementById('img-1').href = "https://unsplash.com/t/business-work";
  document.getElementById('lateral2').src = "./img/banner-1.gif";
  document.getElementById('img-2').href = "https://www.hackthebox.eu/";

  setTimeout("banner1()", 4000);
}
