var graficaInteractiva = graficaInteractiva || {};
var reg = {};
graficaInteractiva.Item = function (game_state, name, position, properties) {
    "use strict";
    graficaInteractiva.Prefab.call(this, game_state, name, position, properties);
    
    this.anchor.setTo(0.5);
    
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;
};

graficaInteractiva.Item.prototype = Object.create(graficaInteractiva.Prefab.prototype);
graficaInteractiva.Item.prototype.constructor = graficaInteractiva.Item;



function createModals(item) {
   var item = item;
    reg.modal.createModal({
            type:"modal1",
            includeBackground: false,
            modalCloseOnInput: false,
        itemsArr: [
                {
                    type: "text",
                    content: "Tienes una oportunidad, si contestas mal Mueressssss.....",
                    fontFamily: "Luckiest Guy",
                    fontSize: 20,
                    color: "0xFEFF49",
                    offsetY: -100,
                    stroke: "0x000000",
                    strokeThickness: 5
            },
                {
                    type: "text",
                    content: "¿Se uso animante CC para hacer este juego?",
                    fontFamily: "Luckiest Guy",
                    fontSize: 20,
                    color: "0xFEFF49",
                    stroke: "0x000000",
                    strokeThickness: 5
            },
                {
                    type: "image",
                    content: "si",
                    offsetY: 100,
                    offsetX: -80,
                    contentScale: 0.6,
                    callback: function () {
                      reg.kill = false;
                    }
            },
                {
                    type: "image",
                    content: "no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function () {
                        var promise = new Promise(function(resolve, reject) {
                                resolve(item.kill());
                            });
                        promise.then(function(result) {
                              reg.modal.hideModal("modal1");
                            }, function(err) {
                              reg.modal.hideModal("modal1");
                            });
                        

                    }
            }
            ]
   });

reg.modal.createModal({
            type:"modal2",
            includeBackground: false,
            modalCloseOnInput: false,
        itemsArr: [
                {
                    type: "text",
                    content: "Tienes una oportunidad, si contestas mal Mueressssss.....",
                    fontFamily: "Luckiest Guy",
                    fontSize: 20,
                    color: "0xFEFF49",
                    offsetY: -100,
                    stroke: "0x000000",
                    strokeThickness: 5
            },
                {
                    type: "text",
                    content: "¿Se uso actionScript en este juego?",
                    fontFamily: "Luckiest Guy",
                    fontSize: 20,
                    color: "0xFEFF49",
                    stroke: "0x000000",
                    strokeThickness: 5
            },
                {
                    type: "image",
                    content: "si",
                    offsetY: 100,
                    offsetX: -80,
                    contentScale: 0.6,
                    callback: function () {
                      reg.kill = false;
                    }
            },
                {
                    type: "image",
                    content: "no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function () {
                        var promise = new Promise(function(resolve, reject) {
                                resolve(item.kill());
                            });
                        promise.then(function(result) {
                              reg.modal.hideModal("modal2");
                            }, function(err) {
                              reg.modal.hideModal("modal2");
                            });
                        

                    }
            }
            ]
   });
};

// el metodo update() es llamado en cada cuadro
graficaInteractiva.Item.prototype.update = function () {
    "use strict";
    // when colliding with hero the item is collected
    this.game_state.game.physics.arcade.collide(this, this.game_state.groups.heroes, this.collect_item, null, this);

};

graficaInteractiva.Item.prototype.collect_item = function (item, hero) {
    "use strict";
   /* var stat;
    // update hero stats according to item
    
    for (stat in this.stats) {
        // update only if the stat is defined for this item
        if (this.stats.hasOwnProperty(stat) && this.stats[stat]) {
            hero.stats[stat] += this.stats[stat];
        }
    } */
    reg.modal = new gameModal(game);
    createModals(item);
    if(item.key =="demon_image"){
        reg.modal.showModal("modal1");
    }else{
        reg.modal.showModal("modal1");
    }
    

};