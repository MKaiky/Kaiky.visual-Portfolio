
export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  filterCategory: 'Eventos' | 'Documentários' | 'Bastidores' | 'Outros';
  cover: string;
  description: string;
  images: string[];
  video?: string;
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
    slug: 'apresentacao-conedu-escola-sao-joao',
    title: 'Apresentação CONEDU | Escola de São João',
    year: '2026',
    category: 'Eventos',
    filterCategory: 'Eventos',
    cover: '/images/projetos/important-project-01.jpg',
    description:
      'Apresentação CONEDU | Escola de São João.',
    images: [
      '/images/projetos/important-project-01.jpg',
      '/images/projetos/important-project-02.jpg',
      '/images/projetos/important-project-03.jpg',
      '/images/projetos/important-project-04.jpg',
      '/images/projetos/important-project-05.jpg',
      '/images/projetos/important-project-06.jpg',
      '/images/projetos/important-project-07.jpg',
    ],
  },
  {
    slug: 'documentario-cozinha-comunitaria',
    title: 'Documentário | Cozinha Comunitária - Mauro Malessardi',
    year: '2026',
    category: 'Documentário, Bastidores',
    filterCategory: 'Documentários',
    cover: '/images/projetos/Doc-Cozinha.jpg',
    description:
      'Registro audiovisual da Cozinha Comunitária - Mauro Malessardi.',
    images: [],
    video:
      'https://drive.google.com/file/d/1twnTBFeQX7AHuWdruN1SLSJuMP2lbvJk/preview',
  },
  {
    slug: 'Documentario-Feira-da-Prata-VIDEO-e-BASTIDORES',
    title: 'Documentário | Feira da Prata - Documentário e Bastidores',
    year: '2026',
    category: 'Documentário, Bastidores',
    filterCategory: 'Documentários',
    cover: '/images/projetos/IMG_5995.jpg',
    description:
      'Bastidores e registros de uma gravação documental, acompanhando pessoas e histórias em seu contexto real.',
    images: [
      '/images/projetos/IMG_5996.jpeg',
      '/images/projetos/IMG_5993.jpg',
      '/images/projetos/IMG_5995.jpg',
      '/images/projetos/IMG_6006.jpg',
      '/images/projetos/IMG_6049.jpg',
      '/images/projetos/IMG_6033.jpg',
      '/images/projetos/IMG_6045.jpg',
      '/images/projetos/IMG_6047.jpg',
    ],
  },
  {
    slug: 'Fotografia-Futsal',
    title: 'Fotos | Futsal - Racha Amigos',
    year: '2026',
    category: 'Esportes, Fotografia',
    filterCategory: 'Outros',
    cover: '/images/projetos/IMG_6908.JPG',
    description:
      'Fotos de um racha de futsal entre amigos, capturando a energia e a camaradagem do jogo.',
    images: [
      '/images/projetos/IMG_6712.JPG',
      '/images/projetos/IMG_6820.JPG',
      '/images/projetos/IMG_6841.JPG',
      '/images/projetos/IMG_6872.JPG',
      '/images/projetos/IMG_6887.JPG',
      '/images/projetos/IMG_6901.JPG',
      '/images/projetos/IMG_6908.JPG',
      '/images/projetos/IMG_6960.JPG',
      '/images/projetos/IMG_6973.JPG',
      '/images/projetos/IMG_6981.JPG',
      '/images/projetos/IMG_6986.JPG',
      '/images/projetos/IMG_6991.JPG',
      '/images/projetos/IMG_7009.JPG',
      '/images/projetos/IMG_7078.JPG',
    ],
  },
];
