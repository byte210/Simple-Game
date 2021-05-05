function isItCorrect(answer){
            //clearInterval(showCheering);

            let questionArray = document.getElementById('question').innerHTML.split(' ');
            let correctAnswer = 0;
            //console.log('This is the question array:' + " " + questionArray + " " + "and below are it's values");
            //console.log(Number(questionArray[0]))
            //console.log(Number(questionArray[2]))
            //console.log("This is the inner text of clicked button:" + answer);


            if(questionArray[1] === "-"){
                correctAnswer = Number(questionArray[0]) - Number(questionArray[2]);
            } else if(questionArray[1] === "+"){
                correctAnswer = Number(questionArray[0]) + Number(questionArray[2]);
            } else if(questionArray[1] === "*"){
                correctAnswer = Number(questionArray[0]) * Number(questionArray[2]);
            } else if(questionArray[1] === "/"){
                correctAnswer = Number(questionArray[0]) / Number(questionArray[2]);
            };

            //console.log(correctAnswer);
            //console.log(answer);

            if (Number(answer) === correctAnswer){
                pointsCounter();
                
                console.log("easyLevelQuestions draw, works");
                doNotRepeatCheering();
                easyLevelQuestions();
            } else if (Number(answer) !== correctAnswer){
                let pointsNumber = JSON.parse(window.localStorage.getItem('points')).length;
                document.getElementById('question').innerText = 'GAME OVER';
                doNotRepeatCheering();
                

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
    //easyLevelQuestions();
//IF A BUTTON WITH SOME ANSWER WAS CLICKED, HOW TO MAKE FUNCTION RECOGNIZE WHICH BUTTON WAS IT AND HOW TO MAKE IT USE THE INNER TEXT OF THIS BUTTON SO IT COULD VERIFY IF IT IS THE CORRECT ANSWER?
}
//random number creator