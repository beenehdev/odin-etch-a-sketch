const container = document.getElementById("container");
const userRoot = 16;
let rootDiv = null; 

for (let i = 0; i < userRoot*userRoot; i++) {

    if (i % userRoot === 0) {
        const rootDiv = document.createElement("div");
        rootDiv.classList.add("genericDiv", "rootDiv",);
        rootDiv.dataset.index = i;
        rootDiv.addEventListener("mouseover", drawOnDiv);

        container.appendChild(rootDiv);
        continue; 
    };

    const branchDiv = document.createElement("div");
    branchDiv.classList.add("genericDiv", "branchDiv",)
    branchDiv.dataset.index = i;
    branchDiv.addEventListener("mouseover", drawOnDiv);

    rootDiv.appendChild(branchDiv);
};

function drawOnDiv() {}; 