const url = 'https://www.googleapis.com/books/v1/volumes?q=';

function addBooks(books) {
    const container = document.getElementById('book-search-result');

    books.forEach((item) => {
        const bookContainer = document.createElement('div');
        const title = document.createElement('h2');
        const authors = document.createElement('p');

        let authorsList = item.volumeInfo.authors.join(', ');

        title.innerText = item.volumeInfo.title;
        authors.innerText = authorsList;

        bookContainer.className = 'book';
        title.className = 'book_title';
        authors.className = 'book_authors';

        bookContainer.appendChild(title);
        bookContainer.appendChild(authors);
        container.appendChild(bookContainer);
    });
}


function sendRequest(value) {
    if (value.length > 3) {
        setTimeout(() => getUsersFetch(addBooks, value), 3000);
    }
}

// Fetch request
async function getUsersFetch(cards, searchString) {
    let response = await fetch(url + searchString);
    if (response.ok) {
        let users = await response.json();
        cards(users.items);
    }
}



