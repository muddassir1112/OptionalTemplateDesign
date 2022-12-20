import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="timeline">
        <ul className="timeline__info">
          <li className="timeline__info__month">ISSUE JUNE</li>
          <li style={{ float: "right", paddingRight: "2%" }}>NEWS</li>
        </ul>
      </nav>
      <div className="header">NEWSPAPER</div>
      <div className="news1">
        <div className="news1__details">
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY'S</p>
          <p>STANDARD DUMMY TEXT EVER SINCE THE 1500S,</p>
          <p>WHEN AN UNKNOWN PRINTER TOOK A GALLEY.</p>
          <date>
            <b>10 June 2020</b>
          </date>
          <div className="news1__details__information">
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
        <div className="news1__image"></div>
      </div>
      <div className="news2">
        <div className="news2__image"></div>
        <div className="news2__details">
          <p>LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT </p>
          <p>EVER SINCE THE 1500S.</p>
          <date>
            <b>10 June 2020</b>
          </date>
          <div className="news2__details__information news1__details__information">
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
      <div className="newsBulletins">
        <div className="newsBulletins__one news1__details__information">
          <h1>YOUR TITLE HERE</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className="newsBulletins__two news1__details__information">
          <h1>YOUR TITLE HERE</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className="newsBulletins__three news1__details__information">
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
