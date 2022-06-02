console.log("*** Below the assignment of function ***")

const calAverage = (round1, round2, round3) => { // To calculate average of score 
    return (round1 + round2 + round3) / 3;
}



const dolphineScore = function (round1, round2, round3) { // To get score of dolphine
    return calAverage(round1, round2, round3);
}
const kolasScore = function (round1, round2, round3) { // To get score of kolas 
    return calAverage(round1, round2, round3);
}



const checkWinner = function (dolphine, kolas) { // To check who is winner 
    if (dolphine >= 2 * kolas) {
        console.log(`Winner is dolphine( ${dolphine} vs. ${kolas}) `);
    }
    else if (dolphine * 2 <= kolas) {
        console.log(`Winner is kolas(${kolas} vs. ${dolphine})`);
    }
    else {
        console.log(`No team wins...`)
    }
}

checkWinner(dolphineScore(54, 23, 31), kolasScore(65, 54, 49));
checkWinner(dolphineScore(85, 54, 41), kolasScore(23, 34, 27));


// console.log(dolphine);
// console.log(kolas)