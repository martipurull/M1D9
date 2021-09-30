
//create bingo board dynamically

const createBingoBoard = function () {
    const bingoBoardNode = document.getElementById('bingoBoard')

    for (let bingoNum = 1; bingoNum <= 76; bingoNum++) {
        let newBingoNum = document.createElement('div')
        newBingoNum.classList.add('bingoNum')
        newBingoNum.innerText = bingoNum
        bingoBoardNode.appendChild(newBingoNum)
    }
}


//randomiseButton creates a random number 1-76 and highlights it on the board

const displayRandomBingoNum = function () {
    let randomNum = Math.floor(Math.random() * 76 + 1)
    let arrayOfBingoNums = document.querySelectorAll('.bingoNum')
    for (let bingoNum of arrayOfBingoNums) {
        if (bingoNum.innerText == randomNum && !bingoNum.classList.contains('selected')) {
            bingoNum.classList.add('selected')
        }
    }
}

//make sure the random number cannot repeat itself (it is removed once it appears)

// added to previous function with another condition


//create user board wih 24 randomised numbers; it highlights as the main board does

// const createUserBoard = function () {
//     const userBoard = document.getElementById('userBoard')
//     for (let i = 1; i <= 24; i++) {
//         let randomUserNum = Math.floor(Math.random() * 76)
//         let newUserNum = document.createElement('div')
//         newUserNum.classList.add('bingoNum')
//         newUserNum.innerText = randomUserNum
//         userBoard.appendChild(newUserNum)
//     }
// }

//non-repeat attempt

// const createUserBoard = function () {
//     const userBoard = document.getElementById('userBoard')
//     let arrayOfRandomNums = []
//     while (arrayOfRandomNums.length !== 24) {
//         let randomUserNum = Math.floor(Math.random() * 76)
//         if (!arrayOfRandomNums.includes(randomUserNum)) {
//             arrayOfRandomNums.push(randomUserNum)
//         }
//     }
//     for (let num of arrayOfRandomNums) {
//         let newUserNum = document.createElement('div')
//         newUserNum.classList.add('bingoNum')
//         newUserNum.classList.add('userNum')
//         newUserNum.innerText = num
//         userBoard.appendChild(newUserNum)
//     }
// }

//attempt at making better user boards 

const createUserBoard = function () {
    const userBoards = document.getElementById('userBoards')
    let userBoard = document.createElement('div')
    userBoard.classList.add('userBoard')
    userBoards.appendChild(userBoard)
    let arrayOfRandomNums = []
    while (arrayOfRandomNums.length !== 24) {
        let randomUserNum = Math.floor(Math.random() * 76 + 1)
        if (!arrayOfRandomNums.includes(randomUserNum)) {
            arrayOfRandomNums.push(randomUserNum)
        }
    }
    for (let num of arrayOfRandomNums) {
        let newUserNum = document.createElement('div')
        newUserNum.classList.add('bingoNum')
        newUserNum.classList.add('userNum')
        newUserNum.innerText = num
        userBoard.appendChild(newUserNum)
    }
}


//let user create more boards before starting to play




window.onload = function () {

    createBingoBoard()
    createUserBoard()

}