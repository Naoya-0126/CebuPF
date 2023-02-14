// ハンバーガーメニュー
$('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('#nav-list').toggleClass('panelactive');
});

$('.list>a').click(function(){
    $('.hamburger').removeClass('active');
    $('#nav-list').removeClass('panelactive');
});


// スクロールトップ
$('.page-top').click(function(){
    $('body,html').animate({
        scrollTop:0
    },500);
    return false;
});