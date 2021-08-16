const changeSlide = direction => {
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

const showPanel = (panelIndex) => {
  var tabButtons = document.querySelectorAll(".buttonContainer button")
  var tabs = document.querySelectorAll(".tabContainer .tab")

  tabButtons.forEach(e = node => {
    node.style.backgroundColor = "";
    node.style.borderTop = "none";
    node.style.color = "";
    node.style.fontWeight = "normal"
  });

  tabButtons[panelIndex].style.backgroundColor = "#ffffff";
  tabButtons[panelIndex].style.color = "#002f9d";
  tabButtons[panelIndex].style.borderTop = "5px solid #38bdff";
  tabButtons[panelIndex].style.fontWeight = "bold"

  tabs.forEach(e = node => {
    node.style.display = "none";
  });

  tabs[panelIndex].style.display = "block";
}

showPanel(0);