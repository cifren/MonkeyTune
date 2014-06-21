Qt.include("Loader.js")

var Kernel = function(){
    this.container = new Container();
    this.includeEntities();
    this.setupDatabase();
}

Kernel.prototype = {
    /*entities: {
        Album: '../Entity/Album.js'
    },*/
    getContainer: function(){
        return this.container;
    },
    /*getEntities: function(){
        return this.entities;
    },
    setEntity: function(entity, object) {
        this.entities[entity] = object;
    },
    includeEntities: function(){
        var entities = this.getEntities();
        entities.forEach(function(value, key){
            //include entity
            Qt.include(entities[key]);
            this.setEntity(key, window[key]);
        });
    },*/
    setupDatabase: function(){
        this.getContainer().get('dbManager').setupDatabase(this.getEntities());
    }
}
