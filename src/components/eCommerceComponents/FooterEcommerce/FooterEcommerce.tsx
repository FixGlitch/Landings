import Link from "next/link";

const FooterEcommerce = () => {
  return (
    <footer className="bg-gray/20 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-black">
              Ayuda e Información
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Ayuda", href: "#" },
                { name: "Seguimiento de pedidos", href: "#" },
                { name: "Envíos y devoluciones", href: "#" },
                { name: "Programa de fidelidad", href: "#" },
                { name: "Descuento para estudiantes", href: "#" },
                { name: "Mapa del sitio", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-black hover:text-ecommerce-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-black">
              Acerca de Nosotros
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Sobre nosotros", href: "#" },
                { name: "Carreras", href: "#" },
                { name: "Responsabilidad corporativa", href: "#" },
                { name: "Sitio para inversores", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-black hover:text-ecommerce-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-black">Más de Nosotros</h3>
            <ul className="space-y-2">
              {[
                { name: "Aplicaciones móviles", href: "#" },
                { name: "Mercado", href: "#" },
                { name: "Tarjetas de regalo", href: "#" },
                { name: "Ofertas especiales", href: "#" },
                { name: "Recomienda a un amigo", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-black hover:text-ecommerce-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-black">Comprar desde:</h3>
            <p className="text-black">
              Estás en: <span className="font-semibold">🇪🇸 España</span> |{" "}
              <Link href="#" className="underline text-black">
                Cambiar
              </Link>
            </p>
            <p className="mt-2 text-black">
              Algunos de nuestros sitios internacionales:
            </p>
            <div className="flex space-x-2 mt-3">
              {["🇬🇧", "🇪🇸", "🇩🇪", "🇫🇷", "🇺🇸", "🇩🇰", "🇮🇹", "🇳🇱", "🇵🇱", "🇸🇪"].map(
                (flag, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="text-2xl text-black hover:text-ecommerce-500"
                  >
                    {flag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-black flex flex-wrap justify-between items-center text-black">
          <p>
            &copy; 2024 Nombre de la Empresa. Todos los derechos reservados.
          </p>
          <div className="space-x-4">
            <Link href="#" className="text-black">
              Privacidad y Cookies
            </Link>
            <Link href="#" className="text-black">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-black">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEcommerce;
