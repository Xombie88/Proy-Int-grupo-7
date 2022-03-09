window.onscroll = function(){

   var posicion =window.pageYOffset || document.documentElement.
   scrollTop;

   var documento1 = document.getElementById("icon_heart");
   var documento2 = document.getElementById("icon_fire");

   Elementmento1.style.bottom = posicion * 0.1 + "px";
   Elementmento2.style.top = posicion * 0.2 + "px";
}
