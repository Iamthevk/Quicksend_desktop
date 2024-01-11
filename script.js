window.addEventListener("DOMContentLoaded", () => {
  const selectDropdown = document.querySelector(".select__dropdown");
  const dropDown = document.querySelector(".dropdown__options");
  const dropDownOptions = Array.from(dropDown.getElementsByTagName("a"));
  const modal = document.querySelector(".modal");
  const newInvoiceBtn = document.querySelector("#invoice__btn");
  const navItems = Array.from(document.querySelectorAll(".nav__items"));
  const support = document.querySelector(".support");
  const paragraph = document.createElement("p");

  modal.style.display = "none";
  window.addEventListener("click", function (e) {
    if (!selectDropdown.contains(e.target)) {
      selectDropdown.firstElementChild.childNodes[3].style.display = "block";
      selectDropdown.firstElementChild.lastElementChild.style.display = "none";
      modal.style.display = "none";
      selectDropdown.firstElementChild.style.border = "1.6px solid #e0e0e0";
    }
    dropDownOptions.map((dropdown) => {
      if (dropDown.contains(e.target)) {
        selectDropdown.firstElementChild.firstElementChild.innerText =
          e.target.text;
        selectDropdown.firstElementChild.childNodes[3].style.display = "none";
        selectDropdown.firstElementChild.lastElementChild.style.display =
          "block";
        selectDropdown.firstElementChild.style.border = "1.6px solid #5AA8F6";
      }

      if (newInvoiceBtn.contains(e.target)) {
        modal.style.display = "block";
        paragraph.innerText = "This feature is coming soon";
        paragraph.classList.add("modal__para");
        modal.appendChild(paragraph);
      }
      navItems.map((navItem) => {
        if (navItem.contains(e.target) || support.contains(e.target)) {
          modal.style.display = "block";
          paragraph.innerText = "This feature is coming soon";
          paragraph.classList.add("modal__para");
          modal.appendChild(paragraph);
        }
      });
    });
  });
});
