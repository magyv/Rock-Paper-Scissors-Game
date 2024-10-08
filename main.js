const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "imgs/rock.png";
        result.textContent = "WAIT...";

        //loop through each option image again
        optionImages.forEach((image2,index2)=>{
            index !== index2  &&  image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        // set a timeout to delay the result calc
        let timeout = setTimeout(()=>{
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;


            //Generate a random Number between 0 and 2
            let randomNumber = Math.floor(Math.random()*3);
            //create an array for cpu
            let cpuImage = ["imgs/rock.png","imgs/paper.png","imgs/scissors.png"]
            cpuResult.src = cpuImage[randomNumber];

            // assign a letter value to cpu option (r for rock , p for paper, s for scissors)
            let cpuValue = ["R","P","S"][randomNumber]
            // assign a letter value to clicked option (based on index)
            let userValue = ["R","P","S"][index]


            //create an object with all possible outcomes
            let outcomes = {
                RR:"Draw",
                RP:"Cpu",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"Cpu",
                SS:"Draw",
                SR:"Cpu",
                SP:"User",
            }

            // look up the outcomes value based on user and cpu options
            let outcomesValue = outcomes[userValue + cpuValue];
            // Display the result
            result.textContent = userValue === cpuValue ? "Math Draw" : `${outcomesValue} Won!!`
    },2500)
    });
});


























