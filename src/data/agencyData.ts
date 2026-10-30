export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  transparencyNote: string;
  badge: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export interface AudienceProfile {
  title: string;
  description: string;
  tag: string;
}

export const AGENCY_INFO = {
  name: 'Somos LJ Mídia',
  tagline: 'Presença digital com estratégia, organização e transparência. Sem promessas vazias, com trabalho de verdade.',
  headline: 'Seu negócio merece uma presença digital bem estruturada.',
  subheadline:
    'Organizamos sua presença digital para que seu negócio seja encontrado, apresentado e contatado com mais facilidade.',
  humanMotto: 'Antes do negócio, existe uma história.',
  humanQuote: 'Não queremos apenas conhecer o seu negócio. Queremos entender a história que fez ele existir.',
  pacingQuote: 'Cada negócio tem seu tempo. Nosso trabalho começa entendendo isso.',
  email: 'somosljmidia@gmail.com',
  whatsappNumber: '5511917796628',
  whatsappDisplay: '(11) 91779-6628',
  instagramUrl: 'https://www.instagram.com/somosljmidia',
  instagramHandle: '@somosljmidia',
  location: 'Brasil · Atendimento Próximo & Personalizado',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'google-maps',
    title: 'Google Maps / Perfil da Empresa no Google',
    subtitle: 'Para que clientes encontrem dados úteis e saibam como chegar e contatar',
    description:
      'Ajudamos a organizar e apresentar as informações do seu negócio no Google para que quem busca na sua região encontre dados corretos, fotos e saiba exatamente como entrar em contato.',
    deliverables: [
      'Organização e revisão completa das informações do perfil',
      'Atualização de dados validados: endereço, telefone, horários e atendimento',
      'Orientação para apresentação de fotos, produtos e serviços relevantes',
      'Apoio na organização de publicações e respostas a avaliações (conforme escopo)',
    ],
    transparencyNote:
      'Transparência: Não prometemos 1º lugar ou domínio do mapa. A visibilidade depende de múltiplos fatores que não controlamos, mas garantimos informações claras, organizadas e confiáveis.',
    badge: 'Local & Busca',
  },
  {
    id: 'redes-sociais',
    title: 'Redes Sociais',
    subtitle: 'Comunicação com clareza, consistência e identidade própria',
    description:
      'Planejamento e criação de conteúdo estratégico para ajudar o seu negócio a se posicionar sem fórmulas prontas, comunicando o que sua empresa realmente entrega de valor.',
    deliverables: [
      'Planejamento de pautas e organização de calendário editorial coerente',
      'Criação de posts, carrosséis explicativos e peças visuais limpas',
      'Roteiros simples para vídeos e Reels, quando alinhados ao escopo contratado',
      'Legendas com propósito, chamadas para ação claras e comunicação humanizada',
    ],
    transparencyNote:
      'Transparência: Não vendemos viralização ou fórmulas mágicas de seguidores. Frequência, canais e volume de peças são definidos com base na sua rotina real.',
    badge: 'Conteúdo & Identidade',
  },
  {
    id: 'sites-paginas',
    title: 'Sites e Páginas Institucionais',
    subtitle: 'Apresentação profissional que facilita o caminho do visitante até o contato',
    description:
      'Criação e organização de páginas institucionais ou landing pages objetivas, estruturadas para apresentar seu negócio com clareza e direcionar o cliente até o WhatsApp.',
    deliverables: [
      'Estruturação da página inicial e seções institucionais essenciais',
      'Organização de textos objetivos, imagens e dados de contato',
      'Páginas institucionais ou landing pages enxutas conforme escopo',
      'Botões e links estratégicos direcionando para WhatsApp e canais oficiais',
    ],
    transparencyNote:
      'Transparência: Alinhamos previamente a plataforma, quantidade de páginas, domínio, hospedagem e limites técnicos, garantindo uma solução funcional e sem surpresas.',
    badge: 'Web & Contato',
  },
];

export const HOW_WE_WORK: WorkStep[] = [
  {
    number: '01',
    title: 'Conversa Inicial',
    description:
      'Conhecer a pessoa, a história por trás da empresa, o momento atual e o que motivou a procurar ajuda.',
  },
  {
    number: '02',
    title: 'Levantamento',
    description:
      'Entender o que já existe, o que está faltando, quais são os recursos disponíveis e quais as prioridades reais.',
  },
  {
    number: '03',
    title: 'Direcionamento',
    description:
      'Apresentar possibilidades realistas, explicando com sinceridade o que faz sentido agora e o que pode ficar para depois.',
  },
  {
    number: '04',
    title: 'Proposta Personalizada',
    description:
      'Descrever com precisão entregas, prazos, responsabilidades mútuas, investimento e os limites do serviço contratado.',
  },
  {
    number: '05',
    title: 'Execução com Alinhamento',
    description:
      'Desenvolver o trabalho mantendo contato próximo, com aprovações combinadas e respeito ao tempo do negócio.',
  },
  {
    number: '06',
    title: 'Entrega e Continuidade',
    description:
      'Apresentar tudo o que foi feito com clareza e, quando contratado, combinar rotinas de manutenção ou próximos passos.',
  },
];

export const FOR_WHOM: AudienceProfile[] = [
  {
    title: 'Dando os Primeiros Passos',
    description:
      'Para quem acabou de abrir as portas ou formalizar o negócio e precisa de uma presença digital limpa, correta e profissional desde o início.',
    tag: 'Novos Negócios',
  },
  {
    title: 'Recomeçando ou Reposicionando',
    description:
      'Para quem mudou de rumo, reformulou serviços ou precisa atualizar seus canais digitais para refletir a nova fase da empresa.',
    tag: 'Novos Momentos',
  },
  {
    title: 'Negócios Familiares e Tradicionais',
    description:
      'Para empresas com anos de história, excelente produto ou serviço no mundo físico, que precisam traduzir esse valor no ambiente online.',
    tag: 'Trajetórias Reais',
  },
  {
    title: 'Prestadores de Serviços & Autônomos',
    description:
      'Para quem precisa ser encontrado no Google Maps, passar credibilidade no Instagram e facilitar o agendamento de clientes no WhatsApp.',
    tag: 'Serviços & Comércio',
  },
];

export const TRANSPARENCY_LIMITS = [
  {
    label: 'Sem Fórmulas Mágicas',
    detail: 'Não prometemos viralização, crescimento artificial de seguidores ou vendas automáticas.',
  },
  {
    label: 'Sem Falso Domínio de Buscas',
    detail: 'Não prometemos 1º lugar no Google ou domínio do mapa; a visibilidade depende de múltiplos fatores.',
  },
  {
    label: 'Sem Pacotes Engessados',
    detail: 'Não empurramos serviços desnecessários. Toda proposta é pensada para a realidade e o bolso do cliente.',
  },
  {
    label: 'Compromisso com a Verdade',
    detail: 'Só oferecemos o que conseguimos executar com qualidade, pontualidade e transparência de escopo.',
  },
];

export function getWhatsAppUrl(serviceTitle?: string, clientName?: string) {
  const greeting = clientName ? `Olá! Me chamo ${encodeURIComponent(clientName)}.` : 'Olá!';
  const serviceText = serviceTitle
    ? ` Gostaria de conversar com a Somos LJ Mídia sobre ${encodeURIComponent(serviceTitle)}.`
    : ' Gostaria de conversar com a Somos LJ Mídia sobre a presença digital do meu negócio.';
  const message = `${greeting}${serviceText}`;
  return `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${message}`;
}
