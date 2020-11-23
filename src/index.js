import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img:
      "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg",
    title: "God Gave Us You",
    author: "Lisa Tawn Bergren",
  },

  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61oHAXZX7ML._SX382_BO1,204,203,200_.jpg",
    title: "How to Draw 101 Animals",
    author: "Nat Lambert",
  },
  {
    id: 4,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg",
    title: "Big Preschool Workbook",
    author: "Joan Hoffman ",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  //attribute , eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Heloo");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author } = props;
  console.log(props);
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
