const board = document.getElementById("bingoBoard");

const columns = [
    {letter:"B", start:1},
    {letter:"I", start:16},
    {letter:"N", start:31},
    {letter:"G", start:46},
    {letter:"O", start:61}
];

columns.forEach(col =>{

    const column = document.createElement("div");
    column.className="column";

    const header=document.createElement("div");
    header.className=`header ${col.letter}`;
    header.innerText=col.letter;

    column.appendChild(header);

    for(let i=0;i<15;i++){

        const num=document.createElement("div");

        num.className="number";

        num.innerText=col.start+i;

        num.addEventListener("click",()=>{

            num.classList.toggle("selected");

        });

        column.appendChild(num);

    }

    board.appendChild(column);
    

});

const fullscreenButton = document.getElementById("fullscreen");

fullscreenButton.addEventListener("click", () => {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});