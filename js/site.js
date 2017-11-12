$(document).ready(function(){
    
    //MAIN NAVIGATION
   $("#about-button").click(
        function(){
        $("#about-view").show();
        $("#frontpage").hide();
        });
   $("#resume-button").click(
       function(){
       $("#resume-view").show();
        $("#frontpage").hide();
        });
    $("#project-button").click(
        function(){
        $("#project-view").show();
        $("#frontpage").hide();
        });
//    $("#contact-button").click(
//        function(){
//       $("#about-view").show();
//        }); 
    
    //PAGE NAVIGATION
    $("#back-about").click(
        function(){
        $("#about-view").hide();
        $("#frontpage").show();
        });
    $("#back-resume").click(
        function(){
        $("#resume-view").hide();
        $("#frontpage").show();
        });
    $("#back-project").click(
        function(){
        $("#project-view").hide();
        $("#frontpage").show();
        });
//    $("#back-contact").click(
//        function(){
//        $("#about-view").hide();
//        $("#frontpage").show();
//        console.log("it worked!");
//        });
    
});

