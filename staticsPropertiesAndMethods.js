// // utility function
class user{
    static id=1    //statics is stored under class
      constructor(name,age,income){
          this.age=age        //this is stored under instences
          this.name=name
          this.income=income
          this.id=user.id++
      }
  
      static comapreByAge(c,d){    //statics are stored aboove the class
        return c.age-d.age
      }
  
      static comapreByAge(c,d){    //statics are stored aboove the class
          return c.income-d.income
        }
  }
  
  
  
  const user1=new user("bala",155,20000)     //instences    
  const user2=new user("susmita",22,3000)
  const user3=new user("rupa",50,6000)
  
  // const store=[user1,user2,user3]
  // store.sort(user.comapreByAge)
  console.log(user1,user2,user3)
  
  
  // configration