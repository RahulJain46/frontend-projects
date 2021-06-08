window.addEventListener("load", function() {
  const textBox = document.getElementById("text-box");
  let timeout = null;
  function debounce(callback, delay) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(arguments[2]);
      timeout = null;
    }, delay);
  }

  function printVal(e) {
    console.log("********************", e.target.value);
  }

  textBox.addEventListener("keypress", function(e) {
    debounce(printVal, 200, e);
  });
});
