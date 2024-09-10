import styles from "./Footer.module.css";
import Icon from "../../assets/icon.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.conteudo} container`}>
        <p>Surfbot 2024 - Alguns direitos reservados</p>

        <a href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/">
          <p>Desenvolvido por Ayrton Hideo Hirata</p>
          <Icon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
