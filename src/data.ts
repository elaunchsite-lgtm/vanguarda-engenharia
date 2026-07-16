import { Service, Project, BlogPost, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'construcao-civil',
    title: 'Construção Civil Pesada',
    description: 'Execução de grandes estruturas, edifícios comerciais de alta densidade e infraestruturas urbanas com engenharia de ponta.',
    fullDetails: 'Oferecemos soluções completas para edifícios corporativos, residenciais verticais e infraestrutura pesada. Desde as fundações profundas até a entrega final, combinamos cronogramas de alta precisão, tecnologia BIM e materiais sustentáveis para erguer marcos urbanos indestrutíveis e esteticamente brilhantes.',
    icon: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Planejamento tridimensional em metodologia BIM',
      'Cumprimento rigoroso de normas de segurança internacional (ISO)',
      'Gestão de resíduos integrada e redução de impacto ambiental',
      'Controle tecnológico de concreto e aço em tempo real'
    ]
  },
  {
    id: 'reformas',
    title: 'Retrofit & Reformas de Alto Padrão',
    description: 'Renovação completa e modernização estrutural de edificações antigas, unindo segurança histórica e estética contemporânea.',
    fullDetails: 'O retrofit revitaliza edificações, otimizando o consumo energético, atualizando instalações elétricas/hidráulicas e renovando fachadas inteiras sem comprometer a integridade arquitetônica original do projeto. Perfeito para modernização comercial de edifícios clássicos.',
    icon: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Aumento da eficiência térmica e acústica',
      'Valorização patrimonial em até 40% imediatamente',
      'Instalação de sistemas modernos de automação predial',
      'Substituição eco-eficiente de materiais e fiação'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria e Engenharia de Custos',
    description: 'Estudos de viabilidade técnica, orçamentos inteligentes e auditorias completas para otimização máxima de investimentos.',
    fullDetails: 'Antes de escavar o solo, o sucesso de uma obra se decide na planilha de planejamento. Nossa equipe técnica de engenheiros analistas realiza projeções completas de custos, mapeamento de riscos geológicos/climáticos e estruturação de cronogramas ágeis para garantir zero desperdício.',
    icon: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Engenharia de valor para economia sem perdas de qualidade',
      'Mapeamento antecipado de riscos regulatórios e ambientais',
      'Estudos de impacto de vizinhança abrangentes',
      'Estimativas orçamentárias com margem de precisão superior a 95%'
    ]
  },
  {
    id: 'arquitetura',
    title: 'Projetos Arquitetônicos & Design de Interiores',
    description: 'União simbiótica entre forma e função para criar espaços memoráveis, inteligentes e focados no bem-estar humano.',
    fullDetails: 'Desenvolvemos fachadas imponentes, plantas fluidas e interiores dinâmicos que contam histórias. Nossos arquitetos criam simulações realistas e fotorrealistas para que você caminhe pelos ambientes e refine cada detalhe antes mesmo do início da fundação.',
    icon: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Projetos bioclimáticos que aproveitam iluminação natural',
      'Visualização imersiva em 3D / Realidade Virtual',
      'Especificação técnica minuciosa de revestimentos e acabamentos',
      'Compatibilização total com projetos complementares estruturais'
    ]
  },
  {
    id: 'planejamento',
    title: 'Gestão Integrada de Obras (Turnkey)',
    description: 'Entrega de ponta a ponta: cuidamos de todas as etapas burocráticas, suprimentos, equipes e vistorias finais da sua obra.',
    fullDetails: 'Com a modalidade Turnkey (Chave na Mão), você não se preocupa com nada. Gerenciamos a contratação de pessoal especializado, a compra de materiais, o cumprimento de alvarás civis e licenças ambientais, até a limpeza fina pós-obra e entrega formal das chaves.',
    icon: 'Calendar',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Ponto de contato único para o cliente',
      'Cronogramas detalhados semanais de andamento',
      'Responsabilidade técnica total (ART e CREA)',
      'Garantia de entrega no prazo contratado sob multa'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'torre-vanguarda',
    title: 'Torre Vanguarda Business',
    category: 'civil',
    location: 'Avenida Paulista, São Paulo - SP',
    year: '2025',
    area: '42.000 m²',
    status: 'concluido',
    description: 'Edifício comercial de 32 andares com certificação LEED Platinum. Fachada inteligente em vidro autolimpante que reduz a absorção de calor térmico, e sistema integrado de energia solar fotovoltaica cobrindo 30% da demanda.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'residencia-breeze',
    title: 'Residência Breeze Hills',
    category: 'residencial',
    location: 'Alphaville, Barueri - SP',
    year: '2026',
    area: '750 m²',
    status: 'concluido',
    description: 'Casa conceito desenvolvida sob princípios de arquitetura bioclimática e brutalista, utilizando concreto aparente, madeira de demolição certificada e captação de águas pluviais para irrigação autônoma do jardim vertical.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'complexo-logistico-nexus',
    title: 'Complexo Logístico Nexus',
    category: 'industrial',
    location: 'Rodovia dos Bandeirantes, Campinas - SP',
    year: '2026',
    area: '120.000 m²',
    status: 'em_andamento',
    description: 'Megacentro de distribuição logística com estrutura em concreto pré-moldado de alta resistência, piso industrial autonivelante com capacidade para 8 toneladas por metro quadrado e sistema contra incêndios de resposta ultrarrápida.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sede-corporativa-fintech',
    title: 'Sede Fintech Summit',
    category: 'corporativo',
    location: 'Faria Lima, São Paulo - SP',
    year: '2026',
    area: '4.200 m²',
    status: 'em_andamento',
    description: 'Retrofit estrutural de antigo armazém industrial transformado em sede de inovação de ponta, mantendo a bela estrutura metálica e tetos industriais originais, integrando-as a salas de reuniões suspensas e vidros acústicos premium.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotel-aurora-resort',
    title: 'Aurora Eco-Resort',
    category: 'civil',
    location: 'Porto de Galinhas, Ipojuca - PE',
    year: '2027',
    area: '18.500 m²',
    status: 'projeto',
    description: 'Projeto de complexo hoteleiro sustentável à beira-mar. O design incorpora materiais regionais de baixa pegada de carbono, tratamento natural de efluentes por fitodepuração e telhados verdes integrados à paisagem costeira natural.',
    imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'tecnologia-bim-engenharia',
    slug: 'tecnologia-bim-engenharia',
    title: 'Como a Tecnologia BIM Reduz Desperdícios em Obras Civis em até 25%',
    excerpt: 'Descubra como a modelagem tridimensional inteligente previne colisões de tubulações, otimiza orçamentos e acelera prazos.',
    content: `A metodologia **BIM (Building Information Modeling)** deixou de ser apenas um diferencial mercadológico para se consolidar como o pilar estrutural básico de qualquer construção moderna altamente eficiente. Diferente de desenhos bidimensionais tradicionais em CAD, o BIM cria um protótipo virtual tridimensional da obra incrivelmente rico em dados técnicos e físicos reais.

### O Poder da Previsibilidade Tridimensional
Imagine o pesadelo de descobrir, em plena fase de concretagem do vigamento de um arranha-céu, que um cano mestre de escoamento hidráulico colide de forma intransponível com o aço de sustentação principal. No método convencional, isso exigiria quebras de parede, reengenharia urgente no canteiro de obras e dias preciosos de paralisação técnica.

Com a compatibilização automática de projetos em BIM:
* O software aponta instantaneamente conflitos (*Clash Detection*) antes de mover uma pá de terra do solo.
* Cada material de construção possui sua respectiva ficha técnica integrada ao modelo virtual.
* Orçamentistas sabem o peso exato de vergalhão e metros cúbicos de concreto necessários, com margens de erro abaixo de 1.5%.

### Sustentabilidade no Núcleo do Planejamento
Além da precisão logística, o BIM permite simular o ciclo térmico solar em diferentes horas do dia, capacitando nossa equipe de arquitetura a posicionar as janelas e brises de maneira otimizada, reduzindo permanentemente a necessidade de climatização artificial e gerando economias eternas ao proprietário final da edificação.`,
    author: {
      name: 'Eng. Ricardo Silveira',
      role: 'Diretor de Operações BIM',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    category: 'Engenharia',
    publishedAt: '12 Julho 2026',
    readTime: '6 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    tags: ['BIM', 'Tecnologia', 'Inovação', 'Orçamento']
  },
  {
    id: 'concreto-sustentavel-futuro',
    slug: 'concreto-sustentavel-futuro',
    title: 'Concreto Sustentável: O Futuro Neutro em Carbono na Construção Civil',
    excerpt: 'Conheça as novas formulações de cimento ecológico, uso de resíduos agregados e processos industriais de baixa emissão de CO2.',
    content: `A indústria do concreto é uma das forças mais impressionantes criadas pela humanidade para erguer civilizações, contudo, a fabricação do cimento tradicional (clínquer) responde historicamente por cerca de 8% de todas as emissões globais de dióxido de carbono. Encontrar alternativas sustentáveis para esse material de base não é mais um capricho ecológico, mas uma urgência civilizatória global.

### O que torna o Concreto Sustentável viável?
Atualmente, a **Vanguarda Engenharia** pesquisa e aplica técnicas inovadoras que substituem frações do cimento tradicional por cinzas volantes industriais residuais, escória granulada de alto-forno e pozolanas de menor pegada térmica de queima.

Estas inovações trazem benefícios marcantes:
1. **Redução Drástica na Pegada de Carbono**: Emissões reduzidas em até 40% no processo de clínquerização.
2. **Resistência Mecânica Aprimorada**: Menor porosidade microscópica impede a infiltração de sais e previne a degradação estrutural do vergalhão metálico de forma superior ao longo das décadas.
3. **Uso de Entulho Reciclado**: Fragmentação de blocos cerâmicos de demolição como brita grossa estrutural para calçadas e preenchimentos não portantes.

### Projetando para Durabilidade Centenária
Erguer construções eficientes significa fazê-las durar mais tempo. Ao usarmos concreto com fórmulas otimizadas de baixa porosidade e curas técnicas controladas por aspersão de vapor, garantimos que edifícios comerciais residam por mais de um século com custos mínimos de reparo, o que representa a maior economia de recursos minerais possível.`,
    author: {
      name: 'Dra. Helena Martins',
      role: 'Especialista em Materiais de Construção',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    category: 'Sustentabilidade',
    publishedAt: '08 Julho 2026',
    readTime: '8 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Ecológico', 'Concreto', 'Pegada de Carbono', 'Materiais']
  },
  {
    id: 'tendencias-arquitetura-pos-2026',
    slug: 'tendencias-arquitetura-pos-2026',
    title: 'Tendências de Arquitetura Comercial: Conectividade e Bem-Estar',
    excerpt: 'Fachadas biofílicas, iluminação dinâmica e designs flexíveis são o novo foco no desenvolvimento corporativo premium.',
    content: `Os escritórios corporativos do século XXI não são meros aglomerados de baias e divisórias frias sob luzes fluorescentes cansativas. O novo trabalhador e a moderna empresa exigem espaços respiráveis, flexíveis e imbuídos de elementos naturais restauradores. Entenda as principais premissas arquitetônicas que estão mudando radicalmente nossos centros urbanos corporativos.

### 1. Biofilia: Trazer a Natureza para as Alturas
A biofilia vai incrivelmente além de colocar samambaias em vasos nos cantos do saguão. Consiste em integrar jardins suspensos verticais irrigados por automação, espelhos d'água internos que purificam as vias aéreas e umidificam o ar de forma natural, e paredes texturizadas com rochas que remetem a formações naturais geológicas.

* **Impacto**: Estudos indicam aumento de até 15% na produtividade cognitiva e redução acentuada do estresse mental de colaboradores que respiram em ambientes biofílicos.
* **Técnica**: Jardins verticais atuam simultaneamente como isolantes acústicos entre salas de reuniões e fachadas de recepção.

### 2. Iluminação Circadiana Automatizada
A luz do sol varia de frequência cromática ao longo das horas. Nosso sistema hormonal responde a essas sutilidades de cores. Projetos de iluminação dinâmica monitoram os sensores de fachada e modulam a temperatura de cor interna de luminárias LED: de uma luz azulada ativa de manhã para tons âmbares relaxantes ao fim do expediente comercial.

Erguer estruturas modernas é desenhar espaços que respeitam a biologia humana. Na **Vanguarda Engenharia**, cada detalhe arquitetônico é planejado para elevar a saúde e o conforto das pessoas.`,
    author: {
      name: 'Arq. Tiago Mendes',
      role: 'Líder de Design Arquitetônico',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80'
    },
    category: 'Arquitetura',
    publishedAt: '03 Julho 2026',
    readTime: '5 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Biofilia', 'Corporativo', 'Luminotécnico', 'Bem-Estar']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'eduardo-vargas',
    name: 'Eng. Eduardo Vargas',
    role: 'CEO & Fundador',
    bio: 'Mais de 25 anos liderando obras de infraestrutura e edificações de grande porte pela América Latina. Engenheiro civil pela USP e MBA pelo MIT.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ricardo-silveira',
    name: 'Eng. Ricardo Silveira',
    role: 'Diretor de Engenharia & BIM',
    bio: 'Pioneiro na implementação nacional da metodologia BIM. Garante precisão micrométrica, orçamentos confiáveis e obras sem desperdício de insumos.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'helena-martins',
    name: 'Dra. Helena Martins',
    role: 'Líder de P&D de Materiais',
    bio: 'Especialista em concreto ecológico e resiliência estrutural. Doutora pela UNICAMP com pós-doutorado em materiais sustentáveis na Europa.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'beatriz-moura',
    name: 'Arq. Beatriz Moura',
    role: 'Diretora de Arquitetura & Sustentabilidade',
    bio: 'Criadora de conceitos que unem design contemporâneo e biofílico. Certificada LEED AP, busca neutralidade em carbono em todas as fachadas concebidas.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'lucas-gomes',
    name: 'Lucas Gomes',
    company: 'Nexus Logística Global',
    text: 'A Vanguarda entregou nosso megagalpão logístico 15 dias antes do prazo acordado contratualmente, com orçamento rigorosamente idêntico à projeção original do modelo BIM. Profissionalismo excepcional no mercado nacional.',
    role: 'Diretor de Infraestrutura',
    rating: 5
  },
  {
    id: 'amanda-ferreira',
    name: 'Amanda Ferreira',
    company: 'Corporate Hub Coworking',
    text: 'O retrofit de nossa sede em prédio clássico foi desafiador. Eles conseguiram manter as vigas de tijolos aparentes dos anos 50 integrando perfeitamente rede de automação por voz, ar central ecológico e isolamento acústico incomparável.',
    role: 'CEO',
    rating: 5
  },
  {
    id: 'marcos-rodrigues',
    name: 'Eng. Marcos Rodrigues',
    company: 'Prefeitura Metropolitana',
    text: 'No projeto do Hospital Geral Metropolitano, a consultoria técnica e as investigações geológicas prévias da Vanguarda pouparam milhões em fundações desnecessárias, redirecionando verbas cruciais à área clínica.',
    role: 'Secretário Adjunto de Obras',
    rating: 5
  }
];
