let data = new Date()
let day = data.getDay()
let date = data.getDate()

let el = document.querySelector('.numbersWeek')
for (i = 1; i <= 31; i++) {
        if (i == date) {
                el.innerHTML += '<span class="daySelect"> ' + i + ' </span>'
        } else {
                el.innerHTML += '<span> ' + i + ' </span>'
        }
}