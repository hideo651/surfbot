import Aulas from "../../components/Aula/Aulas";
import Capa from "../../components/Capa/Capa";
import Contato from "../../components/Contato/Contato";
import Conteudo from "../../components/Conteudo/Conteudo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Capa />
      <Conteudo />
      <Aulas />
      <Contato />
      <Footer />
    </>
  );
};

export default HomePage;
