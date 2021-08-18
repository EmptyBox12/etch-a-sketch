
const gridContainer = document.querySelector("#gridContainer");
createGrid(16);



function getInputValue(){
    
    const size = parseInt(document.querySelector("#size").value);
    clearGrid();
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr);  grid-template-rows: repeat(${size}, 1fr);`;
    
    createGrid(size);
    
    
}







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
function clearGrid() {
  
        const cells = document.querySelectorAll(".gridItem");
        

        cells.forEach(element => clearGridAction(element));

    }
 function clearGridAction(element){
     gridContainer.removeChild(element);
 }   
    


    





function clear(element) {
    element.classList.remove("active");
    
}
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",function () {
    const grids = document.querySelectorAll(".active");
    grids.forEach(element => clear(element));
    
});

