$(document).ready(function(){
  SVGToBase64();
});

function SVGToBase64()
{
  var svg = new XMLSerializer().serializeToString(document.getElementById('space-svg-image'));
  var base64 = window.btoa(svg);
  console.log('data:image/svg+xml;base64,' + base64);
  var image = document.createElement('img');
  image.setAttribute('src', 'data:image/svg+xml;base64,' + base64);
  image.setAttribute('width', '100%');
  document.getElementById('space-selectionable-base64').appendChild(image);

}
