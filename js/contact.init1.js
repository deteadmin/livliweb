// ----- CONTACT ----- //
$('#contact-form').submit(function(e) {
    e.preventDefault();
    
    var msg = {
        subject: $('#name').val(),
        email: $('#email').val(),
         message: $('#comments').val(),
    };
    alert("SUBMIT1");

$.ajax({

           url: "https://xhjjrv6zl2.execute-api.us-east-1.amazonaws.com/prod/contact",
           type: "POST",
           beforeSend: function( xhr ) {
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            
            //xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            //xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
          },
           //crossDomain: true,
           data: JSON.stringify(msg),
           dataType: "json",
           success: function (response) {
               var resp = JSON.parse(response)
               alert('SUCCESS');
           },
           error: function (xhr, status) {
               alert("error");
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