var yesAns = document.getElementById('yesAns'),
    yes = document.getElementById('y'),
    noAns = document.getElementById('noAns'),
    no = document.getElementById('n');

function y(){
  noAns.className = "hide";
  yesAns.className = "show";
  ans.className = "show";
}

function n(){
  noAns.className = "show";
  yesAns.className = "hide";
  ans.className = "show";
}