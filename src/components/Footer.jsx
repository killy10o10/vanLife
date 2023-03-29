function Footer() {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear()
  return <footer className="killy">DESIGNED BY: <a href="https://github.com/killy10o10" className="killy">Kingsley Okine / Quami killy</a> &copy; <a href="#">{currentYear}</a></footer>;
}

export default Footer;