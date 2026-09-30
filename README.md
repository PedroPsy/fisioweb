# Marina Alves | Fisioterapia & Pilates Clínico

Landing page mobile-first para uma profissional de fisioterapia, construída com Next.js, TypeScript, Tailwind CSS e Lucide React. O projeto apresenta especialidades, metodologia, provas sociais, localização e CTAs contextuais para WhatsApp.

## Stack

- Next.js com App Router e React Server Components
- TypeScript com tipagem estrita
- Tailwind CSS 4 via PostCSS
- Lucide React para ícones
- Conteúdo desacoplado em `src/config/site-config.ts`

## Instalação

Requisitos: Node.js 20.9+ e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalização

Para adaptar a página, edite somente `src/config/site-config.ts`. O arquivo concentra nome, CREFITO, telefone, Instagram, métricas, imagem do hero, serviços, mensagens específicas para WhatsApp, metodologia, depoimentos, endereço, horário, raio domiciliar e link do Google Maps.

Os botões usam `https://wa.me/<numero>?text=<mensagem>` e abrem em uma nova aba. Atualize o telefone no formato internacional, sem espaços ou símbolos.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deploy na Vercel

Faça push para um repositório Git, importe-o em vercel.com, mantenha o framework Next.js e publique após o build passar. Não há banco de dados nem variáveis obrigatórias.

## Estrutura

```text
src/
├── app/                  # layout, página e estilos globais
├── components/           # blocos visuais da landing page
└── config/               # conteúdo comercial desacoplado
```
