import { NavLink } from "react-router";

const tabs = [
  { title: "practice-1", params: "/tab1" },
  { title: "practice-2", params: "/tab2" },
  { title: "practice-3", params: "/tab3" },
  { title: "practice-4", params: "/tab4" },
  { title: "practice-5", params: "/tab5" },
  { title: "practice-6", params: "/tab6" },
];

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-center flex-wrap p-2 mb-4">
        {tabs.map((tab, index) => (
          <NavLink
            to={tab.params}
            key={index}
            className={({ isActive }) =>
              `px-8 py-6 ${
                isActive ? "font-bold text-cyan-600" : "font-medium"
              }`
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
