var header =document.getElementById("header");
header.style="background-color:grey; border: 1px solid #eaea10;";
var title = document.createElement("h1");
title.textContent="Random Tip Generatior";
header.appendChild(title);
var description = document.createElement("p");
description.innerHTML = "This is the description of the project";
header.appendChild(description);