var AlbumRepository = function(connection){
    Repository.call(this, connection);
}
inherit(AlbumRepository, Repository);

AlbumRepository.prototype = {
    getAlbums: function() {
        return albums;
    }
}

