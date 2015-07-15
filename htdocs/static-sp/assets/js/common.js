$(function() {

	/**
	 * ページ内スクロール
	 * #の付いたリンクを自動的にスクロール化する
	 */
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").not(':animated').animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	
	
		 $('.bxslider').bxSlider({
	  mode: 'horizontal',
		  auto: true,
		 controls: true,
		  pager: true,
		  speed:1500,
		  pause:1500,
		  minSlides: 2,
		  maxSlides: 2,
		  moveSlides:1,
		  slideWidth:287,
	  });

		$(window).bind("scroll", function() {
	// トップから150px以上スクロールしたら
	if ($(this).scrollTop() > 150) { 
	 // ページトップのリンクをフェードインする
		$(".pageTop").fadeIn();
	} else { // それ以外は
	 // ページトップのリンクをフェードアウトする
		$(".pageTop").fadeOut();
	}
})

});


$(function() {
	//クリックしたときのファンクションをまとめて指定
	$('.tab li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('.tab li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('.tab li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});
});


(function($) {
    // 読み込んだら開始
    $(function() {
        // アコーディオン
        $(".accordion").each(function() {
            var accordion = $(this);
            $(this).find("dt","div.btn-close-square").click(function() {
            //$("> .headline", this).click(function() { // 上段の別の書き方
                var targetContentWrap = $(this).next("dd","div.btn-close-square");
                if ( targetContentWrap.css("display") === "none" ) {
                    accordion.find("dd").slideUp();
                    accordion.find("dt.open").removeClass("open");
                }
                targetContentWrap.slideToggle();
                $(this).toggleClass("open");
            });
        });
    
    });
})(jQuery);


// page Topフェードイン・アウト




