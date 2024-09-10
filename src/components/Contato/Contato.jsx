/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Input from "../Input/Input";
import styles from "./Contato.module.css";

const Contato = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [funcionamento, setFuncionamento] = React.useState(null);

  const diasAberto = [1, 2, 3, 4, 5, 6];

  React.useEffect(() => {
    const dateAgora = new Date();
    const dia = dateAgora.getDay();
    const horas = dateAgora.getHours();

    const aberto = diasAberto.includes(dia);

    if (aberto && horas >= 6 && horas <= 14) {
      setFuncionamento(true);
    } else {
      setFuncionamento(false);
    }
    console.log(aberto);
  }, []);

  return (
    <section id="contato" className={`${styles.section} container`}>
      <h2 className="font-01">Contato</h2>
      <div className={styles.conteudo}>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="name" />
          <Input label="Email" type="text" name="email" />
          <div className={styles.textarea}>
            <label htmlFor="">Mensagem</label>
            <textarea />
          </div>
          <button className={styles.btnEnviar}>ENVIAR MENSAGEM ➜</button>
        </form>
        <ul>
          <li>
            <h3>Endereço</h3>
            <p>Prai Mansa nº 47</p>
            <p>Rio de Janeiro - RJ</p>
            <p>Procure a barraca vermelha</p>
            <a
              target="_blank"
              href="https://www.google.com.br/maps/place/Praia+Vermelha/@-22.9979313,-43.4250161,12z/data=!4m10!1m2!2m1!1spraia+rio+de+janeiro+famosa!3m6!1s0x99801a76741d47:0x9fa9df70526927c8!8m2!3d-22.955163!4d-43.164698!15sChtwcmFpYSByaW8gZGUgamFuZWlybyBmYW1vc2FaHSIbcHJhaWEgcmlvIGRlIGphbmVpcm8gZmFtb3NhkgEFYmVhY2iaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTVNblJZZUhGblJSQULgAQA!16s%2Fg%2F120z6qrl?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
            >
              VER NO MAPA <span>➜</span>
            </a>
          </li>
          <li>
            <h3>Email & Telefone</h3>
            <p>contato@surfbot.com</p>
            <p>(21) 999-999-999</p>
          </li>
          <li>
            <h3 className={funcionamento ? styles.aberto : styles.fechado}>
              Horário
            </h3>
            <p>De sexta à Sábado</p>
            <p>Das 06:00 às 14:00</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
