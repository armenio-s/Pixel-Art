var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el color personalizado.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    $("#indicador-de-color").css("background-color", colorActual)
  })
);

// Función que crea la paleta de colores.
var crearPaleta = function() {
  $( "#paleta" ).empty();
  for (var i = 0; i < nombreColores.length; i++) {
    var unDiv =$('<div class="paleta-colores"/>');
      unDiv.css("background-color", nombreColores[i]);
      unDiv.click( nombreColores[i], (function(event) {
          $("#indicador-de-color").css("background-color", event.data)
        })
      );
    unDiv.appendTo('#paleta');
  }
}

// Variable con valor booleano para detectar si el mouse está presionado o no.
var mousePresionado = false;

// Función para crear la Grilla.
var crearGrilla = function() {
  $( "#grilla-pixeles" ).empty();
  for (var i = 0; i < 1750; i++) {
    var unDiv = $('<div class="paleta-colores"/>');
      unDiv.click((function(event) {
        $( event.delegateTarget ).css("background-color",  $("#indicador-de-color").css("background-color"));
      })
      );
      unDiv.mousedown((function(){
        mousePresionado = true;
      }));
      unDiv.mouseup((function(){
        mousePresionado = false;
      }));
      unDiv.css("background-color", "white");
      unDiv.mouseover((function(event){
        if (mousePresionado) {
          $( event.delegateTarget ).css("background-color",  $("#indicador-de-color").css("background-color"));
        }
      }));
    unDiv.appendTo('#grilla-pixeles');
  }
}

// Función para borrar todo.
$( "#borrar" ).click(function() {
  var pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < pixeles.length; i++) {
    $(pixeles[i]).animate({
      "background-color": "white"
    }, 1000, function(event) {
    });
  }
});

// Función para borrar utilizando la herramienta borrador.
var borrar = function() {
  $("#borrador").click(function(){
    $("#indicador-de-color").css("background-color", "white");
    $(".cursor-personalizado").css("cursor", "url(img/rubber.png), auto");
  });
}

// Volver al cursor lápiz cuando se seleccione el indicador de color o un color de la paleta.
$("#indicador-de-color, #paleta").click(function(){
  $(".cursor-personalizado").css("cursor", "url(img/pencil.png), auto");
});

//Función para pintar toda la grilla.
$( "#lata" ).click(function() {
  var pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < pixeles.length; i++) {
    $(pixeles[i]).css({
      "background-color":  $("#indicador-de-color").css("background-color")
    });
  }
});

//Funciones para cargar los superhéroes en la grilla.
$( "#batman" ).click(function() {
  cargarSuperheroe(batman)
});

$( "#wonder" ).click(function() {
  cargarSuperheroe(wonder)
});

$( "#flash" ).click(function() {
  cargarSuperheroe(flash)
});

$( "#invisible" ).click(function() {
  cargarSuperheroe(invisible)
});

$( "#guardar" ).click(function() {
  guardarPixelArt();
});


//Ejecución de las funciones.
crearPaleta();
crearGrilla();
borrar();
pintarTodo();

  
