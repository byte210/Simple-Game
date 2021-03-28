let pointsArray = [];

const pointsCounter = () =>{
    pointsArray.push('1');

    window.localStorage.setItem('points', JSON.stringify(pointsArray));
}