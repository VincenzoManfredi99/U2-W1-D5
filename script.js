window.addEventListener('scroll', ()=>{
    const navbar= document.querySelector('header nav')
    if(window.scrollY > 400){
        navbar.classList.add('scrollWhite')
    } else {
        navbar.classList.remove('scrollWhite')
    }
})