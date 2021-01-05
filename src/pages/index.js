import * as React from "react";
import { Helmet } from "react-helmet";
import Topbar from "../components/Topbar";
import Jumbo from "../components/Jumbo";
import "../styles/global.css";
import "../styles/layout.css";

// styles
const pageStyles = {
  color: "#232129",
  // padding: "4rem 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontFamily: "'Yellowtail', cursive",
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

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
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <p style={paragraphStyles}>
        Cupcake ipsum dolor sit. Amet cookie powder I love muffin fruitcake.
        Biscuit bonbon cookie pudding sugar plum. I love cotton candy dragée
        powder I love halvah gingerbread muffin candy canes. Bonbon danish cake
        sweet roll dragée cake soufflé danish. Tiramisu halvah toffee chocolate
        bar jelly beans sweet roll. I love chocolate cake powder apple pie
        gummies danish. I love cookie gingerbread cheesecake. Pie lollipop
        chocolate cake bear claw jelly-o candy. Apple pie I love caramels
        powder. Tart tiramisu marzipan sesame snaps gingerbread. Cookie
        chocolate cake cupcake. Biscuit lemon drops powder I love pie apple pie
        tart. I love sweet candy canes biscuit croissant sweet roll. Liquorice
        jelly beans cake. Muffin chocolate bar macaroon gummi bears danish.
        Chupa chups soufflé pastry I love lollipop dragée. I love topping
        liquorice ice cream tootsie roll I love jelly-o. Cotton candy I love
        chupa chups biscuit topping powder jelly. I love tootsie roll carrot
        cake dragée sesame snaps cake tart candy canes. Danish gummies cookie
        gummi bears. Lemon drops toffee I love sweet biscuit sugar plum. I love
        croissant brownie danish bonbon. Bear claw biscuit jelly danish marzipan
        cotton candy chocolate cake. Dessert tart chocolate. Lollipop sesame
        snaps gingerbread icing gingerbread. Icing jelly bear claw tootsie roll.
        Apple pie carrot cake dragée pie jelly oat cake wafer pastry I love.
        Lollipop liquorice sesame snaps cake. Lemon drops chocolate bar ice
        cream I love danish. Danish cookie bear claw biscuit chocolate tootsie
        roll muffin. Chupa chups carrot cake toffee jelly-o tootsie roll. Cookie
        candy canes bear claw brownie cake. I love jelly beans dragée I love
        lollipop jujubes chocolate cake. Gummies danish wafer. Cheesecake toffee
        cheesecake sugar plum topping sesame snaps sugar plum I love jelly.
        Sweet roll topping I love tart.
      </p>
      <p style={paragraphStyles}>
        Cupcake ipsum dolor sit. Amet cookie powder I love muffin fruitcake.
        Biscuit bonbon cookie pudding sugar plum. I love cotton candy dragée
        powder I love halvah gingerbread muffin candy canes. Bonbon danish cake
        sweet roll dragée cake soufflé danish. Tiramisu halvah toffee chocolate
        bar jelly beans sweet roll. I love chocolate cake powder apple pie
        gummies danish. I love cookie gingerbread cheesecake. Pie lollipop
        chocolate cake bear claw jelly-o candy. Apple pie I love caramels
        powder. Tart tiramisu marzipan sesame snaps gingerbread. Cookie
        chocolate cake cupcake. Biscuit lemon drops powder I love pie apple pie
        tart. I love sweet candy canes biscuit croissant sweet roll. Liquorice
        jelly beans cake. Muffin chocolate bar macaroon gummi bears danish.
        Chupa chups soufflé pastry I love lollipop dragée. I love topping
        liquorice ice cream tootsie roll I love jelly-o. Cotton candy I love
        chupa chups biscuit topping powder jelly. I love tootsie roll carrot
        cake dragée sesame snaps cake tart candy canes. Danish gummies cookie
        gummi bears. Lemon drops toffee I love sweet biscuit sugar plum. I love
        croissant brownie danish bonbon. Bear claw biscuit jelly danish marzipan
        cotton candy chocolate cake. Dessert tart chocolate. Lollipop sesame
        snaps gingerbread icing gingerbread. Icing jelly bear claw tootsie roll.
        Apple pie carrot cake dragée pie jelly oat cake wafer pastry I love.
        Lollipop liquorice sesame snaps cake. Lemon drops chocolate bar ice
        cream I love danish. Danish cookie bear claw biscuit chocolate tootsie
        roll muffin. Chupa chups carrot cake toffee jelly-o tootsie roll. Cookie
        candy canes bear claw brownie cake. I love jelly beans dragée I love
        lollipop jujubes chocolate cake. Gummies danish wafer. Cheesecake toffee
        cheesecake sugar plum topping sesame snaps sugar plum I love jelly.
        Sweet roll topping I love tart.
      </p>
      <p style={paragraphStyles}>
        Cupcake ipsum dolor sit. Amet cookie powder I love muffin fruitcake.
        Biscuit bonbon cookie pudding sugar plum. I love cotton candy dragée
        powder I love halvah gingerbread muffin candy canes. Bonbon danish cake
        sweet roll dragée cake soufflé danish. Tiramisu halvah toffee chocolate
        bar jelly beans sweet roll. I love chocolate cake powder apple pie
        gummies danish. I love cookie gingerbread cheesecake. Pie lollipop
        chocolate cake bear claw jelly-o candy. Apple pie I love caramels
        powder. Tart tiramisu marzipan sesame snaps gingerbread. Cookie
        chocolate cake cupcake. Biscuit lemon drops powder I love pie apple pie
        tart. I love sweet candy canes biscuit croissant sweet roll. Liquorice
        jelly beans cake. Muffin chocolate bar macaroon gummi bears danish.
        Chupa chups soufflé pastry I love lollipop dragée. I love topping
        liquorice ice cream tootsie roll I love jelly-o. Cotton candy I love
        chupa chups biscuit topping powder jelly. I love tootsie roll carrot
        cake dragée sesame snaps cake tart candy canes. Danish gummies cookie
        gummi bears. Lemon drops toffee I love sweet biscuit sugar plum. I love
        croissant brownie danish bonbon. Bear claw biscuit jelly danish marzipan
        cotton candy chocolate cake. Dessert tart chocolate. Lollipop sesame
        snaps gingerbread icing gingerbread. Icing jelly bear claw tootsie roll.
        Apple pie carrot cake dragée pie jelly oat cake wafer pastry I love.
        Lollipop liquorice sesame snaps cake. Lemon drops chocolate bar ice
        cream I love danish. Danish cookie bear claw biscuit chocolate tootsie
        roll muffin. Chupa chups carrot cake toffee jelly-o tootsie roll. Cookie
        candy canes bear claw brownie cake. I love jelly beans dragée I love
        lollipop jujubes chocolate cake. Gummies danish wafer. Cheesecake toffee
        cheesecake sugar plum topping sesame snaps sugar plum I love jelly.
        Sweet roll topping I love tart.
      </p>
    </main>
  );
};

export default IndexPage;
