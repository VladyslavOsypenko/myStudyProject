var sportsOne = ["Golf", "Cricket", "Tenis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//simplified 
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSports = sportsOne_1[_i];
    if (tempSports == "Swimming") {
        console.log(tempSports + " << My favorite one!");
    }
    else {
        console.log(tempSports);
    }
}
