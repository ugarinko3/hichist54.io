let center = [55.000017, 82.950209];


function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
    let placemark = new ymaps.Placemark([55.000017, 82.950209], {
        iconLayout: 'default#image',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

	map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);