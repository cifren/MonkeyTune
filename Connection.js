.import QtQuick.LocalStorage 2.0 as Sql
Qt.include('QueryBuilder.js')

//constructor
var Connection = function(){
    this.connection = this.getConnection();
};


// public (shared across instances)
Connection.prototype = {
    createQueryBuilder: function(entityName){
        return new QueryBuilder(this, entityName);
    },
    getConnection: function(){
        connection = Sql.LocalStorage.openDatabaseSync("MonkeyTune", "1.0", "The Example QML SQL!", 1000000);
        return connection;
    },
    flush: function(dbObj){
        this.validObj(dbObj);
        var sql;
        if(dbObj.getId() === null){
            sql = this.insert(dbObj);
        }else{
            sql = this.update(dbObj);
        }
        this.connection.executeSql(sql);
    },
    insert: function (dbObj){
        var mapping = dbObj.mapping;
        var columns = [];
        var values = [];
        for (key in dbObj.mapping) {
            if(key === dbObj.mapping){
                continue;
            }
            columns.push(dbObj.mapping[key]['name']);
            getter = 'get' + capitaliseFirstLetter(key);
            values.push(dbObj[getter]);
        }
        var sql = "INSERT INTO "+dbObj.tableName+" ("+colums.join(',')+")"+
                " VALUES ("+values.join(',')+");";
    },
    update: function (dbObj){
        var mapping = dbObj.mapping;
        var columnsAndValues = [];
        var columnAndValueId = null;
        for (key in dbObj.mapping) {
            getter = 'get' + capitaliseFirstLetter(key);
            item = dbObj.mapping[key]['name'] + "=" + dbObj[getter];

            if(key === dbObj.mapping){
                columnAndValueId = item;
            }else{
                columnsAndValues.push(item);
            }
        }
        var sql = "UPDATE "+dbObj.tableName+" SET "+columnsAndValues+" WHERE "+columnAndValueId+"; ";
    },
    validObj: function (dbObj){
        if(dbObj.mapping === null || dbObj.mapping === 'undefined'){
            throw new DatabaseException('No mapping defined for ' + dbObj.constructor.name);
        }else if(dbObj.tableName === null){
            throw new DatabaseException('No tableName defined for ' + dbObj.constructor.name);
        }else if(typeof dbObj.getId == 'function'){
            throw new DatabaseException('No getId function existing for ' + dbObj.constructor.name);
        }else if(typeof dbObj.entityId == 'function'){
            throw new DatabaseException('No entityId defined for ' + dbObj.constructor.name);
        }else if(!dbObj.entityId in dbObj.mapping){
            throw new DatabaseException('No entityId valid for ' + dbObj.constructor.name);
        }
    },
    executeQuery: function(sql){
        db.transaction(function(tx){
            return tx.executeSql(sql);
        });
    },
    createTable: function(tableName, fields){
        var columns = [];
        for(key in fields){
            columns.push(fields[key]['name']+' '+fields[key]['type']);
        }
        sql = 'CREATE TABLE IF NOT EXISTS '+tableName+'('+columns.join(', ')+')';
        this.executeQuery(sql);
    },
    executeQueryBuilder: function(queryBuilder){

        return
    }
}
