
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const categories = [
  'Todos',
  'Eventos',
  'Documentários',
  'Bastidores',
  'Outros',
] as const;

type Category = (typeof categories)[number];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((project) => {
          if (activeCategory === 'Bastidores') {
            return project.category.toLowerCase().includes('bastidores');
          }

          return project.filterCategory === activeCategory;
        });

  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Apresentação */}
        <section className="grid min-h-[620px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Fotografia · Audiovisual
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#181818] sm:text-5xl lg:text-7xl">
              Prazer, sou <span className="text-[#C94A35]">Kaiky.</span>
            </h1>

            <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                Sou fotógrafo e criador audiovisual em Campina Grande,
                Paraíba. Meu trabalho passa pelo registro de eventos,
                pessoas e projetos, buscando transformar momentos reais
                em imagens que contem histórias.
              </p>

              <p>
                Na <strong className="font-semibold text-[#181818]">Kaiky.visual</strong>,
                trabalho com fotografia, captação e edição de vídeo,
                desenvolvendo registros visuais para pessoas, organizações
                e negócios.
              </p>

              <p>
                Fotografia e audiovisual com atenção às pessoas, aos
                detalhes e ao que merece ser lembrado.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#181818] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#C94A35]"
              >
                Ver projetos
              </a>

              <a
                href="https://wa.me/5583981808017"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 px-7 py-3 text-sm font-medium text-[#181818] transition-colors hover:border-[#C94A35] hover:text-[#C94A35]"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#F2EFE8]">
              <img
                src="/images/perfil/kaiky-camera.jpg"
                alt="Kaiky segurando sua câmera fotográfica"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-right text-xs tracking-wide text-neutral-500">
              Campina Grande, Paraíba — Brasil
            </p>
          </div>
        </section>

        {/* Portfólio e filtros */}
        <section
          id="projetos"
          className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
        >
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Fotografia · Histórias · Processos
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#181818] sm:text-5xl">
              Portf<span className="text-[#C94A35]">ólio</span>
            </h2>
          </div>

          <div
            className="mb-8 flex gap-2 overflow-x-auto pb-2"
            aria-label="Filtrar projetos por categoria"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'border-[#181818] bg-[#181818] text-white'
                      : 'border-neutral-200 bg-white text-[#181818] hover:border-[#C94A35] hover:text-[#C94A35]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-base font-medium text-[#181818]">
                Ainda não há projetos nesta categoria.
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Em breve, novos trabalhos por aqui.
              </p>
            </div>
          )}
        </section>

        {/* Contatos */}
        <section
          id="contatos"
          className="scroll-mt-24 border-t border-neutral-200 py-16 sm:py-20 lg:py-24"
        >
          <div className="mb-9">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#181818] sm:text-5xl">
              Cont<span className="text-[#C94A35]">atos</span>
            </h2>

            <p className="mt-3 text-sm text-neutral-500 sm:text-base">
              Vamos tirar seu projeto do papel?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <a
              href="https://wa.me/5583981808017"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-xl border border-neutral-200 p-5 transition-all hover:-translate-y-1 hover:border-[#C94A35]/50 hover:shadow-lg sm:p-6"
            >
              <div>
                <p className="text-sm font-medium text-[#181818]">WhatsApp:</p>
                <p className="text-sm text-neutral-600">83 98180-8017</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#C94A35]">Kaiky.Visual</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Vamos conversar sobre seu projeto.
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/kaiky.visual/"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-xl border border-neutral-200 p-5 transition-all hover:-translate-y-1 hover:border-[#C94A35]/50 hover:shadow-lg sm:p-6"
            >
              <div>
                <p className="text-sm font-medium text-[#181818]">Instagram:</p>
                <p className="text-sm text-neutral-600">@kaiky.visual</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#C94A35]">Kaiky.Visual</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Fotografia, vídeo e bastidores.
                </p>
              </div>
            </a>

            <a
              href="https://www.behance.net/kodeky"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-xl border border-neutral-200 p-5 transition-all hover:-translate-y-1 hover:border-[#C94A35]/50 hover:shadow-lg sm:p-6"
            >
              <div>
                <p className="text-sm font-medium text-[#181818]">
                  Portfólio de design:
                </p>
                <p className="text-sm text-neutral-600">KODEKY</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#C94A35]">Kaiky.Visual</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Conheça também meu trabalho com design.
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
