# Kaiky.visual — React + TypeScript + Sass

## 1. Requisitos
Instale Node.js LTS: https://nodejs.org/ e use VS Code para editar o projeto.

## 2. Rodar localmente
Abra a pasta `kaiky-visual` no VS Code. No menu Terminal > New Terminal, execute:

```bash
npm install
npm run dev
```

Abra o endereço local que o Vite mostrar no terminal (normalmente http://localhost:5173).

## 3. Adicionar suas fotos reais
Coloque a foto da apresentação em `public/images/perfil/kaiky-camera.jpg`.
Coloque as imagens dos projetos em `public/images/projetos/` com estes nomes:
- `inauguracao-escola-sao-joao-01.jpg`
- `inauguracao-escola-sao-joao-02.jpg`
- `dia-das-criancas-ajurcc-01.jpg`
- `dia-das-criancas-ajurcc-02.jpg`
- `gravacao-documentario-01.jpg`
- `gravacao-documentario-02.jpg`
- `important-project-01.jpg`

Os arquivos de imagem não estão incluídos; substitua os nomes acima pelas fotos exportadas do seu material. Se preferir outros nomes, atualize os caminhos em `src/data/projects.ts`.

## 4. Adicionar um novo projeto
Abra `src/data/projects.ts`, copie um objeto dentro do array `projects`, cole antes do `];` final e altere `slug`, `title`, `year`, `category`, `cover`, `description` e `images`. O `slug` deve ser único e sem espaços ou acentos, por exemplo `ensaio-retrato-2026`. Crie as imagens em `public/images/projetos/` e use seus caminhos começando com `/images/projetos/`.

## 5. Links de contato
Atualize telefone, Instagram, e-mail e link do Behance nos arquivos `src/components/Footer.tsx`, `src/pages/Home.tsx` e `src/pages/ProjectPage.tsx`. O e-mail `contato@kaikyvisual.com` é um exemplo: substitua pelo endereço real antes de publicar.

## 6. Conferir build
```bash
npm run build
```

## 7. Publicar na Netlify
Envie a pasta para um repositório GitHub e importe esse repositório na Netlify. O arquivo `netlify.toml` já configura o build e o fallback das rotas. Build command: `npm run build`; publish directory: `dist`.

## Nota visual
Este projeto é uma reconstrução aproximada a partir das capturas de tela fornecidas. Para chegar a uma correspondência pixel a pixel, ajuste as larguras, fontes, cortes das fotos e espaçamentos comparando o navegador com o Figma. As fotos originais e os links definitivos devem ser inseridos antes da publicação.
