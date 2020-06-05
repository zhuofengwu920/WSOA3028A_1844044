const menuItem = [
    { title: 'Home', link: '/WSOA3028A_1844044/' },
    { title: 'Blog', link: '/WSOA3028A_1844044/Blog' },
    { title: 'About', link: '/WSOA3028A_1844044/About' },
    { title: 'Contact', link: '/WSOA3028A_1844044/Contact' }
]

var hasExtended = false;

function extendMenu(){

    let tempHeader = document.querySelector('header');
    
    if(!hasExtended)
    {
        let li = document.querySelectorAll('nav > ul > li');

        for(let item of li)
        {
            item.style.display = "grid";
            item.style.visibility = "visible";
        }

        
        tempHeader.style.height = '25em';

        hasExtended = true;
    }
    else
    {
        let li = document.querySelectorAll('nav > ul > li');

        for(let item of li)
        {
            item.style.display = "none";
            item.style.visibility = "hidden";
        }

        tempHeader.style.height = 'auto';

        hasExtended = false
    }
    
}

function initialiseMenu(){
    const header = document.querySelector('header');

    const h1 = document.createElement('h1');

    h1.innerText = 'Kloma Yellow';

    header.appendChild(h1);

    let tempNav = document.createElement('nav');

    header.appendChild(tempNav);

    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let item of menuItem) 
    {
        const li  = document.createElement('li');
        const a = document.createElement('a');
        
        a.innerText = item.title;
        a.href = item.link;

        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);

    let image = document.createElement('img');

    image.src = '/WSOA3028A_1844044/Images/UI/MobileToggle.png';
    image.classList = 'toggle';

    header.appendChild(image);

    let toggle = document.querySelector('.toggle');

    toggle.addEventListener('click', () => extendMenu())
}

document.addEventListener("DOMContentLoaded", () => initialiseMenu()); 