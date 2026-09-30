export type Service = {
  title: string;
  benefit: string;
  description: string;
  icon: "sparkles" | "home" | "scan" | "activity";
  whatsappMessage: string;
};

export type Review = {
  quote: string;
  name: string;
  detail: string;
};

export const siteConfig = {
  professional: {
    name: "Dra. Marina Alves",
    shortName: "Marina Alves",
    title: "Fisioterapia & Pilates Clínico",
    crefito: "CREFITO-3 / 284.921-F",
    credentials: "Fisioterapeuta • Pós-graduada em Ortopedia",
    bio: "Cuidado baseado em movimento, escuta e estratégia para você viver com mais liberdade.",
    phone: "5511998765432",
    phoneDisplay: "(11) 99876-5432",
    instagram: "@marinaalves.fisio",
    instagramUrl: "https://instagram.com/marinaalves.fisio",
  },
  authority: {
    patients: "+1.200",
    patientsLabel: "pacientes atendidos",
    years: "10 anos",
    yearsLabel: "de prática clínica",
    rating: "5.0",
    ratingLabel: "avaliação média",
  },
  hero: {
    eyebrow: "Movimento é liberdade",
    headline: "Volte a fazer o que você ama, sem a dor ditar seus limites.",
    description: "Fisioterapia personalizada e Pilates Clínico para tratar a causa, recuperar sua confiança e construir um corpo mais forte.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
  },
  services: [
    {
      title: "Pilates Clínico & Reabilitação",
      benefit: "Força com propósito",
      description: "Exercícios precisos para recuperar movimentos, fortalecer o corpo e prevenir novas dores.",
      icon: "sparkles",
      whatsappMessage: "Olá, Marina! Quero saber mais sobre Pilates Clínico e Reabilitação.",
    },
    {
      title: "Atendimento Domiciliar",
      benefit: "Cuidado onde você está",
      description: "Sessões personalizadas no conforto da sua casa, com a mesma qualidade e atenção da clínica.",
      icon: "home",
      whatsappMessage: "Olá, Marina! Gostaria de informações sobre o atendimento domiciliar.",
    },
    {
      title: "Avaliação Biomecânica",
      benefit: "Entenda seu corpo",
      description: "Uma leitura completa da sua postura e movimento para encontrar a origem do desconforto.",
      icon: "scan",
      whatsappMessage: "Olá, Marina! Quero agendar uma Avaliação Biomecânica e Postural.",
    },
    {
      title: "Traumato-Ortopédica",
      benefit: "De volta à rotina",
      description: "Tratamento para coluna, joelhos, ombros e articulações, do alívio à retomada segura.",
      icon: "activity",
      whatsappMessage: "Olá, Marina! Quero conversar sobre Fisioterapia Traumato-Ortopédica.",
    },
  ] satisfies Service[],
  methodology: [
    { number: "01", title: "Diagnóstico", description: "Escutamos sua história e avaliamos cada detalhe do seu movimento." },
    { number: "02", title: "Plano individualizado", description: "Você recebe um caminho claro, construído para sua rotina e seus objetivos." },
    { number: "03", title: "Acompanhamento", description: "Evoluímos juntos, ajustando cada etapa para o seu corpo responder melhor." },
    { number: "04", title: "Alta & prevenção", description: "Você leva autonomia, ferramentas e confiança para seguir em movimento." },
  ],
  reviews: [
    { quote: "Depois de meses com dor na lombar, voltei a caminhar e dormir bem. A Marina olha para você de verdade.", name: "Renata M.", detail: "Tratamento de coluna" },
    { quote: "O Pilates mudou minha postura e minha relação com o corpo. As aulas são leves, mas o resultado é enorme.", name: "Camila R.", detail: "Pilates Clínico" },
    { quote: "Cheguei com medo de voltar a treinar. Hoje corro novamente, sem insegurança e sabendo cuidar de mim.", name: "Eduardo P.", detail: "Reabilitação de joelho" },
  ],
  location: {
    clinicName: "Estúdio Movimento",
    address: "Rua Harmonia, 418 • Vila Madalena, São Paulo - SP",
    hours: "Seg a sex, das 7h às 20h",
    coverage: "Atendimento domiciliar em Pinheiros, Vila Madalena, Alto de Pinheiros e região.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Harmonia+418+Sao+Paulo",
  },
  whatsapp: {
    defaultMessage: "Olá, Marina! Vim pelo site e gostaria de agendar uma conversa.",
    floatingLabel: "Fale comigo pelo WhatsApp",
  },
};

export type SiteConfig = typeof siteConfig;
