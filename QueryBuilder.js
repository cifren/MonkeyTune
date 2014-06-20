var QueryBuilder = function(connection, entityName){
    this.connection = connection;
    this.from = entityName;
};

QueryBuilder.prototype = {
    select: '*',
    from: null,
    where: null,
    select: function(select){
        this.select = select;
        return this;
    },
    from: function(from){
        this.from = from;
        return this;
    },
    where: function(where){
        this.where = where;
        return this;
    },
    getResult: function(){
        return this.connection.executeQueryBuilder(this);
    },
    getSingleResult: function(){
        var result = this.connection.executeQueryBuilder(this);
        if(result.length > 0){
            result = this.connection.executeQueryBuilder(this)[0];
        }else{
            result = null;
        }

        return result;
    }

}
