document.onreadystatechange = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    accessToken: 'pk.eyJ1Ijoia3J5c3R0aWFuIiwiYSI6ImNsZHFjM2hnZDFiY3Azcm81ZXZveWs5azYifQ.5U-q3myv6LQktZgyIK-zlQ',
    style: 'mapbox://styles/krysttian/clbr39ift000814qmz36sjvi1?optimize=true',
    center: [-80.136, 25.778],
    zoom: 14,
  });
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
    showUserHeading: true,
  });

  const directions = new MapboxDirections({
    profile: 'mapbox/cycling',
    accessToken: 'pk.eyJ1Ijoia3J5c3R0aWFuIiwiYSI6ImNsZHFjM2hnZDFiY3Azcm81ZXZveWs5azYifQ.5U-q3myv6LQktZgyIK-zlQ',
    geocoder: {
      proximity: [-80.133, 25.784],
    },
    controls: {
      instructions: false,
    },
    interactive: false,
  });
  if (document.readyState === 'complete') {
    map.on('load', () => {
      map.addControl(directions, 'top-left');
      map.addControl(geolocate, 'top-left');
      geolocate.on('geolocate', (position) => {
        directions.setOrigin([position.coords.longitude, position.coords.latitude]);
      });
    });
  }
};
