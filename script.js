let searchbtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchbtn.addEventListener("click", () => {
	// let countryName = "India";
	let countryName = countryInp.value;
	let FinalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
	console.log(FinalUrl);

	fetch(FinalUrl)
	 .then((response) => response.json())
	 .then((data) => {
		console.log(data[0]);
		console.log(data[0].capital[0]);
		console.log(data[0].flags.svg);
		console.log(data[0].name.common);
		console.log(data[0].continents[0]);
		console.log(data[0].timezones[0]);
		console.log(data[0].population);
		console.log(data[0].subregion);
		console.log(data[0].borders);
		console.log(data[0].altSpellings);
      
       console.log(Object.keys(data[0].languages)[0]);
	

		console.log(Object.keys(data[0].currencies)[0]);
		console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
		console.log(data[0].altSpellings);
		console.log(data[0].translations);
		console.log(data[0].tld);
		// console.log(data[1].official[0]);
		console.log(data[0].maps);
		console.log(data[0].coatOfArms.svg)
	
         
         result.innerHTML = `
         <img src="${data[0].flags.svg}" class="flag-img">
        <img src="${data[0].coatOfArms.svg}" class="coast-img">
         <h2>${data[0].name.common}</h2>
         <div class="wrapper">
            <div class="data-wrapper">
               <h4>Captial : </h4>
                 <span>${data[0].capital[0]}</span><br>
            </div>
            <div class="data-wrapper">   
               <h4>Continents :</h4>
                 <span>${data[0].continents[0]} </span>
            </div>  
            <div class="data-wrapper">   
               <h4>Time-zones :</h4>
                 <span>${data[0].timezones[0]} </span>
            </div>
            <div class="data-wrapper">
               <h4>Population :</h4>
                 <span>${data[0].population} </span>
            </div>            
            <div class="data-wrapper">
               <h4>languages :</h4>
                 <span>${data[0].languages} </span>
            </div>

            <div class="data-wrapper">
               <h4> Currencie </h4>
                  <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
            </div>
            <div class="data-wrapper">
              <h4> Borders :</h4>
                <span> ${data[0].borders}</span>
             </div>
             <div class="data-wrapper">
              <h4>Other Name : </h4>
                <span>${data[0].altSpellings}</span>
             </div>
         </div>
	`;
})
	 .catch(()=>{
	 	if (countryName.length == 0){
	 		result.innerHTML=`<h3 class="valid">The input field can not be empty</h3>`;
	 	}else{
	 		result.innerHTML = `<h3 class="valid"> Plese enter a valid country name</h3>`;
	 	}
	 })
});