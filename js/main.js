$(document).ready(function(){

    $("#thumb1").click(function(){
        $("#select").attr('src','images/step-1.jpg');
        $("#step-text").html("Step 1 - Gather your ingredients.")
        $("#finished").hide();

        // styling
        $(this).css('border', '5px solid #fff2aa').removeClass('active');
        $('#thumb2').css('border', '5px solid #fff').removeClass('active');
        $('#thumb3').css('border', '5px solid #fff').removeClass('active');
        $('#thumb4').css('border', '5px solid #fff').removeClass('active');
        $('#thumb5').css('border', '5px solid #fff').removeClass('active');
    });

    $("#thumb2").click(function(){
        $("#select").attr('src','images/step-2.jpg');
        $("#step-text").html("Step 2 - Unpack everything and put it into a bowl.")
        $("#finished").hide();

        // styling
        $(this).css('border', '5px solid #fff2aa').removeClass('active');
        $('#thumb1').css('border', '5px solid #fff').addClass('active');
        $('#thumb3').css('border', '5px solid #fff').removeClass('active');
        $('#thumb4').css('border', '5px solid #fff').removeClass('active');
        $('#thumb5').css('border', '5px solid #fff').removeClass('active');
    });

    $("#thumb3").click(function(){
        $("#select").attr('src','images/step-3.jpg');
        $("#step-text").html("Step 3 - Mix mashed banana, coconut flakes and vanilla.");
        $("#finished").hide();

        // styling
        $(this).css('border', '5px solid #fff2aa').removeClass('active');
        $('#thumb1').css('border', '5px solid #fff').addClass('active');
        $('#thumb2').css('border', '5px solid #fff').addClass('active');
        $('#thumb4').css('border', '5px solid #fff').removeClass('active');
        $('#thumb5').css('border', '5px solid #fff').removeClass('active');
    });

    $("#thumb4").click(function(){
        $("#select").attr('src','images/step-4.jpg')
        $("#step-text").html("Step 4 - Drop the mixture on a parchment-paper-lined baking sheet and shape into cookies.");
        $("#finished").hide();

        // styling
        $(this).css('border', '5px solid #fff2aa').removeClass('active');
        $('#thumb1').css('border', '5px solid #fff').addClass('active');
        $('#thumb2').css('border', '5px solid #fff').addClass('active');
        $('#thumb3').css('border', '5px solid #fff').addClass('active');
        $('#thumb5').css('border', '5px solid #fff').removeClass('active');
    });

    $("#thumb5").click(function(){
        $("#select").attr('src','images/step-5.jpg')
        $("#step-text").html("Step 4 - Bake in pre-heated 350F oven for 20-25 minutes, until golden-brown.");
        $("#finished").show();

        // styling
        $(this).css('border', '5px solid #fff2aa').removeClass('active');
        $('#thumb1').css('border', '5px solid #fff').addClass('active');
        $('#thumb2').css('border', '5px solid #fff').addClass('active');
        $('#thumb3').css('border', '5px solid #fff').addClass('active');
        $('#thumb4').css('border', '5px solid #fff').addClass('active');
    });

});
