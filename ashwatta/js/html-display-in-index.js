    $(document).ready(function(){
       $("#content-page").click(function(){
        $('#result').load('about.html');
         //alert("Thanks for visiting!");
       }); 

       $("#page2").click(function(){
        $('#content-page').load('contact.html');
         //alert("Thanks for visiting!");
       });
     });