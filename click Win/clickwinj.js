var e = 0;
var w = 0;

document.addEventListener('keydown', function(key) {
  if(key.key == "w") {
    w++;
  } else if(key.key == "e") {
    e++;
  }

  document.getElementById("e").innerHTML = 
  e;
  document.getElementById("w").innerHTML = 
  w;
  if (w > e) {
    document.getElementById("lead").innerHTML = "W is in the lead!";
  } else if (e > w) {
    document.getElementById("lead").innerHTML = "E is in the lead!";
  } else {
    document.getElementById("lead").innerHTML = "Tie!";
  }
});

function reset() {
  e = 0;
  w = 0;
  document.getElementById("e").innerHTML = 
  e;
  document.getElementById("w").innerHTML = 
  w;
};