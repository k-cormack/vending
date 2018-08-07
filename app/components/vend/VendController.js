    import VendService from './VendService.js'
    
    //PRIVATE PARTS

    //Variables outside of the exported class are NOT accessible
    const vendService = new VendService()
    
    
    function draw(total) {
        document.getElementById('total').innerText = total
        //updates user screen
    }
    
    
    //PUBLIC PARTS
    //Controllers are used for getting user input
    //updating screen
    //sending and recievng data from service-side
class VendController {
    constructor() {


    }


    addMoney(cur) {
            //used to send money amount to SERVICE
            console.log('controller: ', cur)
            let total = vendService.addMoney(cur)
            console.log('returned to controller: ', total)
            draw(total)
    }
    
}





export default VendController
 

