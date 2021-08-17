
const gridContainer = document.querySelector("#gridContainer");





function createGrid(number) {
    let area = number * number;
    for (let index = 0; index < area; index++) {
        let cell = document.createElement("div");
        cell.classList.add("gridItem");
       
            cell.addEventListener("mouseover", function () {
                cell.classList.add("active");
            });
        

        gridContainer.appendChild(cell);

    }

}


createGrid(16);

function clear(element) {
    element.classList.remove("active");
    
}
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",function () {
    const grids = document.querySelectorAll(".active");
    grids.forEach(element => clear(element));
    
});

