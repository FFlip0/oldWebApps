function button1() {
    let inputElement = document.getElementById('input');
    let output = inputElement.value;


    //Console (Easy Version)

    if (output > 0) {
        console.log('Positive');
    } else if (output < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    } 


    //Div Output (Hard Version)

    if (output > 0) {
        function changeDivContent() {
          let divOutput = document.getElementById('divOutput')
          divOutput.textContent = `Positive`;
        };
        changeDivContent();
    } else if (output < 0) {
        function changeDivContent() {
          let divOutput = document.getElementById('divOutput')
          divOutput.textContent = `Negative`;
        };
        changeDivContent();;
    } else {
        function changeDivContent() {
          let divOutput = document.getElementById('divOutput')
          divOutput.textContent = `Zero`;
        };
        changeDivContent();;
    }
  }
    function toggleVisibility() {
      let hiddenElement = document.getElementById("divOutput");
      if (hiddenElement.style.display === "none") {
          hiddenElement.style.display = "block"; // or "inline" or any other valid display value
      } else {
          hiddenElement.style.display = "none";
      }
  }
    /*function fadeIn() {
      var hiddenElement = document.getElementById("divOutput");

      if (hiddenElement.style.opacity === "0" || hiddenElement.style.opacity === "0.5") {
          hiddenElement.style.opacity = "1";
      } else {
          hiddenElement.style.opacity = "0";
      }
  }*/