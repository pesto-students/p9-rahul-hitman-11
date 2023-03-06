function displayLog(param) {
    if(Number(param) % 5 == 0){
        setTimeout(() => console.log("Reject the promise " + param),2000);
    }else{
        setTimeout(() => console.log("Resolve the promise " + param),1000);
    }
}

function getNumber(mycallback){
    let randNum = Math.floor((Math.random() * 100) + 1);
    mycallback(randNum);
}

getNumber(displayLog);