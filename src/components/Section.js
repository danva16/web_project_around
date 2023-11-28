class Section {
  constructor({ renderer }, containerSelector) {
    //this.items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //Método público que renderiza todos los elementos de la página
  rendererItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
};

export default Section;