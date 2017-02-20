const locations = new Locations();

$( function() {
    $( "#selectable" ).selectable();

    $('.field-images img').click(function() {
      let path = $(this).attr('src');
      $('.default-image')
        .addClass('current-image')
        .html(`<img src="${path}" alt="Location" />`);
    });

    $('.default-image').click(function() {
      $(this).html('<img src="img/location-default.png" alt="Location default" />');
    });

    $('.field-info').submit(function(event) {
      event.preventDefault();
      let locationImgSrc = $('.default-image img').attr('src');
        let locationImg = {
          name: 'image',
          value: locationImgSrc
        };
      let locationData = $(this).serializeArray();
      locationData.push(locationImg);
      locations.createLocation(locationData);
      managerHide();
      event.preventDefault();
    });
} );

function managerShow() {
  $('#manager').removeClass('hidden');
}
function managerHide() {
  $('#manager').addClass('hidden');
}
