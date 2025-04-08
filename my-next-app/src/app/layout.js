
export const metadata = {
  title: "Akki Portfolio",
  description: "This is Description",
};

import "./globals.css";
import CustomCursor from "../components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}