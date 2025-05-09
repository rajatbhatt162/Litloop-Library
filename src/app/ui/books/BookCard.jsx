import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    <Link href={`/store/${book.id}`} className="group">
      <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform group-hover:-translate-y-1 group-hover:shadow-lg duration-200 w-full">
        <div className="w-full h-64 relative">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 space-y-1 w-[250px]">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
            {book.title}
          </h2>
          <p className="text-sm text-gray-700">
            Rent: ₹{book.rentPrice} | Buy: ₹{book.sellPrice}
          </p>
          <p
            className={`text-xs font-medium ${
              book.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.stock > 0 ? `${book.stock} in stock` : "Out of stock"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
