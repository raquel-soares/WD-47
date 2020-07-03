const btn = document.querySelector('#btnMudaLayout')
const mural = document.querySelector('.mural')

function mudaLayout() {
    mural.classList.toggle('mural--linha')
}

function mudaTexto() {
    if (btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}


btn.addEventListener('click', mudaLayout)
btn.addEventListener('click', mudaTexto)