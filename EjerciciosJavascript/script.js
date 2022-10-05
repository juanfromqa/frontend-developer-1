const h1 = document.querySelector('h1');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
const button = document.getElementById('btnCalcular')
const form = document.getElementById('form')

h1.innerHTML = 'Patito'
h1.setAttribute('data-testid', "header")
h1.classList.add('verde')


const img = document.createElement('img');

img.setAttribute('src', '/Users/j/src/frontend-developer-1/EjerciciosFrontEnd/logos/favicon_yard_sale.svg');
console.log(img)

// pid.append(img)

form.addEventListener('submit', btnOnClick)

function btnOnClick(event){
    event.preventDefault()
    const res = input1.value + input2.value
    resultado.innerText = "Resultado = " + res;
}