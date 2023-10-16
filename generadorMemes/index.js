
const $ = (element) => document.querySelector(element);
const darkThemeButton = $('#theme-toggle');


darkThemeButton.addEventListener('click', () => {
	document.body.classList.toggle('light-mode');
	document.body.classList.toggle('dark-theme');
    if ($('#theme-toggle').innerHTML === 'Dark Mode') {
		$('#theme-toggle').innerHTML = 'Light Mode';
	} else {
		$('#theme-toggle').innerHTML = 'Dark Mode';
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