$(function (){
   $('h2').css({'color': 'blue'});
});
$(function (){
   $('input[name = "name"]').change(function(){
      let text = $(this).val();
      $('input[name="submit"]').val(text);
   });
   // $('form').show(2000).delay(3000).hide(2000);
   $('form').show();
   $('input[name="surname"]').keyup(function (){
      let text =$(this).val();
      $('input[name="sub"]').val(text);
   });
   $('.ani').show(2000).delay(3000).hide(2000);
   $('#test').animate({'width':'500px'},5000).delay(1000).animate({'width':'100px'},5000);
   $('#test2').fadeOut(6000);//fadeIn
   // alert($('input[name="name"]').attr('value'));
   $(window).resize(function(){ //.scroll
      let width = $(this).width();
      let height = $(this).height();
      console.log(width,height);
      $('input[name="width"]').val(width+" ширина");
      $('input[name="height"]').val(height +" высота");
      // console.log(width);
   });
   $('h1').addClass('red');
   // $('h1').hover(function(){
   //    $(this).addClass('green');
   //    $(this).on('click', function(){
   //       $(this).removeClass('green').removeClass('red');
   //    });
   // });
   $('h1').click(function(){
         $(this).toggleClass('green');
   });

   // let text = $('.text').text();
   // console.log(text);
   $('.text').text('New text!!!!');
   let newHtml = '<h4>What is this????</h4><p>new P!!!!!!</p><ul></ul>';
   $('.newHTML').html(newHtml);
   $('ul').append('<li>New Stroka</li>');// в конец столбца , а prepend в начало столбца
   // $('ul').empty(); // список пустой
   // $('ul').remove(); // удаляет список целиком
   // $('ul').after('<span>Hello</span>'); // за пределы нашего списка
      $('ul li:last-child').after('<li>Hello</li>'); // добавляем строку
   $('form').wrap('<div class="red"></div>');
//https://kenwheeler.github.io/slick/
   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
   });
   $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
   });
});