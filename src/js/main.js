$( function() {
  $('.menu li a').click(function() {
    let current = $(this).attr('href');
    $('.menu a').removeClass('active');
    $(this).addClass('active');
  });

  $('.flag span').click(function() {
    let state = $(this).attr('class') == 'flagged';
    if (state) {
      $(this).addClass('no-flagged').removeClass('flagged');
    } else {
      $(this).addClass('flagged').removeClass('no-flagged');
    }
  });
});
