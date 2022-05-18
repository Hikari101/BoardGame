let r1 = [0,0,0,0];
let r2 = [0,0,0,0];
let r3 = [0,0,0,0];
let r4 = [0,0,0,0];
var first = 1;
var second = 2;
var start = first;
var current = start;
var finished = false;
var randomrow, randomcol;
function flip(obj){
    if(finished == false){
    var vlaid = true;
    var tmp = obj.id.split(",");
    var clickRow = Number(tmp[0]);
    var clickColumn = Number(tmp[1]-1);
    switch (clickRow) {
        case 1:
            if(r1[clickColumn] != 0){
                vlaid = false;
                break;
            }
            r1[clickColumn] = current;
            break;
        case 2:
            if(r2[clickColumn] != 0){
                vlaid = false;
                break;
            }
            r2[clickColumn] = current;
            break;
        case 3:
            if(r3[clickColumn] != 0){
                vlaid = false;
                break;
            }
            r3[clickColumn] = current;
            break;
        case 4:
            if(r4[clickColumn] != 0){
                vlaid = false;
                break;
            }
            r4[clickColumn] = current;
            break;
    }
    if(vlaid){
        obj.style.transform = "scaleY(-1)";
        if(current == first){
            obj.style.background = "red";
            // document.getElementById("turn").innerHTML = "Player 1 Turn!";
        }
        else{
                obj.style.background = "teal";
        }
        if(current == first){
            current = second;
            randomNum();
            console.log("current"+current);
            console.log("random"+randomrow + "," + randomcol);
            document.getElementById("turn").innerHTML = "Player 2 Turn!";
        }
        else{
            current = first;
            document.getElementById("turn").innerHTML = "Player 1 Turn!";
        }
        
    }
    checkWhowin();
    if(finished == false){
        draw();
    }
    
}
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

}
function checkWhowin(){
    if(horizontal(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win";
    }
    else if(horizontal(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win";
    }
    
    else if(vertical(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win";
    
    }
    else if(vertical(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win";
    }
    else if(leftcross(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win";
    
    }
    else if(leftcross(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win";
    }
    else if(rightcross(first)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 1 win";
    
    }
    else if(rightcross(second)){
        finished = true;
        document.getElementById("winner").innerHTML = "Player 2 win";
    }
}
function horizontal(player){
    if(checkhrow(r1, player)){
        return true;
    }
    else if(checkhrow(r2, player)){
        return true;
    }
    else if(checkhrow(r3, player)){
        return true;
    }
    else if(checkhrow(r4, player)){
        return true;
    }
}

function checkhrow(array, player){
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == player){
            count++;
        }
    }
    if(count == 4){
        return true;
    }
    return false;
}

function vertical(player){
    for(let index=0;index<4;index++){
        if(r1[index] == player &&
            r2[index] == player &&
            r3[index] == player &&
            r4[index] == player){
                return true;
            }
    }
    return false;
    
}
function leftcross(player){
    if(r1[0] == player &&
        r2[1] == player &&
        r3[2] == player &&
        r4[3] == player){
            return true;
        }
    return false;
}
function rightcross(player){
    if(r1[3] == player &&
        r2[2] == player &&
        r3[1] == player &&
        r4[0] == player){
            return true;
        }
    return false;
}

//draw
function draw(){
    if(checkDraw(r1) && 
    checkDraw(r2) &&
    checkDraw(r3) &&
    checkDraw(r4)){
        finished == true;
        document.getElementById("winner").innerHTML = "Draw!";
    }
    
}
function checkDraw(array){
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == 0){ //white stage
            count++;
        }
    }
    if(count == 0){
        return true;
    }
    else{
        return false;
    }
}


//computer
// function randomTime(){
//     for (let index = 0; index < 1; index++) {
            
//     }
// }
function randomNum(){
    randomrow = Math.floor(Math.random()*4+1);
    randomcol = Math.floor(Math.random()*4+1);
        switch (randomrow) {
            case 1:
                if(r1[randomcol-1] != 0){
                    randomNum();
                    console.log(11);
                    console.log(randomrow + "," + randomcol);
                    break;
                }
                // r1[randomcol-1] = current;
                console.log(1);
                console.log(randomrow + "," + randomcol);
                break;
            case 2:
                if(r2[randomcol-1] != 0){
                    randomNum();
                    console.log(22);
                    console.log(randomrow + "," + randomcol);
                    break;
                }
                // r2[randomcol-1] = current;
                console.log(2);
                console.log(randomrow + "," + randomcol);
                break;
            case 3:
                if(r3[randomcol-1] != 0){
                    randomNum();
                    console.log(33);
                    console.log(randomrow + "," + randomcol);
                    break;
                }
                // r3[randomcol-1] = current;
                console.log(3);
                console.log(randomrow + "," + randomcol);
                break;
            case 4:
                if(r4[randomcol-1] != 0){
                    randomNum();
                    console.log(44);
                    console.log(randomrow + "," + randomcol);
                    break;
                }
                // r4[randomcol-1] = current;
                console.log(4);
                console.log(current);
                console.log(randomrow + "," + randomcol);
                break;
        }
        document.getElementById(randomrow + "," + randomcol).click();
}

