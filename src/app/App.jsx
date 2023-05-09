import Form from "../components/Form/Form";
import banner from "../assets/background.jpg";
import "../assets/style/main.scss";

function App() {
  return (
    <div className="main-page">
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="banner__gradient" />
        <div className="header">
          <h1 className="header__title">HexRestaurant</h1>
          <p className="header__subtitle">PIZZA | SOUPS | SANDWICHES</p>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
