import { NavLink } from "react-router";

const tabs = [
	{ title: "practice-1", params: "/tab1" },
	{ title: "practice-2", params: "/tab2" },
	{ title: "practice-3", params: "/tab3" },
	{ title: "practice-4", params: "/tab4" },
	{ title: "practice-5", params: "/tab5" },
	{ title: "practice-6", params: "/tab6" },
	{ title: "practice-7", params: "/tab7" },
];

export default function Header() {
	return (
		<header className=''>
			<nav className='h-[80px] flex items-center justify-center'>
				{tabs.map((tab, index) => (
					<NavLink
						to={tab.params}
						key={index}
						className={({ isActive }) =>
							`p-4 ${
								isActive
									? "font-bold text-cyan-600"
									: "font-medium"
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
