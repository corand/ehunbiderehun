function initialize() {
	/*
		KOKAPENAK
	*/
	var myLatlng = new google.maps.LatLng(43.0320526,-2.4148398);
	var kiroldegia = new google.maps.LatLng(43.0319957,-2.4152489);
	var pagouso = new google.maps.LatLng(43.0324719,-2.4140496);
	var anbulatorixoko_parkinga = new google.maps.LatLng(43.032744,-2.416849);


	/*
		MARKERREN IKONOAK
	*/
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	var swimming_icon = iconBase + 'swimming.png';
	var parking_icon = iconBase + 'parking_lot_maps.png';
	var pago_uso_icon = iconBase + 'snack_bar.png';


	/*
		MAPA
	*/
	var mapOptions = {
		zoom: 17,
		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


	/*
		INFOWINDOWS
	*/

	var parkingcontentString = '<div id="content">'+
      '<h3>Anbulatorixoko Parkinga</h3>'+
      '<div id="bodyContent">'+
      '<p>Kiroldegi inguruan lekurik ez baldin badago, gertuen gelditzen den aparkalekua</p>'+
      '<p><img src="http://www.diariovasco.com/prensa/noticias/201001/21/fotos/5345779.jpg" /></p>'+
      '</div>'+
      '</div>';

	  var parkinginfowindow = new google.maps.InfoWindow({
	      content: parkingcontentString
	  });

	  var kiroldegicontentString = '<div id="content">'+
      '<h3>Kiroldegiko Parkinga</h3>'+
      '<div id="bodyContent">'+
      '<p>Oñatiko Kiroldegia. 15:00 puntuan elkartuko gara bertako sarreran</p>'+
      '<p><img src="http://www.oinati.eu/eu/albisteak/zubikoa-kiroldegiko-garbiketa-zerbitzuaren-kontratazio-mahaia-ostiralean-elkartuko-da-eskaintza-ekonomikoen-plikak-irekitzeko/image_large" /></p>'+
      '</div>'+
      '</div>';

	  var kiroldegiainfowindow = new google.maps.InfoWindow({
	      content: kiroldegicontentString
	  });

	  var pagousocontentString = '<div id="content">'+
      '<h3>Pago Uso elkartea</h3>'+
      '<div id="bodyContent">'+
      '<p>Froga amaitu ostean, luntx txiki bat egingo dugu bertan</p>'+
      '<p><img src="http://2.bp.blogspot.com/-HUH9rcA7Dk0/U-k1u3-1l0I/AAAAAAAAJxM/3fKZ9dWul34/s1600/2014_08_11__3932.jpg" /></p>'+
      '</div>'+
      '</div>';

	  var pagousoinfowindow = new google.maps.InfoWindow({
	      content: pagousocontentString
	  });


	/*
		MARKERRAK
	*/

	var parking1 = new google.maps.Marker({
		position: anbulatorixoko_parkinga,
		map: map,
		icon: parking_icon,
		title: 'Anbulatorixoko Parkinga'
	});

	var marker_kiroldegia = new google.maps.Marker({
		position: kiroldegia,
		map: map,
		icon: swimming_icon,
		title: 'Kiroldegia'
	});

	var marker_pago_uso = new google.maps.Marker({
		position: pagouso,
		map: map,
		icon: pago_uso_icon,
		title: 'Pago Uso Elkartea'
	});

	/*
		Listenerrak markerrendako
	*/
	google.maps.event.addListener(parking1, 'click', function() {
	    parkinginfowindow.open(map,parking1);
	    map.setCenter(parking1.getPosition());
	  });

	google.maps.event.addListener(marker_kiroldegia, 'click', function() {
	    kiroldegiainfowindow.open(map,marker_kiroldegia);
	    map.setCenter(marker_kiroldegia.getPosition());
	  });

	google.maps.event.addListener(marker_pago_uso, 'click', function() {
	    pagousoinfowindow.open(map,marker_pago_uso);
	    map.setCenter(marker_pago_uso.getPosition());
	  });

}

google.maps.event.addDomListener(window, 'load', initialize);