import type { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { CodeSnippet, ThemeSelector, ThemeToggle } from "@/components";
import { SVG_CONFIG } from "@/constants";

type Props = {
	baseUrl: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "http://localhost:3000";

	return {
		props: {
			baseUrl,
		},
	};
};

const widgets = [
	{
		title: "Now Playing",
		emoji: "🎧",
		description: "What you're currently listening to on Last.fm",
		endpoint: "last-fm/now-playing",
		config: SVG_CONFIG.lastfm.now_playing,
	},
	{
		title: "Top Artists",
		emoji: "🎵",
		description: "Your most played artists this week",
		endpoint: "last-fm/top-artists",
		config: SVG_CONFIG.lastfm.top_artists,
	},
	{
		title: "Recent Movies",
		emoji: "🎬",
		description: "Your latest Letterboxd diary entries",
		endpoint: "letterboxd",
		config: SVG_CONFIG.letterboxd,
	},
] as const;

export default function Home({ baseUrl }: Props) {
	const [selectedTheme, setSelectedTheme] = useState("minimal");

	useEffect(() => {
		const saved = localStorage.getItem("readme-display-theme");
		if (saved) setSelectedTheme(saved);
	}, []);

	return (
		<>
			<Head>
				<title>Readme Display</title>
				<meta
					name="description"
					content="Dynamic SVG widgets for your GitHub profile — show what you're listening to on Last.fm and watching on Letterboxd."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
			<div className="max-w-4xl mx-auto px-4 py-12 md:px-8 md:py-20">
				<header className="flex flex-col gap-6 mb-16">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
								Readme Display
							</h1>
							<p className="mt-2 text-neutral-600 dark:text-neutral-400 text-lg">
								Dynamic widgets for your GitHub profile
							</p>
						</div>
						<ThemeToggle />
					</div>
					<div className="flex items-center gap-3">
						<span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
							Theme
						</span>
						<ThemeSelector
							selectedTheme={selectedTheme}
							onChange={setSelectedTheme}
						/>
					</div>
				</header>

				<section className="space-y-12">
					{widgets.map((widget) => (
						<div key={widget.endpoint} className="group">
							<div className="flex items-baseline gap-3 mb-4">
								<span className="text-2xl">{widget.emoji}</span>
								<div>
									<h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
										{widget.title}
									</h2>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										{widget.description}
									</p>
								</div>
							</div>
							<div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 p-4 md:p-6 space-y-4 shadow-sm group-hover:shadow-md transition-shadow">
								<div className="overflow-x-auto">
									<img
										src={`${baseUrl}/api/${widget.endpoint}?theme=${selectedTheme}`}
										alt={widget.title}
										width={widget.config.width}
										height={widget.config.height}
										className="min-w-[480px]"
									/>
								</div>
								<CodeSnippet>
									{`![${widget.title}](https://your-deployment-url/api/${widget.endpoint}?theme=${selectedTheme})`}
								</CodeSnippet>
							</div>
						</div>
					))}
				</section>
			</div>
		</main>
		</>
	);
}
