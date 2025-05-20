import { bookModel } from "@/models/book-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

// Sample data to use when database is not available
const sampleBooks = [
  {
    id: "sample1",
    title: "The Great Gatsby",
    description: "The Great Gatsby, the third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner's Sons.",
    author: "F. Scott Fitzgerald",
    cover: "https://res.cloudinary.com/atapas/image/upload/v1711539684/litloop/books/tgg_lid6da.jpg",
    genre: "Novel",
    pages: 256,
    isRented: false,
    stock: 34,
    rentPrice: 24,
    sellPrice: 230,
    sold: 12,
    ISBN: "1-86092-049-7"
  },
  {
    id: "sample2",
    title: "Murder!",
    description: "Stories in the Travelman Short Stories series take the reader to places of mystery, fantasy, horror, romance, and corners of the universe yet unexplored.",
    author: "Arnold Bennett",
    cover: "https://res.cloudinary.com/atapas/image/upload/v1711539685/litloop/books/murder_luiyw1.jpg",
    genre: "Crime",
    pages: 198,
    isRented: true,
    stock: 7,
    rentPrice: 15,
    sellPrice: 120,
    sold: 10,
    ISBN: "1-86092-050-3",
    renterIds: ["sample-user-1"]
  }
];

async function getAllBooks() {
  try {
    const allBooks = await bookModel.find().lean();
    return replaceMongoIdInArray(allBooks);
  } catch (error) {
    console.warn("Error fetching books from database, using sample data:", error.message);
    return sampleBooks;
  }
}

async function getBookById(id) {
  try {
    const book = await bookModel.findById(id).lean();
    return replaceMongoIdInObject(book);
  } catch (error) {
    console.warn(`Error fetching book with ID ${id}, using sample data:`, error.message);
    return sampleBooks.find(book => book.id === id) || sampleBooks[0];
  }
}

export { getAllBooks, getBookById };