import { Suspense } from "react";
import { Header } from "../../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
