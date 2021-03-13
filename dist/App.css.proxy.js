// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n  height: 80px;\n  background: linear-gradient(-90deg, #37b0b2, #3196cc);\n  -webkit-box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.49);\n  -moz-box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.49);\n  box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.49);\n  padding: 0 20px;\n}\n\n.header-space {\n  margin-top: 100px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nh1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\n.loader, .error-box {\n  padding: 20px;\n  margin: 40px;\n}\n\n.indent-left {\n  margin-left: 10px;\n}\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-right: 10px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}