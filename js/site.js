$(document).ready(function(){
  console.log('I AM THE READYS');
  console.log('here we go grunt');

  $(document).on('mousemove', function(e){
    console.log('x: ' + e.clientX + ' ' + 'y: ' +  e.clientY);
  });

});
