import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import tailwindStylesheetUrl from "./styles/tailwind.css";
import fontStylesheetUrl from "./styles/font.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: fontStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Per Aspera",
  viewport: "width=device-width,initial-scale=1",
});

const Sidebar = () => {
  return (
    <div className="w-1/4">
      <Link to="/">
        <h1 className="text-3xl font-bold">modsoussi;</h1>
      </Link>
      <div className="my-8">
        <ul>
          <li>
            <Link to='about'>
              About
            </Link>
          </li>
          <li>
            <Link to='posts'>
              Posts
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-sm">Interests</h2>
        <p>
          AI &bull; Robotics &bull; Space Exploration
        </p>
      </div>
      <div className="my-8 flex w-full">
        <div className="mr-4">
          <a 
            href="https://twitter.com/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="mr-4">
          <a 
            href="https://github.com/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a 
            href="https://linkedin.com/in/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
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
          <div className="flex h-full w-4/5 p-10">
            <Sidebar />
            <div className="w-full">
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
