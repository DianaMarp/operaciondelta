const menuBtn = document.getElementById('btn-menu')
const menuOpciones = document.getElementById('menu-opciones')


menuBtn .addEventListener('click', function(){
    menuOpciones.style.display = 'flex'
    menuBtn .style.display = 'none'
})