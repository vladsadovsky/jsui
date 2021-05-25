export default class OptionSelector {

  constructor() {
  }

  bindToUi() {
    // Bing to control panel input fields
    document.getElementsByName("opton-selector-inputs").forEach(e=> {
      e.addEventListener('click', ()=> {
        console.log("  Event 'click' for ",e.getAttribute("id"));
      });
    });
  }

  get airports() {
    return (document.getElementById("airports").checked);
  }

  get buildings() {
    return (document.getElementById("buildings").checked);
  }
}


