import * as React from "react";
import { Helmet } from "react-helmet";
import Topbar from "../components/Topbar";
import Jumbo from "../components/Jumbo";
import Introduction from "../components/Introduction";
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
      <Helmet defer={false}>
        <html lang="en" />
        <title>
          Welcome to MrPhysio | Physiotherapist Bantry Bay, Cape Town
        </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="MrPhysio offer physiotherapy services in Bantry Bay, Cape Town"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Topbar />
      <Jumbo />
      <Introduction />
      <Team />
      <Studio />
      <Footer />
    </main>
  );
};

export default IndexPage;
