import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import CartProvider from "./contexts/CartContext";
import { CustomerProvider } from "./contexts/CustomerContext";
import { ProductsProvider } from "./contexts/ProductContext";
import themes from "./themes/theme";
import { LayoutProps } from "./types";

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themes}>
            <ProductsProvider>
              <CartProvider>
                <CustomerProvider>
                  <Header />
                  {children}
                  <Footer />
                </CustomerProvider>
              </CartProvider>
            </ProductsProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
