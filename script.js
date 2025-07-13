document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const course = document.getElementById('course').value;

  const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${course}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  document.getElementById('studentForm').reset();
});

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}