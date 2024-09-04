// set interval
// setInterval(()=>{
//    console.log('hy');
// },3000)
// console.log('I am after set interval');


// setTimeout(()=>{
//   console.log('tata')

// },3000)
// Before callback
var p=document.getElementById('result')
// function add(a,b) {
//    var sum=a+b
//     return sum; 
// }
// function display(val) {
   
//    p.innerText=`the sum is ${val}`
    
// }
// var res=add(5,10);
// display(res); 
// after
function addsum(a,b,callback) {
    var sum=a+b;
    callback(sum)
    
}
function display(val) {
   
    p.innerText=`the sum is ${val}`
     
 }
 addsum(900,440,display)

 function addsum(a,b) {
    return new Promise(function(resolve,reject) {
        var sum=a+b;
        if (sum>50) {
            resolve(sum);
        } else {
           reject(`the value is  ${sum} and is below 50`) 
        }
        
    })
    
 }
//  addsum(22,12).then((val)=>{
//     p.innerText=`the sum is the ${val}`
//  }).catch((err)=>{
//     p.innerText=err;
    
//  })
//  async 
async function display() {
   try {
      const data=await addsum(23,5);
      p.innerText=`the sum is the ${data}`
   
      
   } catch (error) {
      p.innerText='value not expected'
   
   }
   
}
// display()

async function products() {
   const data= await fetch ('https://dummyjson.com/products');
   const fin_data=await data.json()
   console.log(fin_data)
}
products()
