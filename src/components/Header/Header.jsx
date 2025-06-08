import { NavLink } from 'react-router';
import styles from './Header.module.css';

const tabs = [
  { title: '1주차', params: '/tab1' },
  { title: '2주차', params: '/tab2' },
  { title: '3주차', params: '/tab3' },
  { title: '4주차', params: '/tab4' },
  { title: '5주차', params: '/tab5' },
  { title: '6주차', params: '/tab6' },
  { title: '7주차', params: '/tab7' },
  { title: '8주차', params: '/tab8' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {tabs.map((tab, index) => (
          <NavLink
            to={tab.params}
            key={index}
            className={({ isActive }) =>
              isActive ? `${styles.tab} ${styles.active}` : styles.tab
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
