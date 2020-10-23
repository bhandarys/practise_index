import { getIndex, getStocks } from './helper';

const { ril$, infy$, hdfc$ } = getStocks();

// Queston 1
// Subscribe to the three observers and update the index.html file
// Example:
// document.getElementById("ril").innerHTML = value.toString();
// 
// In this you are not to use any local variable. So you need to combine 
// the 3 observers and have only one subscribe

// Answer 1

// Question 2:
// In addition to Question 1, you also need to update the index. For this you need to call 
// getIndex method with all the three stock values. 
// getIndex(ril: number, infy:number, hdfc:number)
// You cannot use any global variables to 
// save the stock values. You can have only one subscrription and that subscription is only
// to update the index value.
// Hint: Will be provided on request :)

// Answer 2
