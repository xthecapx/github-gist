
export let code = "._DetailsBox_1wj7x_1 {\n  margin-top: 50px;\n  border: 1px solid #dddddd;\n  padding: 20px;\n}\n\n._ForksBox_1wj7x_7,\n._FilesBox_1wj7x_8 {\n  margin-top: 10px;\n}\n._ForksBox_1wj7x_7 a,\n._FilesBox_1wj7x_8 a {\n  text-decoration: underline;\n}";
let json = {"DetailsBox":"_DetailsBox_1wj7x_1","ForksBox":"_ForksBox_1wj7x_7","FilesBox":"_FilesBox_1wj7x_8"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}