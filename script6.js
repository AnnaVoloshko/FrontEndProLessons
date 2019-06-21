var letters = 'abcdefghijklmnopqrstuvwxyz';
var words = [],
    arrWords = {};

var elementNumber = prompt('How many random values need to be created?'),
    min = prompt('What is the minimum number of letters?'),
    max = prompt('What is the maximum number of letters?');

for (var i = elementNumber; i > 0; i--){
    var newWord = '';
    var lettersCount = Math.round(Math.random() * (max - min) + min);

    for (var letterIteration = lettersCount; letterIteration > 0; letterIteration--) {
        var letterIndex = Math.round(Math.random() * (letters.length - 1));
        newWord += letters[letterIndex];
    }
    words.push(newWord);
}

for (var index = 0; index < words.length; index++) {
    var element = words[index];   
    
    if (!arrWords[element.length]){
        arrWords[element.length] = [element]; 
    } else {
        arrWords[element.length].push(element);
    }
}
    console.log(arrWords);