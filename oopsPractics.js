function bankAccount(customerName,balance=0){    //create a constractor function
    this.customerName=customerName
    this.accountNumber=Date.now()
    this.balance=balance
    
    this.deposit=(amount)=>{
        this.balance+=amount
    }
    
    this.withdrow=(amount)=>{
        this.balance=this.balance-amount
    }
    };
    
    
    
    // const susmita=new bankAccount("bala",2000)
    // // const susmita1=new bankAccount("bala1")
    // susmita.withdrow(1000)
    // // susmita.deposit(7000)
    // console.log(susmita)
    
    
    // **************************************************************************************
    const accounts=[]
    
    const accountForm = document.querySelector('#accountFrom')
    const customername = document.querySelector('#customerName')
    const balance= document.querySelector('#balance')
    
    const depoitForm= document.querySelector('#depoitForm')
    const accountNumber = document.querySelector('#accountnumber')
    const amount = document.querySelector('#amount')
    
    accountForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const account=new bankAccount(customername.value,+balance.value)  //+ for convert string to number
        accounts.push(account)
        console.log(accounts)
    });
    
    depoitForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const save = accounts.find((account)=>account.accountNumber === +accountnumber.value)
    
        save.deposit(+amount.value)
        console.log(accounts)
    })
    