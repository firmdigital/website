import React from "react";

function Layout({ children }) {
  return <div className="mx-auto max-w-[1920px] xl:px-48 md:px-8 px-4">{children}</div>;
}

export default Layout;
