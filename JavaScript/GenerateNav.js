const menuItem = [
    { title: 'Home', link: '/WSOA3028A_1844044' },
    { title: 'Blog', link: '/WSOA3028A_1844044/Blog' },
    { title: 'About', link: '/WSOA3028A_1844044/About' },
    { title: 'Contact', link: '/WSOA3028A_1844044/Contact' }
]

function initialiseMenu(){
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let item of menuItem) 
    {
        const li  = document.createElement('li');
        const a = document.createElement('a');
        
        a.innerText = item.title
        a.href = item.link;

        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", () => initialiseMenu());