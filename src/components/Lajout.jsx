import React from "react";

function Layout({ children }) {
  return <div className="mx-auto max-w-[1920px] xl:px-20 md:px-2 px-4">{children}</div>;
}

export default Layout;
