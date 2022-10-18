// Encapsulation ( private properties and methods )

class bankAccount {
    customerName;
    accountNumber=Date.now()
    #balance=0   //private properties

    constructor(customerName,balance=0){
        this.customerName=customerName
        this.accountNumber=Date.now()
        this.#balance=balance
    }

    deposit(amount){
        this.#balance += amount
    }

    withdraw(amount){
        this.#balance -= amount
    }

    setbalance(amount){
        this.#balance=amount
     if(isNaN(amount)){
        throw new Error("amount is not a valid input");
     }
    }

    getbalance(){
        return this.#balance
    }
}
