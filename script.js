function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img")

    html.classList.toggle("light");
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Gabriela Dias Dutra sorrindo, usando uma camisa amarela')
    } else
        img.setAttribute('src', './assets/avatar.png')

    img.setAttribute('alt', 'Foto de Gabriela Dias Dutra usando uma camisa branca')
}

//     html.classList.add('light')
// }

//pegar tag image
//substituir imagem