const blogItem = [
    { title: 'As-We-May-Think', link: '/WSOA3028A_1844044/Blog/Theory/As-We-May-Think.html', type: 'Theory' },
    { title: 'Flash-History', link: '/WSOA3028A_1844044/Blog/Theory/Flash-History.html', type: 'Theory' },
    { title: 'From-3G-To-4G', link: '/WSOA3028A_1844044/Blog/Theory/From-3G-To-4G.html', type: 'Theory' },
    { title: 'Library-Of-Babel', link: '/WSOA3028A_1844044/Blog/Theory/', type: 'Theory' },
    { title: 'From-3G-To-4G', link: '/WSOA3028A_1844044/Blog/Theory', type: 'Theory' },
    { title: 'Medium-Is-The-Message', link: '/WSOA3028A_1844044/Blog/Theory', type: 'Theory' },
    { title: 'The-Importance-Of-Accessibility', link: '/WSOA3028A_1844044/Blog/Theory', type: 'Theory' },
    { title: 'Hypertext-Navigation-Structure', link: '/WSOA3028A_1844044/Blog/', type: 'Technical' },
    { title: 'Semantic-Markup', link: '/WSOA3028A_1844044/Blog/', type: 'Technical' },
    { title: 'What-Is--A-Browser', link: '/WSOA3028A_1844044/Blog/', type: 'Technical' },
    { title: 'Ways-Of-Teaching-Oline-Minimising-Data-Usage', link: '/WSOA3028A_1844044/Blog/', type: 'Creative' },
    { title: 'Origami', link: '/WSOA3028A_1844044/Blog/', type: 'Creative' },
    { title: 'COVID-19', link: '/WSOA3028A_1844044/Blog/', type: 'Creative' },
]

function generateBlogLink(title, type){
    let link = '/WSOA3028A_1844044/Blog/' + type + '/' + title + '.html';

    console.log(link)
}

function initialiseTheoryMenu(){
    const div = document.querySelector('.theory');

    const h2 = document.createElement('h2');

    h2.innerText = 'Theory Blogs';

    div.appendChild(h2);

    const ul = document.createElement('ul');

    for (let item of blogItem) 
    {
        if (item.type == 'Theory')
        {
            const li  = document.createElement('li');
            const a = document.createElement('a');
            
            a.innerText = item.title;
            a.href = generateBlogLink(item.title, item.type);

            li.appendChild(a);
            ul.appendChild(li);
        }
    }

    div.appendChild(ul);
}

function initialiseTechnicalMenu(){
    
}

function initialiseCreativeMenu(){
    
}

function initialiseBlogMenu(){
    initialiseTechnicalMenu();
    initialiseTheoryMenu();
    initialiseCreativeMenu();
}

document.addEventListener("DOMContentLoaded", () => initialiseBlogMenu());