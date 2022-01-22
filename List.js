let loadCountriesNames = data => {
    
    let countriesNames = []
    for (let i = 0; i < data.length; i++) {
        countriesNames.push(data[i].name);

        // console.log(data[i]);
        // break;
 
    }
    return countriesNames
}
let cntNames = loadCountriesNames(data);
console.log(cntNames)

let loadStatesNames = (data, countryName) =>{
    
    let statesNames = []
    for (let i = 0; i < data.length; i++) {
        if(countryName === data[i].name){
            for (let y = 0; y < data[i].states.length; y++) {
                statesNames.push(data[i].states[y].name); 
                
                // console.log(data[i].states[y])
                // break;
            }
        }
     
    }
    return statesNames
}
// let stNames = loadStatesNames(data, stateName)
// console.log(stNames)


let loadCitiesNames = (data, countryName, statesName) => {
    
    let citiesNames = []
    for (let i = 0; i < data.length; i++) {
        if(countryName === data[i].name){
            for (let y = 0; y < data[i].states.length; y++) {
                if (statesName === data[i].states[y].name) {
                    for(let j = 0; j < data[i].states[y].cities.length; j++) {
                        citiesNames.push(data[i].states[y].cities[j].name); 
                        
                        // console.log(data[i].states[y].cities[j])
                        // break;
                    }
                }
            }
            
        }
     
    }
    return citiesNames
}

//problema se incepe de aici 
//nu am scris codul corect
let countrySelected = () => {
    let countryName = event.target.value
    let statesNames = loadStatesNames(data, countryName)
    renderStatesList(statesNames);
    console.log(statesNames)
}
let statesSelected = () => {
    let countryName = event.target.value
    let statesNames = loadStatesNames(data, countryName)
    let citiesNames = loadCitiesNames(data, countryName, statesNames)
    renderCitiesList(citiesNames);
    console.log(citiesNames)
}

let renderCitiesList = list => {
    let wrapper = document.querySelector("#cities-list")

    let html = `<select>`

    for (let i = 0; i < list.length; i++) {
        const ctNames = list[i];
        html += `<option>${ctNames}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}
let renderStatesList = list => {
    let wrapper = document.querySelector("#states-list")

    let html = `<select onchange="statesSelected()">`;

    for (let i = 0; i < list.length; i++) {
        const stNames = list[i];
        html += `<option>${stNames}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}

let renderCountriesList = list => {
    let wrapper = document.querySelector("#countries-list")

    let html = `<select onchange="countrySelected()">`;

    for (let i = 0; i < list.length; i++) {
        const cntNames = list[i];
        html += `<option>${cntNames}</option>`
    }

    html += `</select>`

    wrapper.innerHTML = html
}

// let cntNames = loadCountriesNames(data);
renderCountriesList(cntNames)
// console.log(cntNames)