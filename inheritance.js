// function bankAccount(customerName,balance=0){    //create a constractor function
//     this.customerName=customerName
//     this.accountNumber=Date.now()
//     this.balance=balance
// }

// function currentAccount(customerName,balance=0){    //create a constractor function
//     this.customerName=customerName
//     this.accountNumber=Date.now()
//     this.balance=balance
//     this.transactionLimit=50000
// }

// function savingAccount(customerName,balance=0){    //create a constractor function
//     this.customerName=customerName
//     this.accountNumber=Date.now()
//     this.balance=balance
//     this.transactionLimit=10000
// }

// // currentAccount.prototype.takeBusinessLoan=function(amount){
// //     this.balance += amount
// // }

// // currentAccount.prototype.deposit=function (amount){
// //     this.balance+=amount
// // }

// // currentAccount.prototype.withdrow=function (amount){
// //     this.balance-=amount
// // }

// savingAccount.prototype.takePersonalLoan=function(amount){
//     this.balance += amount
// }

// savingAccount.prototype.deposit=function (amount){
//     this.balance+=amount
// }

// savingAccount.prototype.withdrow=function (amount){
//     this.balance-=amount
// }

// const balaAccount=new savingAccount("balaKrishna",2000)
// console.log(balaAccount)



// using inheritance **********************************************************************************************\

// function bankAccount(customerName,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=Date.now()
//     this.balance=balance
// }

// bankAccount.prototype.deposit=function(amount){
//     this.balance += amount
// }

// bankAccount.prototype.withdraw = function (amount){
//     this.balance -= amount
// }

// function currentAccount(customerName,balance=0){
//     bankAccount.call(this , customerName , balance)
//     this.tranCtionLimit=50000

// }

// function savingAccount(customerName,balance=0){
//     bankAccount.call(this , customerName ,balance)
//     this.takePersonalLoan=200000
// }

// savingAccount.prototype=Object.create(bankAccount.prototype)

// savingAccount.prototype.takePersonalLoan= function (amount){
//     console.log("allow to take personal loan" + amount)
// }


// const rupaAccount= new savingAccount("aleti Rupa",200000)
// rupaAccount.deposit(1000)
// // rupaAccount.takePersonalLoan(2000)
// console.log(rupaAccount)

//  using in class // ************************************************************************************************

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

class currentAccount extends bankAccount{
    transactionLimit=50000

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    takeBusinessLoan = function (amount){
            console.log("allow to take Business loan" + amount)
    }
}

class savingAccount extends bankAccount{
    transactionLimit=50000

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    takePersonalLoan= function (amount){
            console.log("allow to take Personal loan" + amount)
    }
}

const rupaAccount= new savingAccount("aleti Rupa",2000)
// rupaAccount.deposit(1000)
// rupaAccount.withdraw(20)
rupaAccount.takePersonalLoan (2000)
console.log(rupaAccount)