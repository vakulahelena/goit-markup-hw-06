(() => {
  const refs = {
    // 1. Знаходимо елементи
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // 2. Додаємо прослуховувачі кліків до кнопок
  // Зверніть увагу: ми використовуємо .toggleModal, а не toggleModal
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // 3. Створюємо функцію для перемикання класу
  function toggleModal() {
    // Метод .classList.toggle() додасть 'is-open', якщо його немає,
    // і видалить, якщо він є.
    refs.modal.classList.toggle("is-open");
  }
})();