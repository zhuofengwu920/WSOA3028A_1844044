const blogItem = [
    { title: 'As-We-May-Think', type: 'Theory' },
    { title: 'Flash-History', type: 'Theory' },
    { title: 'From-3G-To-4G', type: 'Theory' },
    { title: 'Library-Of-Babel', type: 'Theory' },
    { title: 'From-3G-To-4G', type: 'Theory' },
    { title: 'Medium-Is-The-Message', type: 'Theory' },
    { title: 'The-Importance-Of-Accessibility', type: 'Theory' },
    { title: 'Hypertext-Navigation-Structure', type: 'Technical' },
    { title: 'Semantic-Markup', type: 'Technical' },
    { title: 'What-Is-A-Browser', type: 'Technical' },
    { title: 'Ways-Of-Teaching-Oline-Minimising-Data-Usage', type: 'Creative' },
    { title: 'Origami', type: 'Creative' },
    { title: 'COVID-19', type: 'Creative' },
]

function generateBlogLink(temptitle, temptype) {
    let link = '/WSOA3028A_1844044/Blog/' + temptype + '/' + temptitle + '.html';

    return link
}

function initialiseBlofMenuByClass(temptype) {
    const div = document.querySelector('.' + temptype);

    const h2 = document.createElement('h2');

    h2.innerText = temptype + ' Blogs';

    div.appendChild(h2);

    const ul = document.createElement('ul');

    for (let item of blogItem) {
        if (item.type == temptype) {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.innerText = item.title;
            a.href = generateBlogLink(item.title, item.type);

            li.appendChild(a);
            ul.appendChild(li);
        }
    }

    div.appendChild(ul);
}

// function initialiseTechnicalMenu(){
//     const div = document.querySelector('.technical');

//     const h2 = document.createElement('h2');

//     h2.innerText = 'Technical Blogs';

//     div.appendChild(h2);

//     const ul = document.createElement('ul');

//     for (let item of blogItem) 
//     {
//         if (item.type == 'Technical')
//         {
//             const li  = document.createElement('li');
//             const a = document.createElement('a');

//             a.innerText = item.title;
//             a.href = generateBlogLink(item.title, item.type);

//             li.appendChild(a);
//             ul.appendChild(li);
//         }
//     }

//     div.appendChild(ul);
// }

// function initialiseCreativeMenu(){
//     const div = document.querySelector('.creative');

//     const h2 = document.createElement('h2');

//     h2.innerText = 'Creative Blogs';

//     div.appendChild(h2);

//     const ul = document.createElement('ul');

//     for (let item of blogItem) 
//     {
//         if (item.type == 'Creative')
//         {
//             const li  = document.createElement('li');
//             const a = document.createElement('a');

//             a.innerText = item.title;
//             a.href = generateBlogLink(item.title, item.type);

//             li.appendChild(a);
//             ul.appendChild(li);
//         }
//     }

//     div.appendChild(ul);
// }

function initialiseBlogMenu() {
    initialiseBlofMenuByClass('Technical');
    initialiseBlofMenuByClass('Theory');
    initialiseBlofMenuByClass('Creative');
}

document.addEventListener("DOMContentLoaded", () => initialiseBlogMenu());