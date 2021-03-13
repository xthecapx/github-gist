
export let code = "._ListRow_1i0bc_1 {\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  text-decoration: none;\n}";
let json = {"ListRow":"_ListRow_1i0bc_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}