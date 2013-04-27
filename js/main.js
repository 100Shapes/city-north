
$(function() {  
  $(".submit").click(function(e) {
  	console.log("trying...");
    $.ajax({  
  		type: "POST",  
  		url: "http://100shapes.wufoo.com/forms/z7x3p3/#public",
  		data: $("#form1").serialize(),  
  		success: function(data, textStatus, jqXHR) {  
    		console.log(data, textStatus, jqXHR);

        window.location.href="thanks.html";
		},
		error: function(jqXHR, textStatus, errorMessage) {
           console.log(jqXHR.getAllResponseHeaders(), textStatus, errorMessage); // Optional
           window.location.href="thanks.html";
        }
	});

	return false;
  });  
});