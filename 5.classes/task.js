//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null; 
    }

    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
} 

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
          return this.books.splice(bookIndex, 1)[0];
        }
        return null;  
    }
}

// п.5 задания 2 закомментировала, т.к. с кодом GitHub Pages пишет Scrypt Error
// library.addBook(
//     new DetectiveBook(
//       "Артур Конан Дойл",
//       "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//       2019,
//       1008
//     )
//    );
//    library.addBook(
//     new FantasticBook(
//       "Аркадий и Борис Стругацкие",
//       "Пикник на обочине",
//       1972,
//       168
//     )
//    );
//    library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
//    library.addBook(new Magazine("Мурзилка", 1924, 60));
   
//    // Поиск книги 1919 года
//    let book1919 = library.findBookBy("releaseDate", 1919);
//    if (!book1919) {
//      console.log("Книга 1919 года не найдена. Добавляем её в библиотеку.");
//      book1919 = new NovelBook("Василий Шульгин", "1919 год. В 2-х томах", 1919, 976);
//      library.addBook(book1919);
//    }
   
//    console.log("Книга 1919 года:", book1919);
   
//    console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи
//    const issuedBook = library.giveBookByName("Машина времени");
//    console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи
   
//    if (issuedBook) {
//      console.log("Выданная книга:", issuedBook);
//      issuedBook.state = 10; // Повредили книгу
//      console.log("Состояние выданной книги: " + issuedBook.state); // 10
//      issuedBook.fix(); // Восстановили книгу
//      console.log("Состояние после восстановления: " + issuedBook.state); // 15
//      library.addBook(issuedBook); // Пытаемся добавить книгу обратно в библиотеку
//      console.log("Количество книг после возврата: " + library.books.length); // 4 (если состояние > 30, иначе не добавится)
//    }



