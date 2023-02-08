/*global kakao*/ 
const showMap = (lat, lon) => {
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 3
  };
  var map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(lat, lon);
  var marker = new kakao.maps.Marker({
    position: markerPosition
  });
  marker.setMap(map);
}
