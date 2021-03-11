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

  loadItems();

  $('body').on('click', '.bi', function() {
    if($(this).hasClass('activate')) {
      $(this).removeClass('activate')
    } else {
      $(this).addClass('activate')
    }
  });

  $('body').on('click', '.fransh', function() {
    const name = $(this).attr('data-id');
    const male = getUrlParameter('male');

    $.getJSON('./data/products.json', function (data) {
      let out = '';
      for (let key in data) {
        if (male === data[key]['male'] && name === data[key]['franchise']) {
          out += '<a href="product.html?id=' + key + '&male=' + male + '">';
          out += '<div class="card">'
          out += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">\n' +
            '  <path class="card-like" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n' +
            '</svg>'
          out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
          out += '<div class="card-text">';
          out += '<div class="card-heading">';
          out += '<h3 class="card-title">' + data[key]['price'] + '</h3>';
          out += '<p class="card-text">' + data[key]['name'] + '</p>';
          out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
          out += '</div>';
          out += '</div>';
          out += '</div>';
          out += '</a>';
        }
      }
      $('#items').html(out);
    })
  });



  $('body').on('click', '.categories', function() {
    const name = $(this).attr('data-id');
    const male = getUrlParameter('male');

    $.getJSON('./data/products.json', function (data) {
      let out = '';
      for (let key in data) {
        if (male === data[key]['male'] && name === data[key]['categories']) {
          out += '<a href="product.html?id=' + key + '&male=' + male + '">';
          out += '<div class="card">'
          out += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">\n' +
            '  <path class="card-like" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n' +
            '</svg>'
          out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
          out += '<div class="card-text">';
          out += '<div class="card-heading">';
          out += '<h3 class="card-title">' + data[key]['price'] + '</h3>';
          out += '<p class="card-text">' + data[key]['name'] + '</p>';
          out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
          out += '</div>';
          out += '</div>';
          out += '</div>';
          out += '</a>';
        }
      }
      $('#items').html(out);
    })
  });

  $('body').on('click', '.family', function() {
    const name = $(this).attr('data-id');
    const male = getUrlParameter('male');

    $.getJSON('./data/products.json', function (data) {
      let out = '';
      for (let key in data) {
        if (male === data[key]['male'] && name === data[key]['family of fragrances']) {
          out += '<a href="product.html?id=' + key + '&male=' + male + '">';
          out += '<div class="card">'
          out += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">\n' +
            '  <path class="card-like" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n' +
            '</svg>'
          out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
          out += '<div class="card-text">';
          out += '<div class="card-heading">';
          out += '<h3 class="card-title">' + data[key]['price'] + '</h3>';
          out += '<p class="card-text">' + data[key]['name'] + '</p>';
          out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
          out += '</div>';
          out += '</div>';
          out += '</div>';
          out += '</a>';
        }
      }
      $('#items').html(out);
    })
  });



  $('body').on('click', '.clearAll', function() {
    const male = getUrlParameter('male');

    $.getJSON('./data/products.json', function (data) {
      let out = '';
      for (let key in data) {
        if (male === data[key]['male']) {
          out += '<a href="product.html?id=' + key + '&male=' + male + '">';
          out += '<div class="card">'
          out += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">\n' +
            '  <path class="card-like" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n' +
            '</svg>'
          out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
          out += '<div class="card-text">';
          out += '<div class="card-heading">';
          out += '<h3 class="card-title">' + data[key]['price'] + '</h3>';
          out += '<p class="card-text">' + data[key]['name'] + '</p>';
          out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
          out += '</div>';
          out += '</div>';
          out += '</div>';
          out += '</a>';
        }
      }
      $('#items').html(out);
    })
  });

});

function loadItems() {
  const male = getUrlParameter('male');

  if (male === "women") {
    $(".menu__title").html("Женская коллекция");
    $(".menu__contents").html("Главная / Женщины / Парфюмерия");
  } else {
    $(".menu__title").html("Мужская коллекция");
    $(".menu__contents").html("Главная / Мужчины / Парфюмерия");
  }

  $.getJSON('./data/products.json', function (data) {
    let out = '';
    for (let key in data) {
      if (male === data[key]['male']) {
        out += '<a href="product.html?id=' + key + '&male=' + male + '">';
        out += '<div class="card">'
        out += '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-like">' +
          '<path d="M18.125 1.04175C15.8854 1.04521 13.7874 2.13753 12.5 3.97001C11.2126 2.13753 9.11458 1.04521 6.875 1.04175C3.21248 1.04175 0 4.44934 0 8.33342C0 12.1188 2.13745 16.0175 6.18164 19.6084C8.05542 21.269 10.1109 22.7125 12.3088 23.9118C12.4288 23.9737 12.5712 23.9737 12.6912 23.9118C14.8883 22.7125 16.9432 21.2688 18.8163 19.6084C22.8625 16.0175 25 12.1188 25 8.33342C25 4.44934 21.7875 1.04175 18.125 1.04175V1.04175ZM12.5 23.0679C10.9696 22.2234 0.833333 16.3233 0.833333 8.33342C0.833333 4.89307 3.65621 1.87508 6.875 1.87508C9.05558 1.87895 11.0657 3.0553 12.137 4.95471C12.2172 5.07719 12.3537 5.15084 12.5 5.15084C12.6463 5.15084 12.7828 5.07719 12.863 4.95471C13.9343 3.0553 15.9444 1.87895 18.125 1.87508C21.3438 1.87508 24.1667 4.89307 24.1667 8.33342C24.1667 16.3233 14.0304 22.2234 12.5 23.0679Z" fill="black"/>' +
          '</svg>'
        out += '<div style="background-image: url(' + data[key]['img'] + ')" alt="perfume" class="card-image"/>';
        out += '<div class="card-text">';
        out += '<div class="card-heading">';
        out += '<h3 class="card-title">' + data[key]['price'] + '</h3>';
        out += '<p class="card-text">' + data[key]['name'] + '</p>';
        out += '<span class="card-descrb"><a href="product.html?id=' + key + '&male=' + male + '" class="descrb-link">Посмотреть детали</a></span>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '</a>';
      }
    }
    $('#items').html(out);

    out = '<div class="hiddenBlock_fr">'
    let count = 0;
    let fransh = [];
    for (let key in data) {
      if (male === data[key]['male']) {
        if (fransh.indexOf(data[key]['franchise']) === -1) {
          fransh.push(data[key]['franchise']);
          count++;
          out += '<p data-id="' + data[key]["franchise"] + '" class="fransh">' + data[key]['franchise'] + '</p>';
        }
      }
    }
    out += '</div>';
    $('.franchise').html(out);

    out = '<div class="hiddenBlock_ct">'
    count = 0;
    let categori = [];
    for (let key in data) {
      if (male === data[key]['male']) {
        if (categori.indexOf(data[key]['categories']) === -1) {
          categori.push(data[key]['categories']);
          count++;
          out += '<p data-id="' + data[key]["categories"] + '" class="categories">' + data[key]['categories'] + '</p>';
        }
      }
    }
    out += '</div>'
    $('.categori').html(out);

    out = '<div class="hiddenBlock_fa">';
    count = 0;
    let family = [];
    for (let key in data) {
      if (male === data[key]['male']) {
        if (family.indexOf(data[key]['family of fragrances']) === -1) {
          family.push(data[key]['family of fragrances']);
          count++;
          out += '<p data-id="' + data[key]["family of fragrances"] + '" class="family">' + data[key]['family of fragrances'] + '</p>';
        }
      }
    }
    out += '</div>'
    $('.family').html(out);
  })
}
