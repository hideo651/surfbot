import CardsAula from "../Cards/CardsAula";
import styles from "./Aulas.module.css";

const Aulas = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.conteudo} container`}>
        <h2>Aulas</h2>
        <CardsAula />
        <div className={styles.detail}>
          <p>
            Possui um grupo com mais de <span>3 pessoas</span>?
          </p>
          <p>
            Entre em <span>contato</span> para um desconto personalizado
          </p>
        </div>
      </div>
      <div className={styles.onda}>
        <div className={styles.ondaTexto}>
          <h2 className="font-01">“O surf liberta as ondas de uma vida.”</h2>
          <p>Regis Pereira</p>
        </div>
      </div>
    </section>
  );
};

export default Aulas;
