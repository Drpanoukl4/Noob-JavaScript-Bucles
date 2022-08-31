//practica Js
const dollars = ["30$","12$","20$","45$","5023$","124$"]

//map--

//for
let prices = []

for (let i = 0; i < dollars.length; i++) {
    prices[i] = (Number(dollars[i].slice(0, dollars[i].length -1)));   
}

number = prices.map(n => n + 1)

//foreach

prices = []
for (const dollar of dollars) {
    prices.push(Number(dollar.slice(0, dollar.length -1)));
    
}

dollars.forEach(dollar => {

 prices.push(Number(dollar.slice(0, dollar.length -1)));  
 
})

//Map

prices = []

dollars.map(dollar => { prices.push(Number(dollar.slice(0, dollar.length -1))); })

console.log(prices)

//filter

//manual
let expensive = []
prices.forEach(price => {

if(price <= 20){

expensive.push(price)

}

})

console.log(expensive)

//filter
dollars.forEach(dollar => {

    prices.push(Number(dollar.slice(0, dollar.length -1)));  
    
})

expensive = prices.filter(n => n >= 20)
//console.log(expensive)


//reduce

let sum = 0
for (const price of expensive){

    sum += price

}

console.log(sum)

//.reduce

sum = expensive.reduce((acu, price) => {

acu + price

})
