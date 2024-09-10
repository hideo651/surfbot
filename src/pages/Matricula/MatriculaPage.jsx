import React from "react";
import CardsAula from "../../components/Cards/CardsAula";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./MatriculaPage.module.css";

const MatriculaPage = () => {
  const [aula, setAula] = React.useState("infantil");
  const handleChange = (e) => {
    const escolha = e.target.value;
    setAula(escolha);
  };

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
    </>
  );
};

export default MatriculaPage;
