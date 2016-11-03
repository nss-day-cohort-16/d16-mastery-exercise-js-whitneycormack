var height = document.getElementById('height');
var character = document.getElementById('character');
var button = document.getElementById('button');
var reset = document.getElementById('reset');

function checkInput(tree) {
  if (!height.value || !character.value) {
    alert("You must enter a value!");
  } else {
    growTree(tree);
  }
};

function growTree() {
  var tree = {
    height: height.value,
    character: character.value
    }
  var treeString = "";
  var space = " ";
  for (var i = 0; i < tree.height; i++) {
    console.log("testing", space.repeat((tree.height - 1) - i) + tree.character.repeat((i * 2) + 1));
  }
};

function EnterKey(event) {
  if (event.keyCode === 13) {
    checkInput();
  }
};

function Reset() {
  height.value = "";
  character.value = "";
  console.clear();
}

button.addEventListener("click", checkInput);
height.addEventListener("keypress", EnterKey);
character.addEventListener("keypress", EnterKey);
reset.addEventListener("click", Reset);

//


