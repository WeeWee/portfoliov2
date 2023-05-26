import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/build.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: stylesheet }]),
];
export const meta: V2_MetaFunction = () => {
  const title = "Adam Kindberg's Portfolio";
  const description = "Adam Kindberg's portfolio website";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:url", content: "https://adamkindberg.com" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://i.imgur.com/IhFrz4E.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://adamkindberg.com" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://i.imgur.com/IhFrz4E.png" },
  ];
};
export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" font-montserrat dark:bg-neutral-900 dark:text-white selection:bg-purple-600 selection:text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
