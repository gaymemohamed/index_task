$(document).ready(function(){
    $('.index-button .btn1').click(function(){
        $(this).addClass('slected1').siblings().removeClass('slected2');
        $('.BT1').fadeIn(100);
        $('.BT2').hide();
    });
    $('.index-button .btn2').click(function(){
        $(this).addClass('slected2').siblings().removeClass('slected1');
        $('.BT2').fadeIn(100);
        $('.BT1').hide();   
    });
    
    
})