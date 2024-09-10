import React from "react";
import CardsAula from "../../components/Cards/CardsAula";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./MatriculaPage.module.css";
import Footer from "../../components/Footer/Footer";

const MatriculaPage = () => {
  const [aula, setAula] = React.useState("infantil");
  const handleChange = (e) => {
    const escolha = e.target.value;
    setAula(escolha);
  };

  const [valor, setValor] = React.useState(null);

  React.useEffect(() => {
    if (aula === "infantil") {
      setValor(49.0);
    } else if (aula === "adulto") {
      setValor(69.0);
    } else {
      setValor(99.0);
    }
  }, [aula]);
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const anos = [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
  ];

  return (
    <>
      <Header />
      <section className={`${styles.section}`}>
        <h1 className="font-01">Matricule-se</h1>
        <div className="container">
          <div className={styles.conteudo}>
            <form action="">
              <Input label="Nome" />
              <Input label="Email" />
              <Input label="CPF" />
              <div className={styles.endereco}>
                <Input label="Endereço" />
                <Input label="Estado" />
                <Input label="CEP" />
                <Input label="Cidade" />
              </div>
              <div className={styles.pagamento}>
                <h2>Forma de pagamento</h2>
                <div className={styles.metodo}>
                  <div className={styles.forma}>
                    <input type="radio" id="cartao" name="pagamento" />
                    <label htmlFor="cartao">Cartão de crédito</label>
                  </div>
                  <div className={styles.forma}>
                    <input type="radio" id="boleto" name="pagamento" />
                    <label htmlFor="boleto">Boleto</label>
                  </div>
                </div>
                <div>
                  <Input label="Nome do cartão" />
                  <Input label="Número do cartão" />
                  <div className={styles.data}>
                    <div className={styles.wrap}>
                      <div>
                        <label htmlFor="">Data de expiração</label>
                      </div>
                      <div className={styles.mes}>
                        <select name="" id="">
                          {meses.map((mes, index) => {
                            return (
                              <option key={index} value={mes}>
                                {mes}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className={styles.ano}>
                        <select>
                          {anos.map((ano, index) => {
                            return (
                              <option key={index} value={ano}>
                                {ano}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <Input label="Código de segurança" placeholder="XXX" />
                  </div>
                </div>
              </div>
              <p>Seu cartão será debitado em R$ {valor}</p>
              <button className={styles.btnMatricula}>
                REALIZAR MATRICULA
              </button>
            </form>
            <div className={styles.plano}>
              <h3>Escolha o plano</h3>
              <div className={styles.lista}>
                <div className={styles.radio}>
                  <input
                    type="radio"
                    id="infantil"
                    name="plano"
                    value="infantil"
                    onChange={handleChange}
                  />
                  <label htmlFor="infantil">Infantil</label>
                </div>
                <div className={styles.radio}>
                  <input
                    type="radio"
                    id="adulto"
                    name="plano"
                    value="adulto"
                    onChange={handleChange}
                  />
                  <label htmlFor="adulto">Adulto</label>
                </div>
                <div className={styles.radio}>
                  <input
                    type="radio"
                    id="profissional"
                    name="plano"
                    value="profissional"
                    onChange={handleChange}
                  />
                  <label htmlFor="profissional">Profissional</label>
                </div>
              </div>
              <CardsAula aula={aula} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MatriculaPage;
