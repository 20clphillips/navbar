const navbarBtn = document.querySelector('.navbar_btn')
const navbarLinks = document.querySelector('.navbar_links')



navbarBtn.addEventListener('click', function(){
    let value = navbarLinks.classList.contains('navbar_collapse')

    if(value){
navbarLinks.classList.remove('navbar___collapse')
navbarBtn.classList.remove('change')
    }
else{
    navbarLinks.classList.add('navbar___collapse')
    navbarBtn.classList.add('change')
}

})


