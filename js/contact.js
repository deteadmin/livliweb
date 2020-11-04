/* Template Name: Delvy - Landing
   Author: Themesbrand
   Version: 1.0.0
   Created: Sep 2020
   File Description: Contact Form
*/
$('#contact-form').submit(function(e) {
    e.preventDefault();
    
    var msg = {
        subject: $('#name').val(),
        email: $('#email').val(),
         message: $('#comments').val(),
    };
    alert(msg)

$.ajax({

           url: "https://xhjjrv6zl2.execute-api.us-east-1.amazonaws.com/prod/contact",
           type: "POST",
           beforeSend: function( xhr ) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
          },
           crossDomain: true,
           data: JSON.stringify(msg),
           dataType: "json",
           success: function (response) {
               var resp = JSON.parse(response)
               document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
           },
           error: function (xhr, status) {
               alert("errorSS");
           }
       });
  })

// $('#contact-form').submit(function() {
//     var action = $(this).attr('action');
//     $("#message").slideUp(750, function() {
//         $('#message').hide();

//         $('#submit')
//             .before('')
//             .attr('disabled', 'disabled');

//         $.post(action, {
//                 name: $('#name').val(),
//                 email: $('#email').val(),
//                 comments: $('#comments').val(),
//             },
//             function(data) {
//                 document.getElementById('message').innerHTML = data;
//                 $('#message').slideDown('slow');
//                 $('#cform img.contact-loader').fadeOut('slow', function() {
//                     $(this).remove()
//                 });
//                 $('#submit').removeAttr('disabled');
//                 if (data.match('success') != null) $('#cform').slideUp('slow');
//             }
//         );

//     });

//     return false;

// });



