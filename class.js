class bankAccount {
    customerName;
    accountNumber=Date.now()
    balance=0

    constructor(customerName,balance=0){
        this.customerName=customerName
        this.accountNumber=Date.now()
        this.balance=balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}


const bala=new bankAccount("bala A",2000)
// bala.deposit(500)
bala.withdraw(10)
console.log(bala)