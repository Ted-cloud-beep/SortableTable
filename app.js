/**
 *
 * @param {HTMLtabelelement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determine if the
 */
let count = 0;
function sortTableByColumn(column, para) {
  if (count % 2 == 0) {
    asc = true;
  } else {
    asc = false;
  }
  const dirModifier = asc ? 1 : -1; //ternary conditions
  const tBody = document.querySelector("table").tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));
  // console.log(rows);

  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column})`)
      .textContent.trim();
    console.log(dirModifier);

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
  tBody.append(...sortedRows);
  count++;
  if (count % 2 == 0) {
    toggle1(para);
  } else {
    toggle(para);
  }
}
function toggle(para) {
  para.classList.remove("decending");
  para.classList.add("ascending");
  // const downRank = document.getElementById("down1");
  // downRank.style.display = "inline-block";
}
function toggle1(para) {
  para.classList.remove("ascending");
  para.classList.add("decending");
}
// function bgColor(){
//   const bgcolor=document.querySelector('table thead tr th:first-child')
// }
const name = document.querySelector("table tr").children[1];
name.addEventListener("click", sortTableByColumn.bind(null, 2, name));
const age = document.querySelector("table tr").children[2];
age.addEventListener("click", sortTableByColumn.bind(null, 3, age));

const rank = document.querySelector("table tr").children[0];
rank.addEventListener("click", sortTableByColumn.bind(null, 1, rank));
