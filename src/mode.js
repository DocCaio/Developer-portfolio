const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo);
});

 

document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    let paragrafo = document.querySelector('label')
document.body.classList.contains('dark-mode')
? paragrafo.textContent = 'Modo Claro'
: paragrafo.textContent = 'Modo noturno'

});