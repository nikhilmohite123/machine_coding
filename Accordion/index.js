const data = [
    {
        title: "tile1",
        content: "content 1"
    },
    {
        title: "tile2",
        content: "content 2"
    }
    ,
    {
        title: "tile3",
        content: "content 3"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#accordion-container');
    data.forEach((section, index) => {

        const sectionItem = document.createElement('div');
        sectionItem.classList.add('accordion-item');

        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('accordion-header');
        sectionHeader.innerText = section.title;
        sectionItem.appendChild(sectionHeader);

        const sectionContent = document.createElement('div');
        sectionContent.classList.add('accordion-content');
        sectionContent.innerHTML = `<p>${section.content}</p>`

        if (index == 0) {
            sectionContent.classList.add('active')
        }
        sectionItem.appendChild(sectionContent);

        container.appendChild(sectionItem)


    });


    container.addEventListener('click', (e) => {

        if (e.target.classList.content = ('accordion-item')) {
            const node = e.target;
            const lists=container.querySelectorAll('.accordion-content');
            lists.forEach((list)=>{
                list.classList.remove('active')
            })
            const sibling = node.nextSibling;

            sibling.classList.toggle('active');



        }
    })
})