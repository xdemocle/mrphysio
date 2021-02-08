import * as React from "react";
import { Helmet } from "react-helmet";
import Topbar from "../components/Topbar";
import Jumbo from "../components/Jumbo";
import Team from "../components/Team";
import Studio from "../components/Studio";
import Footer from "../components/Footer";
import "../styles/global.css";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
// const paragraphStyles = {
//   marginBottom: 48,
// };

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet
        title="Welcome to MrPhysio | physiotherapist cape town"
        defer={false}
      />
      <Topbar />
      <Jumbo />
      <Team />
      <Studio />
      <Footer />
    </main>
  );
};

export default IndexPage;
