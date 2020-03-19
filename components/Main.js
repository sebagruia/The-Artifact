const Main = props => {
  return (
    <main>
      <hr></hr>
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
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }

         {
          /* =====LOCAL STYLES Media Queries===== */
        }
        @media screen and (min-width: 320px) {
          hr {
            width: 90%;
          }
        }
        @media screen and (min-width: 576px) {
          hr {
            width: 96%;
          }
        }
      `}</style>
    </main>
  );
};

export default Main;
