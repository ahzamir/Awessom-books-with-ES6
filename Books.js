export class Books {
  constructor(books) {
    this.books = books || [];
  }

  add = (title, author) => {
    this.books.push({
      title,
      author,
    });
  }

}
