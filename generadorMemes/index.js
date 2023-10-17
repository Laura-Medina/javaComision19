
const $ = (element) => document.querySelector(element);
const darkThemeButton = $('#theme-toggle');


darkThemeButton.addEventListener('click', () => {
	document.body.classList.toggle('light-mode');
	document.body.classList.toggle('dark-theme');
    if ($('#theme-toggle').innerHTML === 'Dark') {
		$('#theme-toggle').innerHTML = 'Light';
	} else {
		$('#theme-toggle').innerHTML = 'Dark';
	}
});

const buttonText = $('#button-text');
const buttonImg = $('#button-img');
const asideBar = $('#asideImg');
const asideTexto = $('#asideTexto');

buttonText.addEventListener('click', () => {
	asideBar.style.display = 'none';
	asideTexto.style.display = 'block';
});

buttonImg.addEventListener('click', () => {
	asideTexto.style.display = 'none';
	asideBar.style.display = 'block';
});

$("#texto-top").addEventListener("input", (e) => {
    $(".text-top").innerText = e.target.value
    $(".box-top").style.backgroundImage = `url(${e.target.value})`
})

$("#text-bottom").addEventListener("input", (e) => {
    $(".text-bottom").innerText = e.target.value
    $(".box-bottom").style.backgroundImage = `url(${e.target.value})`
})

$("#urlInput").addEventListener("input", (e) => {
    $(".box-black").style.backgroundImage = `url(${e.target.value})`
})

