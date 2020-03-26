The Vendrrr Machine!
Objective:
Students will use javascript combined with the MVCS architectural pattern to interact with the DOM to create a dynamic webpage. The goal of this project is to build a machine for the Vendrrr company! We want to be able to add quarters from the user interface(a button) and have our application pass the input data safely through and update our stored data from our service(increase the currency total). We will draw purchaseable items to the screen and let the user select one to purchase via a button on the item from the user interface. This should again safely relay that information from our "view" through the controller, to the service, and to our stored data to allow the purchase and decrease the currency total our user has. Then draw the purchased item to the screen.
User Interface
Our users should be able to see their current money total, and click a button to add money to the vending machine. They should also be able to see the items for sale. Items should be rendered to the screen utilizing all of the properties on their item object with buttons to purchase the item. The interface should also display the item that was most recently purchased once the user has purchased that item as well as update the available items still for sale.
Functionality
Effectively use the MVC pattern to ensure the user can only use our vending machine per our rules defined in our application structure(No free items and you can only purchase items in stock!). Data manipulation can only be done in the service, all of our data is in the store, and the view should only talk to and be accessed by the controller. Our controller needs to act as the middleman and pass the instructions from our user, to the service, and back again.
Have fun!
There are a lot of extended challenges and features that can be added to your vending machine. The Vendrrr Company expects the minimal interfaces and snacks to be available to the user, but they encourage creativity! Some challenges could be allowing the user to add different amounts of money. Making different snacks available to purchase. Returning user change. Keeping track of how much money the machine has total from all purchases. An input field where users can put in the location of their item (d4) as opposed to clicking the specific item. Use a form for the vender to be able to add new items to the machine by passing user input from the form to a constructor to make the item and add it to the vending items collection. Add images for your snack!
Here is an example of what your items might look like. Dont forget to create a model!
let items = [
{
name: "Fruit Snack Gummies",
description: "Fruit salad done right.",
price: 1.00,
amount: 45
},
{
name: "Plant Food",
description: "Are you hungry? I could use a light snack.",
price: 5.00,
amount: 20
},
{
name: "Admiral-able Ack-Bar",
description: "Snack like an Admiral.",
price: .75,
amount: 3
},
{
name: "Paranormal Snacktivity",
description: "The perfect midnight snack.",
price: .25,
amount: 7
},
{
name: "The Void",
description: "This snack eats you!",
price: 3.25,
amount: 1
}
]
