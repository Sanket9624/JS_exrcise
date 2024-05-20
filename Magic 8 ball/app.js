const userName = 'Sanket';
userName ? console.log(`Hello ${userName}`) : console.log('Hello');
let userQuestion = 'Which is my lucky no.?';
console.log(`${userName} has asked-${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch (randomNumber) {
            case 0:
                        eightBall = 'This is Zero Case'
                        break;

            case 1:
                        eightBall = 'This is First Case'
                        break;
            case 2:
                        eightBall = 'This is Second Case'
                        break;
            case 3:
                        eightBall = 'This is Three Case'
                        break;
            case 4:
                        eightBall = 'This is four Case'
                        break;
            case 5:
                        eightBall = 'This is Five Case'
                        break;
            case 6:
                        eightBall = 'This is Six Case'
                        break;

            case 7:
                        eightBall = 'This is Seven Case'
                        break;
            default:
                        eightBall = 'This is not a valid digit'
                        break;
}
console.log(`The Magic Eight Ball says, ${eightBall}`);
