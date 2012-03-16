$(document).ready(function(){

  // Insere classes de last e first 
  // var childs = "div, .row, ul li, label"
  // $('* > :first-child').addClass('first-child')
  // $('* > :last-child').addClass('last-child')
  
  // insere a classe SPAN nos divs da Grid
  $('div[class*="span"]').addClass('span');
  
  $('label').addClass('control-label');

  // Insere uma classe SELECTED para o primeiro Collpase
  $('.collapseGroup summary:first').addClass('active').parent('.details').addClass('active');


  // Faz a troca de Classe SELECTED entre os Collpases
  $('.collapseGroup summary').click(function(){
    $(this).toggleClass('active');
    $(this).parent('.details').toggleClass('active');
  });

  var btnBuscaAvancadaText = $('a[data-target="#optBuscaAvancada"]').html();
  
  $('a[data-target="#optBuscaAvancada"]').click(function(){
    if ( $(this).html() == btnBuscaAvancadaText  ){
      $(this).html('Retornar para a busca simples');
    } else {
      $(this).html( btnBuscaAvancadaText );
    }
  });

  // Setinha na TAB
  $('.tabs li a').append('<span class="setaTab" />');
  $('.tabs li:first-child').addClass('active');

  // Faz a modal animar
  $('.modal').hide().addClass('fade');

  // Adiciona uma classe aos elementos logo após uma tabela
  $('table ~ .navView').addClass('afterTable');

});