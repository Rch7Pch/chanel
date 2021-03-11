var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

$('document').ready(function(){

  loadItem();

  $('body').on('click', '.choice__ml', function() {
    $('.choice__ml').removeClass('active');
    $(this).addClass('active');
  });

  $('body').on('click', '.btn__add', function() {
    $(this).removeClass('choosen');
    $(this).addClass('choosen');
    $(this).html('В корзине')
  });



});

function loadItem() {
  $.getJSON('./data/products.json', function (data) {
    let param = getUrlParameter("id");
    let male = getUrlParameter("male");

    if (male === "women") {
      let html = '<a href="catalog.html?male=women" class="subtitle__arrow" target="_self"><img src="img/left-arrow.svg" alt="button left arrow"></a>\n' +
        '        <a href="catalog.html?male=women" class="subtitle__text" target="_self">Парфюмерия</a>'
      $(".subtitle").html(html);
    } else {
      let html = '<a href="catalog.html?male=men" class="subtitle__arrow" target="_self"><img src="img/left-arrow.svg" alt="button left arrow"></a>\n' +
        '        <a href="catalog.html?male=men" class="subtitle__text" target="_self">Парфюмерия</a>'
      $(".subtitle").html(html);
    }

    let recent_products = JSON.parse($.cookie('resent_products') || '[]') || [];
    $.cookie('resent_products', JSON.stringify([...recent_products, param]), { expires: 7, path: '/' });

    recent_products = recent_products.filter(x => x !== param);

    let out = '';
    for (let key in data){
      if (key === param) {
        out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="photo product" class="product__img"/>';
        out += '<div class="product__info">';
        out += '<div class="info__text">';
        out += '<p class="info__number">REF. ' + key + '/2020</p>';
        out += '<h1 class="info__title">' + data[key]['name'] + '</h1>';
        out += '<h2 class="info__price">' + data[key]['price'] + ' rub</h2>';
        out += '<h3>Больше вариантов</h3>';
        out += '<div class="size__selection">';
        out += '<h3 class="choice__ml" data-coast="' + data[key]['price'] + '">100 ml</h3>';
        out += '<h3 class="choice__ml" data-coast="' + data[key]['price'] + '">50 ml</h3>';
        out += '<h3 class="choice__ml" data-coast="' + data[key]['price'] + '">35 ml</h3>';
        out += '<hr>';
        out += '</div>';
        out += '<h3>Состав</h3>';
        out += '<p class="info__description">' + data[key]['description'] + '</p>';
        out += ' <hr>';
        out += '</div>';
        out += '<div style="display: flex">';
        out += '<button type="submit" class="btn__add">Добавить в корзину</button>'
        out += '<button type="submit" class="btn__wish"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.125 1.04175C15.8854 1.04521 13.7874 2.13753 12.5 3.97001C11.2126 2.13753 9.11458 1.04521 6.875 1.04175C3.21248 1.04175 0 4.44934 0 8.33342C0 12.1188 2.13745 16.0175 6.18164 19.6084C8.05542 21.269 10.1109 22.7125 12.3088 23.9118C12.4288 23.9737 12.5712 23.9737 12.6912 23.9118C14.8883 22.7125 16.9432 21.2688 18.8163 19.6084C22.8625 16.0175 25 12.1188 25 8.33342C25 4.44934 21.7875 1.04175 18.125 1.04175V1.04175ZM12.5 23.0679C10.9696 22.2234 0.833333 16.3233 0.833333 8.33342C0.833333 4.89307 3.65621 1.87508 6.875 1.87508C9.05558 1.87895 11.0657 3.0553 12.137 4.95471C12.2172 5.07719 12.3537 5.15084 12.5 5.15084C12.6463 5.15084 12.7828 5.07719 12.863 4.95471C13.9343 3.0553 15.9444 1.87895 18.125 1.87508C21.3438 1.87508 24.1667 4.89307 24.1667 8.33342C24.1667 16.3233 14.0304 22.2234 12.5 23.0679Z" fill="black"/></svg></button>';
        out += '</div>';
        out += '<div class="delivery">';
        out += '<img src="img/icon/truck.svg" alt="truck">';
        out += '<a href="#" class="delivery__text">Правила доставки</a>';
        out += '</div>';
        out += '</div>';
      }
    }
    $('#item').html(out);

    out = '';
    for (let key in data){
      if (key !== param && male === data[key]['male']) {
        out += '<div class="card swiper-slide">'
        out += '<a href="product.html?id=' + key + '&male=' + male + '">';
        out += '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-like"><path d="M18.125 1.04175C15.8854 1.04521 13.7874 2.13753 12.5 3.97001C11.2126 2.13753 9.11458 1.04521 6.875 1.04175C3.21248 1.04175 0 4.44934 0 8.33342C0 12.1188 2.13745 16.0175 6.18164 19.6084C8.05542 21.269 10.1109 22.7125 12.3088 23.9118C12.4288 23.9737 12.5712 23.9737 12.6912 23.9118C14.8883 22.7125 16.9432 21.2688 18.8163 19.6084C22.8625 16.0175 25 12.1188 25 8.33342C25 4.44934 21.7875 1.04175 18.125 1.04175V1.04175ZM12.5 23.0679C10.9696 22.2234 0.833333 16.3233 0.833333 8.33342C0.833333 4.89307 3.65621 1.87508 6.875 1.87508C9.05558 1.87895 11.0657 3.0553 12.137 4.95471C12.2172 5.07719 12.3537 5.15084 12.5 5.15084C12.6463 5.15084 12.7828 5.07719 12.863 4.95471C13.9343 3.0553 15.9444 1.87895 18.125 1.87508C21.3438 1.87508 24.1667 4.89307 24.1667 8.33342C24.1667 16.3233 14.0304 22.2234 12.5 23.0679Z" fill="black"/></svg>'
        out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
        out += '<div class="card-text">';
        out += '<div class="card-heading">';
        out += '<h3 class="card-title">' + data[key]['price'] + ' rub</h3>';
        out += '<p class="card-text">' + data[key]['name'] + '</p>';
        out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
        out += '</div>';
        out += '</div>';
        out += '</a>';
        out += '</div>';
      }
    }
    $(".swiper-wrapper").html(out);

    out = '';
    for (let key in data){
      if (recent_products.indexOf(key) !== -1) {
        out += '<div class="card swiper-slide">'
        out += '<a href="product.html?id=' + key + '&male=' + male + '">';
        out += '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-like"><path d="M18.125 1.04175C15.8854 1.04521 13.7874 2.13753 12.5 3.97001C11.2126 2.13753 9.11458 1.04521 6.875 1.04175C3.21248 1.04175 0 4.44934 0 8.33342C0 12.1188 2.13745 16.0175 6.18164 19.6084C8.05542 21.269 10.1109 22.7125 12.3088 23.9118C12.4288 23.9737 12.5712 23.9737 12.6912 23.9118C14.8883 22.7125 16.9432 21.2688 18.8163 19.6084C22.8625 16.0175 25 12.1188 25 8.33342C25 4.44934 21.7875 1.04175 18.125 1.04175V1.04175ZM12.5 23.0679C10.9696 22.2234 0.833333 16.3233 0.833333 8.33342C0.833333 4.89307 3.65621 1.87508 6.875 1.87508C9.05558 1.87895 11.0657 3.0553 12.137 4.95471C12.2172 5.07719 12.3537 5.15084 12.5 5.15084C12.6463 5.15084 12.7828 5.07719 12.863 4.95471C13.9343 3.0553 15.9444 1.87895 18.125 1.87508C21.3438 1.87508 24.1667 4.89307 24.1667 8.33342C24.1667 16.3233 14.0304 22.2234 12.5 23.0679Z" fill="black"/></svg>'
        out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
        out += '<div class="card-text">';
        out += '<div class="card-heading">';
        out += '<h3 class="card-title">' + data[key]['price'] + ' rub</h3>';
        out += '<p class="card-text">' + data[key]['name'] + '</p>';
        out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
        out += '</div>';
        out += '</div>';
        out += '</a>';
        out += '</div>';
      }
    }
    $(".recent").html(out);

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: true
    });

  })
}
