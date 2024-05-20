let raceNumber =Math.floor(Math.random()*1000);
let runnerEarly = true;
let runnerAge = 20;
if(runnerEarly && runnerAge>18){
            raceNumber += 1000;
}
if(runnerEarly && runnerAge>18){
            console.log(`The race will start at 9:30 am,Your race number is ${raceNumber}`);
}
else if(!runnerEarly && runnerAge<18){
            console.log(`The race will start at 11:00 am, Youe race number is ${raceNumber}`);
}
else if(runnerAge<18){
            console.log(`The race will start at 12:30 pm,Your racenumber is ${raceNumber}`);
}
else{
            console.log('Check in Register for your RaceNumber.')
}