Qt.include("../Database/Connection.js")
Qt.include("../Database/Manager.js")

var Container = function(){
    var connection = new Connection();
    var manager = new Manager(connection);
    services['dbManager'] = manager;
};

Container.prototype = {
    services: [],
    get: function(service){
        return this.services[service];
    }
}
