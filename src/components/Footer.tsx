
import { BriefcaseBusiness, MessageCircle } from 'lucide-react';

const whatsapp = '5583981808017';

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contatos"
      className="border-t border-neutral-200 px-5 py-12 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tight">
              KAIKY<span className="text-brand-red">.</span>Visual
            </a>

            <p className="mt-3 text-neutral-600">
              O que acontece merece ser visto.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://www.behance.net/"
                aria-label="Behance"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand-red"
              >
                <BriefcaseBusiness />
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand-red"
              >
                <MessageCircle />
              </a>

              <a
                href="https://www.instagram.com/kaiky.visual/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand-red"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 p-5 transition-colors hover:border-brand-red"
            >
              <span className="text-sm text-neutral-500">WhatsApp</span>
              <strong className="mt-2 block">83 98180-8017</strong>
              <p className="mt-2 text-sm text-neutral-600">
                Vamos conversar sobre seu projeto.
              </p>
            </a>

            <a
              href="https://www.instagram.com/kaiky.visual/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 p-5 transition-colors hover:border-brand-red"
            >
              <span className="text-sm text-neutral-500">Instagram</span>
              <strong className="mt-2 block">@kaiky.visual</strong>
              <p className="mt-2 text-sm text-neutral-600">
                Acompanhe meus trabalhos.
              </p>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Kaiky.visual</span>
          <div className="flex gap-5">
            <a href="/#projetos" className="hover:text-black">
              Projetos
            </a>
            <a href="/#contatos" className="hover:text-black">
              Contatos
            </a>
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              KODEKY · Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
