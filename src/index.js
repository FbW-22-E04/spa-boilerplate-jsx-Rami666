import React from "react";
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render

let name = "Rami";
let age = 30;



let output = (
	<span>
		{name} is {age} years old
	</span>
);




//render app to root
root.render(output);




