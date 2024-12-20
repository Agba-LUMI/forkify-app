import icons from "../../img/icons.svg";
export default class View {
  _data;
  _errorMessage =
    "We could not find that recipe, please try another one 🤷🏻‍♂️🤷🏻‍♂️🤷🏻‍♂️";
  _message = "";

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderSpinner = function () {
    const markup = `<div class="spinner">
            <svg>
              <use href="src/img/${icons}#icon-loader"></use>
            </svg>
          </div>`;
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };
  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderMesage(message = this._message) {
    const markup = ` <div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="src/${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
