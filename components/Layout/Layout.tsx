import { NO_LAYOUT_PAGES } from "@/constants/layoutConstants";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const currentPath: string = router.pathname;
  useEffect(() => {
    if (!router.isReady) return;
  }, [currentPath, router.isReady]);
  if (NO_LAYOUT_PAGES.includes(currentPath)) return <>{children}</>;
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
