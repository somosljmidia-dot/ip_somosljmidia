export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  badge: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  type: 'website' | 'instagram';
  liveUrl: string;
  imageUrl: string;
  headline: string;
  summary: string;
  scope: string[];
  impact: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  client: string;
  project: string;
  feedback: string;
  tag: string;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const AGENCY_INFO = {
  name: 'LJ Mídias',
  tagline: 'Presença Digital de Alto Padrão',
  email: 'somosljmidia@gmail.com',
  whatsappNumber: '5511917796628',
  whatsappDisplay: '(11) 91779-6628',
  instagramUrl: 'https://www.instagram.com/somosljmidia',
  instagramHandle: '@somosljmidia',
  location: 'Brasil · Atendimento Nacional & Internacional',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media',
    title: 'Gestão Estratégica de Redes Sociais',
    subtitle: 'Branding, autoridade e engajamento qualificado',
    description:
      'Transformamos o seu perfil no Instagram em uma vitrine de alto valor percebido. Desenvolvemos narrativas visuais sofisticadas, planejamento editorial minucioso e roteiros que conectam seu público e convertem seguidores em clientes fiéis.',
    deliverables: [
      'Identidade visual editorial para feed e stories',
      'Planejamento de conteúdo com calendário estratégico',
      'Roteirização para Reels de alto alcance e retenção',
      'Copywriting persuasivo e humanizado',
      'Análise periódica de métricas e posicionamento de marca',
    ],
    idealFor: 'Marcas, lojas e profissionais que buscam prestígio e autoridade sólida no digital.',
    badge: 'Redes Sociais',
  },
  {
    id: 'landing-pages',
    title: 'Desenvolvimento de Landing Pages & Sites',
    subtitle: 'Design sob medida, performance extrema e conversão direta',
    description:
      'Criamos páginas institucionais e landing pages de venda com estética editorial exclusiva. Cada seção é estruturada para guiar o visitante até a ação desejada, com carregamento ultrarrápido, experiência mobile perfeita e integração com WhatsApp.',
    deliverables: [
      'Design responsivo e layout 100% exclusivo (sem templates prontos)',
      'Arquitetura de persuasão voltada para vendas e captação de leads',
      'Integração direta com WhatsApp e formulários inteligentes',
      'Otimização avançada de performance (Core Web Vitals) e SEO',
      'Domínio próprio, certificado SSL e suporte de implantação',
    ],
    idealFor: 'Empresas que desejam transformar tráfego em vendas reais e fechar novos negócios.',
    badge: 'Landing Pages & Web',
  },
  {
    id: 'content-creation',
    title: 'Criação de Conteúdo Estratégico & Direção de Arte',
    subtitle: 'Comunicação visual e narrativa alinhadas à essência do seu negócio',
    description:
      'Produção e curadoria de materiais gráficos e digitais com olhar editorial refinado. Definimos a paleta, tipografia, tom de voz e estilo fotográfico para que sua marca seja inconfundível em qualquer ponto de contato.',
    deliverables: [
      'Direção de arte e curadoria estética de fotos e vídeos',
      'Criação de materiais promocionais e apresentações comerciais',
      'Brand guidelines digitais (fontes, cores, texturas e estilo)',
      'Storytelling que valoriza a história e os diferenciais do seu produto',
    ],
    idealFor: 'Negócios que querem se desvincular de designs amadores e cobrar o valor justo pelo que fazem.',
    badge: 'Criação & Branding',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'mk3-golf-parts',
    title: 'MK3 Golf Parts',
    client: 'MK3 Golf Parts Brasil',
    category: 'Desenvolvimento Web & E-commerce',
    type: 'website',
    liveUrl: 'https://mk3golfparts.com.br/',
    imageUrl: '/src/assets/images/portfolio_mk3_showcase_1793380983140.jpg',
    headline: 'E-commerce especializado para entusiastas do clássico Volkswagen Golf MK3',
    summary:
      'Desenvolvimento de uma plataforma veloz, segura e altamente intuitiva para catálogo e venda de peças automotivas raras e de alta performance. O layout dark sofisticado respeita o universo automotivo clássico, com navegação fluida em dispositivos móveis e canal direto de checkout e WhatsApp.',
    scope: [
      'Estruturação completa de catálogo e categorias',
      'Design editorial moderno e responsivo',
      'Integração de pedidos e suporte via WhatsApp',
      'Otimização de SEO e velocidade para mobile',
    ],
    impact: 'Catálogo moderno e estruturado que elevou a autoridade da marca e agilizou o fechamento de pedidos online.',
  },
  {
    id: 'fluorita-arco-iris',
    title: 'Fluorita Arco-Íris',
    client: 'Fluorita Arco-Íris',
    category: 'Gestão de Redes Sociais & Branding',
    type: 'instagram',
    liveUrl: 'https://www.instagram.com/fluoritaarcoiris',
    imageUrl: '/src/assets/images/portfolio_fluorita_showcase_1793380983905.jpg',
    headline: 'Posicionamento estético e curadoria visual para marca de cristais e bem-estar',
    summary:
      'Gestão estratégica do Instagram com identidade visual harmoniosa, valorizando a beleza natural e a espiritualidade dos cristais. Criação de linha editorial com posts educativos, reels contemplativos e copywriting que acolhe a comunidade e incentiva compras diretas.',
    scope: [
      'Curadoria fotográfica e paleta visual holística',
      'Planejamento de postagens e roteiros para Reels',
      'Copywriting e atendimento empático nos canais digitais',
      'Posicionamento de marca premium e conexão genuína',
    ],
    impact: 'Visual coeso e acolhedor que aumentou o engajamento diário e impulsionou as mensagens de consulta e encomendas.',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    title: 'Atendimento Personalizado e Próximo',
    description:
      'Trabalhamos lado a lado com você. Sem intermediários ou respostas automáticas vazias: alinhamos objetivos e ajustamos rotas com agilidade e transparência.',
    highlight: 'Proximidade & Transparência',
  },
  {
    number: '02',
    title: 'Olhar Estético & Editorial Apurado',
    description:
      'Fugimos do comum e dos templates genéricos que poluem a internet. Cada tipografia, espaçamento e imagem é pensado para transmitir elegância e alto valor à sua marca.',
    highlight: 'Design Sofisticado',
  },
  {
    number: '03',
    title: 'Foco Absoluto em Conversão & Autoridade',
    description:
      'Beleza sem resultado não sustenta negócios. Nossas criações equilibram estética impecável com psicologia de vendas para gerar leads e clientes reais no seu WhatsApp.',
    highlight: 'Resultados Comerciais',
  },
  {
    number: '04',
    title: 'Pontualidade e Execução Técnica Sem Falhas',
    description:
      'Cronogramas respeitados à risca, páginas velozes que não travam e processos bem orquestrados para você ter tranquilidade e focar na gestão da sua empresa.',
    highlight: 'Rigor Técnico & Pontualidade',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mk3-review',
    author: 'Equipe MK3 Golf Parts',
    role: 'Direção Comercial',
    client: 'MK3 Golf Parts',
    project: 'Desenvolvimento do Site Oficial (mk3golfparts.com.br)',
    feedback:
      'A LJ Mídias entendeu exatamente o nível de detalhe que os amantes de clássicos exigem. O site ficou rápido, com visual impecável e os clientes agora encontram as peças com facilidade e nos chamam diretamente no WhatsApp para fechar. O profissionalismo fez toda a diferença.',
    tag: 'Site & E-commerce',
  },
  {
    id: 'fluorita-review',
    author: 'Gestão Fluorita Arco-Íris',
    role: 'Fundadora & Curadora',
    client: 'Fluorita Arco-Íris',
    project: 'Gestão de Instagram & Criação de Conteúdo (@fluoritaarcoiris)',
    feedback:
      'Encontrar uma agência que conseguisse traduzir a energia e a delicadeza dos nossos cristais foi um divisor de águas. O feed da Fluorita ficou com uma estética maravilhosa, recebemos elogios diários e as vendas aumentaram muito através das publicações.',
    tag: 'Redes Sociais & Identidade',
  },
];

export function getWhatsAppUrl(serviceTitle?: string, clientName?: string) {
  const greeting = clientName ? `Olá! Me chamo ${encodeURIComponent(clientName)}.` : 'Olá!';
  const serviceText = serviceTitle
    ? ` Gostaria de saber mais sobre o serviço de ${encodeURIComponent(serviceTitle)} da LJ Mídias.`
    : ' Gostaria de solicitar um diagnóstico para a presença digital da minha marca com a LJ Mídias.';
  const message = `${greeting}${serviceText}`;
  return `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${message}`;
}
