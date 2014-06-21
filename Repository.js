var Repository = function(connection, entityName){
    this.connection = connection;
    this.entityName = entityName;
};

Repository.prototype = {
    find: function(id){
        return
    },
    findAll: function(){
        var queryBuilder = this.connection.createQueryBuilder();
        var all = queryBuilder
            .select('*')
            .from(entityName, 'a')
            .getResult();

        return all;
    },
    findBy: function(){

    }
};

