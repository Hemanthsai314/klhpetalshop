const scriptURL = "https://script.google.com/macros/s/AKfycbw73DFzVkQcDnhKAZaxyGrG7zqnZCB2ug0ifZqkbMYrdVG-LF9resqwen5zxHD-pDh0xw/exec";

const form = document.getElementById("roseForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form)})
    .then(response => {
      responseMessage.innerText = "✅ Booking submitted successfully!";
      form.reset();
    })
    .catch(error => {
      responseMessage.innerText = "❌ Error! Please try again.";
    });
});
