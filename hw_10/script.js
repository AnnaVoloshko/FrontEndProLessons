var MilitaryResource = (function(){
    function MilitaryResource(image, name, health, distance) {
        this.image = image;
        this.name = name;
        this.health = health;
        this.maxHealth = 150;
        this.distance = distance;
        this.maxDistance = 200;
    }

    MilitaryResource.prototype.isReadyToMove = function () {
        return this.maxDistance <= this.distance;
    };

    MilitaryResource.prototype.isReadyToFight = function () {
        return this.health > 0;
    };

    MilitaryResource.prototype.restore = function () {
        this.health = this.maxHealth;
        this.distance = 0;
    };

    MilitaryResource.prototype.clone = function () {
        return new MilitaryResource(this.image, this.name, this.health, this.distance)
    };

    return MilitaryResource;
}());


var Squad = (function () {
function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
    this.squad = defaultResources;
};

Squad.prototype.isReadyToMove = function () {
    return this.squad.every(function (element) {
        return element.isReadyToMove();
    })
};

Squad.prototype.cloneResource = function () {
    return this.squad.map(function (element) {
        return element.clone();
    });
};

Squad.prototype.getReadyToMoveResources = function () {
    return this.resources.filter(function (resources) {
        return resources.isReadyToMove();
    })
};

Squad.prototype.isReadyToFight = function () {
    return this.squad.every(function (element) {
        return element.isReadyToFight();
    })
};

Squad.prototype.restore = function () {
    return this.squad.every(function (element) {
        return element.restore();
    });
    return this.Squad;
};

Squad.prototype.combineResources = function (defaultResources) {
    return defaultResources.sort(function () {
        return 0.5 - Math.random();
    })
};

Squad.prototype.addCard = function() {
    document.getElementById('container').innerHTML += '<div class="card"></div>';
    document.getElementById('container').lastChild.innerHTML += '<div class="background"></div>';
    document.getElementsByClassName('background')[i].innerHTML += '<img class="background-img" src="' + this[i].image + '" alt="picture"></img>';
    document.getElementById('container').lastChild.innerHTML += '<div class="info"></div>';
    document.getElementsByClassName('info')[i].innerHTML += '<div class="name">' + this[i].name + '</div>';
    document.getElementsByClassName('info')[i].innerHTML += '<div class="cover-blok"></div>';
    document.getElementsByClassName('cover-blok')[i].innerHTML += '<div class="health" onclick="shake(this), dye(this)"></div>';
    document.getElementsByClassName('health')[i].innerHTML += '<div class="current-health">' + this[i].health + '</div>';
    document.getElementsByClassName('health')[i].innerHTML += '<div class="split">/</div>';
    document.getElementsByClassName('health')[i].innerHTML += '<div class="max-health">' + this[i].maxHealth + '</div>';
    document.getElementsByClassName('cover-blok')[i].innerHTML += '<div class="distance" onclick="shake(this), exhausted(this)"></div>';
    document.getElementsByClassName('distance')[i].innerHTML += '<div class="current-distance">' + this[i].distance + '</div>';
    document.getElementsByClassName('distance')[i].innerHTML += '<div class="split">/</div>';
    document.getElementsByClassName('distance')[i].innerHTML += '<div class="max-distance">' + this[i].maxDistance + '</div>';
    }
    return Squad;
}());


//CARDS

var cards = [
    finn = new MilitaryResource("images/FinnRender.png", "Finn Render", 150, 200),
    jake = new MilitaryResource("images/Jake_the_dog.png", "Jake the dog", 150, 200),
    bmo = new MilitaryResource("images/bmo1.png", "BMO", 150, 200)
]
card = new Squad(cards);

var list = [];
list = document.getElementsByClassName('health');

function shake(current) {
    current.closest('.card').classList.remove("shake");
    void current.closest('.card').offsetWidth;
    current.closest('.card').className += " shake";
    
    var value = +current.children[0].innerHTML;
    var maxValue = +current.children[2].innerHTML;
    value = Math.round(value - (maxValue/100 * 10));
    if (value < 0) value = 0;
    current.children[0].innerHTML = value;
}

function dye(current) {
    if(+current.children[0].innerHTML == 0) {
        var element = current.closest('.card');
        element.remove();
    };
}

function exhausted(current) {
    if(+current.children[0].innerHTML == 0) {
      var element = current.closest('.card');
      element.innerHTML += '<div class="exhausted">I need time to rest</div>';
    }
};

for(var i=0; i<cards.length;i++) {
    card.addCard.call(cards);
    console.log(this)
};