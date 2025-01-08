
        let container = document.querySelector(".container")
        let userInput = document.querySelector("#userinput")
        let submit = document.querySelector(".submit")
        let result = document.querySelector(".result")
        let randomNumber = Math.floor(Math.random() * 100) + 1
        let attempt = 5
       
        function playGame(){
        let guess = parseInt(userInput.value) 

        submit.addEventListener("click", () => {
            
            if (guess=== ""  ){
                result.textContent="Invalid Input! Type a number"
                userInput.value=""
            }

            else if (guess === randomNumber) {
                result.textContent = "Congratulations! you guessed the right number."
            }

            else  {
                result.textContent = "WRONG GUESS"
                attempt--
                if (attempt > 0) {
                    let button = document.createElement("button")
                    button.textContent = "Try Again"
                    container.appendChild(button)
                    userInput.value = ""
                    userInput.disabled = true
                    submit.disabled = true
                    result.textContent = `You have ${attempt} attempts left!`
                    button.addEventListener("click", () => {
                        result.textContent = ""
                        button.remove()
                        userInput.disabled = false
                        submit.disabled= false
                        userInput.focus()
                    })
                }
                else {
                    result.textContent = `Game Over! The correct number was ${randomNumber}`
                    userInput.value = ""
                    userInput.disabled = true
                    submit.disabled = true
                }
            } 
            userInput.addEventListener("click", ()=>{
                result.textContent=""
            })                 
        })
    }

    playGame()


    