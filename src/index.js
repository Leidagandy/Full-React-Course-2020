import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "Amelia Hepworth",
  author: "I Love You to the Moon and Back",
};

const secondBook = {
  img:
    "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg",
  title: "God Gave Us You",
  author: "Lisa Tawn Bergren",
};
const thirdBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/61oHAXZX7ML._SX382_BO1,204,203,200_.jpg",
  title: "How to Draw 101 Animals",
  author: "Nat Lambert",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="I love you to the moon and back book" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
