import { Link } from "react-router-dom";
import styles from "./CardsAula.module.css";

const CardsAula = () => {
  return (
    <ul className={styles.cards}>
      <li className={styles.aula}>
        <h3>INFANTIL</h3>
        <div className={styles.aulaInfo}>
          <p>Público entre 5 e 15 anos</p>
          <p>Equipamentos fornecidos</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>2 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 49,00 / Aula</span>
        <Link to={"/matricula"}>
          MATRICULE-SE <span>➜</span>
        </Link>
      </li>
      <li className={styles.aula}>
        <h3>ADULTO</h3>
        <div className={styles.aulaInfo}>
          <p>Público entre 16 e 80 anos</p>
          <p>Equipamentos fornecidos</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>3 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 69,00 / Aula</span>
        <Link to={"/matricula"}>
          MATRICULE-SE <span>➜</span>
        </Link>
      </li>
      <li className={styles.aula}>
        <h3>PROFISSIONAL</h3>
        <div className={styles.aulaInfo}>
          <p>Experiência de 3 anos no surf</p>
          <p>Você deve trazer o equipamento</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>4 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 99,00 / Aula</span>
        <Link to={"/matricula"}>
          MATRICULE-SE <span>➜</span>
        </Link>
      </li>
    </ul>
  );
};

export default CardsAula;
