class Locations {
  constructor() {
    this.list = [];
    this.amountAdded = 0;
    this.amountRemoved = 0;
    this.history = [];
  }
  createLocation(locationData) {

    let location = locationData.map((obj) => {
      return [obj.name, obj.value];
    });
    location = new Map(location);

    const locationTemplate = `
      <article class="location">
        <figure class="location-preview">
          <img src="${location.get('image')}" alt="${location.get('name')}" />
        </figure>
        <div>
          <header class="location-header">
            <h1 class="location-title"><a href="#">${location.get('name')}</a></h1>
            <p class="adress"><span>Адрес: </span>${location.get('adress')}</p>
            <p class="contacts"><span>Контакты: </span>${location.get('contacts')}</p>
          </header>
          <div class="location-text">
            <p>${location.get('description')}</p>
          </div>
          <footer class="location-footer">
            <div class="rating">
              <span class="rating-metric zero"></span>
              <span class="rating-text">0 (Оценок: 0)</span>
            </div>
            <div class="create-event"><a href="#">Создать событие</a></div>
          </footer>
        </div>
        <div class="flag">
          <span class="no-flagged"></span>
        </div>
      </article>`;

    $('.locations').append(locationTemplate);
    this.amountAdded += 1;
    this.history.push();
  }
}
