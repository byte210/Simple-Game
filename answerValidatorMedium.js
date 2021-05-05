function isItCorrect(answer){
    //uchwyty:
    let powQuestion = document.getElementById('powerOperations');
    let logQuestion = document.getElementById('logOperations');
    let log2Question = document.getElementById('log2Operations');
    let rootQuestion = document.getElementById('squareRoot');
    
    
    let correctAnswer = 0;
    

    if(powQuestion.style.display === "block"){
        let powBase = Number(document.querySelector('.powBase').innerHTML);
        let toPowerOf = Number(document.querySelector('.toPowerOf').innerHTML);
        
        correctAnswer = Math.pow(powBase, toPowerOf);

        document.getElementById('powerOperations').style.display = "none";

    } else if(logQuestion.style.display === "block"){
        let logBase = Number(document.querySelector('.logBase').innerHTML);
        let logAnswer = Number(document.querySelector('.logAnswer').innerHTML);

        let f = (x, y) => {
            return Math.log(Number(y)) / Math.log(Number(x))
        };

        correctAnswer = f(Number(logBase), Number(logAnswer));

        document.getElementById('logOperations').style.display = "none";

    } else if(log2Question.style.display === "block"){
        let answerFirst = Number(document.querySelector('.answerFirst').innerHTML);
        let answerSecond = Number(document.querySelector('.answerSecond').innerHTML);

        correctAnswer = Math.log2(Number(answerFirst)) + Math.log2(Number(answerSecond));

        document.getElementById('log2Operations').style.display = "none";

    } else if(rootQuestion.style.display === "block"){
        let firstRootInteger = Number(document.querySelector('.firstRootInteger').innerHTML);
        let secondRootInteger = Number(document.querySelector('.secondRootInteger').innerHTML);

        correctAnswer = Math.sqrt(Number(firstRootInteger)) - Math.sqrt(Number(secondRootInteger));

        document.getElementById('squareRoot').style.display = "none";
    };

    //console.log(correctAnswer);
    //console.log(answer);

    if (Number(answer) === correctAnswer){
        pointsCounter();
        doNotRepeatCheering();
        mediumLevelQuestions();
    } else if (Number(answer) !== correctAnswer){
        let pointsNumber = JSON.parse(window.localStorage.getItem('points')).length;
        document.getElementById('question').innerText = 'GAME OVER';
        doNotRepeatCheering();
                
        document.getElementById('powerOperations').style.display = "none"
        document.getElementById('logOperations').style.display = "none"
        document.getElementById('log2Operations').style.display = "none"
        document.getElementById('squareRoot').style.display = "none"


        document.getElementById('question').style.display = "block";

                //hide styling:
        document.querySelectorAll('.option')[0].style.display = "none";
        document.querySelectorAll('.option')[1].style.display = "none";
        document.querySelectorAll('.option')[2].style.display = "none";
        document.querySelectorAll('.option')[3].style.display = "none";

                //yes no buttons:
        document.getElementById('gameOverNo').style.display = "block";
        document.getElementById('gameOverYes').style.display = "block";


        document.getElementById('welcomeContent').innerHTML = 'Your score is: '+ pointsNumber + " / 10";
        // function colorItRed(){
        //     console.log('I am supposed to be red now')
        //     document.querySelector('.levelScrn').style.borderWidth = "10px";
        //     document.querySelector('.levelScrn').style.backgroundColor = "red";
        // };

        // function colorItDefault(){
        //     console.log('I retrive the default color');
        //     document.querySelector('.levelScrn').style.borderWidth = "1px";
        //     document.querySelector('.levelScrn').style.backgroundColor = "#002642";
        // }

        // colorItRed();

        // setTimeout(colorItDefault(), 1500);
    }
//easyLevelQuestions();
//IF A BUTTON WITH SOME ANSWER WAS CLICKED, HOW TO MAKE FUNCTION RECOGNIZE WHICH BUTTON WAS IT AND HOW TO MAKE IT USE THE INNER TEXT OF THIS BUTTON SO IT COULD VERIFY IF IT IS THE CORRECT ANSWER?
}
//random number creator