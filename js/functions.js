function updateAge(){
    var toDay= new Date();
    var fechaNacimiento="1994-07-23";
    var fechaNacimientoFormato= new Date(fechaNacimiento);

    var difYear=toDay.getFullYear()-fechaNacimientoFormato.getFullYear();
    var difMonth=(toDay.getMonth()+1)-(fechaNacimientoFormato.getMonth()+1);
    var difDay=(toDay.getDay()-1)-(fechaNacimientoFormato.getDay()-1);

    if(difMonth<0 || (difMonth===0 && toDay.getDate() < fechaNacimientoFormato.getDate())){

        difYear--;
    }

    edadActual=difYear;

    document.getElementById("idAge").innerHTML=edadActual
    
    return edadActual;
   
}

function showTime(){
    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    $("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds +" Hora Colombia");
    setTimeout("showTime()", 1000);
    
    }

    setTimeout("showTime()", 1000);