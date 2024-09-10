import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";
import useMedia from "../../Hooks/useMedia";
import React from "react";

const Header = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [page, setPage] = React.useState(null);

  const local = location.pathname;

  React.useEffect(() => {
    if (local !== "/matricula") {
      setPage(true);
    } else {
      setPage(false);
    }
  }, [local]);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.info}>
        <p className="container">
          Aulas na Praia Mansa de Sexta à Domingo das 06:00 às 14:00
        </p>
      </div>
      <nav className={styles.nav}>
        <div className={`${styles.conteudo} container`}>
          <Link to="/">
            <Logo />
          </Link>
          {mobile && page && (
            <button
              aria-label="Menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`${styles.mobileButton} ${
                mobileMenu && styles.mobileButtonActive
              }`}
            ></button>
          )}
          {page ? (
            <ul
              className={`${mobile ? styles.linksMobile : styles.links} ${
                mobileMenu && styles.linksMobileActive
              }`}
            >
              <li>
                <a href="#praia">Praia</a>
              </li>
              <li>
                <a href="#aula">Aula</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <Link to="/matricula">Matricule-se</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
