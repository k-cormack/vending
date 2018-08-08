//vending machine

//properties

//transaction total
//acceptable currency
//food items
//name
//image
//price
//quantity
//machine total


//Methods
//add money
//vend
//give change


class VendingMachine {
    constructor() {
        this.transactionTotal = 0,
            this.acceptableCurrency = {
                fiver: 5,
                dollar: 1,
                quarter: .25
            }
        this.foodItems = [{
            id: 'A1',
            img: 'http://3.bp.blogspot.com/_DaeDn87aiQ8/TSATHhzqpyI/AAAAAAAAB8g/5FDkmT-jpmQ/s1600/Orange_Soda-Pop.jpg',
            price: 2.5,
            quantity: 10,
        }, {
            id: 'A2',
            img: "https://i5.walmartimages.com/asr/04a746ec-9023-4f58-8025-6cebb3a87efe_1.230c3fc33dcc7ca1f904124fd15f76ee.jpeg?odnHeight=450&amp;odnWidth=450&amp;odnBg=FFFFFF",
            price: 1.75,
            quantity: 11
        }, {
            id: 'A3',
            img: "http://www.taquitos.net/im/sn/Munchos.jpg",
            price: 2,
            quantity: 8
        }]
        this.machineTotal = 20

    }

    addMoney(currency) {//validate currency, increase total, return total

    }
    vend(foodId) {//find item, {if total >= item.price && item.qauntity > 0}, item.quantity --, transactionTotal -= item.price, machineTotal += item.price,                 //return item.img

    }
    giveChange() {//transactionTotal = 0, 

    }
}

export default VendingMachine



