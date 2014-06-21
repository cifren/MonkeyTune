

var Album = function(){

}

Album.prototype = {
    mapping: {
        id: {name:'id', type:'integer'},
        name: {name:'name', type:'text'},
        albumTypeId: {name:'album_type_id', type:'integer'}
    },
    tableName: 'album',
    entityId: 'id',
    repository: 'AlbumRepository',
    id: null,
    name: null,
    albumTypeId: null,
    getId: function(){
        return this.id;
    }
}
