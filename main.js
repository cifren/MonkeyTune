.import QtQuick.LocalStorage 2.0 as Sql
Qt.include("../Core/Kernel.js")

function displayAlbums() {
    var kernel = new Kernel();
    var container = new Container();
    var manager = container.get('dbManager');
    var albumRepo = manager.getRepository('Album');

    var aryAlbums = albumRepo.findAll();
    console.log("All albums");
    for(key in aryAlbums){
        console.log("id: ".aryAlbums[key].getId());
    }
}
