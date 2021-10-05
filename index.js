const $$ = element => document.querySelectorAll(element)
const $ = element => document.querySelector(element)

$$('input').forEach(e => {
  e.addEventListener('click', () => {
    localStorage.setItem(e.name, e.checked)
  })

  if(localStorage.getItem(e.name) === 'true'){
    e.checked = true
  }
})