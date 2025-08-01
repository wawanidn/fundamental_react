function Article() {
  const name = "Nusendra";
  const titles = ["Tutorial Reactjs", "Tutorial Nextjs", "Tutorial Nodejs"];

  return;
  <>
    <div>{"name"}</div>;
    <div>
      {titles.map((title) => {
        return (
          <>
            <div>{title}</div>
            <div>{title}</div>
          </>
        );
      })}
    </div>
  </>;
}

export default Article;
