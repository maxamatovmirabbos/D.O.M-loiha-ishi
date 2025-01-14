const data = [
    { id: 1, title: 'Item 1', description: 'This is the first item.' },
    { id: 2, title: 'Item 2', description: 'This is the second item.' },
    { id: 3, title: 'Item 3', description: 'This is the third item.' },
    { id: 4, title: 'Item 4', description: 'This is the fourth item.' },
    { id: 5, title: 'Item 5', description: 'This is the fiveth item.' },
    { id: 6, title: 'Item 6', description: 'This is the sixth item.' },
    { id: 7, title: 'Item 7', description: 'This is the seventh item.' },
    { id: 8, title: 'Item 8', description: 'This is the eighth item.' },
    { id: 9, title: 'Item 9', description: 'This is the nineth item.' },
    { id: 10, title: 'Item 10', description: 'This is the tenth item.' },
];  

const container = document.getElementById('container');

data.map(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
    `;
    container.appendChild(div);
});