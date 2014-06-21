
console.log('container');
var Container = function(){
    console.log('Container constructor');
    var connection = new Connection();
    var manager = new Manager(connection);
    this.services['dbManager'] = manager;
};

Container.prototype = {
    services: {},
    get: function(service){
        return this.services[service];
    }
}
