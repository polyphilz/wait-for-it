const div = document.querySelector("div");
const input = document.querySelector("input[type=checkbox]");

chrome.storage.sync.get(["wait-for-it-hn"], (result) => {
  if (!result["wait-for-it-hn"]) return;
  input.checked = true;
});

input.addEventListener("change", (e) => {
  div.textContent = e.target.checked ? "On" : "Off";
  chrome.storage.sync.set({ "wait-for-it-hn": e.target.checked }, () => {
    console.log(`wait-for-it-hn is set to ${e.target.checked}`);
  });
});
