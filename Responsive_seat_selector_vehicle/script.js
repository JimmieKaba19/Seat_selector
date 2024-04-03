`use strict`;
// select elements
const vehicleEl = document.getElementById(`vehicle`);
const seatContainerEl = document.querySelector(`.seating-container`);
const countEl = document.getElementById(`count`);
const totalEl = document.getElementById(`total`);

// global variables
let seatCount = 0;
let ticketPrice = Number(vehicleEl.value);

// function
const totalPrice = function () {
  ticketPrice = Number(vehicleEl.value);
  countEl.textContent = seatCount;
  totalEl.innerText = seatCount * ticketPrice;
};

// event listeners
vehicleEl.addEventListener(`change`, function () {
  ticketPrice = Number(vehicleEl.value);
  totalPrice();
});
seatContainerEl.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`seat`)) {
    if (!e.target.classList.contains(`sold`) && !e.target.classList.contains(`driver`)) {
      e.target.classList.toggle(`selected`);
      const selectedSeatEl = document.querySelectorAll(`.row .seat.selected`);
      seatCount = selectedSeatEl.length;
      totalPrice();
    }
  }
});
