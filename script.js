// Trocar o nome no site (coisa inútilkkk)
function changeName() {
    let Username = document.getElementById("Username")
    let name = prompt('Coloque seu nome!')
    let nameTest = name.toLowerCase()
    if (nameTest.search('italo') != -1) {
        alert('Mentira!!!')
        Username.innerHTML = 'Fake Italo!!'
    }
    else if (nameTest.search('carlos') != -1) {
        alert('Carlos gemedorkkkkk, salve, man!!')
        Username.innerHTML = `${name} gemedorkkk`
    }
    else if (nameTest.search('isaque') != -1) {
        alert('Isaque tremedeirakkk Bem vindo, man!!')
        Username.innerHTML = `${name} tremedeirakkk`
    }
    else if (nameTest.search('juan') != -1) {
        alert('Juan pula treinokkkk Bem vindo, man!!')
        Username.innerHTML = `${name} pula treinokkkk`
    }
    else if (nameTest.search('rodrigo') != -1) {
        alert('Seja bem vindo, professor!')
        Username.innerHTML = `${name}`
    }
    else if (nameTest.search('sinval') != -1) {
        alert('Seja bem vindo, professor!')
        Username.innerHTML = `${name}`
    }
    else if (nameTest.search('marcelino') != -1) {
        alert('Seja bem vindo, professor!')
        Username.innerHTML = `${name}`
    }
    else {
        Username.innerHTML = name
    }
}

// Funções para trocar a linguagem do Site, via manipulação na DOM (no CSS, mas fica bonito)
function changeLanguage(lang){
    const English = document.getElementsByClassName('English')
    const Portuguese = document.getElementsByClassName('Portuguese')
    let displayStyleBlock = 'block'
    let displayStyleNone = 'none'
    if (lang == 'Portuguese') {
        displayStyleNone = 'block'
        displayStyleBlock = 'none'
    }
    for(let i=0; i < Portuguese.length ; i+=1){
        Portuguese[i].style.display = displayStyleBlock;
    };

    for (let i=0; i < English.length ; i+=1){
        English[i].style.display = displayStyleNone;
      };
}

// DarkMode
function changeColor(color){
    const body = document.querySelector('body')
    const White = document.getElementById('White')
    const Black = document.getElementById('Black')
    if (color) {
        White.style.display = 'none'
        Black.style.display = 'block'
        body.classList.add('darkMode')
    }
    else {
        White.style.display = 'block'
        Black.style.display = 'none'
        body.classList.remove('darkMode')
    }
}