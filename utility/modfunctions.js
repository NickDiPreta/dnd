// todo: create JSON export
 class  Hero {
   constructor(name,hitPoints,level,strength,dexterity,constitution,
              intelligence,wisdom,charisma,acrobatics,animalHandling,
              arcana,athletics,deception,history,insight,intimidation,
              investigation,medicine,nature,perception,performance,
              persuasion,religion,sleightOfHand,stealth,survival){
     this.name = name;
     this.hitPoints = hitPoints;
     this.level = level;
     this.strength = strength;
     this.dexterity = dexterity;
     this.constitution = constitution;
     this.intelligence = intelligence;
     this.wisdom = wisdom;
     this.charisma = charisma;
     this.acrobatics = acrobatics;
     this.animalHandling = animalHandling;
     this.arcana = arcana;
     this.athletics = athletics;
     this.deception = deception;
     this.history = history;
     this.insight = insight;
     this.intimidation = intimidation;
     this.investigation = investigation;
     this.medicine = medicine;
     this.nature = nature;
     this.perception = perception;
     this.performance = performance;
     this.persuasion = persuasion;
     this.religion = religion;
     this.sleightOfHand = sleightOfHand;
     this.stealth = stealth;
     this.survival = survival;
   }
 } 


// Instances of each char
// note: DnD website doesn't have a public API, and charname/json is confusing (scraper in repo as charscraper.rb for reference)
// use commented out function at bottom of file to retrive updated char stats from each character
// todo: add functionality to update character values for file savestate
const levi = new Hero('levi',12,1,2,3,2,1,0,-1,5, 0, 1, 4, -1, 1, 0, 1, 1, 0, 1, 0, -1, -1, 1, 3, 5, 2);
const actorvid = new Hero('actorvid',7,1,1,2,-1,3,0,1, 2, 2, 3, 1, 1, 3, 0, 1, 3, 2, 5, 0, 1, 1, 3, 2, 2, 2);
const eugene = new Hero('eugene',10,1,-1,0,2,3,2,1,0, 4, 3, -1, 1, 5, 4, 1, 3, 2, 3, 2, 1, 3, 3, 0, 0, 4)
const leron = new Hero('leron',9,1,-1,0,1,1,2,3,0, 2, 1, -1, 5, 3, 2, 3, 3, 2, 3, 4, 3, 5, 1, 0, 0, 2);
const spruce = new Hero('spruce',10,1,1,3,2,1,-1,0,3, -1, 1, 3, 2, 1, -1, 0, 1, -1, 1, 1, 2, 0, 1, 5, 7, -1);



// takes values from both drop down menus and rolls for character based on modifier. 
// todo: redo to use dom elements for names rather than if statements for each
// todo: add dropdown menu in html for dice selection
function roll() { 
    let mod = document.querySelector('#mySelect').value;
    let selectElement = document.querySelector('#select1');
    let output = selectElement.value; 
    let dice = getRandomInt(21)
    if (output == levi.name){
      modifier = levi[mod]
      let total = modifier + dice
      document.querySelector('#modvalue').innerHTML = `Levi's ${mod} modifier is  ${modifier}`;
      document.querySelector('#roller').innerHTML = `Levi rolls ${dice}`;
      document.querySelector('.output').innerHTML = `Levi rolls ${total} in total`;
    }else if (output == actorvid.name){
      modifier = actorvid[mod]
      total = modifier + dice
      document.querySelector('#modvalue').innerHTML = `Actorvid's ${mod} modifier is  ${modifier}`;
      document.querySelector('#roller').innerHTML = `Actorvid rolls ${dice}`;
      document.querySelector('.output').innerHTML = `Actorvid rolls ${total} in total`;
    }else if (output == eugene.name){
      modifier = eugene[mod]
      total = modifier + dice
      document.querySelector('#modvalue').innerHTML = `Eugene's ${mod} modifier is  ${modifier}`;
      document.querySelector('#roller').innerHTML = `Eugene rolls ${dice}`;
      document.querySelector('.output').innerHTML = `Eugene rolls ${total} in total`;
    }else if (output == leron.name){
      modifier = leron[mod]
      total = modifier + dice
      document.querySelector('#modvalue').innerHTML = `Leron's ${mod} modifier is  ${modifier}`;
      document.querySelector('#roller').innerHTML = `Leron rolls ${dice}`;
      document.querySelector('.output').innerHTML = `Leron rolls ${total} in total`;
    }else if (output == spruce.name){
      modifier = spruce[mod]
      total = modifier + dice
      document.querySelector('#modvalue').innerHTML = `Spruce Lee's ${mod} modifier is  ${modifier}`;
      document.querySelector('#roller').innerHTML = `Spruce Lee rolls ${dice}`;
      document.querySelector('.output').innerHTML = `Spruce Lee rolls ${total} in total`;
    }}

//random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// DOM getter 
// var ary =[]
// var i = document.getElementsByClassName("ct-skills__col--skill").length - 1;
// while (i > 0){
// var skill = document.getElementsByClassName("ct-skills__col--skill")[i].textContent ; 
// var modifier = document.getElementsByClassName("ct-skills__col--modifier")[i].textContent ;
// console.log(`${skill} is ${modifier}`);
// ary.push(parseInt(modifier));
// i--;}
// console.log(ary.reverse()); 
