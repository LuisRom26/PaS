document.getElementById('loadImageBtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    var loadingMsg = document.createElement('p');
    loadingMsg.textContent = 'cargando...';
    imageContainer.appendChild(loadingMsg);
  
    var startTime = performance.now();
  
    var image = new Image();
    image.onload = function() {
      var endTime = performance.now();
      var loadTime = (endTime - startTime).toFixed(2);
      setTimeout(function() {
        loadingMsg.textContent = `La imagen se ha cargado en ${loadTime} milisegundos.`;
        imageContainer.appendChild(image);
        image.style.display = 'block';
      }, 1000);
    };
    image.src = 'imagenes/ame.jpg';
});
