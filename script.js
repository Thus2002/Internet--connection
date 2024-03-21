const status = document.getElementById("status");

const updateStatus = () => {
  if (navigator.onLine) {
    status.classList.remove("offline");
    status.classList.add("online");
    status.querySelector(".message.online").style.display = "block";
    status.querySelector(".message.offline").style.display = "none";
  } else {
    status.classList.add("offline");
    status.classList.remove("online");
    status.querySelector(".message.online").style.display = "none";
    status.querySelector(".message.offline").style.display = "block";
  }
};

window.addEventListener("load", (event) => {
  updateStatus();
});

window.addEventListener("online", (event) => {
  updateStatus();
});

window.addEventListener
