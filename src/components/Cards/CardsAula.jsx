/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CardsAula.module.css";
import Icon from "../../assets/icon.svg?react";
import React from "react";

const CardsAula = ({ aula }) => {
  const [matricula, setMatricula] = React.useState(false);

  React.useEffect(() => {
    if (aula) {
      setMatricula(true);
    } else {
      setMatricula(false);
    }
  }, []);

  return (
    <ul className={styles.cards}>
      <li
        className={`${styles.aula} ${
          matricula && aula === "infantil"
            ? styles.aulaAtivo
            : styles.aulaInativo
        } ${matricula ? styles.matricula : styles.home}`}
      >
        <div className={styles.icon}>
          <Icon />
        </div>
        <h3>INFANTIL</h3>
        <div className={styles.aulaInfo}>
          <p>Público entre 5 e 15 anos</p>
          <p>Equipamentos fornecidos</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>2 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 49,00 / Aula</span>
        {matricula ? (
          <></>
        ) : (
          <Link to={"/matricula"}>
            MATRICULE-SE <span>➜</span>
          </Link>
        )}
      </li>
      <li
        className={`${styles.aula} ${
          matricula && aula === "adulto" ? "" : styles.aulaInativo
        } ${matricula ? styles.matricula : styles.home}`}
      >
        <div className={styles.icon}>
          <Icon />
          <Icon />
        </div>
        <h3>ADULTO</h3>
        <div className={styles.aulaInfo}>
          <p>Público entre 16 e 80 anos</p>
          <p>Equipamentos fornecidos</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>3 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 69,00 / Aula</span>
        {matricula ? (
          <></>
        ) : (
          <Link to={"/matricula"}>
            MATRICULE-SE <span>➜</span>
          </Link>
        )}
      </li>
      <li
        className={`${styles.aula} ${
          matricula && aula === "profissional"
            ? styles.aulaAtivo
            : styles.aulaInativo
        } ${matricula ? styles.matricula : styles.home}`}
      >
        <div className={styles.icon}>
          <Icon />
          <Icon />
          <Icon />
        </div>
        <h3>PROFISSIONAL</h3>
        <div className={styles.aulaInfo}>
          <p>Experiência de 3 anos no surf</p>
          <p>Você deve trazer o equipamento</p>
          <p>Horarios de Sex. à Sáb.</p>
          <p>4 horas seguidas de aula</p>
        </div>
        <span className={styles.preco}>R$ 99,00 / Aula</span>
        {matricula ? (
          <></>
        ) : (
          <Link to={"/matricula"}>
            MATRICULE-SE <span>➜</span>
          </Link>
        )}
      </li>
    </ul>
  );
};

export default CardsAula;
