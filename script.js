let userScore = 0
let cpuScore = 0

const user_scoreSpan = document.querySelector(".user_score")
const cpu_scoreSpan = document.querySelector(".cpu_score")
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// console.log(optionImages)    
optionImages.forEach((image, index) => {
    image.addEventListener(("click"), (e) => {
        image.classList.add("active")
        userResult.src = cpuResult.src = "images/rock.png"
        result.textContent = "Wait..."
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        })
        gameContainer.classList.add("start")

        let time = setTimeout(() => {
            gameContainer.classList.remove("start")
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.PNG", "images/scissors.png"]
            cpuResult.src = cpuImages[randomNumber]
            let cpuValue = ["R", "P", "S"][randomNumber]
            let userValue = ["R", "P", "S"][index]
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            }
            let outComeValue = outcomes[userValue + cpuValue]
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`
            if (result.textContent === "Cpu Won!!") {
                function cpuWin() {
                    cpuScore++
                    cpu_scoreSpan.textContent = cpuScore
                }
                cpuWin()
            } else if (result.textContent === "User Won!!") {
                function userWin() {
                    userScore++
                    user_scoreSpan.textContent = userScore
                }
                userWin()
            }
        }, 2500)
    })
})    