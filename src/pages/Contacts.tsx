
import Header from '../components/Header';
import Footer from '../components/Footer';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 8.2c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1.1-.3-2.4-.9-3.7-2.2-1.3-1.3-2-2.7-2.2-3.7-.2-.8.1-1.5.5-1.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.8" r=".8" fill="currentColor" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </svg>
  );
}

const contacts = [
  {
    title: 'WhatsApp:',
    detail: '83 98180-8017',
    href: 'https://wa.me/5583981808017',
    icon: <WhatsAppIcon />,
    action: 'Conversar pelo WhatsApp',
  },
  {
    title: 'Instagram:',
    detail: '@Kaiky.visual',
    href: 'https://www.instagram.com/kaiky.visual/',
    icon: <InstagramIcon />,
    action: 'Ver perfil no Instagram',
  },
  {
    title: 'Portfólio Design:',
    detail: 'KODEKY',
    href: 'https://www.behance.net/kodeky',
    icon: <PortfolioIcon />,
    action: 'Ver portfólio de design',
  },
];

export default function Contacts() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
        <section>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[#181818] sm:text-5xl">
            Cont<span className="text-[#C94A35]">atos</span>
          </h1>

          <p className="mt-3 text-sm text-neutral-500 sm:text-base">
            Vamos tirar seu projeto do papel?
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.action}
                className="group flex min-h-[220px] flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#C94A35]/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)] sm:p-6"
              >
                <div>
                  <p className="whitespace-pre-line text-sm font-medium text-[#181818]">
                    {contact.title}
                  </p>
                  <p className="mt-0.5 whitespace-pre-line text-sm text-[#181818]">
                    {contact.detail}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-[#181818] transition-colors group-hover:text-[#C94A35]">
                    {contact.icon}
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#C94A35]">
                      Kaiky.Visual
                    </p>
                    <p className="mt-0.5 text-xs leading-4 text-neutral-500">
                      O que acontece merece ser visto.
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
