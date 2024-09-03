import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import useMedia from "../../Hooks/useMedia";
import React from "react";

const Header = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  // console.log(mobile);
  console.log(mobileMenu);
  return (
    <header className={`${styles.header}`}>
      <div className={styles.info}>
        <p className="container">
          Aulas na Praia Mansa de Sexta à Domingo das 06:00 às 14:00
        </p>
      </div>
      <nav className={styles.nav}>
        <div className={`${styles.conteudo} container`}>
          <Logo />
          {mobile && (
            <button
              aria-label="Menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`${styles.mobileButton} ${
                mobileMenu && styles.mobileButtonActive
              }`}
            ></button>
          )}
          <ul
            className={`${mobile ? styles.linksMobile : styles.links} ${
              mobileMenu && styles.linksMobileActive
            }`}
          >
            <li>Praia</li>
            <li>Aula</li>
            <li>Contato</li>
            <li>
              <Link to="/matricula">Matricule-se</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
