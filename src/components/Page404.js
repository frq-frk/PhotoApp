const Page404 = () => {
  const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "Center"
  };

  return (
    <div style={style}>
      <h1 class="display-1">404</h1>
      <h1>OOPS!!! Page Not Found</h1>
    </div>
  );
};

export default Page404;
