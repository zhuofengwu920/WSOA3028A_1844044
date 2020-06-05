const blogItem = [
    { title: 'As-We-May-Think', type: 'Theory', date: new Date('2020/02/20') },
    { title: 'Flash-History', type: 'Theory', date: new Date('2020/02/23') },
    { title: 'From-3G-To-4G', type: 'Theory', date: new Date('2020/02/29') },
    { title: 'Library-Of-Babel', type: 'Theory', date: new Date('2020/02/20') },
    { title: 'Medium-Is-The-Message', type: 'Theory', date: new Date('2020/02/23') },
    { title: 'The-Importance-Of-Accessibility', type: 'Theory', date: new Date('2020/03/10') },
    { title: 'Toward-A-Study-Of-Information-Geographies', type: 'Theory', date: new Date('2020/04/27') },
    { title: 'Hypertext-Navigation-Structure', type: 'Technical', date: new Date('2020/03/06') },
    { title: 'Semantic-Markup', type: 'Technical', date: new Date('2020/02/27') },
    { title: 'What-Is-A-Browser', type: 'Technical', date: new Date('2020/03/06') },
    { title: 'Ways-Of-Teaching-Oline-Minimising-Data-Usage', type: 'Creative', date: new Date() },
    { title: 'Origami', type: 'Creative', date: new Date() },
    { title: 'COVID-19', type: 'Creative', date: new Date() },
]

function generateBlogLink(temptitle, temptype) {
    let link = '/WSOA3028A_1844044/Blog/' + temptype + '/' + temptitle + '.html';

    return link
}

function initialiseBlofMenuByClass(temptype) {
    const div = document.querySelector('div.' + temptype);

    if (div)
    {
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
}

function initialiseBlogMenu() {
    initialiseBlofMenuByClass('Technical');
    initialiseBlofMenuByClass('Theory');
    initialiseBlofMenuByClass('Creative');
}

document.addEventListener("DOMContentLoaded", () => initialiseBlogMenu());