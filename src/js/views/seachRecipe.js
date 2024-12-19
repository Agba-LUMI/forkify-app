class SearchView {
  #parentEl = document.querySelector(".search");

  getQury() {
    const query = this.#parentEl.querySelector(".search__field").value;
    this.#clearInput();
    return query;
  }
  #clearInput() {
    this.#parentEl.querySelector(".search__field").value = "";
  }
  addHandlerSearch(handle) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handle();
    });
  }
}
export default new SearchView();
