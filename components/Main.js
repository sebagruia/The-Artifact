const Main = props => {
  return (
    <main>
      {props.children}

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 0 auto;
          background-color: #fff;
        }
      `}</style>
    </main>
  );
};

export default Main;
