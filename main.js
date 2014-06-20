Qt.include("../Core/Kernel.js")

function displayAlbums() {
    var container = new Container();
    var manager = container.get('dbManager');
    var albumRepo = manager.getRepository('Album');

    var albums = albumRepo.findAll();
}
