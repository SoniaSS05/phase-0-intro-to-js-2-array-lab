// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newCat){
    cats.push(newCat);
}

function destructivelyPrependCat(newCat){
    cats.unshift(newCat);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(newCat){
    const newCatsA = [...cats];
    newCatsA.push('Broom');
    return(newCatsA);
}

function prependCat(newCat){
    const newCatsA = cats.slice();
    newCatsA.unshift(newCat);
    return(newCatsA);
}

function removeLastCat(){
    const newCatsA = cats.slice();
    newCatsA.pop();
    return(newCatsA);
}

function removeFirstCat(){
    const newCatsA = cats.slice();
    newCatsA.shift();
    return(newCatsA);
}

destructivelyAppendCat('Ralph');
destructivelyPrependCat('Bob');
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
let newCatsArl = appendCat('Broom');
let newCatsArf = prependCat('Arnold');
let newCatsArrl = removeLastCat();
let newCatsArrf = removeFirstCat();


