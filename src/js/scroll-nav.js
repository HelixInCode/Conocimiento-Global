const $contactNav = document.getElementById('contact-nav')
const $Nav = document.getElementById('nav')
const $navItems = $Nav.getElementsByTagName('ul')[0]

window.addEventListener('scroll', () => {
  if(window.pageYOffset === 0){
    console.log('Estás en el Top')

    $contactNav.classList.add('top-nav')
    $Nav.classList.remove('top-nav')
    $navItems.classList.remove('padding-12')
  }else{
    console.log('No estás en el Top')

    if(!$Nav.classList.contains('top-nav')){
      $Nav.classList.add('top-nav')
      $navItems.classList.add('padding-12')
    }
    $contactNav.classList.remove('top-nav')
  }
})