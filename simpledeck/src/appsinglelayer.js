import './style.js'
import {Deck} from '@deck.gl/core';
import {GeoJsonLayer} from '@deck.gl/layers';
import ControlPanel from './control-panel';
import OptionSelector from './option-selector';

const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30
};

export const deck = new Deck({
  canvas: 'deck-canvas',
  width:"100%",
  height:"100%",  
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
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

