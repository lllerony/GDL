function $(selector){
  return document.querySelector(selector);
}
function $$(selector){
  return document.querySelectorAll(selector);
}

const showMenuButton = $('.dropdown>button');
const showNavButtton = $('#showNav');

showMenuButton.addEventListener('click', () => {
  $('.dropdown-menu').classList.toggle('show');
})


showNavButtton.addEventListener('click', () => {
  $$('.dropdown').forEach(item => {
    item.classList.toggle('show');
    console.log(item)
  })
})
