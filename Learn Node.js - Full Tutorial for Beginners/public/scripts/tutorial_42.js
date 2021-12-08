console.log('Testing client side');
setTimeout(
  function contentScript() {
    console.log(document.body);
  },
  500
);