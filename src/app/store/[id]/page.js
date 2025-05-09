import { getBookById } from "@/app/lib/fake-data"; 
import Image from "next/image";
import Link from "next/link";

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);

  if (!book) {
    return (
      <div className="text-center py-10 text-red-600 font-semibold text-xl">
        Book not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/store" className="text-indigo-600 underline mb-4 block">
        ← Back to store
      </Link>
      <div className="flex flex-col sm:flex-row gap-8">
        <Image
          src={book.cover}
          alt={book.title}
          width={240}
          height={360}
          className="rounded-md object-cover"
        />
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-600 text-lg">by {book.author}</p>
          <p className="text-sm text-indigo-700 font-medium">{book.genre}</p>
          <p className="text-gray-700">{book.description}</p>
          <p className="text-gray-500 text-sm">Pages: {book.pages}</p>
          <p className="text-gray-500 text-sm">ISBN: {book.ISBN}</p>
          <p className="text-gray-700 font-semibold">
            Rent: ₹{book.rentPrice} | Buy: ₹{book.sellPrice}
          </p>
          <p
            className={`text-sm font-medium ${
              book.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.stock > 0 ? `${book.stock} in stock` : "Out of stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
