import './style.js'
import {Deck, _GlobeView as GlobeView} from '@deck.gl/core';
import {SolidPolygonLayer, GeoJsonLayer, ArcLayer} from '@deck.gl/layers';
import ControlPanel from './control-panel';
import OptionSelector from './option-selector';

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 1,
  bearing: 0,
  pitch: 30
};

export const deck = new Deck({
  canvas: 'deck-canvas',
  width:"100%",
  height:"100%",  
  views: new GlobeView(),
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new SolidPolygonLayer({
      id: 'background',
      data: [
        // prettier-ignore
        [[-180, 90], [0, 90], [180, 90], [180, -90], [0, -90], [-180, -90]]
      ],
      opacity: 0.5,
      getPolygon: d => d,
      stroked: false,
      filled: true,
      getFillColor: [5, 10, 40]
    }),
    new GeoJsonLayer({
      id: 'base-map',
      data: COUNTRIES,
      // Styles
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      opacity: 0.4,
      getLineDashArray: [3, 3],
      getLineColor: [60, 60, 60],
      getFillColor: [200, 200, 200]
    }),
    new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getRadius: f => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick: info =>
        // eslint-disable-next-line
        info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
    }) 
 ]
});

const cpl = new ControlPanel();
cpl.bindToUi();
console.log(" App: control panel::show_fields=",cpl.show_fields);
console.log(" App: control panel::show_fields=",cpl.max_val);

const options_sel = new OptionSelector();
options_sel.bindToUi();
console.log(" App: options-selector::airports=",options_sel.airports);
console.log(" App: options-selector::buildings=",options_sel.buildings);

function render(){
  deck.redraw(false);
}

render();