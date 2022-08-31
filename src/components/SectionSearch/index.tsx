import logo from "../../assets/img/logo.png";

const SectionSearch = () => {
  return (
    <>
      <section>
        <img src={logo} alt="BestWeather" />
        <h2>BestWeather</h2>
      </section>

      <div>
        <input type="text" placeholder="Digite a sua localização aqui" />
        <button className="search-button">Buscar</button>
      </div>
    </>
  );
};

export default SectionSearch;
