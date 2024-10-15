import Nav from "@components/Nav";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Nav />
      {children}
    </body>
  </html>
);

export default RootLayout;
