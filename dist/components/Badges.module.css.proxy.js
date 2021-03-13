
export let code = "._Badge_11pn5_1 {\n  background-color: #e69c37;\n  color: #ffffff;\n  padding: 5px;\n  border-radius: 5px;\n  margin-right: 5px;\n  font-size: 8px;\n  font-weight: 400;\n  letter-spacing: 1px;\n}";
let json = {"Badge":"_Badge_11pn5_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}