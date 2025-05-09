function addBook() {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;

      if (title === '' || author === '') {
        alert('Harap isi semua kolom!');
        return;
      }

      const bookList = document.getElementById('books');
      const newBook = document.createElement('div');
      newBook.className = 'book-item';
      newBook.textContent = `"${title}" oleh ${author}`;
      bookList.appendChild(newBook);

      // Kosongkan input
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }