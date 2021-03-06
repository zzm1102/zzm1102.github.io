(function($) {
	var post = [
	{
		caselink: 'html5/hive/hive-logo/index.html',
		casetitle: 'animation 写效果之 loading 图片',
		casebody: '进度条啊进度条~ clip：rect() 用两个半圆旋转实现 loading 状态',
		casetime: '2015-6-3',
		casesort: 'practice',
		caseimg: 'img/case18.jpg'
	},
	{
		caselink: 'html5/hive/new_hive/new_hive.html',
		casetitle: 'animation 写效果~',
		casebody: '更新中，初级稿',
		casetime: '2015-5-29',
		casesort: 'practice',
		caseimg: 'img/case17.jpg'
	},
	{
		caselink: 'html5/hive/index.html',
		casetitle: '展示型网页',
		casebody: '不会上线了，当布局练习吧虽然写得还是很烂~',
		casetime: '2015-5-22',
		casesort: 'practice',
		caseimg: 'img/case16.jpg'
	},
	{
		caselink: 'html5/bloves/bloves.html',
		casetitle: '手机端html5实践案例',
		casebody: '跟随小火车去追寻回忆~chrome emulation 打开哦~ ',
		casetime: '2015-5-17',
		casesort: 'practice',
		caseimg: 'img/case15.jpg'
	},
	{
		caselink: 'follow-Jennifer-180/Day-15/dropping.html',
		casetitle: 'Imitating Jennifer5 ：dropping box',
		casebody: '5 种不同的animation效果。Have fun with it~',
		casetime: '2014-8-20',
		casesort: 'practice',
		caseimg: 'img/case14.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-13/rock_paper_scissors.html',
		casetitle: 'Imitating Jennifer5 ：rock paper scissors',
		casebody: '还是原来的游戏，还是熟悉的味道~剪刀石头布，过来决一胜负吧hohaha！<br>不过明明随机的，怎么好像每次都是我输得多一点...不嗨森 - - <br><br><strong>POINT:</strong> Math.floor( Math.random()*3 ), countDown, animation ',
		casetime: '2014-8-18',
		casesort: 'practice',
		caseimg: 'img/case13.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-11/color_clock.html',
		casetitle: 'Imitating Jennifer5 ：color clock',
		casebody: '按时间变化及显示颜色的时钟页面',
		casetime: '2014-8-15',
		casesort: 'practice',
		caseimg: 'img/case12.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-9/bouncing_ball.html',
		casetitle: 'Imitating Jennifer4 ：bouncing ball',
		casebody: '学来的第一个小游戏，感受下 insane 的感觉吧！',
		casetime: '2014-8-7',
		casesort: 'practice',
		caseimg: 'img/case11.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-7/which_is_closer.html',
		casetitle: 'Imitating Jennifer3 ：which is closer',
		casebody: '<p>random color, mouseenter, z-index 相关属性。</p><p>记错用 z-index 负值导致的闪烁。</p> <p>原代码：<br><img src="img/z-index.png" alt="z-index code"><br>在 mouseenter 和 mouseleave 过程中不断被触发导致闪烁，一度以为是 mouseenter + mouseleave 导致的问题，后经查阅资料，发现是误用 z-index 负值导致。</p><h2>关于堆叠环境的形成</h2><ul><li>当一个元素是 document 的根元素时（<html>元素）</li><li>当一个元素拥有除 static 以外的位置值和除 auto 以外的 z-index 值时</li><li>当元素有小于 1 的 opacity 值时</li></ul><h2>在相同环境下的堆叠顺序（从下至上）</h2><ol><li>堆叠环境的根元素</li><li>z-index 值为负的定位元素（和它的 children ）</li><li>未定位元素</li><li>z-index 值为auto的定位元素</li><li>z-index 值为正的定位元素（和它的 children ）</li></ol><p>在同一环境下谨慎 z-index 正负值的混用，同为正值或同为负值都可以避免出现闪烁情况。</p><blockquote><i>原文资料：<a href="http://philipwalton.com/articles/what-no-one-told-you-about-z-index/" target="_blank">What No One Told You About Z-Index</a></i></blockquote>',
		casetime: '2014-8-2',
		casesort: 'notes',
		caseimg: 'img/case10.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-6/day-tracker.html',
		casetitle: 'Imitating Jennifer2 ：day-tracker',
		casebody: '排版，关联时间和效果。',
		casetime: '2014-7-26',
		casesort: 'practice',
		caseimg: 'img/case9.png'
	},
	{
		caselink: 'follow-Jennifer-180/Day-4/painting.html',
		casetitle: 'Imitating Jennifer1 ：painting',
		casebody: '简单的填色小游戏，float 排版，思考怎样分割、标示每个方块并尽量简化代码。',
		casetime: '2014-7-17',
		casesort: 'practice',
		caseimg: 'img/case8.png'
	},
	{
		caselink: 'jQuery-practice/event-4/handlebars.html',
		casetitle: '学习进度记录7：handlebars',
		casebody: '初识handlebar~跟随学习进度的最基础的部分，mark 一下，待后面发现更多作用。<br>ps：这个blog用了handlebar貌似可以简单好多',
		casetime: '2014-7-12',
		casesort: 'practice',
		caseimg: 'img/case7.png'
	},
	{
		caselink: 'jQuery-practice/event-3/2.html',
		casetitle: '学习进度记录6：jQuery-slider',
		casebody: '一个简单的 slider 写法，注意简化方法',
		casetime: '2014-7-8',
		casesort: 'practice',
		caseimg: 'img/case6.png'
	},
	{
		caselink: 'jQuery-practice/contact/2.html',
		casetitle: '学习进度记录5：jQuery-contact form',
		casetime: '2014-6-29',
		casesort: 'practice',
		caseimg: 'img/case5.png'
	},
	{
		caselink: 'jQuery-practice/event-2/a_little_creation.html',
		casetitle: '学习进度记录4：jQuery-play with it',
		casebody: '虽然很无聊，不过自己弄点效果玩玩。【仅为记录，无聊慎点】',
		casetime: '2014-6-20',
		casesort: 'practice',
		caseimg: 'img/case4.png'
	},
	{
		caselink: 'jQuery-practice/event-2/2.html',
		casetitle: '学习进度记录3：jQuery-question',
		casebody: '终于开始接触点看起来蛮不错的效果了：）',
		casetime: '2014-6-15',
		casesort: 'practice',
		caseimg: 'img/case3.png'
	},
	{
		caselink: 'jQuery-practice/event-1/experiment.html',
		casetitle: '学习进度记录2：jQuery-Day & Night',
		casebody: 'jQuery 的第一次尝试~',
		casetime: '2014-6-13',
		casesort: 'practice',
		caseimg: 'img/case2.png'
	},
	{
		caselink: 'organic-practice_2/html/index.html',
		casetitle: '学习进度记录1：index page 练习',
		casebody: '刚开始学 html & css，在网上找的模板练习',
		casetime: '2014-6-10',
		casesort: 'practice',
		caseimg: 'img/case1.png'
	}
];

	var template = Handlebars.compile( $('#template').html() );

	$('article.span12').append( template(post) );
	
	$('#scroll-down').click(function(e) {
		$("body").animate({scrollTop:722},300);
		e.preventDefault();
	})

})(jQuery);