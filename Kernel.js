Qt.include("Loader.js")

var Kernel = function(){
    this.container = new Container();
    this.includeEntities();
    this.setupDatabase();
}

Kernel.prototype = {
    entities: {
        Album: '../Entity/Album.js'
    },
    getContainer: function(){
        return this.container;
    },
    getEntities: function(){
        return this.entities;
    },
    setEntity: function(entity, object) {
        this.entities[entity] = object;
    },
    includeEntities: function(){
        for(key in this.getEntities()){
            //include entity
            Qt.include(this.getEntities()[key]);
            this.setEntity(key, window[key]);
        }
    },
    setupDatabase: function(){
        this.getContainer().get('dbManager').setupDatabase(this.getEntities());
    }
}
