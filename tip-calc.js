let btn = document.getElementById("calculate").addEventListener('click', () => {
    let amount = document.getElementById("amount").value;
    // console.log(amount)
    let persons = document.getElementById("persons").value;
    // console.log(persons)
    let services = document.forms[0];
    let num;
    for(let i = 0; i < services.length; i++) {
        if(services[i].checked){
            num = services[i].value;
        }
    }
    // console.log(num)
    //  let calculate = 
     document.getElementById("total").innerHTML = Math.floor((amount * num) / persons);
    //  console.log(calculate)
})