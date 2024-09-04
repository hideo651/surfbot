import Aulas from "../../components/Aula/Aulas";
import Capa from "../../components/Capa/Capa";
import Conteudo from "../../components/Conteudo/conteudo";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Capa />
      <Conteudo />
      <Aulas />
    </>
  );
};

export default HomePage;
