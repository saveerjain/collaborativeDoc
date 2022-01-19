var socket; 
$(document).ready(function(){

  // jQuery methods go here...
socket = io.connect('http://localhost:3000');
socket.on('content',load);



$('#story').keypress(function(event){
    
        save(); 
    
});

$('#story').keydown(function(e){
 
    if(e.keyCode == 8) {
        save();
    }
});

});
function load(content){
  $('#story').val(content);
}
function save(){
  var data = $('#story').val();
  socket.emit('text',data);
}
