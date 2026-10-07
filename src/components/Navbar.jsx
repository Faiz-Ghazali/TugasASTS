import { NavLink } from "react-router"

const navItems = [
	{ label: "Home", to: "/", end: true },
	{ label: "About", to: "/about" },
	{ label: "Testimoni", to: "/testimoni" },
	{ label: "FAQ", to: "/faq" },
]

function Navbar() {
	return (
		<header className="border-b border-border bg-background">
			<nav
				aria-label="Main navigation"
				className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4"
			>
				<NavLink to="/" end className="text-lg font-semibold text-foreground">
					Logo
				</NavLink>
				<div className="flex flex-wrap items-center gap-1">
					{navItems.map(({ label, to, end }) => (
						<NavLink
							key={to}
							to={to}
							end={end}
							className={({ isActive }) =>
								`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
									isActive ? "bg-muted text-foreground" : "text-muted-foreground"
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</div>
				<button className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
					Sign in
				</button>
			</nav>
		</header>
	)
}

export default Navbar
