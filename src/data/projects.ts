
export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  filterCategory: 'Eventos' | 'Documentários' | 'Bastidores' | 'Outros';
  cover: string;
  description: string;
  images: string[];
};

// Para adicionar um projeto, copie um bloco e atualize os dados.
// Coloque as fotos em public/images/projetos/.
export const projects: Project[] = [
  {
    slug: 'inauguracao-escola-sao-joao',
    title: 'Inauguração | Escola de São João',
    year: '2026',
    category: 'Evento · Fotografia',
    filterCategory: 'Eventos',
    cover: '/images/projetos/inauguracao-escola-sao-joao-01.JPG',
    description:
      'Registro da inauguração da Escola de São João, reunindo pessoas, apresentações e momentos importantes da comunidade.',
    images: [
      '/images/projetos/inauguracao-escola-sao-joao-01.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-02.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-03.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-04.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-05.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-06.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-07.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-08.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-09.JPG',
      '/images/projetos/inauguracao-escola-sao-joao-10.JPG',
    ],
  },
  {
    slug: 'dia-das-criancas-ajurcc',
    title: 'Dia das Crianças | AJURCC',
    year: '2026',
    category: 'Evento · Fotografia',
    filterCategory: 'Eventos',
    cover: '/images/projetos/dia-das-criancas-ajurcc-01.jpg',
    description:
      'Cores, brincadeiras e encontros em um dia dedicado às crianças na AJURCC.',
    images: [
      '/images/projetos/dia-das-criancas-ajurcc-01.jpg',
      '/images/projetos/dia-das-criancas-ajurcc-02.jpg',
    ],
  },
  {
    slug: 'gravacao-documentario',
    title: 'Gravação de Documentário',
    year: '2026',
    category: 'Audiovisual · Bastidores',
    filterCategory: 'Documentários',
    cover: '/images/projetos/gravacao-documentario-01.jpg',
    description:
      'Bastidores e registros de uma gravação documental, acompanhando pessoas e histórias em seu contexto real.',
    images: [
      '/images/projetos/gravacao-documentario-01.jpg',
      '/images/projetos/gravacao-documentario-02.jpg',
    ],
  },
  {
    slug: 'apresentacao-conedu-escola-sao-joao',
    title: 'Apresentação CONEDU | Escola de São João',
    year: '2026',
    category: 'Projeto pessoal',
    filterCategory: 'Eventos',
    cover: '/images/projetos/important-project-01.jpg.JPG',
    description: 'Apresentação CONEDU | Escola de São João.',
    images: ['/images/projetos/important-project-01.jpg',
              '/images/projetos/important-project-02.jpg',
              '/images/projetos/important-project-03.jpg',
              '/images/projetos/important-project-04.jpg',
              '/images/projetos/important-project-05.jpg',
              '/images/projetos/important-project-06.jpg',
              '/images/projetos/important-project-07.jpg',
    ],
  },
];
