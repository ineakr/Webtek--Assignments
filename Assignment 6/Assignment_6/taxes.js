
const incomeValue = document.getElementById('income');
const wealthValue = document.getElementById('wealth');
let taxBox = document.getElementById('tax');


function tax(income, wealth) {
    let taxValue = (0.35*income) + (0.25*wealth);
    taxBox.value = taxValue;
}


incomeValue.addEventListener('input', (event)=> {
    let income = incomeValue;
    tax(income.value, 0)
    wealthValue.addEventListener('input', (event)=> {
        let wealth = wealthValue;
    
    tax(income.value, wealth.value)

    })
})

console.log(0.1+0.2)
