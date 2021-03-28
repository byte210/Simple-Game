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
            } else {
                function colorItRed(){
                    console.log('I am supposed to be red now')
                    document.querySelector('.levelScrn').style.borderWidth = "10px";
                    document.querySelector('.levelScrn').style.backgroundColor = "red";
                };

                function colorItDefault(){
                    console.log('I retrive the default color');
                    document.querySelector('.levelScrn').style.borderWidth = "1px";
                    document.querySelector('.levelScrn').style.backgroundColor = "#002642";
                }

                colorItRed();

                setTimeout(colorItDefault(), 1500);
            }
    //easyLevelQuestions();
//IF A BUTTON WITH SOME ANSWER WAS CLICKED, HOW TO MAKE FUNCTION RECOGNIZE WHICH BUTTON WAS IT AND HOW TO MAKE IT USE THE INNER TEXT OF THIS BUTTON SO IT COULD VERIFY IF IT IS THE CORRECT ANSWER?
}
//random number creator