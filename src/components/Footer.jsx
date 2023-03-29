function Footer() {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  return (
    <footer>
      <a href="https://github.com/killy10o10" target="_blank" className="killy">
        Kingsley Quami Okine
      </a>
      <p>
        &copy; <span className="sheldon">{currentYear}</span>
      </p>
    </footer>
  );
}

export default Footer;
