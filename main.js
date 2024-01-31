const numberInput = document.getElementById('numberInput')
const numberList = document.getElementById('numberList')
let numbers = [];

function addNumber() {
    const inputValue = numberInput.inputValue;

    numbers.push(Number(inputValue));
    updateList();
    numberInput.value='';


    function updateList(){
        const listItems = numbers.map(number => `<li>$number</li>`);
        numberList.innerHTML = listItems.join('');
        alert(`Számok: ${numbers.join(', ')}`)
        

    }

    function findMinumum(){
        const minimum = Math.min(...numbers);
        alert(`Minimum: ${minimum}`);


    }

}