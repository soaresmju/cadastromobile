// This is a JavaScript file
$(document).on("click","#cadastrar",function(){
  var dados = {
    "nome": $("#nome").val(),
     "email": $("#email").val()
  };
$.ajax({
  type:"post", //como enviar
  url:"https://projetodb-soaresmju.c9users.io/cadastra.php", //onde enviar
  data:dados, //o que enviar
  success: function(data){
    navigator.notification.alert(data);
    $("#nome").val("");
     $("#email").val("");
  },
  error: function(data){
    navigator.notification.alert(data);
  }
});

});

$(document).on("click","#listar",function(){
  $(location).attr("href","lista.html")

});


