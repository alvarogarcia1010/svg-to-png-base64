$(document).ready(function(){

  // var miImagen = ""
  canvasToBase64();
  //
  document.getElementById('dl').addEventListener('click', dlCanvas, false);

});

function SVGToBase64()
{

  var svg = new XMLSerializer().serializeToString(document.getElementById('space-svg-image'));
  var image = document.createElement('img');
  var img = new Image();
  img.src = "https://storage.googleapis.com/cifco-bucket/organizations/1/AGRO2019___INT_1P.jpg";

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  canvas.width=570;
  canvas.height=428;

  canvas.setAttribute('id', 'mycanvas')

  var base64 = window.btoa(svg);
  console.log('data:image/svg+xml;base64,' + base64);
  image.setAttribute('src', 'data:image/svg+xml;base64,' + base64);
  image.setAttribute('width', '100%');

  img.onload = function() {
    context.drawImage(img, 0, 0,570, 428);
  }

  image.onload = function() {
    context.drawImage(image, 0, 0);
  }

  document.getElementById('space-selectionable-base64').appendChild(image);
  document.getElementById('space-selectionable-canvas').appendChild(canvas);
}

 function canvasToBase64(){

   var svg = document.querySelector('svg');
   var img = document.querySelector('img');
   var canvas = document.querySelector('canvas');

   img.setAttribute('crossOrigin', 'anonymous');


   var img1 = new Image();
   img1.src = "https://storage.googleapis.com/cifco-bucket/organizations/1/AGRO2019___INT_1P.jpg";

   // get svg data
   var xml = new XMLSerializer().serializeToString(svg);

   // make it base64
   var svg64 = btoa(xml);
   var b64Start = 'data:image/svg+xml;base64,';

   // prepend a "header"
   var image64 = b64Start + svg64;

   // set it as the source of the img element
   img.src = image64;

   img1.onload = function() {
     canvas.getContext('2d').drawImage(img1, 0, 0,570, 428);
   }

   img.onload = function() {
     canvas.getContext('2d').drawImage(img, 0, 0);
   }
}

function dlCanvas() {
  var canvas = document.querySelector('canvas');
  var dt = canvas.toDataURL('image/jpeg', 1.0);
  var img = document.querySelector('img');

  console.log(dt);
  img.setAttribute('src', dt);
  img.setAttribute('width', '100%');
};
