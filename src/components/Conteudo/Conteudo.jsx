import styles from "./Conteudo.module.css";

import Prancha from "../../assets/pranchas.jpg";
import Sandalha from "../../assets/sandalhas.svg?react";
import Coco from "../../assets/coco.svg?react";
import Boia from "../../assets/boia.svg?react";
import Mapa from "../../assets/mapa.png";

const Conteudo = () => {
  return (
    <section id="praia" className={`${styles.section} container`}>
      <div className={styles.details}>
        <div className={styles.fotos}>
          <div className={styles.prancha}>
            <img src={Prancha} alt="prancha" />
          </div>
          <div className={styles.mapa}>
            <img src={Mapa} alt="mapa" />
          </div>
        </div>
        <ul className={styles.localizacao}>
          <li>COMO CHEGAR</li>
          <li>
            <p>
              <span>Carro</span> pela via Lúcio Costa sentido Barra
            </p>
          </li>
          <li>
            <p>
              <span>Ônibus</span> linhas 2333, 168, 189 e 170
            </p>
          </li>
          <li>
            <p>
              <span>Metrô</span> linha azul sentido Zona Sul
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.conteudo}>
        <h2 className="font-01">
          <span>Aulas</span> em uma das melhores prais do <span>Rio</span>.
        </h2>
        <ul className={styles.infos}>
          <li>
            <Sandalha />
            <p>8km de costa</p>
          </li>
          <li>
            <Coco />
            <p>Restaurante à beira mar</p>
          </li>
          <li>
            <Boia />
            <p>Salva-vidas a cada 300m</p>
          </li>
        </ul>
        <p>
          Como cidade capital, abriga na zona chamada Plateau, promontório à
          beira-mar, edifícios públicos e outras construções de importância,
          como o Palácio Presidencial, construído no fim do século XIX para ser
          a residência do governador português.
        </p>
        <p>
          Como cidade capital, abriga na zona chamada Plateau, promontório à
          beira-mar, edifícios públicos e outras construções de importância,
          como o Palácio Presidencial, construído no fim do século XIX para ser
          a residência do governador português.
        </p>
      </div>
    </section>
  );
};

export default Conteudo;
