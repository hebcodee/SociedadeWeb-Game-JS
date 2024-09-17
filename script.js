const loginlink = document.querySelector(".loginlink");
const registrolink = document.querySelector(".registrolink");
const container = document.querySelector(".container");

loginlink.addEventListener("click", () => {
  container.classList.toggle("active");
});

registrolink.addEventListener("click", () => {
  container.classList.toggle("active");
});
