
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

function ArrowLeftIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Header />

        <main className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col items-start justify-center px-5 py-20 sm:px-8 lg:px-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Ops, algo deu errado
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#181818] sm:text-5xl">
            Projeto não encontrado.
          </h1>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#C94A35] transition-colors hover:text-[#181818]"
          >
            <ArrowLeftIcon />
            Voltar ao portfólio
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-[#C94A35]"
        >
          <ArrowLeftIcon />
          Voltar ao portfólio
        </Link>

        <section className="mt-12 border-b border-neutral-200 pb-10 sm:mt-16 sm:pb-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {project.category} <span className="px-1">·</span> {project.year}
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#181818] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <a
              href="https://wa.me/5583981808017"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#181818] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#C94A35]"
            >
              Falar sobre um projeto
              <ArrowUpRightIcon />
            </a>
          </div>

          <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            {project.description}
          </p>
        </section>

        {/* GALERIA DE VÍDEO E FOTOGRAFIAS */}
        <section
          aria-label={`Galeria do projeto ${project.title}`}
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-7"
        >
          {/* PLAYER DE VÍDEO - GOOGLE DRIVE */}
          {project.video && (
            <figure className="min-w-0 sm:col-span-2">
              <div className="overflow-hidden rounded-xl bg-[#181818]">
                <iframe
                  src={project.video}
                  title={project.title}
                  className="block aspect-video w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <figcaption className="mt-3 text-xs tracking-wide text-neutral-500">
                DOCUMENTÁRIO · VÍDEO
              </figcaption>
            </figure>
          )}

          {/* GALERIA DE FOTOGRAFIAS */}
          {project.images.map((src, index) => (
            <figure
              key={src}
              className={`min-w-0 ${
                index === 0 && project.images.length > 2
                  ? 'sm:col-span-2'
                  : ''
              }`}
            >
              <div
                className={`overflow-hidden rounded-xl bg-[#F2EFE8] ${
                  index === 0 && project.images.length > 2
                    ? 'aspect-[16/9]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} — imagem ${index + 1}`}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  className="h-full w-full object-cover"
                />
              </div>

              <figcaption className="mt-3 text-xs tracking-wide text-neutral-500">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(project.images.length).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* CHAMADA FINAL */}
        <section className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-neutral-200 pt-10 sm:mt-28 sm:flex-row sm:items-center sm:pt-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Próximo passo
            </span>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#181818] sm:text-3xl">
              Gostou do trabalho?
            </h2>
          </div>

          <a
            href="https://wa.me/5583981808017"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3.5 text-sm font-medium text-[#181818] transition-colors hover:border-[#C94A35] hover:text-[#C94A35]"
          >
            Vamos conversar
            <ArrowUpRightIcon />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
