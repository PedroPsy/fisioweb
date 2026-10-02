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
    name: "Dra. Clara Andrade",
    shortName: "Clara Andrade",
    title: "Fisioterapia & Pilates Clínico",
    crefito: "CREFITO-3 / 284.921-F",
    credentials: "Fisioterapeuta • Pilates Clínico",
    bio: "Cuidado baseado em movimento, escuta e estratégia para você viver com mais liberdade.",
    phone: "5583988654780",
    phoneDisplay: "(83) 98865-4780",
    instagram: "@claraandradeso",
    instagramUrl: "https://instagram.com/claraandradeso",
  },
  authority: {
    patients: "+1.200",
    patientsLabel: "pacientes atendidos",
    years: "5 anos",
    yearsLabel: "de prática clínica",
    rating: "5.0",
    ratingLabel: "avaliação média",
  },
  hero: {
    eyebrow: "Movimento é liberdade",
    headline: "Volte a fazer o que você ama, sem a dor ditar seus limites.",
    description: "Fisioterapia personalizada e Pilates Clínico para tratar a causa, recuperar sua confiança e construir um corpo mais forte.",
    imageUrl: "/Claraprofilefisio.jpg",
  },
  services: [
    {
      title: "Pilates Clínico & Reabilitação",
      benefit: "Força com propósito",
      description: "Exercícios precisos para recuperar movimentos, fortalecer o corpo e prevenir novas dores.",
      icon: "sparkles",
      whatsappMessage: "Olá, Clara! Quero saber mais sobre Pilates Clínico e Reabilitação.",
    },
    {
      title: "Atendimento Domiciliar",
      benefit: "Cuidado onde você está",
      description: "Sessões personalizadas no conforto da sua casa, com a mesma qualidade e atenção da clínica.",
      icon: "home",
      whatsappMessage: "Olá, Clara! Gostaria de informações sobre o atendimento domiciliar.",
    },
    {
      title: "Avaliação Biomecânica",
      benefit: "Entenda seu corpo",
      description: "Uma leitura completa da sua postura e movimento para encontrar a origem do desconforto.",
      icon: "scan",
      whatsappMessage: "Olá, Clara! Quero agendar uma Avaliação Biomecânica e Postural.",
    },
    {
      title: "Traumato-Ortopédica",
      benefit: "De volta à rotina",
      description: "Tratamento para coluna, joelhos, ombros e articulações, do alívio à retomada segura.",
      icon: "activity",
      whatsappMessage: "Olá, Clara! Quero conversar sobre Fisioterapia Traumato-Ortopédica.",
    },
  ] satisfies Service[],
  methodology: [
    { number: "01", title: "Diagnóstico", description: "Escutamos sua história e avaliamos cada detalhe do seu movimento." },
    { number: "02", title: "Plano individualizado", description: "Você recebe um caminho claro, construído para sua rotina e seus objetivos." },
    { number: "03", title: "Acompanhamento", description: "Evoluímos juntos, ajustando cada etapa para o seu corpo responder melhor." },
    { number: "04", title: "Alta & prevenção", description: "Você leva autonomia, ferramentas e confiança para seguir em movimento." },
  ],
  reviews: [
    { quote: "Depois de meses com dor na lombar, voltei a caminhar e dormir bem. A Clara olha para você de verdade.", name: "Renata M.", detail: "Tratamento de coluna" },
    { quote: "O Pilates mudou minha postura e minha relação com o corpo. As aulas são leves, mas o resultado é enorme.", name: "Camila R.", detail: "Pilates Clínico" },
    { quote: "Cheguei com medo de voltar a treinar. Hoje corro novamente, sem insegurança e sabendo cuidar de mim.", name: "Eduardo P.", detail: "Reabilitação de joelho" },
  ],
  location: {
    clinicName: "Clínica Bianca Mendes Fisioterapia e Pilates",
    address: "R. Pres. João Pessoa, 47 - Centro, Mamanguape - PB, 58280-000",
    hours: "Seg a sex, das 7h às 20h",
    coverage: "Atendimento domiciliar em Pinheiros, Vila Madalena, Alto de Pinheiros e região.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.9091616246383!2d-35.122318199999995!3d-6.8360956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad05d971cfa53f%3A0x66a2e8170363b63d!2sR.%20Pres.%20Jo%C3%A3o%20Pessoa%2C%2047%2C%20Mamanguape%20-%20PB%2C%2058280-000!5e1!3m2!1spt-BR!2sbr!4v1790972933480!5m2!1spt-BR!2sbr",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+Pres.+Jo%C3%A3o+Pessoa%2C+47+-+Centro%2C+Mamanguape+-+PB%2C+58280-000",
  },
  whatsapp: {
    defaultMessage: "Olá, Clara! Vim pelo site e gostaria de agendar uma conversa.",
    floatingLabel: "Fale comigo pelo WhatsApp",
  },
};

export type SiteConfig = typeof siteConfig;
