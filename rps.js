function rock(x){
    let cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu === 1)
    {
        document.getElementById("cpu-choice-tie").innerText = "CPU chose Rock"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Tie").style.display = "block";
    }
    else if (cpu === 2)
    {
        document.getElementById("cpu-choice-lost").innerText = "CPU chose Paper"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Lost").style.display = "block";
    }
    else if (cpu === 3)
    {
        document.getElementById("cpu-choice-win").innerText = "CPU chose Scissors"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Win").style.display = "block";
    }
}

function paper(x){
    let cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu === 1)
    {
        document.getElementById("cpu-choice-win").innerText = "CPU chose Rock"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Win").style.display = "block";
    }
    else if (cpu === 2)
    {
        document.getElementById("cpu-choice-tie").innerText = "CPU chose Paper"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Tie").style.display = "block";
    }
    else if (cpu === 3)
    {
        document.getElementById("cpu-choice-lost").innerText = "CPU chose Scissors"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Lost").style.display = "block";
    }
}

function scissors(x){
    let cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu === 1)
    {
        document.getElementById("cpu-choice-lost").innerText = "CPU chose Rock"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Lost").style.display = "block";
    }
    else if (cpu === 2)
    {
        document.getElementById("cpu-choice-win").innerText = "CPU chose Paper"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Win").style.display = "block";
    }
    else if (cpu === 3)
    {
        document.getElementById("cpu-choice-tie").innerText = "CPU chose Scissors"
        document.getElementById("Main-Screen").style.display = "none";
        document.getElementById("Tie").style.display = "block";
    }
}

function again(){
    document.getElementById("Win").style.display = "none";
    document.getElementById("Lost").style.display = "none";
    document.getElementById("Tie").style.display = "none";
    document.getElementById("Main-Screen").style.display = "block";
}