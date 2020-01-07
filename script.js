function Get(id) {
  return document.getElementById(id);
}

window.onload = function() {
  let left = Get("left");
  let right = Get("right");
  let up = Get("top");
  let bottom = Get("bottom");
  let block = Get("block__wrap");
  
  let leftNumber = 300;
  let topNumber = 300;
  left.onclick=function(){
    leftNumber += 100;
    block.style.left = `${leftNumber}px`; 
  }
  right.onclick = function() {
    leftNumber -= 100;
    
    block.style.left = `${leftNumber}px`; 
  }
  up.onclick = function() {
    topNumber -= 100;
    
    block.style.top = `${topNumber}px`; 
  }
  bottom.onclick = function() {
    topNumber += 100;
    
    block.style.top = `${topNumber}px`; 
  }
}