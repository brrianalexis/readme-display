import { GetStaticProps } from "next";
import { useState } from "react";

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

export default function Home({ baseUrl }: Props) {
  const [selectedTheme, setSelectedTheme] = useState("minimal");

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 md:space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Readme Display
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <ThemeSelector
              selectedTheme={selectedTheme}
              onChange={setSelectedTheme}
            />
            <ThemeToggle />
          </div>
        </div>

        <section className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Last.fm Now Playing
            </h2>
            <div className="space-y-4 md:space-y-6 bg-white dark:bg-neutral-900 p-4 md:p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <div className="overflow-x-auto">
                <img
                  src={`${baseUrl}/api/last-fm/now-playing?theme=${selectedTheme}`}
                  alt="Last.fm Now Playing"
                  width={SVG_CONFIG.lastfm.now_playing.width}
                  height={SVG_CONFIG.lastfm.now_playing.height}
                  className="min-w-[480px]"
                />
              </div>
              <CodeSnippet>
                {`![Last.fm Now Playing](https://your-deployment-url/api/last-fm/now-playing?theme=${selectedTheme})`}
              </CodeSnippet>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Last.fm Top Artists
            </h2>
            <div className="space-y-4 md:space-y-6 bg-white dark:bg-neutral-900 p-4 md:p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <div className="overflow-x-auto">
                <img
                  src={`${baseUrl}/api/last-fm/top-artists?theme=${selectedTheme}`}
                  alt="Last.fm Top Artists"
                  width={SVG_CONFIG.lastfm.top_artists.width}
                  height={SVG_CONFIG.lastfm.top_artists.height}
                  className="min-w-[480px]"
                />
              </div>
              <CodeSnippet>
                {`![Last.fm Top Artists](https://your-deployment-url/api/last-fm/top-artists?theme=${selectedTheme})`}
              </CodeSnippet>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Letterboxd Recent Movies
            </h2>
            <div className="space-y-4 md:space-y-6 bg-white dark:bg-neutral-900 p-4 md:p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <div className="overflow-x-auto">
                <img
                  src={`${baseUrl}/api/letterboxd?theme=${selectedTheme}`}
                  alt="Letterboxd Recent Movies"
                  width={SVG_CONFIG.letterboxd.width}
                  height={SVG_CONFIG.letterboxd.height}
                  className="min-w-[480px]"
                />
              </div>
              <CodeSnippet>
                {`![Letterboxd Recent Movies](https://your-deployment-url/api/letterboxd?theme=${selectedTheme})`}
              </CodeSnippet>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
