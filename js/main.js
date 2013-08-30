
$(function() {  
  $(".form-residential").submit(function(e) {
  	console.log("trying...");
    if (($('#Field8').val().length>0)&&($('#Field4').val().length>0)&&($('#Field9').val().length>0)){
      console.log ('good');
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
      })
    } else {
      console.log ('bad');
      $('.hidden').removeClass('hidden');
    }
	return false;
  });  

  $(".form-commercial").submit(function(e) {
    console.log("trying...");
    if (($('#Field8').val().length>0)&&($('#Field4').val().length>0)&&($('#Field9').val().length>0)){
      console.log ('good');
      $.ajax({  
        type: "POST",  
        url: "http://100shapes.wufoo.com/forms/m7x3z9/#public",
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
    } else {
      console.log ('bad');
      $('.hidden').removeClass('hidden');
    }

  return false;
  });  
});

