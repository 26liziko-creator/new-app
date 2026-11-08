
function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <p>© All Rights Reserved | {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
