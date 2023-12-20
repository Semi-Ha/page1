$(".btns>li").click(function(){
   $(this).addClass("active");
   $(this).siblings().removeClass("active");
   /*필터기능*/
   let a=$(this).attr('data-filter')
   $(".contents").isotope({filter:a})
})




const grid=new Isotope(".contents",{
   itemSelecor:'.conbox',
   columnWidth:'.conbox',
   transition:'0.5s'
})


setTimeout(function(){$(".contents").Isotope('layout')},100)/**iostope 단점보완 뭉침을 방지 */

$(".fancybox").fancybox();