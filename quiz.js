// declare vars

var height = document.getElementById('height');
var character = document.getElementById('character');
var button = document.getElementById('button');

button.addEventListener("click", checkInput);

function checkInput() {
  if (!height.value || !character.value) {
    alert("You must enter a value!");
  } else {
      var tree = {
        height: height.value,
        character: character.value
      }
      console.log(tree);
    growTree(tree);
  }
}

function growTree(tree) {
  var treeString = "";
  var inputHeight = tree.height;
  var inputChar = tree.character;
  var numSpaces = inputHeight - i;
  var numChar = (2 * i) - 1;

  for(var i = 0; i < inputHeight; i++) {
    treeString += tree[i];

    console.log("inside for loop", treeString);


    // if () {
    //   treeString += " ";
    // }
    // console.log("tree", growTree(tree));
  }
}

// growTree(tree);





