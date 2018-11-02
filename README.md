# _Pizza-Time!_

#### _A HTML webpage that will allow users to order a pizza._

#### By _**Daniel Bennett**_

## Description

_This webpage lets users order a pizza and then it will display a price for that pizza depending on the size, if it has cheese, and the type of topping. this is done by using an object constructor to keep track of the pizza's elements and also a method to calculate a price using those elements _

### Specs
* create a small pizza:
      input: small
      output pizza (size; small)
* create a medium pizza with cheese:
      input; medium, yes
      output pizza (size; small, cheese; yes)
* create large pizza with no cheese and pineapple:
      input; large, yes, pineapple
      output pizza (size; large, cheese; no, topping; pineapple)
* make small pizza $5
      input; small, yes, beef
      output pizza (size; small, cheese, yes, topping; beef, price; 5)
    this is because we set the default price for the object pizza to 5
* make medium pizza and large pizza more expensive
  * this is done by adding an if statement stating that if the input is medium or large increase the price by 2.5 per size.


      input; medium, yes, sausage
      output pizza (size medium, cheese; yes, toppings; sausage, price; 7.5)
      or
      input; large, yes, sausage
      output pizza (size large, cheese; yes, toppings; sausage, price; 10)
* make pizza more expensive depending on topping
    * this is done also by adding an if statement that will add either .5, 1.0, 2.0, or -.5 if no topping is requested:


      input; small, yes, pepperoni
      output pizza (size; small, cheese; yes, topping; pepperoni, price; 6)
      or
      input; small, yes, none
      output pizza (size; small, cheese; yes, topping; none, price; 4.5)




## Setup/Installation Requirements

* Clone or Download from Github @ https://github.com/MrDanielBennett/pizza-time.git
* Run index.html

## Known Bugs

_No known bugs as of 11/02/18_

## Support and contact details

_If any issues or bugs are found please contact me @ daniel.bennett1999@gmail.com_

## Technologies Used

_Bootstrap paired with HTML, Javascript, CSS, and Jquery-3.3.1 is how I was able to create a nice looking website along with functional website features such as being able to generate a pizza order with a dynamic price._

### License

*MIT*

Copyright (c) 2018 **_Daniel Bennett_**
