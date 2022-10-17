const prompt = require('prompt-sync')({sigint: true});
let time = 0;
let totalWeight = 0;
let totalAttackPow = 0;
let pokemonCollection = []
let descriptiveName = [`Bunchy`, `Bulby`, `Cuddly`, `Colorful`, `Beautiful`, `Buttery`, `Carefully`, `Caringc`, `Passionate`, `Perceptive`, `Brave`, `Brilliant`, `Gallant`, `Gabby`, `Masterful`, `Magnetic`, `Happy`,]
let pokemonName = ['Bulbasaur', `Charmander`, `Blissey`, `Caterpie`,`Pikachu`, `Buneary`, `Ghastly`, `Machop`];

displayIntro();
while(time < 6){
    displayTime();
    let pokemon = {};
    catchPokemon(pokemon);
    console.log(`Your action: [c]atch or [r]elease?`)
    let decision = prompt(`>`);
    if(pokemon.weight + totalWeight <= 10){
        if(decision.toLowerCase() === "c"){
            pokemonCollection.push(pokemon);
            console.log(`You chose to keep the Pokemon.
            ============================================`)
        }else if(decision.toLowerCase() === "r"){
            console.log(`You chose to release the Pokemon.
            ============================================`)
            time++;
            continue;
        }
    }else{
        console.log(`This Pokemon would put you over 10 lbs, so you release it.\n\nPress [enter] to continue.`)
        decision = prompt(`>`);
    }
 
    time++;
}
console.log(`The time is ${6+time}:00pm. Times up!\n`);

displayPokemon(pokemonCollection)


function displayIntro(){
    console.log(`You've gone Pokemon hunting! Try to maximize the value of your caught Pokemon. You have six pokeballs which allows you to hunt for six hours (till 12:00pm) and you can catch at most 10 lbs of Pokemon.
    
    ==========================================
    \n`)
}

function displayTime(){
    console.log(`The time is ${6 + time}:00 am. So far you've caught:
    ${pokemonCollection.length} Pokemon, ${totalWeight} lbs, ${totalAttackPow} total Attack Power\n`);
}

function generateRandomName(){
    let name = [];
    let adjective1 = descriptiveName[Math.floor(Math.random()* descriptiveName.length)];
    let  adjective2 = descriptiveName[Math.floor(Math.random()* descriptiveName.length)];
    while(adjective1 === adjective2){
        adjective2 = descriptiveName[Math.floor(Math.random()* descriptiveName.length)];
    }
    name.push(adjective1); 
        
    name.push(adjective2);
    
    name.push(pokemonName[Math.floor(Math.random()* pokemonName.length)]);

    return name.join(" ");

}
function generateRandomWeight(){
    let weight = Number((Math.random() * 5).toPrecision(3));
    while (weight<1){
        weight = Number((Math.random() * 5).toPrecision(3));
    }

    return weight

}
function generateRandomAttackPow(){

    let attackPow = Number((Math.random() * 5).toPrecision(3));

    while(attackPow< .1){
        attackPow = Number((Math.random() * 5).toPrecision(3));
    }

    if (attackPow<1){
        attackPow = Number(attackPow.toPrecision(2));
    }

    return attackPow

}

function catchPokemon(pokemon){
    pokemon.name = generateRandomName();
    pokemon.weight = generateRandomWeight();
    pokemon.attPow = generateRandomAttackPow();
    console.log(`You caught a \'${pokemon.name}\' weighing ${pokemon.weight} lbs with an attack power of ${pokemon.attPow}`);
}

function displayPokemon(pokemonCollection){
    let totalWeight = 0;
    let totalAttackPow = 0;
    console.log(`You caught ${pokemonCollection.length} Pokemon:`);

    for(let poke of pokemonCollection){
        totalWeight += poke.weight;
        totalAttackPow += poke.attPow;
        console.log(`* ${poke.name}, ${poke.weight} lbs, ${poke.attPow}`)
    }

    totalWeight = Number(totalWeight.toPrecision(4));

    totalAttackPow = Number(totalAttackPow.toPrecision(4));

    console.log(`\nTotal Weight: ${totalWeight}\nTotal Attack Power: ${totalAttackPow}`);

}
