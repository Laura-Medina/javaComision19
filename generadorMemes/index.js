
const $ = (element) => document.querySelector(element);


// modo oscuro
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

// botones para pasar de aside
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

// aside text
// para escribir los textos top y bottom
$("#texto-top").addEventListener("input", (e) => {
    $(".text-top").innerText = e.target.value
    $(".box-top").style.backgroundImage = `url(${e.target.value})`
})

$("#texto-bottom").addEventListener("input", (e) => {
    $(".text-bottom").innerText = e.target.value
    $(".box-bottom").style.backgroundImage = `url(${e.target.value})`
})

// para el check con o sin texto
const noTopText = $('#no-text1');
noTopText.addEventListener('click', () => {
	if (noTopText.checked === true) {
		displayTopText.style.display = 'none';
	} else {
		displayTopText.style.display = 'block';
	}
});

const noBottomText = $('#no-text2');
noBottomText.addEventListener('click', () => {
	if (noBottomText.checked === true) {
		displayBottomText.style.display = 'none';
	} else {
		displayBottomText.style.display = 'block';
	}
});


// fuente del meme con su tamaño
$("#font").addEventListener("input", (e) => {
    $(".text-top").style.fontFamily = e.target.value
})

$("#number").addEventListener("input", (e) => {
    $(".text-top").style.fontSize = `${e.target.value}px`
})

$("#font").addEventListener("input", (e) => {
    $(".text-bottom").style.fontFamily = e.target.value
})

$("#number").addEventListener("input", (e) => {
    $(".text-bottom").style.fontSize = `${e.target.value}px`
})

// alineamientos
$("#aliLeft").addEventListener("click",() => {
    $(".text-top").style.textAlign= "left";
    $(".text-bottom").style.textAlign= "left";
})

$("#aliCenter").addEventListener("click",() => {
    $(".text-top").style.textAlign= "center";
    $(".text-bottom").style.textAlign= "center";
})

$("#aliRight").addEventListener("click",() => {
    $(".text-top").style.textAlign= "right";
    $(".text-bottom").style.textAlign= "right";
})

// color a la fuente
$("#colorFont").addEventListener("input", (e) => {
    $(".text-top").style.color = e.target.value
    $(".text-bottom").style.color = e.target.value
})

// background color
$("#background").addEventListener("input", (e) => {
    $(".box-top").style.backgroundColor = e.target.value;
    $(".box-bottom").style.backgroundColor = e.target.value;
})


// trasnparent

const transparentBackground = $('#background-checkbox');

transparentBackground.addEventListener('click', () => {
	if (transparentBackground.checked === true) {
		displayTopText.style.backgroundColor = 'black';
	} else {
		displayTopText.style.backgroundColor = 'black';
	}
});

transparentBackground.addEventListener('click', () => {
	if (transparentBackground.checked === true) {
		displayBottomText.style.backgroundColor = 'black';
	} else {
		displayBottomText.style.backgroundColor = 'black';
	}
});


// outline
const noOutlineButton = $('#no-outline-button');
const lightOutlineButton = $('#light-outline-button');
const darkOutlineButton = $('#dark-outline-button');

noOutlineButton.addEventListener('click', () => {
	textTop.style.textShadow = 'none';
	textBottom.style.textShadow ='none';
});

lightOutlineButton.addEventListener('click', () => {
	textTop.style.textShadow = '-1px 0 white, 0 1px white , 0 -1px white';
	textBottom.style.textShadow = '-1px 0 white, 0 1px white, 0 -1px white';
});

darkOutlineButton.addEventListener('click', () => {
	textTop.style.textShadow = '-1px 0 black, 0 1px black , 0 -1px black'
	textBottom.style.textShadow = '-1px 0 black, 0 1px black, 0 -1px black'
});

// padding

	const paddingInput = $('#paddingInput');
paddingInput.addEventListener('input', (e) => {
	const paddingY = paddingInput.value
	$('#displayTopText').style.padding = `${paddingY}px 50px`
	$('#displayBottomText').style.padding = `${paddingY}px 50px`
})

// line-height
const lineHeightInput = $('#line-height-input');
lineHeightInput.addEventListener('input', (e) => {
	const lineHeight = lineHeightInput.value;
	displayTopText.style.lineHeight = lineHeight;
	displayBottomText.style.lineHeight = lineHeight;
});


// ASIDE IMG
// agregar la url para la img del meme
$("#urlInput").addEventListener("input", (e) => {
    $(".box-black").style.backgroundImage = `url(${e.target.value})`
})

// fondo imagen
$("#colorPicker").addEventListener("input", (e) => {
    $(".box-black").style.backgroundColor = e.target.value;
})

// fondo select
const menuSelector = $('#selectMode');

colorPicker.addEventListener('input', () => {
	const backgroundValue = colorPicker.value;
	boxBlack.style.backgroundColor = backgroundValue;
});

menuSelector.addEventListener('change', () => {
	boxBlack.style.backgroundBlendMode = menuSelector.value;
});

// filters
$("#brightness1").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`brightness(${e.target.value}`
})

$("#opacity").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`opacity(${e.target.value}`
})

$("#contrast").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`contrast(${e.target.value}%`
})

$("#blur").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`blur(${e.target.value}px`
})

$("#grayscale").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`grayscale(${e.target.value}%`
})

$("#sepia").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`sepia(${e.target.value}%`
})

$("#hue").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`hue-rotate(${e.target.value}deg`
})

$("#saturate").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`saturate(${e.target.value}%`
})

$("#invert").addEventListener("input",(e)=>{
	$(".box-black").style.filter=`invert(${e.target.value}`
})

// reset

document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("brightness1").value = "0";
    document.getElementById("opacity").value = "1";
    document.getElementById("contrast").value = "100";
    document.getElementById("blur").value = "0";
    document.getElementById("grayscale").value = "0";
    document.getElementById("sepia").value = "0";
    document.getElementById("hue").value = "0";
    document.getElementById("saturate").value = "100";
    document.getElementById("invert").value = "0";

    document.querySelector("#descargadeMeme").style.filter = "none";
});

// boton de descarga

const descargaMeme=()=>{
	domtoimage.toBlob($(".container")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

$("#downloadMeme").addEventListener("click", descargaMeme)



