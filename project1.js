/**
 *   @author Ormsbee, Rhonda (ormsbeer@student.ncmich.edu)
 *   @version
 *   @ project 1 || created: 01/29/2018
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedrooms, bathrooms, garageCars, totalPrice;

function main() {
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setGarageCars();
    setTotalPrice();
    printResults();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question('Please enter lot number: ');
}

function setBedrooms() {
    bedrooms = PROMPT.question('Please enter number of bedrooms: ');
}

function setBathrooms() {
    bathrooms = PROMPT.question('Please enter number of bathrooms: ');
}

function setGarageCars() {
    garageCars = PROMPT.question('Please enter number of garage cars: ');
}

function setTotalPrice() {
    const BEDROOM_PRICE = 17000, BATHROOM_PRICE = 12500, GARAGE_PRICE = 6000, BASE_PRICE = 50000;
    totalPrice = BASE_PRICE + (bedrooms * BEDROOM_PRICE) + (bathrooms * BATHROOM_PRICE) + (garageCars * GARAGE_PRICE);
}

function printResults() {
    console.log(`Total Price for home is: $${totalPrice}.00`);
}