const question = document.querySelectorAll('.question')
const title = document.getElementById('title')
title.addEventListener('click', () => {
  question.forEach(ele => {
    ele.nextElementSibling.classList.toggle('active')
    ele.classList.toggle('act')
    ele.classList.toggle('arrow')
    })
})
let url,url2
const comenzar = () => {
  question.forEach(item => {
    item.addEventListener('click', () => {
      item.nextSibling.classList.toggle('active')
      item.classList.toggle('act')
      item.classList.toggle('arrow')
    })
  })
}
window.addEventListener('DOMContentLoaded',comenzar,false)