import QtQuick 2.2
import QtQuick.Controls 1.1
import "main.js" as MainLogic

ApplicationWindow {
    id: applicationWindow1
    visible: true
    width: 768
    height: 1280
    title: qsTr("Main page")
    menuBar: MenuBar {
        Menu {
            title: qsTr("File")
            MenuItem {
                text: qsTr("Add account")
            }
            MenuItem {
                text: qsTr("Exit")
                onTriggered: Qt.quit();
            }
        }
    }

    /*GridView {
        id: albumList
        anchors.fill: parent
        cellWidth: 80; cellHeight: 80
        delegate: BtnAlbum
        highlight: Rectangle { color: "lightsteelblue"; radius: 5 }
        focus: true
    }*/

    Component.onCompleted: MainLogic.displayAlbums()
}
