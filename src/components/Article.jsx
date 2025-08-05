import { useContext } from "react";
import { GlobalContext } from "../context"; 

function ArticleStatus({ isNew }) {
  return isNew && <span>--Baru!!</span>;
}

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <small>ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
