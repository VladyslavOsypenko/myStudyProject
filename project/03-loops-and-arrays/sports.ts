let sportsOne: string[] = ["Golf", "Cricket", "Tenis", "Swimming"];


for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

//simplified 

for(let tempSports of sportsOne){
    if(tempSports == "Swimming"){
    console.log(tempSports + " << My favorite one!");
    }else{
        console.log(tempSports);
    }
}

