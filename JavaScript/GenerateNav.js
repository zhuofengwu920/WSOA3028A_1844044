const menuItem = [
    { title: 'Home', link: '/' },
    { title: 'Blog', link: '/Blog' },
    { title: 'About', link: '/About' },
    { title: 'Contact', link: '/Contact' }
]

function initialiseMenu(){
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
}

document.addEventListener("DOMContentLoaded", () => initialiseMenu());