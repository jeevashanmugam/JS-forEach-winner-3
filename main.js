
let winners = ["Anna", "Beth", "Cara"]

winners.forEach(function (e,i,arr){

    if(i==1){
        document.write(`Gold winner : ${e} <br>`)
    }
    else if(i==1){
        document.write(`Silver winner : ${e} <br>`)
    }
    else{
        document.write(`Bronze winner : ${e}<br>`)
    }
})




