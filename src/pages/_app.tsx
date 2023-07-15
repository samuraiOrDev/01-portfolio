import "@/styles/globals.css";
import "@/styles/NavBar.css";
import "@/styles/HeroSection.css";
import "@/styles/SkillSectionTabs.css";
import "@/styles/SliderReact.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
