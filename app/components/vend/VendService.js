import VendingMachine from "../Models/VendingMachine.js"


//Private Parts

let total = 0


//this is a dictionary that holds a value
const currency = {
    fiver: 5,
    dollar: 1,
    quarter: .25
}


//public to controller after being exported

class VendSerice {
    constructor() {
        this.total = 0

    }

    addMoney(coinString) {
        console.log('service: ', coinString)
        //confirm currency is acceptable
        if (currency[coinString]) {
            //add to total
            total += currency[coinString]
            total = parseFloat(total.toFixed(2))//this cuts off the decimal places to only two i.e. .50 instead of .50000000003, etc
        }
        return total //OR "return total.toFixed(2)" will make the total into a string and automatically display correctly, however to               //actual values will remain
    }
}


export default VendSerice
