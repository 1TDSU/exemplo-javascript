var oper;
var valor1;
var valor2;

function tecla(nmBtn) {
  var visor = document.getElementById('idVisor');
    visor.value = visor.value+""+nmBtn.value;
}

function operacao(nmBtn) {
    var visor = document.getElementById('idVisor');

    if(nmBtn.value == "+" && visor.value.indexOf("+") == (-1)){
      valor1 = parseInt(visor.value);
      visor.value = visor.value+"+";
    }
}

function resultado(nmBtn){
    var visor = document.getElementById('idVisor');

  if(visor.value.indexOf("+") > (-1)){
    valor2 = parseInt(visor.value.substring(visor.value.indexOf("+"),visor.value.length));
    visor.value = valor1 + valor2;
  }
}
