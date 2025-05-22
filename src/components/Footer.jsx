import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      backgroundColor: "#222",
      textAlign: "center",
      padding: "1rem 0",
      position: "relative",
      bottom: 0,
      width: "100%",
    }}
  >
    <p>
      &copy; {new Date().getFullYear()} Lachlan Wallbridge. All rights reserved.
    </p>
  </footer>
);

export default Footer;
