import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PreviewView extends View {
  _parentElement = '';

  // render(data, render = true) {
  //   if (!data || (Array.isArray(data) && data.length === 0))
  //     return this.renderError();

  //   this._data = data;
  //   const markup = this._generateMarkup();

  //   if (!render) return markup;

  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markup);
  // }

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${
          this._data.id === id ? 'preview__link--active' : ''
        }" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
              <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new PreviewView();
