const puzzleEl = document.querySelector('#puzzle')
const messageEl = document.querySelector('#message')

let game1 = new Hangman('Cat', 2)


const render = () => {
    puzzleEl.innerHTML = ''
    messageEl.textContent = game1.statusMessage

    const letterArray = game1.puzzle.split('')
    letterArray.forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
        
    })

}


const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
} 

document.querySelector('#reset').addEventListener('click', startGame)

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.checkStatus()
    puzzleEl.textContent = game1.puzzle
    messageEl.textContent = game1.statusMessage
    render()

})

startGame()


// getPuzzle('2').then(puzzle => {
//     console.log(puzzle)
// }).catch(err => {
//     console.log(`Error: ${err}`)
// })
    




// getCurrentCountry().then(country => {
//     console.log(country.name)
// }).catch(error => {
//     console.log(error)
// })



// // Making HTTP request
// const request = new XMLHttpRequest('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()



// const countryRequest = new XMLHttpRequest()


// countryRequest.addEventListener('readystatechange', e => {
//     if(e.target.readyState === 4 && e.target.status === 200) {

//         const countryData = JSON.parse(e.target.responseText)
//         const country = countryData.find(land => land.alpha2Code === countryCode )
//         console.log(country.name)

//     } else if (e.target.readyState === 4){
//         console.log('An error has taken place')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()

// const countryCode = "NO"

