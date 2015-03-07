$(function(){
  $('.toggle-nav').click(function(){
    $('#site-wrapper').toggleClass('show-nav');
    });
  $(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        });
    });
});
$(document).ready(function(){
$('.showinfo').click(function(){
    $(this).closest('.post').find('.infoblock').delay(100).fadeToggle(250);
    $(this).closest('.post').find('.captionblock, .tagsblock').fadeOut(100);
    $(this).closest('.post').find('.showcaption, .showtags').removeClass("in");
    $(this).toggleClass('in');
});
$('.showcaption').click(function(){
    $(this).closest('.post').find('.captionblock').delay(100).fadeToggle(250);
    $(this).closest('.post').find('.infoblock, .tagsblock').fadeOut(100);
    $(this).closest('.post').find('.showinfo, .showtags').removeClass("in");
    $(this).toggleClass('in');
});
$('.showtags').click(function(){
    $(this).closest('.post').find('.tagsblock').delay(100).fadeToggle(250);
    $(this).closest('.post').find('.infoblock, .captionblock').fadeOut(100);
    $(this).closest('.post').find('.showinfo, .showcaption').removeClass("in");
    $(this).toggleClass('in');
});
});
$(function () {
  $('#loadingscreen').delay(5000).fadeToggle(250);
});
$.each($('.photoset-grid'), function() {
    $(this).photosetGrid({
        highresLinks: true,
        rel: $(this).attr('data-id'),
 
        onComplete: function(){
            $('.photoset-grid a').magnificPopup({
                type:'image',
                gallery: {
                    enabled: true
                },
           
            });
        }
    });
});
</script>
<script type="text/javascript">
$(function () {
  var $panorama = $('.panorama');
  var left = $panorama.offset().left;
  var width = $panorama.width();
  $('.panorama').mousemove(function (e) {
    var offset = e.pageX - left;
    var percentage = offset / width * 100;
    $panorama.css('background-position', percentage + '% 0');
  });
});
$(window).load(function () {
$('#entries').masonry({
itemSelector : ".post",
appendedContent: $('#entries'),
}
);
});
