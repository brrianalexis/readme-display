import { themes } from "@/utils/themes";

type Props = {
	selectedTheme: string;
	onChange: (theme: string) => void;
};

export function ThemeSelector({ selectedTheme, onChange }: Props) {
	const handleChange = (theme: string) => {
		onChange(theme);
		localStorage.setItem("readme-display-theme", theme);
	};

	return (
		<select
			id="theme-select"
			value={selectedTheme}
			onChange={(e) => handleChange(e.target.value)}
			className="h-10 px-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 border-none text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
		>
			{Object.keys(themes).map((theme) => (
				<option key={theme} value={theme}>
					{theme.charAt(0).toUpperCase() + theme.slice(1)}
				</option>
			))}
		</select>
	);
}
