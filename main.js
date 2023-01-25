"use strict";

class Pizza{
    crust = "original";
    #sauce= "traditional tomato-based red"
    #size ;
constructor(pizzaSize) {
    this.#size = pizzaSize;
}
getCrust(){
    return this.crust;
}
setCrust(pizzaCrust){
    this.crust = pizzaCrust;
}
getServed(){
    console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size}  pizza`)
}
}
const myPizza = new Pizza ("Xlarge");
myPizza.getServed();
console.log(myPizza.sauce)