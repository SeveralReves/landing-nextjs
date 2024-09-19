// components/Header.js
export default function Header() {
  const menu = [
    {
      url: '#home',
      title: 'Inicio',
    },
    {
      url: '#services',
      title: 'Servicios',
    },
    {
      url: '#testimonials',
      title: 'Testimonios',
    },
    {
      url: '#contact',
      title: 'Contacto',
    },
  ];
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">
          <span>Fin</span>Pro
        </h1>
        <nav className="header__nav">
          <ul className="header__ul">
            {
              menu.map((link,index)=>(
                <li key={index} className="header__li">
                  <a href={link.url} title={link.title} className="header__link">
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
          <a href="#" className="button__primary header__action">Obténlo ahora</a>
        </nav>
      </div>
    </header>
  );
}
