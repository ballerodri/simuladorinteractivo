var reservados = [];
var months = [];
var days = [];


function generaReservas(dias){
    while(reservados.length < 8){
        var r = Math.floor(Math.random() * dias) + 1;
        if(reservados.indexOf(r) === -1) reservados.push(r);
    }
    reservados.sort(function(a, b) {
        return a - b;
    });
    return reservados;
}


function meses(){
    months = Array.from({length: 12}, (item, i) => {
    return new Date(0, i).toLocaleString('en-US', {month: 'long'})
  });
  return months;
}

function diasMes (month, year) {
    days = new Date(year, month, 0).getDate();
    return days;
}

alert("Indique el mes en que desea realizar la reserva:\n 1: Enero\n 2: Febrero\n 3: Marzo\n 4: Abril\n 5: Mayo\n 6: Junio\n 7: Julio\n 8: Agosto\n 9: Septiembre\n 10: Octubre\n 11: Noviembre\n 12: Diciembre\n" );
mes = +prompt("Ingrese el mes");
if (Number.isInteger(mes)){
    if (mes >=1 && mes <=12){
        diasMes (mes,2022);
        generaReservas(days);
        alert("Dias reservados "+reservados);
        diaReserva = +prompt("Ingrese el dia que quiere reservar");
            if ((Number.isInteger(diaReserva))&&(diaReserva <=days)){
                if (reservados.includes(diaReserva)){
                    alert("Dia no disponible, por favor reserve otro dia.")
                }else{
                    alert("Gracias por su reserva.")
                }                            
            }else{
                alert("Dia invalido"); 
            }
    }else {
        alert("Mes invalido");
    }
    
}else{
    alert("Debe Ingresar un numero.");
}





