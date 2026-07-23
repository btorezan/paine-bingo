const board = document.getElementById("bingoBoard");

const lastNumber = document.querySelector("#lastNumber span");

const STORAGE_KEY = "bingo-board";

const columns = [

    {letter:"B",start:1},

    {letter:"I",start:16},

    {letter:"N",start:31},

    {letter:"G",start:46},

    {letter:"O",start:61}

];

let selected = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

columns.forEach(columnData=>{

    const column=document.createElement("div");

    column.className="column";

    const header=document.createElement("div");

    header.className=`header ${columnData.letter}`;

    header.innerText=columnData.letter;

    column.appendChild(header);

    for(let i=0;i<15;i++){

        const number=columnData.start+i;

        const div=document.createElement("div");

        div.innerText=number;

        div.className=`number ${columnData.letter}`;

        if(selected.includes(number))
            div.classList.add("selected");

        div.onclick=()=>{

            div.classList.toggle("selected");

            if(div.classList.contains("selected")){

                if(!selected.includes(number))
                    selected.push(number);

            }else{

                selected=selected.filter(n=>n!==number);

            }

            localStorage.setItem(STORAGE_KEY,JSON.stringify(selected));

            lastNumber.innerText=`${columnData.letter}${number}`;

        };

        column.appendChild(div);

    }

    board.appendChild(column);

});

document.getElementById("clearBoard").onclick=()=>{

    if(!confirm("Limpar todas as marcações?"))
        return;

    selected=[];

    localStorage.removeItem(STORAGE_KEY);

    document.querySelectorAll(".number").forEach(n=>{

        n.classList.remove("selected");

    });

    lastNumber.innerText="--";

};

document.getElementById("fullscreen").onclick=()=>{

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

};

document.addEventListener("fullscreenchange",()=>{

    const btn=document.getElementById("fullscreen");

    btn.innerHTML=document.fullscreenElement
        ? "🡼 Sair da Tela Cheia"
        : "⛶ Tela Cheia";

});