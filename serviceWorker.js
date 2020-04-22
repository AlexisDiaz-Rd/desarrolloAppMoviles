function loadLocation () {
	navigator.geolocation.getCurrentPosition(viewMap,ViewError,{timeout:1000});
}

function viewMap (position) {
	
	var lon = position.coords.longitude;	
	var lat = position.coords.latitude;		

	var link = "http://maps.google.com/?ll="+lat+","+lon+"&z=14";
	document.getElementById("long").innerHTML = "Longitud: "+lon;
	document.getElementById("latitud").innerHTML = "Latitud: "+lat;

}


function ViewError (error) {
	alert(error.code);
}	


if('serviceWorker'in navigator){
	navigator.serviceWorker.register("./serviceWorker2.js")
	.then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}