
function onLoad(gridSize){
    
    var brightness = 100;
    clearGrid();
    let width = 750/gridSize;
    for(let i = 0; i<gridSize; i++)
    {
        for(let j = 0; j<gridSize; j++)
        {
            let newDiv = document.createElement("div");
            newDiv.classList = "gridItem";
            newDiv.style.width = width + "px";
            newDiv.style.height = width + "px";
            newDiv.style.backgroundColor = "antiquewhite";
            const container = document.querySelector(".container");
            container.appendChild(newDiv);
            newDiv.onmouseover = () =>  
            {
                if(newDiv.style.backgroundColor == "antiquewhite")
                {
                    console.log("true")
                    let colour = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                    newDiv.style.backgroundColor = colour;
                } 
            }
        }        
    }
}

function clearGrid()
{
    const container = document.querySelector(".container");
    for(let i = 0; i< container.children.length; i++)
    {
        let child = container.children[i];
        child.style.backgroundColor = "antiquewhite";
    }
}

function newGrid()
{
    do
    {
        var newSize = prompt("Enter new grid size between 1-100");
    } 
    while(newSize > 100 || newSize < 0);

    const container = document.querySelector(".container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
    onLoad(newSize);
}
