function shuffle() {
    var container = document.getElementById("container");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('playlist-row'));
      elementsArray.forEach(function(element){
        container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }
  
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

let inputsong;

function addnew() {

    var containersong = document.getElementById("container");
    var sectionsong = document.getElementById("addnewsong");
    containersong.appendChild(sectionsong.cloneNode(true));

    inputsong = document.getElementById("inputsong").value;
    document.getElementById("song").textContent = inputsong;
    console.log(inputsong)
  }



