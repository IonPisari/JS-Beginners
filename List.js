let loadCountriesNames = data => {
    
    let countriesNames = []
    for (let i = 0; i < data.length; i++) {
        countriesNames.push(data[i].name);

        // console.log(data[i]);
        // break;
 
    }
    return countriesNames
}


let loadStatesNames = (data, countryName) =>{
    
    let statesNames = []
    for (let i = 0; i < data.length; i++) {
        if(countryName === data[i].name){
            for (let y = 0; y < data[i].states.length; y++) {
                statesNames.push(data[i].states[y].name); 
                
                
            }
            break;
        }
     
    }
    return statesNames
}


let loadCitiesNames = (data,  stateName) => {
    
    let citiesNames = []
    for (let i = 0; i < data.length; i++) {
        if(data[i].name){
            for (let y = 0; y < data[i].states.length; y++) {
                if (stateName === data[i].states[y].name) {
                    for(let j = 0; j < data[i].states[y].cities.length; j++) {
                        citiesNames.push(data[i].states[y].cities[j].name); 
                        
                        
                    }
                    break;
                }
            }
            
        }
     
    }
    return citiesNames
}


let countrySelected = () => {
    let countryName = event.target.value
    let statesNames = loadStatesNames(data, countryName)
    renderStatesList(statesNames);
    console.log(statesNames);
}
let statesSelected = () => {
    let stateName = event.target.value
    let citiesName = loadCitiesNames(data, stateName)
    renderCitiesList(citiesName);
    console.log(citiesName)
}

let renderCitiesList = list => {
    let wrapper = document.querySelector("#cities-list")

    let html = `<select>`

    for (let i = 0; i < list.length; i++) {
        const ctName = list[i];
        html += `<option>${ctName}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}
let renderStatesList = list => {
    let wrapper = document.querySelector("#states-list")

    let html = `<select onchange="statesSelected()">`;

    for (let i = 0; i < list.length; i++) {
        const stName = list[i];
        html += `<option>${stName}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}

let renderCountriesList = list => {
    let wrapper = document.querySelector("#countries-list")

    let html = `<select onchange="countrySelected()">`;

    for (let i = 0; i < list.length; i++) {
        const cntName = list[i];
        html += `<option>${cntName}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}

let cntNames = loadCountriesNames(data);
renderCountriesList(cntNames)
console.log(cntNames)
