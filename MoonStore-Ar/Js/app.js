// MoonStore AR
// Funcionamiento principal


let config = JSON.parse(
localStorage.getItem("moonConfig")
) || moonConfig;



let planActual = null;
let descuentoAplicado = 0;
let codigoUsado = "";




// Cargar página

window.onload = function(){


    cargarDatos();


    cargarPlanes();


    mostrarBienvenida();


};





// Datos generales

function cargarDatos(){


document.getElementById("siteName").innerHTML =
config.nombre;


document.getElementById("heroTitle").innerHTML =
config.hero.titulo;


document.getElementById("heroSubtitle").innerHTML =
config.hero.subtitulo;


document.getElementById("copyright").innerHTML =
config.footer;



}







// Mostrar planes

function cargarPlanes(){


let contenedor =
document.getElementById("plansContainer");


contenedor.innerHTML="";



config.planes.forEach((plan,index)=>{


let precio =
convertirARS(plan.opciones[0].usd);



let tarjeta=document.createElement("div");


tarjeta.className="card";



tarjeta.innerHTML=`

<h3>${plan.nombre}</h3>

<h4>${plan.tokens}</h4>


<p>${plan.descripcion}</p>


<p>
Desde:
<strong>
${precio}
</strong>
</p>


<button onclick="abrirPlan(${index})">
Consultar
</button>

`;



contenedor.appendChild(tarjeta);



});



}







// Abrir pantalla del plan

function abrirPlan(index){


planActual =
config.planes[index];


document.getElementById("planScreen")
.style.display="block";



document.getElementById("planName")
.innerHTML =
planActual.nombre;



document.getElementById("planDescription")
.innerHTML =
planActual.descripcion;



mostrarDias();



}








// Mostrar días

function mostrarDias(){


let contenedor =
document.getElementById("daysContainer");


contenedor.innerHTML="";



planActual.opciones.forEach(opcion=>{


let precio =
convertirARS(opcion.usd);



let div =
document.createElement("div");



div.className="day-option";



div.innerHTML=`

<span>
${opcion.dias} días
</span>


<span>
${precio}
</span>

`;



div.onclick=function(){


comprarWhatsApp(
opcion.dias,
precio
);


};



contenedor.appendChild(div);



});



}








// Cerrar plan

function closePlan(){


document.getElementById("planScreen")
.style.display="none";


}








// Convertir USD a ARS

function convertirARS(valor){


let resultado =
valor * config.dolarARS;



return "$" +
resultado.toLocaleString("es-AR")
+
" ARS";


}








// Descuento

function applyDiscount(){


let codigo =
document.getElementById("discountCode")
.value
.toUpperCase();



let encontrado =
config.descuentos.find(

d =>

d.codigo===codigo
&&
d.activo

);



if(encontrado){


codigoUsado=codigo;


alert(
"Descuento aplicado"
);


}else{


alert(
"Código inválido"
);


}



}









// WhatsApp

function comprarWhatsApp(
dias,
precio
){



let contacto =
document.getElementById(
"whatsappSelect"
)
.value;



let mensaje =

`Hola, quiero comprar:

Plan: ${planActual.nombre}

Duración: ${dias} días

Precio: ${precio}

${codigoUsado ?
"Código: "+codigoUsado :
""}`;



let url =

"https://wa.me/"
+
contacto
+
"?text="
+
encodeURIComponent(mensaje);



window.open(url,"_blank");



}









// Bienvenida

function mostrarBienvenida(){


if(
config.bienvenida.activa
&&
!sessionStorage.getItem("bienvenida")
){


document.getElementById(
"welcomeModal"
)
.style.display="flex";


sessionStorage.setItem(
"bienvenida",
"true"
);


}


}






function closeWelcome(){


document.getElementById(
"welcomeModal"
)
.style.display="none";


}







// Abrir panel Owner

function ownerLogin(){


let pass =
prompt(
"Contraseña Owner:"
);



if(pass===config.ownerPassword){


window.location.href=
"owner/panel.html";


}else{


alert(
"Contraseña incorrecta"
);


}


}
