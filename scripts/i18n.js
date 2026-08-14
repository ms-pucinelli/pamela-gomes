const PORTFOLIO_LANGUAGE_KEY = "portfolioLanguage";
const SUPPORTED_LANGUAGES = ["en", "pt-BR"];

const translations = {
  en: {
    selector: { label: "Choose language", current: "English" },
    site: { professionalTitle: "TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN" },
    nav: { home: "Home", journey: "My Professional Journey", contact: "Contact Me" },
    languages: { portuguese: "Portuguese", english: "English", spanish: "Spanish" },
    home: {
      title: "Pamela Pucinelli - Technical Support, Quality & User Experience",
      description: "Pamela Pucinelli is a technical support professional developing expertise in Quality Assurance and UI/UX Design, with a focus on understanding products, investigating issues, and improving the user experience.",
      aboutTitle: "WHO AM I?",
      about1: "I am a technical support professional with experience investigating software issues, understanding user needs, reproducing bugs, and communicating technical information clearly between users and technical teams.",
      about2: "My background in customer and software support taught me to look at products from the user's perspective: where people get confused, which workflows create friction, how system behavior affects their experience, and what information is needed to reach a reliable resolution.",
      about3: "I am expanding this foundation through Quality Assurance and UI/UX Design, combining troubleshooting, testing, usability thinking, and visual design to better understand and improve the complete user experience with digital products.",
      toolsTitle: "TOOLS, TECHNOLOGIES & LANGUAGES",
      portfolioTitle: "QUALITY & USER EXPERIENCE PORTFOLIO",
      portfolioImageAlt: "Quality Assurance workspace with test cases, bug reports and testing dashboard",
      portfolioLink: "Quality Assurance & User Experience Portfolio",
      projectsTitle: "CODING PROJECTS",
      mimcLink: "MIMC - Body Mass Index Calculator"
    },
    journey: {
      documentTitle: "Pamela Pucinelli - My Professional Journey",
      description: "Pamela Pucinelli's professional journey across technical support, quality assurance, user experience, and design, with a focus on understanding users and improving digital products.",
      title: "MY PROFESSIONAL JOURNEY",
      intro1: "My career has consistently placed me close to users, technology, and the problems that happen between them.",
      intro2: "From service desk and software support to Quality Assurance and UI/UX studies, I have developed a multidisciplinary perspective on digital products: understanding what users are trying to accomplish, investigating what prevents them from doing it, validating system behavior, and thinking about how the experience could be improved.",
      intro3: "Today, I bring these perspectives together through Technical Support, Quality Assurance, and User Experience.",
      viewDetails: "▼ View details",
      hideDetails: "▲ Hide details",
      entry1: {
        summary: ["2019-2020", "Volunteer Service", "The Church of Jesus Christ of Latter-day Saints", "Worked with communities across four different cities, supporting people from different backgrounds and adapting communication and activities to their individual needs."],
        details: ["Skills developed:", "Multilingual and cross-cultural communication", "Empathy", "Leadership", "Adaptability", "Problem-solving", "Experience developed:", "Process organization", "Instruction and training", "Team coordination", "Structured communication", "Product & User Experience Impact:", "Learned to understand needs before proposing solutions.", "Developed the ability to communicate complex information in accessible ways.", "Strengthened empathy when working with people with different expectations and backgrounds.", "Learned to adapt processes according to real-world needs instead of assuming one approach works for everyone."]
      },
      entry2: {
        summary: ["2022-2023", "Trilingual Service Desk Analyst (Level 1)", "HCL Technologies", "Delivered first-line technical support in Portuguese, English, and Spanish, helping users resolve incidents and service requests while maintaining clear documentation and service quality."],
        details: ["Skills developed:", "Multilingual technical communication", "Customer support", "Time management", "Organization", "Attention to detail", "Technical experience:", "ITSM and ticket management", "Incident classification and categorization", "System troubleshooting", "Technical documentation", "Product & User Experience Impact:", "Learned how technical problems affect users in real working environments.", "Translated user descriptions into structured technical information.", "Identified the importance of clear feedback and communication during problem resolution.", "Managed 15–25 tickets per day while maintaining service quality.", "Contributed to strong customer satisfaction results within the Brazilian team."]
      },
      entry3: {
        summary: ["2023", "Volunteer Language Tutoring Manager", "Cumorah Academy", "Coordinated a team of 20 international tutors and supported consistent, high-quality experiences across tutoring sessions."],
        details: ["Skills developed:", "Leadership", "Multicultural communication", "Organization", "Feedback", "Quality awareness", "Technical experience:", "Process monitoring", "Performance evaluation", "Reporting and documentation", "Quality control", "Product & User Experience Impact:", "Evaluated experiences against expected quality standards.", "Identified inconsistencies and opportunities for improvement.", "Learned how structured feedback can improve the experience delivered by a team.", "Developed a broader understanding of quality as consistency, clarity, and user satisfaction."]
      },
      entry4: {
        summary: ["2023-2024", "Customer and Software Support Analyst (Level 2)", "Ninecon Consultores Associados Ltda", "Supported internal applications and a SaaS platform, investigating system behavior, validating data, maintaining technical knowledge, and helping ensure users received reliable information and solutions."],
        details: ["Skills developed:", "Analytical thinking", "Problem-solving", "Communication", "Attention to detail", "Process improvement", "Technical experience:", "SQL and Oracle SQL Developer", "Data validation and analysis", "ServiceNow knowledge base management", "System behavior analysis", "Reporting and metrics validation", "Product & User Experience Impact:", "Used SQL and system analysis to investigate data inconsistencies.", "Connected user-reported problems with underlying system behavior.", "Improved technical knowledge through structured documentation.", "Developed a deeper understanding of how reliability and data accuracy influence user trust.", "Identified opportunities to improve processes and reduce recurring support friction."]
      },
      entry5: {
        summary: ["2024-2026", "Technical Customer Support Representative (Level 1)", "Velozient", "Investigated 20–30 software-related cases daily in a SaaS environment, including account access, automations, scheduling workflows, and unexpected system behavior."],
        details: ["Skills developed:", "Technical communication", "Analytical investigation", "Problem-solving", "Customer empathy", "Attention to detail", "Technical experience:", "Bug investigation and reproduction", "Fix validation", "Technical ticket writing", "Workflow and system analysis", "Issue tracking and follow-up", "Product & User Experience Impact:", "Reproduced software issues and documented clear reproduction steps for technical teams.", "Validated fixes before considering reported problems resolved.", "Identified recurring patterns across automation and scheduling workflows.", "Distinguished between product defects, configuration issues, and user misunderstanding.", "Observed where unclear behavior or feedback created unnecessary user friction.", "Communicated technical behavior in language users could understand.", "Developed an end-to-end perspective of the relationship between support, product quality, and user experience."]
      },
      entry6: {
        summary: ["Today", "Expanding into Quality Assurance & UI/UX Design", "Professional Development", "Developing QA and UI/UX skills as complementary disciplines that extend a foundation in technical support and product understanding."],
        details: ["Current focus:", "Quality Assurance helps determine whether the product behaves as expected.", "User Experience helps determine whether the product makes sense to the people using it.", "Design helps explore how information, interaction, and visual decisions can make the experience clearer.", "Technical Support keeps this work grounded in real user needs, problems, and product behavior."]
      }
    }
  },
  "pt-BR": {
    selector: { label: "Escolher idioma", current: "Português" },
    site: { professionalTitle: "TECHNICAL SUPPORT | QUALITY ASSURANCE | UX & DESIGN" },
    nav: { home: "Início", journey: "Minha Jornada Profissional", contact: "Entre em Contato" },
    languages: { portuguese: "Português", english: "Inglês", spanish: "Espanhol" },
    home: {
      title: "Pamela Pucinelli - Suporte Técnico, Qualidade e Experiência do Usuário",
      description: "Pamela Pucinelli é profissional de suporte técnico e desenvolve conhecimentos em Quality Assurance e UI/UX Design, com foco em compreender produtos, investigar problemas e melhorar a experiência do usuário.",
      aboutTitle: "QUEM SOU EU?",
      about1: "Sou profissional de suporte técnico com experiência na investigação de problemas de software, compreensão das necessidades dos usuários, reprodução de bugs e comunicação clara de informações técnicas entre usuários e equipes técnicas.",
      about2: "Minha experiência em suporte ao cliente e suporte de software me ensinou a observar os produtos pela perspectiva do usuário: onde as pessoas encontram dificuldades, quais fluxos geram atrito, como o comportamento do sistema afeta sua experiência e quais informações são necessárias para chegar a uma solução confiável.",
      about3: "Estou ampliando essa base por meio de Quality Assurance e UI/UX Design, combinando troubleshooting, testes, pensamento de usabilidade e design visual para compreender melhor e aprimorar a experiência completa dos usuários com produtos digitais.",
      toolsTitle: "FERRAMENTAS, TECNOLOGIAS E IDIOMAS",
      portfolioTitle: "QUALITY & USER EXPERIENCE PORTFOLIO",
      portfolioImageAlt: "Ambiente de Quality Assurance com casos de teste, relatórios de bugs e dashboard de testes",
      portfolioLink: "Portfólio de Quality Assurance e Experiência do Usuário",
      projectsTitle: "PROJETOS DE PROGRAMAÇÃO",
      mimcLink: "MIMC - Calculadora de Índice de Massa Corporal"
    },
    journey: {
      documentTitle: "Pamela Pucinelli - Minha Jornada Profissional",
      description: "A jornada profissional de Pamela Pucinelli por suporte técnico, quality assurance, experiência do usuário e design, com foco em compreender usuários e melhorar produtos digitais.",
      title: "MINHA JORNADA PROFISSIONAL",
      intro1: "Minha carreira sempre me manteve próxima dos usuários, da tecnologia e dos problemas que surgem entre eles.",
      intro2: "Do service desk e suporte de software aos estudos de Quality Assurance e UI/UX, desenvolvi uma perspectiva multidisciplinar sobre produtos digitais: compreender o que os usuários tentam realizar, investigar o que os impede, validar o comportamento do sistema e pensar em como a experiência pode ser melhorada.",
      intro3: "Hoje, reúno essas perspectivas por meio de Suporte Técnico, Quality Assurance e Experiência do Usuário.",
      viewDetails: "▼ Ver detalhes",
      hideDetails: "▲ Ocultar detalhes",
      entry1: {
        summary: ["2019-2020", "Serviço Voluntário", "The Church of Jesus Christ of Latter-day Saints", "Trabalhei com comunidades em quatro cidades diferentes, apoiando pessoas de diversas origens e adaptando a comunicação e as atividades às necessidades individuais de cada uma."],
        details: ["Habilidades desenvolvidas:", "Comunicação multilíngue e intercultural", "Empatia", "Liderança", "Adaptabilidade", "Resolução de problemas", "Experiência desenvolvida:", "Organização de processos", "Instrução e treinamento", "Coordenação de equipes", "Comunicação estruturada", "Impacto no Produto e na Experiência do Usuário:", "Aprendi a compreender as necessidades antes de propor soluções.", "Desenvolvi a capacidade de comunicar informações complexas de forma acessível.", "Fortaleci a empatia ao trabalhar com pessoas de diferentes expectativas e origens.", "Aprendi a adaptar processos às necessidades reais, em vez de presumir que uma única abordagem funciona para todos."]
      },
      entry2: {
        summary: ["2022-2023", "Analista de Service Desk Trilíngue (Nível 1)", "HCL Technologies", "Prestei suporte técnico de primeiro nível em português, inglês e espanhol, ajudando usuários a resolver incidentes e solicitações de serviço, mantendo documentação clara e qualidade no atendimento."],
        details: ["Habilidades desenvolvidas:", "Comunicação técnica multilíngue", "Suporte ao cliente", "Gestão do tempo", "Organização", "Atenção aos detalhes", "Experiência técnica:", "ITSM e gestão de tickets", "Classificação e categorização de incidentes", "Troubleshooting de sistemas", "Documentação técnica", "Impacto no Produto e na Experiência do Usuário:", "Aprendi como problemas técnicos afetam os usuários em ambientes reais de trabalho.", "Transformei descrições dos usuários em informações técnicas estruturadas.", "Identifiquei a importância de feedback e comunicação claros durante a resolução de problemas.", "Gerenciei de 15 a 25 tickets por dia, mantendo a qualidade do atendimento.", "Contribuí para bons resultados de satisfação dos clientes na equipe brasileira."]
      },
      entry3: {
        summary: ["2023", "Gerente Voluntária de Tutoria de Idiomas", "Cumorah Academy", "Coordenei uma equipe de 20 tutores internacionais e apoiei a entrega de experiências consistentes e de alta qualidade nas sessões de tutoria."],
        details: ["Habilidades desenvolvidas:", "Liderança", "Comunicação multicultural", "Organização", "Feedback", "Consciência de qualidade", "Experiência técnica:", "Monitoramento de processos", "Avaliação de desempenho", "Relatórios e documentação", "Controle de qualidade", "Impacto no Produto e na Experiência do Usuário:", "Avaliei experiências com base nos padrões de qualidade esperados.", "Identifiquei inconsistências e oportunidades de melhoria.", "Aprendi como o feedback estruturado pode melhorar a experiência entregue por uma equipe.", "Desenvolvi uma compreensão mais ampla de qualidade como consistência, clareza e satisfação do usuário."]
      },
      entry4: {
        summary: ["2023-2024", "Analista de Suporte ao Cliente e Software (Nível 2)", "Ninecon Consultores Associados Ltda", "Prestei suporte a aplicações internas e a uma plataforma SaaS, investigando o comportamento do sistema, validando dados, mantendo conhecimento técnico e ajudando a garantir que os usuários recebessem informações e soluções confiáveis."],
        details: ["Habilidades desenvolvidas:", "Pensamento analítico", "Resolução de problemas", "Comunicação", "Atenção aos detalhes", "Melhoria de processos", "Experiência técnica:", "SQL e Oracle SQL Developer", "Validação e análise de dados", "Gestão da base de conhecimento no ServiceNow", "Análise do comportamento do sistema", "Validação de relatórios e métricas", "Impacto no Produto e na Experiência do Usuário:", "Utilizei SQL e análise de sistemas para investigar inconsistências de dados.", "Conectei problemas relatados pelos usuários ao comportamento subjacente do sistema.", "Aprimorei o conhecimento técnico por meio de documentação estruturada.", "Desenvolvi uma compreensão mais profunda de como a confiabilidade e a precisão dos dados influenciam a confiança do usuário.", "Identifiquei oportunidades para melhorar processos e reduzir atritos recorrentes no suporte."]
      },
      entry5: {
        summary: ["2024-2026", "Representante de Suporte Técnico ao Cliente (Nível 1)", "Velozient", "Investiguei de 20 a 30 casos relacionados a software por dia em um ambiente SaaS, incluindo acesso a contas, automações, fluxos de agendamento e comportamentos inesperados do sistema."],
        details: ["Habilidades desenvolvidas:", "Comunicação técnica", "Investigação analítica", "Resolução de problemas", "Empatia com o cliente", "Atenção aos detalhes", "Experiência técnica:", "Investigação e reprodução de bugs", "Validação de correções", "Elaboração de tickets técnicos", "Análise de fluxos e sistemas", "Acompanhamento de problemas", "Impacto no Produto e na Experiência do Usuário:", "Reproduzi problemas de software e documentei etapas claras de reprodução para as equipes técnicas.", "Validei correções antes de considerar os problemas relatados como resolvidos.", "Identifiquei padrões recorrentes em fluxos de automação e agendamento.", "Diferenciei defeitos do produto, problemas de configuração e dificuldades de compreensão do usuário.", "Observei onde comportamentos ou feedbacks pouco claros criavam atritos desnecessários para os usuários.", "Comuniquei comportamentos técnicos em uma linguagem que os usuários pudessem compreender.", "Desenvolvi uma perspectiva de ponta a ponta sobre a relação entre suporte, qualidade do produto e experiência do usuário."]
      },
      entry6: {
        summary: ["Hoje", "Expandindo para Quality Assurance e UI/UX Design", "Desenvolvimento Profissional", "Desenvolvendo habilidades de QA e UI/UX como disciplinas complementares que ampliam uma base em suporte técnico e compreensão de produtos."],
        details: ["Foco atual:", "Quality Assurance ajuda a determinar se o produto se comporta conforme o esperado.", "Experiência do Usuário ajuda a determinar se o produto faz sentido para as pessoas que o utilizam.", "Design ajuda a explorar como decisões de informação, interação e aspectos visuais podem tornar a experiência mais clara.", "Suporte Técnico mantém esse trabalho fundamentado nas necessidades reais dos usuários, nos problemas e no comportamento do produto."]
      }
    }
  }
};

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(PORTFOLIO_LANGUAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : "en";
  } catch {
    return "en";
  }
}

let currentLanguage = getSavedLanguage();

function applyLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  const pageTranslations = translations[currentLanguage];
  const isJourneyPage = document.body.querySelector(".collapsible-container") !== null;

  document.documentElement.lang = currentLanguage;
  document.title = isJourneyPage ? pageTranslations.journey.documentTitle : pageTranslations.home.title;
  document.querySelector('meta[name="description"]').content = isJourneyPage ? pageTranslations.journey.description : pageTranslations.home.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18nAlt);
    if (typeof value === "string") element.alt = value;
  });

  document.querySelectorAll("[data-i18n-group]").forEach((group) => {
    const values = getTranslation(currentLanguage, group.dataset.i18nGroup);
    const elements = group.querySelectorAll(":scope > p, :scope > ul > li");
    if (Array.isArray(values)) elements.forEach((element, index) => { element.textContent = values[index]; });
  });

  const trigger = document.querySelector(".language-trigger");
  trigger.setAttribute("aria-label", pageTranslations.selector.label);
  document.querySelector(".current-language").textContent = pageTranslations.selector.current;
  document.querySelectorAll("[data-language]").forEach((option) => {
    const isCurrentLanguage = option.dataset.language === currentLanguage;
    option.setAttribute("aria-current", String(isCurrentLanguage));
    option.hidden = isCurrentLanguage;
  });

  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language: currentLanguage } }));
}

function closeLanguageMenu(returnFocus = false) {
  const trigger = document.querySelector(".language-trigger");
  const menu = document.querySelector(".language-menu");
  trigger.setAttribute("aria-expanded", "false");
  menu.hidden = true;
  if (returnFocus) trigger.focus();
}

const languageTrigger = document.querySelector(".language-trigger");
const languageMenu = document.querySelector(".language-menu");

languageTrigger.addEventListener("click", () => {
  const willOpen = languageMenu.hidden;
  languageMenu.hidden = !willOpen;
  languageTrigger.setAttribute("aria-expanded", String(willOpen));
});

languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-language]");
  if (!option) return;

  try { localStorage.setItem(PORTFOLIO_LANGUAGE_KEY, option.dataset.language); } catch { /* Language still applies for this page. */ }
  applyLanguage(option.dataset.language);
  closeLanguageMenu(true);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !languageMenu.hidden) closeLanguageMenu(true);
});

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".language-selector")) closeLanguageMenu();
});

window.portfolioI18n = {
  getLanguage: () => currentLanguage,
  translate: (key) => getTranslation(currentLanguage, key)
};

applyLanguage(currentLanguage);
