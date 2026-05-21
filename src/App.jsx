import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Site. Built with React + Vite.</p>
      </footer>
    </div>
  );
}
