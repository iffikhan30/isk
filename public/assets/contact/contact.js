$(document).ready(function(){
/**
 * Contact form
 * @version 1.0.0
 */

//check the form validation
$("#contactForm").validator().on('submit', function (event) {

    if($('#form-submit').hasClass('disabled') == false) {
        event.preventDefault();
        console.log("IM HERE");
        submitForm();
    }
});

//fetch all the values from form
function submitForm(){
    // Initiate Variables With Form Content
    var name    = $("#inputName").val();
    var phone   = $("#inputPhone").val();
    var email   = $("#inputEmail").val();
    var subject = $("#inputSubject").val();
    var message = $("#inputMessage").val();

    //process remote data
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbwfoXcpfrGHU2QqZGvEw5d-WI00v03uwFbqAy4h9MC0EPSakyk/exec",
        dataType: "json",
        //data: $('#contactForm').serializeObject(),
        data: "name=" + name + "&email=" + email+ "&phone=" + phone +"&subject=" + subject + "&message=" + message,
        success : function(res){
            console.log(res.result);
            submitMSG('Message has been '+res.result+' sent');
            
        }
    });
}

//submit message
function submitMSG(msg)
{
    $("#msgSubmit").removeClass().addClass('animated fadeIn h3 text-center col-md-6 col-md-offset-3').text(msg);
}
});