const createBoard = document.getElementById("create");
const closeBtn = document.getElementById("close-btn");
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const addItemNew = document.getElementById("add-item-new");
const addItemProgress = document.getElementById("add-item-progress");
const addItemComplete = document.getElementById("add-item-complete");

//opening modal
createBoard.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.querySelectorAll("#colors div").forEach((div) => {
    // Remove 'active' class from all divs
    div.addEventListener("click", () => {
      document
        .querySelectorAll("#colors div")
        .forEach((e) => e.classList.remove("active"));
      // this.classList.add("active");
      console.log(this)
    });
  });
});

//closing modal

function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelectorAll.forEach((element) =>
    element.classList.remove("active")
  );
}
closeBtn.addEventListener("click", () => {
  closeModal();
});

cancelBtn.addEventListener("click", () => {
  closeModal();
});

//form submit
submitBtn.addEventListener("click", () => {
  const boardName = document.getElementById("name").value;
  const boardDescription = document.getElementById("description").value;
});
