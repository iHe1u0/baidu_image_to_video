const { invoke } = window.__TAURI__.tauri;

let inputDescription;
let labelMsg;

async function send_request() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  labelMsg.textContent = await invoke("greet", { name: inputDescription.value });
}

window.addEventListener("DOMContentLoaded", () => {
  inputDescription = document.querySelector("#greet-input");
  labelMsg = document.querySelector("#result");
  document.querySelector("#input_form").addEventListener("submit", (e) => {
    e.preventDefault();
    send_request();
  });
});

function previewImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('preview').style.display = 'block';
      document.getElementById('preview').src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}