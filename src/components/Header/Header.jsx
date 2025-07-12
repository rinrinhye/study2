import { NavLink } from "react-router";
import styles from "./Header.module.css";

const tabs = [
  { title: "실습1", params: "/tab1" },
  { title: "실습2", params: "/tab2" },
  { title: "실습3", params: "/tab3" },
  { title: "실습4", params: "/tab4" },
  { title: "실습5", params: "/tab5" },
  { title: "실습6", params: "/tab6" },
  { title: "실습7", params: "/tab7" },
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
