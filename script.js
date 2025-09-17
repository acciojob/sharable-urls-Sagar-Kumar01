// your code here
let form = document.querySelector("#myForm");
let name = document.querySelector("#name");
let year = document.querySelector("#year");
let heading = document.querySelector("#url");

form.addEventListener("submit", (e) => {
  e.preventDefault();

	let naam = name.value;
	let age = year.value;
	
	if(name.value == "" && year.value != ""){
	  let query = `?year=${encodeURIComponent(age)}`;
	  heading.textContent = "https://localhost:8080/" + query;
	}else if(year.value == "" && name.value != ""){
		let query = `?name=${encodeURIComponent(naam)}`;
	  heading.textContent = "https://localhost:8080/" + query;
	}else if(name.value == "" & year.value == ""){
		heading.textContent = "https://localhost:8080/"
	}else{
		let query = `?name=${encodeURIComponent(naam)}&year=${encodeURIComponent(age)}`
		heading.textContent = "https://localhost:8080/"+query
	}
	
});