var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
  var menu = document.querySelector('.js-menu');  
  menu.classList.toggle('menu--exibindo');

  var icon = document.querySelector('.js-botao-chaveador');  
  if(icon) {
    icon.classList.toggle('botao-chaveador--fechar');
    icon.classList.toggle('botao-chaveador');
  }
}