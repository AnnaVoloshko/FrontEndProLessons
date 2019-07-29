function Human() {
    this.type = 'dreamer';
    this.believe = 'how I can do this?'
}
Human.prototype.talk = function () {
    console.log('Programming is a magic!');
}

function Educated() {
    Human.call(this);
    this.believe = 'it is too hard!';
}
Educated.prototype = Object.create(Human.prototype);

function Developer() {
    this.type = 'realist';
    this.believe = 'I can!';
}
Developer.prototype.talk=function(){
    console.log('Oh! It`s very interesting!')
}

function GameDeveloper() {
    Developer.call(this);
}
GameDeveloper.prototype.talk=function(){
    console.log('I should make a functional game hero!')
}

function JavaDeveloper() {
    this.type='critic';
    this.believe='I did it!';
}
JavaDeveloper.prototype.talk=function(){
    console.log('I was going to be a JavaScript developer!')
}

var human = new Human(),
    educated = new Educated(),
    developer = new Developer(),
    gameDeveloper = new GameDeveloper(),
    javaDeveloper = new JavaDeveloper();

human.talk();
educated.talk();
developer.talk();
gameDeveloper.talk();
javaDeveloper.talk();

console.log(human, educated, developer, gameDeveloper, javaDeveloper);
