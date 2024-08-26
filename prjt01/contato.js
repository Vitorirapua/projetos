function enviar(){
    let namecnt = document.getElementById('name')
    let emailcnt = document.getElementById('email')
    let subjectcnt = document.getElementById('subject')
    let messagecnt = document.getElementById('message')

    if (namecnt.value == 0 | emailcnt.value == 0 | subjectcnt.value == 0 | messagecnt.value == 0){
        window.alert('Todos os campos são obrigatórios!')
    }
}

