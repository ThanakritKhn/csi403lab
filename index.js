let input = document.getElementById('input')
let submit = document.getElementById('submit')
let submitDel = document.getElementById('submitDel')
let output = document.getElementById('output')

const cal = () => {
    let number = Number(input.value)
    let outputHTML = ''


    if (number === 0 || "") {
        output.innerHTML = 'input Yournumber'
        return
    }
    for (let i = 1; i <= 12; i++) {
        outputHTML += '<p>'
        outputHTML += `${number} x ${i} = ${number * i}`
        outputHTML += '</p>'
    }
    output.innerHTML = outputHTML
}

const deletes = () => {
    input.value = ''
    output.innerHTML = ''
}

submit.addEventListener('click', cal)

submitDel.addEventListener('click', deletes)

