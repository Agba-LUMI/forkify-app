import icons from "../../img/icons.svg";
import View from "./view";
import { RES_PER_PAGE } from "../config";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / RES_PER_PAGE);
    if (curPage === 1 && numPages > 1) {
      return `  <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="src/img/${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    if (curPage === numPages && numPages > 1) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>`;
    }
    if (curPage < numPages) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="src/img/${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    return "";
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }
}
export default new PaginationView();
