const changeSlide=e=>{const t=$(".active"),l=t.next(),o=t.prev();"next"==e?l.length?l.addClass("active"):$(".slider img").first().addClass("active"):o.length?o.addClass("active"):$(".slider img").last().addClass("active"),t.removeClass("active")},showPanel=t=>{const l=document.querySelectorAll(".buttonContainer button"),o=document.querySelectorAll(".tabContainer .tab");l.forEach(e=e=>{e.style.backgroundColor="",e.style.borderTop="none",e.style.color="",e.style.fontWeight="normal"}),l[t].style.backgroundColor="#ffffff",l[t].style.color="#002f9d",l[t].style.borderTop="5px solid #38bdff",l[t].style.fontWeight="bold",o.forEach(e=e=>{e.style.display="none"}),o[t].style.display="block"};showPanel(0);