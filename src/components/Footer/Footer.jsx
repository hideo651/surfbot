import styles from "./Footer.module.css";
import Icon from "../../assets/icon.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.conteudo} container`}>
        <p>Surfnet 2024 - Alguns direitos reservados</p>
        <Icon />
      </div>
    </footer>
  );
};

export default Footer;
