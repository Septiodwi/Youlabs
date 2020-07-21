const btn = document.querySelector(' button.btn-download');
// console.log(btn);
btn.addEventListener('click', function () {
    const tambah = document.querySelector('table.table');

    const btnBaru = document.createElement('td');
    const text = document.createTextNode('Hello world');

    btnBaru.appendChild(text);
    tambah.appendChild(btnBaru);
});