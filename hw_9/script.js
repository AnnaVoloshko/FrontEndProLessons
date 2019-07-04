function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = health;
    this.distance = distance;
    this.maxDistance = distance;
}


MilitaryResource.prototype.isReadyToMove = function () {
    return this.maxDistance <= this.distance;
};

MilitaryResource.prototype.isReadyToFight = function () {
    return this.health > 0;
};

MilitaryResource.prototype.restore = function () { //востановление здоровья
    this.health = this.maxHealth;
    this.distance = 0;
};

MilitaryResource.prototype.clone = function () {
    return new MilitaryResource(this.type, this.maxHealth, this.maxDistance)
    // если изменить значение в клонированном ресурсе, оригинал будет также меняться
};

var res = new MilitaryResource('land', 200, 500);
var resources = [
    new MilitaryResource('land', 200, 500),
    new MilitaryResource('air', 300, 5000),
    new MilitaryResource('water', 400, 1000)
];


console.log(resources);


function Squad(resources) {
    this.squad = [];
    if (resources) this.combineResources(resources);
};

Squad.prototype.isReadyToMove = function () {
    return this.resources.every(function (resources) {
        return resources.isReadyToMove();
    })
};


Squad.prototype.cloneResource = function () {
    return new Squad(this.resources.map(function (res) {
        return res.clone();
    }))
};

Squad.prototype.getReadyToMoveResources = function () {
    return this.resources.filter(function (resources) {
        return resources.isReadyToMove();
    })
};


Squad.prototype.isReadyToFight = function () {
    return this.resources.every(function (resources) {
        return resources.isReadyToFight();
    })
};

Squad.prototype.restore = function () {
    return this.resources.every(function (resources) {
        return resources.restore();
    })
};

Squad.prototype.combineResources = function () {
    return this.resources.sort(function (resources) {
        return Math.random() - 0.5;
    })
};
