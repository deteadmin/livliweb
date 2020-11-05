// ----- CONTACT ----- //

  
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        var msg = {
            subject: $('#name').val(),
            email: $('#exampleInputEmail3').val(),
             message: $('#comments').val(),
        };
       
      
             $.ajax({
       beforeSend: function( xhr ) {
        xhr.setRequestHeader('Content-Type', 'text/plain')
           // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            
            // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
          },
          headers: {
            'Content-Type':'text/plain',
          
        },
               url: "https://3j937buxz6.execute-api.us-east-1.amazonaws.com/adopter/contact",
               type: "POST",
               //crossDomain: true,
               data: JSON.stringify(msg),
               dataType: "json",
               success: function (response) {
              
                //var resp = JSON.parse(response)
                document.getElementById('message').innerHTML = "Thanks for getting in touch. We will contact you within 24 hrs! ";
                 $('#message').slideDown('slow');
                 $('#cform img.contact-loader').fadeOut('slow', function() {
                     $(this).remove()
                 });
                 $('#submit').removeAttr('disabled');
                // if (data.match('success') != null) $('#cform').slideUp('slow');
                   //var resp = JSON.parse(response)
                   
               },
               error: function (xhr, status) {
                document.getElementById('message').innerHTML = "Thanks for getting in touch. We will contact you within 24 hrs!. You can also reach us at (732) 554-1390 M-F 8-5 pm";
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
               }
           });
        });

  