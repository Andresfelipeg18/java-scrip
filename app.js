const username =  document.getElementById('name')
const age =  document.getElementById('age')
const btngreeting =  document.getElementById('greeting')
const messageGreat =  document.getElementById('message')

btngreeting.addEventListener('click', sedGreting)

function sedGreting() {
    let user= username.value
    let age= age.value

    if (age>=18){
        messageGreat.textContent = `Bienvenido ${user}, usted es mayor de edad`
        messageGreat.style.color= 'green'
     } else{
        messageGreat.textContent = `Bienvenido ${user}, usted es menor de edad`
        }
        messageGreat.style.color= 'orange'
    }

    kepyu
