window.addEventListener("scroll", () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const nav = document.querySelector("nav");
    if (window.pageYOffset > headerHeight) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.position = "relative";
    }
});

// FUNCION PARA CARGAR CONTENIDO DE DOCUMENTOS A NUESTRO INDEX
function cargarContenido(selectId) {
  var select = document.getElementById(selectId);
  var selectedOption = select.options[select.selectedIndex];
  var pagina = selectedOption.value;

  // Utiliza AJAX para cargar el contenido de la página seleccionada
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('content-information').innerHTML = this.responseText;
      // Almacena la selección en el almacenamiento local
      localStorage.setItem('seleccion', pagina);
    }
  };
  xhttp.open("GET", pagina, true);
  xhttp.send();
}

// Recuperar la selección anterior del almacenamiento local
var seleccionAnterior = localStorage.getItem('seleccion');
if (seleccionAnterior) {
  // Establecer la selección previamente almacenada
  var selectMetodo = document.getElementById("metodo-select");
  var selectTeorema = document.getElementById("teorema-select");
  for (var i = 0; i < selectMetodo.options.length; i++) {
    if (selectMetodo.options[i].value === seleccionAnterior) {
      selectMetodo.selectedIndex = i;
      cargarContenido("metodo-select"); // Cargar el contenido según la selección anterior
      break;
    }
  }
  for (var i = 0; i < selectTeorema.options.length; i++) {
    if (selectTeorema.options[i].value === seleccionAnterior) {
      selectTeorema.selectedIndex = i;
      cargarContenido("teorema-select"); // Cargar el contenido según la selección anterior
      break;
    }
  }
}