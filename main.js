
import VendController from './app/components/vend/VendController.js'


class App {
    constructor() {
        this.controllers = {
            vendController: new VendController()
        }
    }
}


window.app = new App(); //"wires" to the document/window on-the-fly; connects app to document exposing the App class




