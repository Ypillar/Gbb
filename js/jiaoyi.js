$(document).ready(function() {

    $("#liaid1").click(function() {
        $(".cenlia1").show();
        $(".cenlia2").hide();
        $(".cenlia3").hide();
        $(this).css({
            "background": "#ffffff",

        });
        $(".bora").css("border-right", "1px solid #ffffff");

        $(".bga").css("margin-left", "0");
        $("#liaid3").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });
         $("#liaid2").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });
    });
    $("#liaid2").click(function() {
        $(".cenlia2").show();
        $(".cenlia1").hide();
        $(".cenlia3").hide();
        $(this).css({
            "background": "#ffffff",

        });
        $(".bora").css("border", "0");

        $(".bga").css("margin-left", "133px");
        $("#liaid1").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });
$("#liaid3").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });

    });
    $("#liaid3").click(function() {
        $(".cenlia3").show();
        $(".cenlia1").hide();
        $(".cenlia2").hide();
        $(this).css({
            "background": "#ffffff",

        });
        $(".bora").css("border-left", "1px solid #ffffff");

        $(".bga").css("margin-left", "266px");
        $("#liaid1").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });
         $("#liaid2").css({
            "background": "#f8e6cb",
            "color": "#000000"
        });

    });
});
