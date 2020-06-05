const blogItem = [
    { title: 'As-We-May-Think', type: 'Theory', date: new Date('2020/02/20'), summary: '' },
    { title: 'Flash-History', type: 'Theory', date: new Date('2020/02/23'), summary: '' },
    { title: 'From-3G-To-4G', type: 'Theory', date: new Date('2020/02/29'), summary: '' },
    { title: 'Library-Of-Babel', type: 'Theory', date: new Date('2020/02/20'), summary: '' },
    { title: 'Medium-Is-The-Message', type: 'Theory', date: new Date('2020/02/23'), summary: '' },
    { title: 'The-Importance-Of-Accessibility', type: 'Theory', date: new Date('2020/03/10'), summary: 'Reflection on how important it is to make your own creation accessible.'},
    { title: 'Hypertext-Navigation-Structure', type: 'Technical', date: new Date('2020/03/06'), summary: 'Brief description on Hyperlinks, Hypertext and their structures.' },
    { title: 'Semantic-Markup', type: 'Technical', date: new Date('2020/02/27'), summary: '' },
    { title: 'What-Is-A-Browser', type: 'Technical', date: new Date('2020/03/06'), summary: '' },
    { title: 'Ways-Of-Teaching-Oline-Minimising-Data-Usage', type: 'Creative', date: new Date('2020/03/06'), summary: '' },
    { title: 'Origami', type: 'Creative', date: new Date(''), summary: '' },
    { title: 'COVID-19', type: 'Creative', date: new Date('2020/03/23'), summary: '' },
]

function generateBlogLink(temptitle, temptype) {
    let link = '/WSOA3028A_1844044/Blog/' + temptype + '/' + temptitle + '.html';

    return link
}

function initialiseLatestBlogsByClass(temptype){
    blogItem.sort(function(a, b){return b.date - a.date});

    let latestItem;

    for(let item of blogItem){
        if(item.type === temptype){
            latestItem = item;
            break;
        }
    }

    const section = document.querySelector('article.' + temptype + ' > section');

    const a = document.createElement('a');

    a.href = generateBlogLink(latestItem.title, latestItem.type);

    const h2 = document.createElement('h2');

    h2.innerText = 'Latest ' + temptype + ' Blog: ' + latestItem.title;

    a.appendChild(h2);
    section.appendChild(a);

    const p = document.createElement('p');

    p.innerText = 'Sumary';
    section.appendChild(p);

    const p2 = document.createElement('p');

    p2.innerText = latestItem.summary;
    section.appendChild(p2);
}

function initialiseLatestBlogs(){
    initialiseLatestBlogsByClass('Technical');
    initialiseLatestBlogsByClass('Theory');
    initialiseLatestBlogsByClass('Creative');
}

document.addEventListener("DOMContentLoaded", () => initialiseLatestBlogs());