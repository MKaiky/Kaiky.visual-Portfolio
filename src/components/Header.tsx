
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToProjects() {
    if (location.pathname === '/') {
      document.getElementById('projetos')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      navigate('/#projetos');
    }
  }

  return (
    <header className="mx-auto flex min-h-[78px] w-[calc(100%-40px)] items-center justify-between gap-6 sm:min-h-[100px] sm:w-[calc(100%-96px)]">
      <Link
        to="/"
        aria-label="Kaiky.visual, página inicial"
        className="block shrink-0"
      >
        <img
          src="/images/perfil/Logo-Kaiky(Icone).png"
          alt="KV. — Kaiky.visual"
          className="h-11 w-11 object-contain sm:h-14 sm:w-14"
        />
      </Link>

      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-5 sm:gap-8"
      >
        <button
          type="button"
          onClick={goToProjects}
          className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#181818] transition-colors hover:text-[#C94A35]"
        >
          Projetos
        </button>

        <Link
          to="/contatos"
          className={`text-sm no-underline transition-colors hover:text-[#C94A35] ${
            location.pathname === '/contatos'
              ? 'font-semibold text-[#C94A35]'
              : 'text-[#181818]'
          }`}
        >
          Contatos
        </Link>
      </nav>
    </header>
  );
}
