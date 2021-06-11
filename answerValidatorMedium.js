function isItCorrect(answer){
    //uchwyty:
    let powQuestion = document.getElementById('powerOperations');
    let rootQuestion = document.getElementById('squareRoot');
    
    
    let correctAnswer = 0;
    

    if(powQuestion.style.display === "block"){
        let powBase = Number(document.querySelector('.powBase').innerHTML);
        let toPowerOf = Number(document.querySelector('.toPowerOf').innerHTML);
        
        correctAnswer = Math.pow(powBase, toPowerOf);

        document.getElementById('powerOperations').style.display = "none";

    } else if(rootQuestion.style.display === "block"){
        let firstRootInteger = Number(document.querySelector('.firstRootInteger').innerHTML);
        let secondRootInteger = Number(document.querySelector('.secondRootInteger').innerHTML);

        correctAnswer = Math.sqrt(Number(firstRootInteger)) - Math.sqrt(Number(secondRootInteger));

        document.getElementById('squareRoot').style.display = "none";
    };

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
        
    }
//IF A BUTTON WITH SOME ANSWER WAS CLICKED, HOW TO MAKE FUNCTION RECOGNIZE WHICH BUTTON WAS IT AND HOW TO MAKE IT USE THE INNER TEXT OF THIS BUTTON SO IT COULD VERIFY IF IT IS THE CORRECT ANSWER?
}
//random number creator