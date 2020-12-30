var texts = new Array();
texts.push(" make ");
texts.push(" play ");
texts.push(" code ");
texts.push(" design ");

var point = 0;

function changeText(){
  $('p2.position-title-replace').html(texts[point]);
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  setTimeout(changeText, 2000)
}

changeText();