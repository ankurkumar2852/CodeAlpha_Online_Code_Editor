function runCode() {
    var htmlCode = document.getElementById("html-editor").value;
    var cssCode = document.getElementById("css-editor").value;
    var jsCode = document.getElementById("js-editor").value;
  
    var outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.writeln(
      "<style>" +
      cssCode +
      "</style>" +
      htmlCode +
      "<script>" +
      jsCode +
      "</script>"
    );
    outputFrame.close();
  }
  