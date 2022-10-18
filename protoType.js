function bankAccount(customerName,balance=0){    //create a constractor function
    this.customerName=customerName
    this.accountNumber=Date.now()
    this.balance=balance
    
    // this.deposit=(amount)=>{
    //     this.balance+=amount
    // }
    
    // this.withdrow=(amount)=>{
    //     this.balance=this.balance-amount
    // }
    };

    const balaAccount=new bankAccount("bala A")
    const roshni=new bankAccount("roshni Alet",5000)
    // console.log(roshni,balaAccount)

    bankAccount.prototype.deposit=function (amount){
        this.balance+=amount
    }

    bankAccount.prototype.withdrow=function (amount){
        this.balance-=amount
    }

    // balaAccount.deposit(1000)
    
    roshni.deposit(2000)

    console.log(roshni)
