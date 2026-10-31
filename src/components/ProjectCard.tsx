
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="group block min-w-0 text-inherit no-underline"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f2efe8]">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight text-[#181818] transition-colors group-hover:text-[#d53b2b] sm:text-lg">
          {project.title}
        </h3>

        <span className="shrink-0 pt-1 text-sm text-neutral-500">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
