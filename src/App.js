import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navBar">
        <ul className="ul">
          <li className="li">ISSUE JUNE</li>
          <li style={{ float: "right", paddingRight: "2%" }}>NEWS</li>
        </ul>
      </nav>
      <div className="heading">NEWSPAPER</div>
      <div className="row1">
        <div className="row1-col1">
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY'S</p>
          <p>STANDARD DUMMY TEXT EVER SINCE THE 1500S,</p>
          <p>WHEN AN UNKNOWN PRINTER TOOK A GALLEY.</p>
          <date>
            <b>10 June 2020</b>
          </date>
          <div className="row1-col1-paragraph">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="row1-col2"></div>
      </div>
      <div className="row2">
        <div className="row2-col1"></div>
        <div className="row2-col2">
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT </p>
          <p>EVER SINCE THE 1500S.</p>
          <date>
            <b>10 June 2020</b>
          </date>
          <div className="row1-col2-paragraph row1-col1-paragraph">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row3">
        <div className="row3-col1 row1-col1-paragraph">
          <h1>YOUR TITLE HERE</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className="row3-col2 row1-col1-paragraph">
          <h1>YOUR TITLE HERE</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className="row3-col3 row1-col1-paragraph">
          <h1>YOUR TITLE HERE</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
