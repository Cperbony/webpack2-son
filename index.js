import test from './test';
require('./app.less');

test();

$(document).ready(function(){
  $('input:text').val('Lucas Perboni, Claus e Ná e Noah');
});
