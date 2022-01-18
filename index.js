




function get_random_number() {
    const ran = Math.ceil((Math.random() * 100));
    return ran;
}


function get_user_number() {
    const user_num = prompt("enter num");
    return Number(user_num);
}

function get_started() {
    const start = prompt("Want to play with me? y/n");
    if (start === "y") return true;
    return false
    // return start;
}




function main() {
    
    const score = [];
    get_started() === true ? play() : alert("Love you too.. have a nice day man");
    
    function continue_game() {
        const continue_game = prompt("Want to continue? y/n");
        if (continue_game === "y") {
            play()
        }
    }
    
    
    function play() {
        const num_of_Attempts = [];
        const random = get_random_number()
        let user_num;
        console.log(random);
        do {
            user_num = get_user_number();
            if(!/^[1-9][0-9]?$|^100$/.test(user_num)){
                alert("Please Enter A Number Between 1-100");
            }
            if (user_num > random) {
                alert("Too big")
                num_of_Attempts.push(1);
            } else if (user_num < random) {
                alert("Too small")
                num_of_Attempts.push(1);
            } else if (user_num == random) {
                num_of_Attempts.push(1);
                score.push(1);
                alert("Your Right!!")
                alert(`Number Of Attempts: ${num_of_Attempts.length}`); alert(`Total score: ${score.length}`) ;
                continue_game();
            }
            
        }
        while (random != user_num)
    }
}


// let res = /^[1-9][0-9]?$|^100$/.test(100)

// console.log(res);