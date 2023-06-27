const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo);
});

 

document.querySelector("data-bs-theme", modo).addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    let label = document.querySelector("label")
document.body.classList.contains('dark-mode')
? label.textContent = 'Modo Claro'
: label.textContent = 'Modo noturno'

});