        //CHEERING:
        var counter = 0;
        window.cheeringInterval = -1;
        window.timerInterval = -1;
        
        
        //do każdego przycisku odpowiedzi osobno przypisać trigger showCheering jednocześnie czyszczący interval przed ponownym jej uruchomieniem.
        const doNotRepeatCheering = () =>{
            clearInterval(window.cheeringInterval);
            clearInterval(window.timerInterval);
        }

        const showCheering = () =>{

            let arrayOfCheers = [
                "It is easier to solve a math problem after a deep breath ;)",
                "Take it easy :)",
                "I'm sure you can do it!",
                "You are on the right way!",
                "Do you remember the math classes in primary school?",
                "It's pretty easy, my friend.",
                "I know you can do it!",
                "Relax.",
                "Just chill out and do the math!",
                "You are great!",
                "You can do it!",
                "It does not look correct, so let's hope for the best",
                "You are champ! Almost every day, but not today!",
                "I thought you can do it, but now it looks pretty bad",
                "You can't do it!",
                "Do I even serve the purpose here?",
                "Guess I should cheer you up",
                "Remember your mom said, that you are the best? She was lying",
                "Well, consider work at McDonalds",
                "Guess you won't be another Einstein",
                "Oh God, please... Do I have to look at it?",
                "It is easier to solve a math problem after a deep breath ;)",
                "Take it easy :)",
                "I'm sure you can do it!",
                "You are on the right way!",
                "Do you remember the math classes in primary school?",
                "It's pretty easy, my friend.",
                "I know you can do it!",
                "Relax.",
                "Just chill out and do the math!",
                "You are great!",
                "You can do it!",
                "It does not look correct, so let's hope for the best",
                "You are champ! Almost every day, but not today!",
                "I thought you can do it, but now it looks pretty bad",
                "You can't do it!",
                "Do I even serve the purpose here?",
                "Guess I should cheer you up",
                "Remember your mom said, that you are the best? She was lying",
                "Well, consider work at McDonalds",
                "Guess you won't be another Einstein",
                "Oh God, please... Do I have to look at it?"
            ];

            let i=parseInt(((parseInt((Math.random()*10).toFixed())/10)*arrayOfCheers.length-1));

            function cheers(){
                document.getElementById('welcomeContent').innerHTML = arrayOfCheers[i];
            };
            cheers();
        }

        const createRandomNumber = (arrayOfNumbers) =>{
            //let randomNumber = (Math.random()*10).toFixed();
            
            let randomNumber = Math.random()*10;

            if(arrayOfNumbers.includes(randomNumber)){
                randomNumber = createRandomNumber(arrayOfNumbers);
            } 
            return randomNumber;
        }

        //timer chodzi ale interwał się nie czyści. dlaczego??
        //NAWET JEŚLI NIE KLIKAMY NA ODPOWIEDZI, ZARÓWNO FUNKCJA LOSOWANIA CHEER UPÓW JAK I TIMER PRZYSPIESZAJĄ, DLACZEGO?

        const TenTimer = () => {
            document.getElementById('tenTimer').style.display = 'block';

            let grabTimer = Number(document.getElementById('tenTimer').innerHTML);
            --grabTimer;

            document.getElementById('tenTimer').innerHTML = grabTimer;

            isGameOver();
        }


        // BASE DIFFICULTY LEVEL SPIN

        const hardLevelQuestions = () =>{
            console.log("I'm in da function")
            //question:
            document.getElementById('question').style.display = "none";
            
            //yes no buttons:
            document.getElementById('gameOverNo').style.display = "none";
            document.getElementById('gameOverYes').style.display = "none";

            document.getElementById('tenTimer').innerHTML = 10;
            //OPERATIONS VARIABLES
            const hardNums = ['x^2', 'x^3', 'e^x', 'cos(2*x+pi/6)', '1/(2*x)', 'x', 'x^4', 'x^5', 'x^6'];
            //const hardNums_2 = ['x', '1', '2', '3', '4', '5', '6', '7', '8'];

            let optionCatcher = document.querySelectorAll('.option');
            let question = document.getElementById('question');

            //FIRST INT DRAW
            let firstInt = hardNums[parseInt(((((Math.random()*10).toFixed())/10)*9).toFixed())];

            // SECOND INT DRAW
            //let secondInt = mediumNums[parseInt(((parseInt((Math.random()*10).toFixed())/10)*9).toFixed())];


            if(counter<10){
                counter++;

                document.getElementById('triggerSpin').style.display = "none";
                //#################################################################
                //#################################################################
                //#################################################################
                document.getElementById('integralsOps').style.display = 'block';
                document.querySelector('.choosenVariable').innerHTML = firstInt;
                //#################################################################
                //#################################################################
                //#################################################################
                //#################################################################

                let sum = "";

                //odkrycie odpowiedzi:
                optionCatcher[0].style.display = "block";
                optionCatcher[1].style.display = "block";
                optionCatcher[2].style.display = "block";
                optionCatcher[3].style.display = "block";

                
                let k = parseInt(((parseInt((Math.random()*10).toFixed())/10)*3));

                optionCatcher[k].innerText = sum;
                
                let a = createRandomNumber([sum]);
                let b = createRandomNumber([sum, a]);
                let c = createRandomNumber([sum, a, b]);


                if(k === 0){
                    optionCatcher[1].innerText = a;
                    optionCatcher[2].innerText = b;
                    optionCatcher[3].innerText = c;
                } else if(k === 1){
                    optionCatcher[0].innerText = a;
                    optionCatcher[2].innerText = b;
                    optionCatcher[3].innerText = c;
                } else if(k === 2){
                    optionCatcher[0].innerText = a;
                    optionCatcher[1].innerText = b;
                    optionCatcher[3].innerText = c;
                } else {
                    optionCatcher[0].innerText = a;
                    optionCatcher[1].innerText = b;
                    optionCatcher[2].innerText = c;
                }

               
                
                window.cheeringInterval = setInterval(showCheering, 3.5*1000);
                window.timerInterval = setInterval(() => {
                    TenTimer();
                }, 1000);

            } else {
                if(window.localStorage.getItem('points') === null){
                window.localStorage.setItem('points', JSON.stringify([]));
                }

                let pointsNumber = JSON.parse(window.localStorage.getItem('points')).length;
                
                question.innerHTML = "GAME OVER";
                doNotRepeatCheering();

                document.getElementById('powerOperations').style.display = "none"
                document.getElementById('logOperations').style.display = "none"
                document.getElementById('log2Operations').style.display = "none"
                document.getElementById('squareRoot').style.display = "none"


                question.style.display = "block";

                //hide styling:
                document.querySelectorAll('.option')[0].style.display = "none";
                document.querySelectorAll('.option')[1].style.display = "none";
                document.querySelectorAll('.option')[2].style.display = "none";
                document.querySelectorAll('.option')[3].style.display = "none";

                //yes no buttons:
                document.getElementById('gameOverNo').style.display = "block";
                document.getElementById('gameOverYes').style.display = "block";


                document.getElementById('welcomeContent').innerHTML = 'Your score is: '+ pointsNumber + " / 10";

                //set counter to zero:
                counter = 0;
            }
        }

        //GAME OVER SCREEN
        function isGameOver(){

            if(window.localStorage.getItem('points') === null){
                window.localStorage.setItem('points', JSON.stringify([]));
            }

            let tenTimerCheck = document.getElementById('tenTimer');
            let pointsNumber = JSON.parse(window.localStorage.getItem('points')).length;

            if(tenTimerCheck.innerText === '0'){
                console.log(tenTimerCheck);
                
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
        }