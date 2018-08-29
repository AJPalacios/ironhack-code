$('document').ready(function(){

  $('#menu>ul>li:first-child').addClass('selected')

  $('section.container>article:nth-child(2)').addClass('middle')

  $('#list-container>div:odd').addClass('highlighted')

  $('.list-item:last').css('border','1px solid red')

  $('#form-container input[autofocus]').css('border', '1px solid red')

});