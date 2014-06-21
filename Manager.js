Qt.include("../Database/Repository.js")

console.log('Manager file');
var Manager = function(connection){
    this.connection = connection;
}

Manager.prototype = {
    getRepository: function(entityName){
        var repository = null;
        if(windows[entityName]['repository']){
            //include repository if exist
            /*if(window[key].repository){
                Qt.include(window[entityName]['repository']);
            }*/
            repository= new windows[entityName]['repository'](connection, entityName);
        }else{
            repository = new Repository(connection, entityName);
        }

        return repository;
    },
    getConnection: function(){
        return this.connection;
    },
    setupDatabase: function(entities){
        for(key in entities){
            var entity = window[key];
            this.getConnection().createTable(entity.tableName, entity.mapping);
        }
    }
}
