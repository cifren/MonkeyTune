function inherit(child, parent) {
    function createObject(proto) {
        function Ctor() { }
        Ctor.prototype = proto;
        return new Ctor();
    }
    //Create a child.prototype object that inherits from parent.prototype.
    child.prototype = createObject(parent.prototype);

    // Set the "constructor" property to refer to Student
    child.prototype.constructor = child;
}
