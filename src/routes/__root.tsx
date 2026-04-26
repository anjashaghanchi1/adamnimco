import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The snack you're looking for isn't here.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adam Nimco — Fresh Nimco, Snacks & Sweets in Saddar Karachi" },
      {
        name: "description",
        content:
          "Adam Nimco — premium fresh nimco, bhail puri, papri, peanuts & sweets. Order on WhatsApp or visit our Saddar shop. Made fresh daily.",
      },
      { name: "theme-color", content: "#d63838" },
      { property: "og:title", content: "Adam Nimco — Fresh Nimco, Snacks & Sweets in Saddar Karachi" },
      { property: "og:description", content: "A premium local snack brand website for Adam Nimco, driving WhatsApp orders and phone calls." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Adam Nimco — Fresh Nimco, Snacks & Sweets in Saddar Karachi" },
      { name: "description", content: "A premium local snack brand website for Adam Nimco, driving WhatsApp orders and phone calls." },
      { name: "twitter:description", content: "A premium local snack brand website for Adam Nimco, driving WhatsApp orders and phone calls." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14252b2c-449b-40d6-9e63-ac7cc4ff3960/id-preview-d9d43b57--e12b53a7-fc34-43f9-b429-1995e4d0d957.lovable.app-1777215588024.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14252b2c-449b-40d6-9e63-ac7cc4ff3960/id-preview-d9d43b57--e12b53a7-fc34-43f9-b429-1995e4d0d957.lovable.app-1777215588024.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
