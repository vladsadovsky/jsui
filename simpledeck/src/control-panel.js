export default class ControlPanel {

  constructor() {
  }

  bindToUi() {
    // Bing to control panel input fields
    document.getElementsByName("control-panel-inputs").forEach(e=> {
      e.addEventListener('click', ()=> {
        console.log(" Event 'click' for ",e.getAttribute("id"));
      });
    });
  }

  get show_fields() {
    return (document.getElementById("show_fields").value);
  }

  get max_val() {
    return (document.getElementById("max_val").value);
  }
}


