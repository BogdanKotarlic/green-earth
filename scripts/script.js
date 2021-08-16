function changeSlide(direction) {
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    var previousImg = currentImg.prev();
  
  
    if (direction == 'next') {
      if (nextImg.length)
        nextImg.addClass('active');
      else
        $('.slider img').first().addClass('active');
    } else {
      if (previousImg.length)
        previousImg.addClass('active');
      else
        $('.slider img').last().addClass('active');
    }
    currentImg.removeClass('active');
}

var tabButtons = document.querySelectorAll(".buttonContainer button")
var tabPanels = document.querySelectorAll(".tabContainer .tab")

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.borderTop = "none";
    node.style.color = "";
    node.style.fontWeight = "normal"
  });
  tabButtons[panelIndex].style.backgroundColor = "#ffffff";
  tabButtons[panelIndex].style.color = "#002f9d";
  tabButtons[panelIndex].style.borderTop = "5px solid #38bdff";
  tabButtons[panelIndex].style.fontWeight = "bold"

  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });

  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = "colorCode";

}
showPanel(0);