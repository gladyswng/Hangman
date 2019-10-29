class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guess left: ${this.remainingGuesses}`
        } else if (this.status === 'failed' ) {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return `Great work! You guessed the word.`
        }
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
    
            }
            
        }) 
        return puzzle
    
    }
    


    makeGuess(guess) {
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetters.includes(guess)
        const wrongGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return 
        }

        if (uniqueGuess) {
            this.guessedLetters.push(guess)
        } 

        if (uniqueGuess && wrongGuess) {
            this.remainingGuesses--
        }

    }
    
    checkStatus() {

        const finished = this.word.every(letter => {
            return this.guessedLetters.includes(letter) || letter === ' '
        }) 
    
    
        // const lettersUngessed = this.word.filter(letter => {
        //     return !this.guessedLetters.includes(letter)
        // })
    
        // const finished = lettersUngessed.length === 0
    
    
    
        // let finished = true
    
        // this.word.forEach(letter => {
        //     if (this.guessedLetters.includes(letter)) {
        //     } else {
        //         finished = false
        //     }
        // })
    
        if (finished) {
            return this.status = 'finished'
        } else if (this.remainingGuesses < 1) {
            return this.status = 'failed'
        } else {
            return this.status = 'playing'
        }
    }



}










