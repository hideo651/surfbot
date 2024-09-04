import styles from "./Capa.module.css";

const Capa = () => {
  function handleSubmit(event) {
    console.log("teste");
    event.preventDefault();
  }
  return (
    <section className={styles.section}>
      <div className={`${styles.conteudo} container`}>
        <h1 className="font-01">Escola de Surf</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <button>Matricule-se ➜</button>
        </form>
      </div>
    </section>
  );
};

export default Capa;
