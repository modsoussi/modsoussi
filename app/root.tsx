import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Sidebar from "./components/Sidebar";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import fontStylesheetUrl from "./styles/font.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "modsoussi;",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: fontStylesheetUrl },
  ]
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="h-full flex items-center justify-center font-rubik">
          <div className="flex flex-col md:flex-row h-full w-full lg:w-3/5 max-w-5xl p-4 md:p-10">
            <Sidebar />
            <div className="w-full px-4 md:px-6 pt-[0.6rem] lg:pt-[0.9rem] text-sm md:text-base">
              <Outlet />
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
