

const cheeringGuard = () =>{ 
    let cheeringContent = document.getElementById('welcomeContent').innerHTML;

    if(cheeringContent === undefined){
        doNotRepeatCheering();
        showCheering();
    }
}