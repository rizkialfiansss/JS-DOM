// document.getElementById -> Mengembalikan nilai element
const judul = document.getElementById('judul');

judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Rizalf';

// document.getElementsByTagName -> Mengembalikan nilai HTMLCollections
const p = document.getElementsByTagName('p');
for ( let i =0; i <p.length; i++){
p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName -> Mengembalikan nilai HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';