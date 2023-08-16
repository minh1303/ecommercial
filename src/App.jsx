import Header from "./Components/Header/Header";
import styles from "./App.module.css"
function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h1>Welcome to Electronic Shop</h1>
        <p>This is where you buy <strong>high quality products</strong> with <strong>reasonable price</strong></p>
      </main>
    </>
  );
}

export default App;
