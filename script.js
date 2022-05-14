import Toast from "./Toast.js"

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Hello, this is a toast",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})
