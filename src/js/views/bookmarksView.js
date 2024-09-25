import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';


  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  /**
   * In this instance, the render method returns a markup containing the preview DOM. The reason for not invoking the generateMarkup() function from previewView.js is that generateMarkup() is unable to access the necessary data.
   * @returns a DOM markup
   */
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
