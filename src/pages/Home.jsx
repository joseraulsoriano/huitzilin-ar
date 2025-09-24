import "../styles/Home.css";
import NavBar from "../components/NavBar";
import NegroHuit from "../assets/definitivomain.svg"
import Logo from "../assets/huitzillin_logo 1.svg";
import Footer from "../components/Footer";
import OptimizedImage from "../components/OptimizedImage";

const Home = () => {

    return (
        <>
        <NavBar></NavBar>

            <header>
            <OptimizedImage src={NegroHuit} alt="Huitzillin V1 - Aeronave VTOL No Tripulada" loading="eager" />
            <div className="info">
                <h3>HUITZILLIN V1</h3>
                <a href="/huitzillin">Conócelo ahora</a>
            </div>
            </header>
            <main>
                <section className="mision-vision">
                    <div className="info">
                        <h3>Conoce nuestra misión y visión</h3>
                        <a href="/mision-vision">Misión y visión </a>
                    </div>
                </section>
                <section className="why-huitzillin">
                    <OptimizedImage src={Logo} alt="Logo de Huitzillin - Colibrí" />
                    <div className="info">
                        <h3>Descubre el por qué de Huitzillin</h3>
                        <a href="/identidad">Nuestra Identidad</a>
                    </div>
                </section>
                <section className="nosotros-section">
                <div className="info">
                        <h3>Conoce nuestra pasión y organización</h3>
                        <a href="/nosotros">Nosotros</a>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home;