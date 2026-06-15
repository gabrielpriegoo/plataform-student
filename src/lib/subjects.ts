export type QuestionType = "multipla" | "vf" | "assercao" | "afirmativas";

export type Question = {
  id: string;
  quiz: 1 | 2 | 3 | 4;
  type: QuestionType;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Afirmativas I, II, III, IV (e V) listadas antes das opções (vf e afirmativas) */
  statements?: string[];
  /** Asserções I e II exibidas em destaque (assercao) */
  assertions?: { i: string; ii: string };
};

export type Subject = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  accent: string;
  summary: string;
  topics: string[];
  questions: Question[];
};

export const subjects: Subject[] = [
  {
    slug: "padrao-arquitetura-software",
    name: "Padrão e Arquitetura de Software",
    category: "Computação",
    icon: "λ",
    accent: "from-indigo-500/20 to-violet-500/10",
    summary:
      "Padrão e Arquitetura de Software reúne os fundamentos para projetar sistemas de software robustos e sustentáveis. A disciplina aborda os principais estilos de arquitetura (cliente-servidor, microsserviços, orientada a eventos e a serviços), os diagramas UML e os padrões de projeto (MVC, Publish-Subscribe, Proxy, Singleton, Factory Method, Adapter e Composite). Estuda também o ciclo de vida do software (modelo cascata, espiral, iterativo e incremental), a cultura DevOps com seus princípios (CALMS), integração e entrega contínuas (CI/CD), além de testes de software (unitários, regressão, compatibilidade, carga, usabilidade, smoke tests) e qualidade de processo (Bartié, fatores de desorganização, ferramentas de monitoramento como AppDynamics, New Relic e Prometheus).",
    topics: [
      "Questionário 1 — Microsserviços, Ciclo de Vida, DevOps, Testes",
      "Questionário 2 — Componentes, Padrões, DevOps, Microsserviços e Qualidade",
      "Questionário 3 — Estilos, Padrões (MVC, Pub-Sub, Proxy), DevOps e Qualidade",
      "Questionário 4 — UML, SOAP/REST, Kanban, Smoke Tests, Monitoramento",
    ],
    questions: [
      // ============================================================
      // QUESTIONÁRIO 1 — Unidades 1 a 4
      // ============================================================
      {
        id: "q1-01",
        quiz: 1,
        type: "multipla",
        prompt:
          "Segundo a Unidade 1 do ebook, quando uma aplicação cresce e passa a ter vários domínios, times e regras de negócio, qual fator se torna o principal impulsionador da quebra do monólito em microsserviços?",
        options: [
          "A redução do custo de hospedagem em servidores locais.",
          "A complexidade de manter o sistema como um todo único, com times grandes e regras dependentes.",
          "A ausência de APIs para comunicação com sistemas externos.",
          "A incompatibilidade entre o software e o sistema operacional do servidor.",
        ],
        correctIndex: 1,
        explanation:
          "Conforme a Unidade 1 (p. 30), a quebra do monólito em microsserviços ocorre quando a aplicação cresce e surgem domínios com times e regras de negócio próprios — a complexidade de manter o sistema como um todo único se torna o principal impulsionador.",
      },
      {
        id: "q1-02",
        quiz: 1,
        type: "multipla",
        prompt:
          "Ainda na Unidade 1, sobre os benefícios da arquitetura de microsserviços, assinale a alternativa correta:",
        options: [
          "A complexidade do sistema é centralizada em um único bloco de código.",
          "A manutenção e a evolução dos serviços passam a ser mais simples por serem desacoplados, ainda que exijam maior cuidado na integração.",
          "A equipe precisa ser maior e trabalhar de forma mais sincronizada.",
          "A comunicação entre os serviços é feita apenas por meio de APIs SOAP.",
        ],
        correctIndex: 1,
        explanation:
          "A Unidade 1 (p. 30) destaca que, entre os benefícios, a manutenção e a evolução dos serviços se tornam mais simples por serem desacoplados, embora o cuidado com a integração deva ser maior.",
      },
      {
        id: "q1-03",
        quiz: 1,
        type: "multipla",
        prompt:
          "Conforme a Unidade 2 do ebook, o modelo de desenvolvimento de software que foi idealizado por Barry Boehm, no qual cada volta completa no círculo de fases do projeto representa uma etapa concluída, é denominado:",
        options: [
          "Modelo cascata.",
          "Modelo prescritivo.",
          "Modelo espiral.",
          "Modelo iterativo e incremental.",
        ],
        correctIndex: 2,
        explanation:
          "O modelo espiral foi idealizado por Barry Boehm e tem esse nome porque cada volta completa no círculo de fases representa uma etapa concluída. É considerado cíclico (Ebook, Unidade 2, p. 43).",
      },
      {
        id: "q1-04",
        quiz: 1,
        type: "multipla",
        prompt:
          "Segundo Richards e Ford (2020), apresentados no ebook, o ciclo de vida de um software pode ser definido como:",
        options: [
          "O conjunto de testes aplicados ao software, desde os unitários até os de aceitação, garantindo a sua validação.",
          "A estrutura que indica todos os processos que devem ser realizados em todas as fases do desenvolvimento, implementação e manutenção de um software.",
          "O modelo matemático utilizado para prever o tempo de execução de cada funcionalidade do software.",
          "O documento de especificação de requisitos que define as funcionalidades esperadas pelo usuário final.",
        ],
        correctIndex: 1,
        explanation:
          "A definição é apresentada em destaque na Unidade 2 (p. 39), atribuída a Richards e Ford (2020): o ciclo de vida é a estrutura que indica todos os processos a serem realizados em todas as fases do software.",
      },
      {
        id: "q1-05",
        quiz: 1,
        type: "multipla",
        prompt:
          "Ainda na Unidade 2, sobre as fases do modelo prescritivo, a sequência correta é:",
        options: [
          "Comunicação → Modelagem → Implantação → Construção.",
          "Concepção → Elaboração → Construção → Transição.",
          "Planejamento → Execução → Teste → Entrega.",
          "Requisitos → Análise → Codificação → Teste.",
        ],
        correctIndex: 1,
        explanation:
          "A Figura 03 da Unidade 2 (p. 41–42) mostra as quatro fases nesta ordem: Concepção, Elaboração, Construção e Transição.",
      },
      {
        id: "q1-06",
        quiz: 1,
        type: "multipla",
        prompt:
          "A cultura DevOps, descrita na Unidade 2, surgiu a partir dos preceitos do:",
        options: [
          "Modelo cascata.",
          "Modelo espiral.",
          "Desenvolvimento Ágil.",
          "Modelo iterativo e incremental.",
        ],
        correctIndex: 2,
        explanation:
          "A Unidade 2 (p. 47) afirma: 'A cultura DevOps surgiu para tornar os projetos de softwares e suas arquiteturas cada vez mais eficientes, a partir dos preceitos do Desenvolvimento Ágil.'",
      },
      {
        id: "q1-07",
        quiz: 1,
        type: "multipla",
        prompt:
          "A metodologia ágil Scrum, citada na Unidade 2, organiza o projeto em pequenas fases denominadas sprints, com duração normalmente de:",
        options: [
          "1 a 2 semanas.",
          "2 a 4 semanas.",
          "4 a 8 semanas.",
          "8 a 12 semanas.",
        ],
        correctIndex: 1,
        explanation:
          "Conforme Gamma e Helm (2011), citados na Unidade 2 (p. 45): as sprints possuem duração fixa, normalmente de 2 a 4 semanas, e o resultado é sempre um incremento de software funcional.",
      },
      {
        id: "q1-08",
        quiz: 1,
        type: "multipla",
        prompt:
          "Sobre os tipos de testes apresentados na Unidade 3 do ebook, o teste que é aplicado ao software em diferentes plataformas, dispositivos ou sistemas, garantindo seu funcionamento em diferentes aspectos e níveis de funcionalidade, é chamado de:",
        options: [
          "Teste de regressão.",
          "Teste de compatibilidade.",
          "Teste de carga.",
          "Teste de usabilidade.",
        ],
        correctIndex: 1,
        explanation:
          "A Unidade 3 (p. 73) define testes de compatibilidade como testes não funcionais que verificam a execução do software em diferentes plataformas, dispositivos ou sistemas, aumentando o alcance de mercado (Aniche, 2015).",
      },
      {
        id: "q1-09",
        quiz: 1,
        type: "multipla",
        prompt:
          "Ainda na Unidade 3, a respeito das boas práticas de testes unitários, é correto afirmar que:",
        options: [
          "Os testes unitários devem ser longos e cobrir o maior número possível de funcionalidades em um único método.",
          "É uma boa prática escrever testes unitários que dependam fortemente de bancos de dados e serviços web externos.",
          "Os testes unitários devem ser diretos e breves, focando sempre em uma única funcionalidade ou comportamento.",
          "Os testes unitários verificam os requisitos de segurança por meio da exploração do código-fonte.",
        ],
        correctIndex: 2,
        explanation:
          "A Unidade 3 (p. 80) destaca: 'O teste unitário é geralmente aplicado às partes pequenas de um software e por isso deve ser simples e focados sempre em uma única funcionalidade ou comportamento específico de um trecho do código-fonte.'",
      },
      {
        id: "q1-10",
        quiz: 1,
        type: "multipla",
        prompt:
          "Na Unidade 4, ao tratar da qualidade em projetos de software, o autor Bartié (2002) apresenta uma figura com os fatores que alimentam a desorganização do software. Entre eles estão:",
        options: [
          "Falta de planejamento, processos deficientes, falta de qualidade do produto e ferramentas inadequadas.",
          "Cultura, automação, Lean IT, medição e compartilhamento.",
          "Integração contínua, entrega contínua, automação e cultura.",
          "Planes, builds, operações, monitoramento e integração.",
        ],
        correctIndex: 0,
        explanation:
          "A Figura 04 da Unidade 4 (p. 99), atribuída a Bartié (2002), mostra os fatores que alimentam a desorganização do software, entre eles: informalidade nas decisões, falta de planejamento, processos deficientes, falta de qualidade do produto, ferramentas inadequadas e pouca comunicação.",
      },

      // ============================================================
      // QUESTIONÁRIO 2 — Componentes, padrões, DevOps, qualidade
      // ============================================================
      {
        id: "q2-01",
        quiz: 2,
        type: "vf",
        prompt:
          "Em uma arquitetura de software, os componentes são blocos de construção modulares capazes de dar origem a um sistema. De acordo com Richards (2020), os componentes podem ser classificados, entre outros, como: classes, módulos, bibliotecas, interfaces e serviços. A esse respeito, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "As classes são unidades fundamentais da programação orientada a objetos, encapsulando atributos e métodos, e permitem definir propriedades e a forma como os componentes interagem entre si.",
          "Os módulos são unidades independentes de código que formam um aglomerado de funcionalidades relacionadas, e uma das suas principais vantagens é reduzir a duplicidade de códigos.",
          "As bibliotecas são sempre compiladas no aplicativo, não podendo ser carregadas dinamicamente em tempo de execução.",
          "Os serviços são componentes autônomos e independentes, acessados por meio de APIs definidas, e podem se comunicar com outros componentes por protocolos como HTTP, SOAP e REST.",
        ],
        options: [
          "V, V, V, V",
          "V, V, F, V",
          "V, F, V, F",
          "F, V, V, V",
          "V, F, F, V",
        ],
        correctIndex: 1,
        explanation:
          "Apenas a terceira afirmativa é falsa: as bibliotecas podem ser estáticas (compiladas no aplicativo) ou dinâmicas (carregadas em tempo de execução), conforme a Unidade 1 (p. 10).",
      },
      {
        id: "q2-02",
        quiz: 2,
        type: "multipla",
        prompt:
          "Os diagramas UML são utilizados para modelar e desenvolver sistemas orientados a objetos e podem atender a diferentes necessidades de representação. Sobre o modelo geralmente utilizado para facilitar a visualização lógica de um projeto, o qual descreve a interação entre objetos em uma determinada sequência de eventos ou a sequência de ações em um determinado cenário, assinale a alternativa correta:",
        options: [
          "Diagrama de sequência.",
          "Diagrama de codificação.",
          "Diagrama de componentes.",
          "Diagrama de implementação.",
          "Diagrama de pacotes.",
        ],
        correctIndex: 0,
        explanation:
          "O diagrama de sequência descreve a interação entre objetos em uma determinada sequência de eventos ou ações em um cenário, sendo bastante útil para visualizar a lógica do fluxo do processo (Unidade 1, p. 17).",
      },
      {
        id: "q2-03",
        quiz: 2,
        type: "assercao",
        prompt:
          "Os padrões de projeto devem ser utilizados sempre com foco no problema que precisa ser resolvido, e não apenas aplicados de forma mecânica ou decorativa. Sobre esse tema, analise as asserções a seguir e a relação proposta entre elas.",
        assertions: {
          i: "Os padrões de projeto são soluções testadas e validadas para desafios recorrentes no desenvolvimento de software, oferecendo estruturas que tornam o código mais organizado, reutilizável e fácil de manter.",
          ii: "Cada padrão foi criado para lidar com uma situação específica; por exemplo, padrões de criação como Singleton e Factory Method auxiliam no gerenciamento de instâncias, enquanto padrões estruturais como Adapter e Composite organizam a composição de classes e objetos.",
        },
        options: [
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
          "As asserções I e II são proposições falsas.",
        ],
        correctIndex: 1,
        explanation:
          "Conforme a Unidade 1 (p. 23-26), tanto a afirmação de que padrões são soluções testadas e validadas quanto a relação entre os tipos de padrões (criação, estrutural, comportamental) e seus propósitos estão corretas. A asserção II complementa a I, justificando-a.",
      },
      {
        id: "q2-04",
        quiz: 2,
        type: "afirmativas",
        prompt:
          "Em relação aos requisitos funcionais e não funcionais da arquitetura de software, analise as afirmativas a seguir.",
        statements: [
          "Os requisitos não funcionais prezam pela qualidade, desempenho e restrições de um sistema.",
          "Os requisitos funcionais são essenciais para que o sistema funcione corretamente e definem o seu comportamento.",
          "As respostas do sistema são resultantes dos requisitos não funcionais e por isso afetam diretamente as ações do usuário.",
          "Os requisitos funcionais interpretam todas as entradas recebidas pelo sistema e definem como as tarefas e processos ocorrem.",
        ],
        options: [
          "I e II, apenas.",
          "I, II e IV, apenas.",
          "I, II e III, apenas.",
          "II e IV, apenas.",
          "III, apenas.",
        ],
        correctIndex: 1,
        explanation:
          "A afirmativa III está incorreta: as respostas do sistema resultam dos requisitos funcionais, não dos não funcionais. As demais estão alinhadas com a Unidade 1 (p. 11-12).",
      },
      {
        id: "q2-05",
        quiz: 2,
        type: "vf",
        prompt:
          "Um Padrão (Pattern) é uma solução recorrente para resolver determinado problema e sua estrutura é formada por quatro elementos essenciais. Sobre esses elementos, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "As principais metas do DevOps são promover a colaboração estreita entre as equipes de desenvolvimento e operações, resultando em um ciclo de desenvolvimento mais rápido e na entrega contínua de software de alta qualidade.",
          "Os princípios-chave do DevOps incluem uma cultura de automação, a aplicação de princípios Lean IT, a medição constante do desempenho e a promoção do compartilhamento de conhecimento entre as equipes.",
          "O compartilhamento dos dados em um projeto é um princípio básico no entanto deve ser praticado somente por membros de uma mesma equipe, para facilitar as tarefas a serem executadas.",
          "Os processos automatizados são executados com auxílio de computadores e ferramentas tecnológicas programadas para executar principalmente tarefas repetitivas, minimizando erros de operação.",
        ],
        options: [
          "V, F, F, V, V",
          "V, V, F, V, F",
          "V, V, F, V",
          "F, V, V, V, F",
          "V, V, V, V",
        ],
        correctIndex: 2,
        explanation:
          "Apenas a terceira afirmativa é falsa: o compartilhamento é um dos princípios do CALMS e ocorre entre diferentes áreas, não se restringindo a uma mesma equipe (Unidade 2, p. 50).",
      },
      {
        id: "q2-06",
        quiz: 2,
        type: "afirmativas",
        prompt:
          "Sobre os tipos de software, analise as afirmativas a seguir e assinale a opção correta:",
        statements: [
          "Os softwares de aplicação são construídos para serem utilizados por desenvolvedores e usuários com conhecimento em programação, por serem de alta complexidade e executados com base em instruções inseridas no código-fonte.",
          "Os softwares de programação são construídos com base em ambientes de desenvolvimento integrados (IDEs), compiladores, editores de código, depuradores e ferramentas avançadas que auxiliam os desenvolvedores.",
          "Os softwares de sistema são considerados obsoletos por serem compatíveis apenas com plataformas de sistema operacional limitadas e não oferecerem o suporte necessário ao usuário.",
          "Os softwares embarcados são aqueles que são comercializados em com dispositivos eletrônicos específicos e permitem sua funcionalidade, apesar da limitação de operar em determinadas plataformas.",
        ],
        options: [
          "I apenas.",
          "II, III e IV apenas.",
          "II e IV apenas.",
          "III e IV, apenas.",
          "I, II e IV, apenas.",
        ],
        correctIndex: 2,
        explanation:
          "A afirmativa I está errada (softwares de aplicação são para usuários finais). A III também está incorreta (softwares de sistema não são obsoletos, pelo contrário, são essenciais). A II e a IV estão corretas, conforme a Unidade 2 (p. 39).",
      },
      {
        id: "q2-07",
        quiz: 2,
        type: "vf",
        prompt:
          "A relação entre modelos e padrões de software é fundamental para o desenvolvimento eficiente e sustentável de sistemas de software. Ambos desempenham papéis cruciais em diferentes etapas do ciclo de vida de desenvolvimento. Considerando as informações apresentadas, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "O modelo espiral é aberto a mudanças constantes e foi criado exatamente para entregar maior eficiência e qualidade em comparação a seus antecessores. Versões completas de software podem ser desenvolvidas com agilidade, mas também é compatível com padrões de software.",
          "O modelo cascata foi o primeiro a surgir e apesar de ter sido um grande aliado na condução de projetos de software, atualmente não é tão utilizado pela sua rigidez e dificuldade de moldagem em relação aos padrões reutilizáveis.",
          "Os padrões de softwares reutilizáveis surgiram para evitar que as equipes precisem criar um software do zero e substituir totalmente todos os modelos de software que eram implementados anteriormente.",
          "Os padrões de software são considerados como uma caixa de ferramentas valiosas para que as equipes que adotam um modelo iterativo de desenvolvimento, por permitir a solução de problemas recorrentes e permitir mudanças contínuas durante o processo iterativo.",
          "Modelos engessados que não permitem alterar fases anteriores do projeto são os mais rígidos e por isso não são os mais adotados, por evitar que o projeto seja estendido por mais tempo, minimizando problemas operacionais.",
        ],
        options: [
          "F, V, F, F, V.",
          "V, V, V, V, V.",
          "F, V, F, V, F.",
          "V, V, F, V, F.",
          "V, F, F, V, V.",
        ],
        correctIndex: 3,
        explanation:
          "A terceira afirmativa é falsa: padrões não substituem modelos. A quinta também é falsa: o modelo espiral, por exemplo, embora cíclico, não é considerado 'engessado' no sentido descrito. As demais estão alinhadas com a Unidade 2 (p. 40-43).",
      },
      {
        id: "q2-08",
        quiz: 2,
        type: "vf",
        prompt:
          "A entrega contínua em projetos de software envolve diferentes sistemas, metodologias e recursos que se encaixam no ciclo de desenvolvimento, facilitando que a equipe possa pensar de maneira integrada e ao mesmo tempo executar tarefas independentes. Com relação à cultura DevOps e as ferramentas de apoio no desenvolvimento de softwares, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "O Git é um sistema de controle de versão distribuído que permite o acompanhamento das mudanças feitas em arquivos ao longo do tempo, sendo amplamente utilizado para o desenvolvimento de software.",
          "Por ser um servidor central, o Git contém todos os arquivos de um projeto que são diretamente acessados e compartilhados na mesma estrutura, por isso o Git também cumpre a função de repositório.",
          "Os colaboradores podem selecionar em que versão do repositório irão atuar, através de uma operação denominada checkout, neste caso todos os arquivos são atualizados quando o recurso é utilizado.",
          "Apesar do Git e do GitHub serem tecnologias que auxiliam na colaboração entre equipes e serem utilizadas em conjunto com DevOps, a cultura define a colaboração entre equipes para entregar software de maneira mais rápida e confiável.",
          "O GitHub é uma plataforma de hospedagem de código fonte que utiliza o sistema de controle de versão Git, permitindo que equipes colaborem no desenvolvimento de software, revisem e discutam código, e acompanhem as alterações ao longo do tempo.",
        ],
        options: [
          "V, F, V, V, F.",
          "F, V, V, F, F.",
          "V, V, F, V, V.",
          "F, V, F, V, F.",
          "V, F, V, V, V.",
        ],
        correctIndex: 4,
        explanation:
          "Apenas a segunda afirmativa é falsa: o Git é distribuído, não centralizado. As demais estão alinhadas com a Unidade 2 (p. 51-52).",
      },
      {
        id: "q2-09",
        quiz: 2,
        type: "assercao",
        prompt:
          "Em projetos de desenvolvimento de software, a qualidade é um aspecto crucial que permeia todas as fases do ciclo de vida do produto. Nesse contexto, avalie as asserções a seguir e a relação proposta entre elas.",
        assertions: {
          i: "A qualidade em projetos de software é crucial, pois influencia diretamente na satisfação dos usuários e na competitividade no mercado.",
          ii: "Os testes de qualidade são indispensáveis para identificar e corrigir defeitos antes da entrega do software aos clientes, garantindo sua eficácia e confiabilidade.",
        },
        options: [
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "As asserções I e II são proposições falsas.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        ],
        correctIndex: 2,
        explanation:
          "Conforme a Unidade 4 (p. 98-99), a qualidade impacta diretamente na satisfação do usuário e competitividade, e os testes são parte essencial para garanti-la. A asserção II complementa a I como justificativa.",
      },
      {
        id: "q2-10",
        quiz: 2,
        type: "multipla",
        prompt:
          "No desenvolvimento de software, adotar técnicas de teste é essencial para garantir a qualidade e o sucesso do projeto. Organizações como a IEC/ISO têm estabelecido normas que auxiliam na padronização dos testes. Com base no texto, assinale a alternativa que corretamente identifica uma vantagem de utilizar técnicas de teste de software consolidadas:",
        options: [
          "Reduzem a necessidade de manutenções em etapas iniciais do ciclo de desenvolvimento, melhorando o planejamento dos recursos.",
          "Aumentam a complexidade do processo de desenvolvimento, pois as técnicas consolidadas requerem mais tempo de execução.",
          "São aplicáveis apenas para grandes projetos, pois os pequenos projetos não se beneficiam das técnicas de teste de software.",
          "Permitem que todas as falhas sejam detectadas apenas após a fase de implementação do software.",
          "Garantem que o software será livre de falhas após sua implementação.",
        ],
        correctIndex: 0,
        explanation:
          "Conforme a Unidade 4 (p. 106-107), as técnicas de teste bem aplicadas ajudam a identificar falhas nas etapas iniciais, o que reduz manutenções e otimiza recursos ao longo do ciclo de desenvolvimento.",
      },

      // ============================================================
      // QUESTIONÁRIO 3 — Estilos, padrões, DevOps, qualidade
      // ============================================================
      {
        id: "q3-01",
        quiz: 3,
        type: "multipla",
        prompt:
          "Segundo Richards (2020), apresentado no ebook, alguns estilos de arquitetura comuns incluem arquitetura cliente-servidor, arquitetura de microsserviços, arquitetura orientada a eventos e arquitetura orientada a serviços. A respeito desses estilos, assinale a alternativa correta:",
        options: [
          "A arquitetura cliente-servidor é baseada em componentes distribuídos, em que cada componente expõe uma funcionalidade bem definida e se comunica com outros por meio de APIs.",
          "A arquitetura de microsserviços é caracterizada por ser dividida em pequenas partes, cada uma responsável por uma funcionalidade específica, comunicando-se geralmente por APIs.",
          "A arquitetura orientada a eventos depende exclusivamente de APIs REST para que os componentes se comuniquem, sem uso de filas ou tópicos.",
          "A arquitetura orientada a serviços é sinônimo de microsserviços, não havendo diferença prática entre elas na literatura.",
          "A arquitetura cliente-servidor exige que toda a lógica de negócio rode exclusivamente no cliente, sem nenhum processamento no servidor.",
        ],
        correctIndex: 1,
        explanation:
          "Conforme a Unidade 1 (p. 8-9), a arquitetura de microsserviços é dividida em pequenas partes, cada uma com uma funcionalidade específica, comunicando-se geralmente via APIs. As demais alternativas contêm distorções ou informações incorretas sobre cada estilo.",
      },
      {
        id: "q3-02",
        quiz: 3,
        type: "vf",
        prompt:
          "O padrão Model-View-Controller (MVC) é um padrão de arquitetura de software amplamente utilizado para o desenvolvimento de aplicações que garantem flexibilidade aplicada ao software em relação à interface de usuário. A respeito do MVC, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "A camada Model trata dos dados e da lógica de negócio da aplicação, sendo responsável por manipular, validar e persistir os dados, além de notificar os demais fragmentos da aplicação sobre alterações.",
          "A camada View é responsável por processar os eventos e comandos executados pelo usuário e direcionar as ações apropriadas no modelo.",
          "A camada Controller atualiza a sua exibição com base nas alterações do modelo, exibindo os dados ao usuário de forma compreensível.",
          "Em um fluxo típico do MVC, quando o usuário aciona um menu, o View notifica o Controller sobre a ação; o Controller processa o comando, atualiza o Model e, por fim, o View é atualizado com base nas alterações.",
        ],
        options: [
          "V, V, F, V",
          "F, V, V, F",
          "V, F, F, V",
          "V, V, V, V",
          "F, F, F, V",
        ],
        correctIndex: 2,
        explanation:
          "As afirmativas II e III estão invertidas: é a View que apresenta os dados do modelo ao usuário e atualiza a sua exibição; o Controller é quem recebe os eventos do usuário e direciona ações no Model (Unidade 1, p. 26-27).",
      },
      {
        id: "q3-03",
        quiz: 3,
        type: "assercao",
        prompt:
          "Sobre o padrão de projeto Publish-Subscribe, considere as asserções a seguir e a relação proposta entre elas.",
        assertions: {
          i: "O Publish-Subscribe é um padrão que estabelece a comunicação entre os componentes de software, no qual os publicadores emitem mensagens por meio de um canal de comunicação, como tópicos ou filas.",
          ii: "No padrão, os componentes inscritos no canal recebem apenas as mensagens relevantes para o seu papel, e os publicadores não sabem quais componentes específicos receberão as notificações, o que permite desacoplamento.",
        },
        options: [
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "As asserções I e II são proposições falsas.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        ],
        correctIndex: 2,
        explanation:
          "Conforme a Unidade 1 (p. 27), o Publish-Subscribe é um padrão de comunicação no qual publicadores emitem mensagens em canais (tópicos ou filas) e os componentes inscritos recebem notificações relevantes sem que o publicador conheça os destinatários específicos — promovendo o desacoplamento entre os componentes.",
      },
      {
        id: "q3-04",
        quiz: 3,
        type: "afirmativas",
        prompt:
          "Ainda na Unidade 1, sobre os diferentes tipos de Proxy, analise as afirmativas a seguir:",
        statements: [
          "O Proxy de Cache armazena em cache, minimizando custos com operações de processamento, armazenamento e acesso aos recursos.",
          "O Proxy de Proteção realiza o controle de acesso ao objeto, definindo restrições e impondo métodos de validação que devem ser executados para permitir o acesso do cliente.",
          "O Proxy de Registro estabelece uma comunicação entre os componentes, registrando as ações realizadas e facilitando o monitoramento do sistema.",
          "O Proxy Virtual exige que o objeto remoto seja acessado diretamente pela rede, sem qualquer representação local, garantindo segurança em ambientes distribuídos.",
        ],
        options: [
          "I e II, apenas.",
          "I, II e III, apenas.",
          "I, II e IV, apenas.",
          "II e III, apenas.",
          "I, II, III e IV.",
        ],
        correctIndex: 1,
        explanation:
          "A afirmativa IV está incorreta: o Proxy Virtual cria uma representação na memória do objeto, evitando que ele precise ser acessado diretamente — ao contrário do que a alternativa afirma (Unidade 1, p. 27-28).",
      },
      {
        id: "q3-05",
        quiz: 3,
        type: "afirmativas",
        prompt:
          "Em relação ao modelo cascata de desenvolvimento de software, analise as afirmativas a seguir:",
        statements: [
          "O modelo cascata é um dos primeiros modelos a serem criados, tendo como objetivo auxiliar e gerenciar projetos, e foi criado na década de 1970 por Winston Walker Royce.",
          "O modelo cascata agrega facilidade à gestão de componentes, apesar de não ser um modelo atualizado.",
          "O fluxo do modelo cascata é incrementado, permitindo que se retorne às fases anteriores para realizar alterações ou reexecutar passos sem grandes problemas.",
          "A principal desvantagem do modelo cascata é a falta de feedback e troca de informações com os clientes durante as fases de desenvolvimento, o que pode causar insatisfação em relação à entrega final.",
        ],
        options: [
          "I e II, apenas.",
          "II e III, apenas.",
          "I, II e III, apenas.",
          "I, II e IV, apenas.",
          "I, II, III e IV.",
        ],
        correctIndex: 3,
        explanation:
          "A afirmativa III está incorreta: no modelo cascata, o fluxo é somente incrementado e não retorna para fases anteriores — característica marcante da sua rigidez (Unidade 2, p. 40-41).",
      },
      {
        id: "q3-06",
        quiz: 3,
        type: "vf",
        prompt:
          "A cultura DevOps tem como objetivo tornar os projetos de software e suas arquiteturas mais eficientes, a partir dos preceitos do Desenvolvimento Ágil. Com relação aos princípios da cultura DevOps, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "Cultura: DevOps não é um processo ou uma ferramenta, é uma mudança de pensamento que enfatiza a colaboração entre equipes em uma organização.",
          "Lean IT (Pensamento Enxuto): ajuda a mapear os processos de forma compreensiva, eliminando desperdícios e melhorando o fluxo de trabalho.",
          "Medição (Measurement): as medições servem para que os erros sejam identificados rapidamente durante o estágio de pós-implantação, mas não substituem o julgamento humano em decisões de negócio.",
          "Compartilhamento (Sharing): é um aspecto da cultura DevOps que gera o compartilhamento no trabalho entre diferentes equipes, mas cada equipe deve manter os seus conhecimentos isolados para evitar conflitos.",
        ],
        options: [
          "V, V, F, V",
          "V, F, V, F",
          "F, V, V, V",
          "V, V, V, F",
          "V, V, V, V",
        ],
        correctIndex: 3,
        explanation:
          "A última afirmativa é falsa: o compartilhamento é justamente o oposto do isolamento de conhecimento — é um dos maiores desafios e benefícios do DevOps, pois incentiva que as equipes aprendam umas com as outras e reduzam a dependência de membros individuais (Unidade 2, p. 50).",
      },
      {
        id: "q3-07",
        quiz: 3,
        type: "assercao",
        prompt:
          "Sobre as práticas de Continuous Integration (CI), Continuous Delivery (CD) e Continuous Deployment (CD), considere as asserções a seguir e a relação proposta entre elas.",
        assertions: {
          i: "A Integração Contínua (CI) incorpora o trabalho para que toda a equipe receba um feedback constante sobre o desenvolvimento, e a cada alteração é gerado um código compilado que pode ou não passar por uma fase de testes.",
          ii: "Já o Continuous Deployment (CD) é considerado ainda mais amplo do que o Continuous Delivery, pois com essa prática todas as mudanças que passam por todas as etapas do processo produtivo são liberadas para o cliente sem intervenção humana.",
        },
        options: [
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "As asserções I e II são proposições falsas.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        ],
        correctIndex: 2,
        explanation:
          "Conforme a Unidade 2 (p. 53-54), a Integração Contínua (CI) é o gatilho que inicia o processo automatizado de build e testes, e o Continuous Deployment é a fase mais ampla, que libera todas as mudanças aprovadas diretamente ao cliente final — sem intervenção humana. A asserção II complementa e justifica a relação entre as práticas.",
      },
      {
        id: "q3-08",
        quiz: 3,
        type: "vf",
        prompt:
          "A arquitetura de microsserviços tem ganhado destaque no desenvolvimento de software, oferecendo benefícios como desenvolvimento ágil, facilidade de manutenção, resiliência e uso de tecnologias diversas. A respeito do estilo de microsserviços, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "O padrão Singleton permite que uma classe tenha apenas uma instância e forneça um ponto global de acesso a essa instância.",
          "Em sistemas de e-commerce, como os de seleção de produtos até o pagamento, cada parte do sistema pode ser escalada e atualizada como se fosse um processo independente, mas que faz parte de uma mesma instância compartilhada.",
          "Um microserviço é responsável por uma funcionalidade específica do aplicativo e comunica-se com outros microserviços geralmente por meio de APIs.",
          "A principal desvantagem dos microsserviços é a baixa tolerância a falhas: se um microsserviço falhar, todo o sistema fica indisponível.",
        ],
        options: [
          "V, V, F, V",
          "F, V, V, F",
          "V, F, V, F",
          "V, F, F, V",
          "F, F, V, V",
        ],
        correctIndex: 2,
        explanation:
          "Duas afirmativas são falsas: a II (no e-commerce cada parte é uma instância independente, não a mesma) e a IV (os microsserviços são justamente caracterizados pela resiliência — a falha de um não derruba o sistema) (Unidade 2, p. 60-61).",
      },
      {
        id: "q3-09",
        quiz: 3,
        type: "afirmativas",
        prompt:
          "No contexto da qualidade em projetos de software, Bartié (2002) apresenta os fatores que alimentam a desorganização do software. A esse respeito, analise as afirmativas a seguir:",
        statements: [
          "A informalidade nas decisões é um dos fatores que alimentam a desorganização do software.",
          "A falta de planejamento é um fator relevante, pois um levantamento inadequado pode comprometer todo o projeto.",
          "A qualidade do produto, quando elevada, é considerada um fator de desorganização, pois aumenta a complexidade do sistema.",
          "Ferramentas inadequadas e a pouca comunicação entre os membros da equipe também são apontadas como fatores que contribuem para a desorganização.",
        ],
        options: [
          "I e II, apenas.",
          "I, II e III, apenas.",
          "II e IV, apenas.",
          "I, II e IV, apenas.",
          "I, II, III e IV.",
        ],
        correctIndex: 3,
        explanation:
          "A afirmativa III é falsa: a falta de qualidade do produto é um fator de desorganização (não a qualidade elevada). As demais estão alinhadas com a Figura 04 da Unidade 4 (p. 99).",
      },
      {
        id: "q3-10",
        quiz: 3,
        type: "multipla",
        prompt:
          "Sobre os tipos de software conforme classificação de Richards e Ford (2020), apresentada no ebook, assinale a alternativa correta:",
        options: [
          "Software de aplicação: é o tipo mais popular, caracterizado pela execução de tarefas específicas como editores de texto e softwares de segurança voltados para web, desktop e mobile.",
          "Software de programação: é voltado para usuários finais que utilizam ferramentas como editores de imagem, planilhas e navegadores.",
          "Software de sistema: representa qualquer recurso necessário para o funcionamento de um hardware, mas é simples de ser desenvolvido por qualquer equipe.",
          "Software embarcado: refere-se exclusivamente a softwares de uso geral que rodam em servidores locais, sem integração com outros produtos.",
          "Software de aplicação e software de programação são sinônimos, diferindo apenas na linguagem utilizada.",
        ],
        correctIndex: 0,
        explanation:
          "Conforme a Unidade 2 (p. 39), o software de aplicação é o tipo mais popular, voltado para execução de tarefas específicas (editores de texto, segurança, web, desktop, mobile). As demais alternativas contêm informações incorretas sobre cada categoria.",
      },

      // ============================================================
      // QUESTIONÁRIO 4 — UML, SOAP/REST, Kanban, smoke, monitoramento
      // ============================================================
      {
        id: "q4-01",
        quiz: 4,
        type: "multipla",
        prompt:
          "Em uma arquitetura de software, os diagramas são utilizados para visualizar e entender melhor o projeto. De acordo com Santos (2007), apresentado no ebook, existem diferentes tipos de diagramas, cada um com um foco específico. O diagrama que revela a estrutura interna do sistema de software e os componentes que o compõem, incluindo bibliotecas, módulos, classes, pacotes, e que mostra as dependências entre os componentes, é chamado de:",
        options: [
          "Diagrama de componentes.",
          "Diagrama de implantação.",
          "Diagrama de pacotes.",
          "Diagrama de sequência.",
          "Diagrama de comunicação.",
        ],
        correctIndex: 0,
        explanation:
          "O diagrama de componentes revela a estrutura interna do sistema de software e os componentes que o compõem, incluindo bibliotecas, módulos, classes, pacotes, e mostra as dependências entre eles (Unidade 1, p. 16).",
      },
      {
        id: "q4-02",
        quiz: 4,
        type: "vf",
        prompt:
          "Os serviços em uma arquitetura de software são componentes autônomos e independentes, que se comunicam por meio de APIs. Os principais protocolos utilizados pelos serviços são HTTP, SOAP e REST. A respeito desses protocolos, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "O HTTP é um protocolo base para a troca de dados na Web, funcionando no modelo cliente-servidor, e a sua versão mais segura é o HTTPS.",
          "O SOAP é baseado em XML e tem como principal característica a troca de mensagens entre serviços por meio do HTTP, sendo voltado à integração de sistemas.",
          "O REST descreve um estilo arquitetônico aplicado em projetos de software para fornecer padrões entre sistemas web e mobile, facilitando a comunicação entre eles.",
          "O REST é um protocolo assim como o SOAP, e ambos substituem completamente o HTTP em integrações de microsserviços.",
        ],
        options: [
          "V, V, F, V",
          "V, F, V, F",
          "V, V, V, F",
          "F, V, V, V",
          "V, V, V, V",
        ],
        correctIndex: 2,
        explanation:
          "Apenas a última afirmativa é falsa: o REST é um estilo arquitetônico, não um protocolo, e não substitui o HTTP — pelo contrário, normalmente opera sobre ele (Unidade 1, p. 10-11).",
      },
      {
        id: "q4-03",
        quiz: 4,
        type: "afirmativas",
        prompt:
          "Considerando a figura 02 que ilustra a arquitetura em três camadas (apresentação, aplicação/dados e infraestrutura), analise as afirmativas a seguir:",
        statements: [
          "A camada de apresentação é a mais próxima do usuário e se estende não só às arquiteturas de software, mas também às arquiteturas de redes de computadores.",
          "A camada de aplicação é responsável pela lógica de negócio do sistema e pode ser implementada, por exemplo, em Python, Java ou C#.",
          "A camada de dados (back-end) é responsável pela apresentação visual dos dados ao usuário por meio de interface gráfica.",
          "A camada de infraestrutura é responsável por definir a funcionalidade dos componentes do ponto de vista físico (hardware) e inclui servidores, balanceadores de carga e serviços em nuvem.",
        ],
        options: [
          "I e II, apenas.",
          "I, II e III, apenas.",
          "II e IV, apenas.",
          "I, II e IV, apenas.",
          "I, II, III e IV.",
        ],
        correctIndex: 3,
        explanation:
          "A afirmativa III está incorreta: a apresentação visual dos dados é responsabilidade da camada de apresentação, não da camada de dados (Unidade 1, p. 19-21).",
      },
      {
        id: "q4-04",
        quiz: 4,
        type: "assercao",
        prompt:
          "Conforme a Unidade 2 do ebook, sobre o modelo iterativo e incremental, considere as asserções a seguir e a relação proposta entre elas.",
        assertions: {
          i: "O modelo iterativo e incremental entrega o sistema em incrementos de funcionalidade, em que cada incremento passa por especificação, projeto de software, implementação, teste de unidade, integração, teste de sistema, operação e feedback.",
          ii: "Esse modelo combina características do modelo cascata, no qual o sistema é entregue em partes funcionais que vão sendo aprimoradas em ciclos sucessivos, o que permite feedback e ajustes constantes ao longo do tempo.",
        },
        options: [
          "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
          "As asserções I e II são proposições falsas.",
          "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
          "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
          "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        ],
        correctIndex: 2,
        explanation:
          "Conforme a Unidade 2 (p. 42, Figura 04), o modelo iterativo e incremental divide o sistema em incrementos, cada um passando por um ciclo completo de especificação, desenvolvimento, teste e feedback — o que justifica e complementa a asserção I.",
      },
      {
        id: "q4-05",
        quiz: 4,
        type: "vf",
        prompt:
          "Sobre a metodologia ágil Kanban, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "Diferente do Scrum, no Kanban as entregas são contínuas e não se baseiam em um sistema de sprints.",
          "As métricas principais do Kanban são Lead Time, Cycle Time e WIP (Work in Progress).",
          "O Kanban exige que a equipe trabalhe exclusivamente com papéis formais como Product Owner e Scrum Master.",
          "O Kanban é uma estrutura de gestão de projetos que depende de tarefas visuais para gerenciar fluxos de trabalho, enquanto o Scrum é uma estrutura que ajuda as equipes a estruturar e gerenciar o trabalho por meio de um conjunto de valores, princípios e práticas.",
        ],
        options: [
          "V, V, F, V",
          "V, F, V, F",
          "F, V, V, V",
          "V, V, V, V",
          "V, F, F, V",
        ],
        correctIndex: 0,
        explanation:
          "Apenas a terceira afirmativa é falsa: o Kanban não exige papéis formais como Product Owner ou Scrum Master — esses são papéis do Scrum (Unidade 2, p. 46).",
      },
      {
        id: "q4-06",
        quiz: 4,
        type: "afirmativas",
        prompt:
          "A fase de planejamento de testes envolve os componentes, módulos, arquitetura, objetivos de implementação, requisitos de qualidade, cronograma de tarefas a ser seguido, prazos estabelecidos para entrega das tarefas e recursos necessários. A respeito da criação de casos de testes, analise as afirmativas a seguir:",
        statements: [
          "Ao criar testes detalhados, cada uma das ações deve estar relacionada com as entradas e saídas esperadas.",
          "Os casos de testes devem cobrir todos os requisitos funcionais e não funcionais do software.",
          "O caso de testes deve estar adaptado para determinar os dados de entrada necessários como valores, textos, menus do sistema e como a interação será realizada, como cliques em botões.",
          "Os casos de teste são criados apenas após a finalização completa do software, e não durante o desenvolvimento.",
        ],
        options: [
          "I e II, apenas.",
          "I, II e III, apenas.",
          "I, II e IV, apenas.",
          "II e III, apenas.",
          "I, II, III e IV.",
        ],
        correctIndex: 1,
        explanation:
          "A afirmativa IV é incorreta: os casos de teste são criados durante o processo de desenvolvimento, e não apenas após a finalização do software (Unidade 3, p. 69).",
      },
      {
        id: "q4-07",
        quiz: 4,
        type: "multipla",
        prompt:
          "A automação de testes é uma realidade cada vez mais presente no desenvolvimento de software, mas deve ser aplicada com cuidado. Com relação aos tipos de testes aplicados à automação, considere: I. Smoke Tests: executados por meio de um conjunto de testes aplicados para validar as funcionalidades implementadas através de uma versão compilada do software, realizados antes mesmo do início dos demais testes. II. Testes de regressão: aplicados com o propósito de validar funcionalidades específicas e os impactos de mudanças geradas. III. Funcionalidades críticas: aplicados no processo de validação de funcionalidades de nível não-crítico em uma aplicação. É correto o que se afirmar em:",
        options: [
          "I e II, apenas.",
          "I, II e III.",
          "II e III, apenas.",
          "I apenas.",
          "III, apenas.",
        ],
        correctIndex: 0,
        explanation:
          "Apenas as afirmativas I e II estão corretas. A III está incorreta: as funcionalidades críticas são validadas para funcionalidades de nível CRÍTICO em uma aplicação, e não de nível não-crítico (Unidade 4, p. 94).",
      },
      {
        id: "q4-08",
        quiz: 4,
        type: "vf",
        prompt:
          "Sobre as ferramentas de monitoramento de desempenho de software mencionadas na Unidade 4, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "O AppDynamics é uma plataforma de monitoramento de desempenho de aplicativos (APM) que ajuda as organizações a monitorar, diagnosticar e otimizar o desempenho de seus aplicativos.",
          "O New Relic é uma ferramenta de monitoramento que oferece recursos para monitorar aplicativos e infraestrutura em tempo real, com coleta de métricas, análise de desempenho e solução de problemas.",
          "O Prometheus é uma ferramenta proprietária (de código fechado) usada para monitoramento e alerta, sendo especialmente popular em ambientes Kubernetes.",
          "Ferramentas de monitoramento são essenciais para garantir que um software seja ágil, eficiente e confiável, mas não são úteis para identificar tendências em ambientes de produção.",
        ],
        options: [
          "V, V, V, V",
          "F, V, F, V",
          "V, F, V, F",
          "V, V, F, F",
          "V, F, F, V",
        ],
        correctIndex: 3,
        explanation:
          "Duas afirmativas são falsas: a III (Prometheus é de código aberto, não proprietário) e a IV (monitoramento é justamente essencial para identificar tendências em produção) (Unidade 4, p. 103).",
      },
      {
        id: "q4-09",
        quiz: 4,
        type: "vf",
        prompt:
          "Os requisitos são fundamentais para garantir que as necessidades possam ser atendidas em um projeto que se trabalha com padrões de software, garantindo arquiteturas consistentes. A respeito dos requisitos funcionais e não funcionais, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
        statements: [
          "Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve realizar e quais comportamentos devem ser percebidos principalmente pelos usuários.",
          "Os requisitos não funcionais definem atributos de qualidade ou restrições que devem ser inseridos no sistema e, apesar de não serem essenciais para o funcionamento, afetam a experiência do usuário.",
          "O desempenho é um requisito não funcional que define quantas transações o sistema deve ser capaz de realizar dentro de um determinado período de tempo.",
          "A segurança é um requisito não funcional relacionado ao acesso autorizado e a criptografia é um exemplo de mecanismo para garantir a proteção contra acessos não autorizados.",
        ],
        options: [
          "V, V, V, V",
          "V, F, V, F",
          "F, V, V, V",
          "V, V, F, V",
          "F, F, V, V",
        ],
        correctIndex: 0,
        explanation:
          "Todas as afirmativas estão corretas e alinhadas com a Unidade 1 (p. 11-13).",
      },
      {
        id: "q4-10",
        quiz: 4,
        type: "multipla",
        prompt:
          "Sobre as etapas e ferramentas de Integração Contínua (CI) e Entrega Contínua (CD), conforme apresentado na Unidade 2, assinale a alternativa correta:",
        options: [
          "No Estágio 1 da CI, os desenvolvedores já enviam o código para a ramificação principal; no Estágio 2 ocorre o disparo automático de build e testes.",
          "No Estágio 1 (Controle de Versão) os desenvolvedores trabalham em suas próprias ramificações de código; no Estágio 2 (Disparo Automático) o sistema de CI é acionado automaticamente quando o código é enviado para a ramificação principal.",
          "Na Integração Contínua, o disparo automático só ocorre manualmente após reunião de equipe.",
          "A Integração Contínua é a etapa final do processo, responsável por colocar o software em produção automaticamente.",
          "O Estágio 5 (Implantação em Ambiente de Staging) acontece apenas na Entrega Contínua, e nunca na Integração Contínua.",
        ],
        correctIndex: 1,
        explanation:
          "Conforme a Unidade 2 (p. 54), o Estágio 1 é o Controle de Versão (desenvolvedores em suas ramificações) e o Estágio 2 é o Disparo Automático (sistema de CI acionado quando o código vai para a ramificação principal).",
      },
    ],
  },
      // ============================================================
      // COMPUTAÇÃO EM NUVEM — Questões baseadas no ebook
      // "USF_EAD_Computação_em_Nuvem_Completo" (Lindolfo Alves dos Santos Júnior, 2024)
      // ============================================================
      {
        slug: "computacao-em-nuvem",
        name: "Computação em Nuvem",
        category: "Computação",
        icon: "☁",
        accent: "from-sky-500/20 to-cyan-500/10",
        summary:
          "Computação em Nuvem é o modelo de prestação de serviços de computação (servidores, armazenamento, redes e software) sob demanda pela internet, no qual usuários acessam recursos remotos em vez de manter infraestrutura local. A Unidade 1 apresenta os conceitos fundamentais e os três principais modelos de serviço: IaaS (Infraestrutura como Serviço, que oferece máquinas virtuais, armazenamento e redes sob demanda), PaaS (Plataforma como Serviço, que fornece ambientes de desenvolvimento completos) e SaaS (Software como Serviço, com aplicativos prontos acessados pelo navegador), além de modelos complementares como FaaS (Function as a Service/serverless), DaaS (Desktop as a Service), BaaS (Backend as a Service), CaaS (Container as a Service) e DRaaS (Disaster Recovery as a Service). Os motivadores para adoção incluem flexibilidade e escalabilidade, redução de custos (modelo pay-as-you-go), agilidade no provisionamento, segurança, conformidade, colaboração, mobilidade e suporte à transformação digital. A Unidade 2 trata de arquitetura, migração e frameworks: o modelo de migração do Gartner (os 7 Rs), a comparação entre nuvens pública, privada e híbrida, o Cloud Adoption Framework (CAF) da Microsoft, o Well-Architected Framework (WAF) da AWS, além de frameworks de código aberto como OpenStack e Kubernetes para orquestração de contêineres e infraestrutura como código (Terraform, CloudFormation, Ansible). A Unidade 3 aborda a segurança na nuvem, com foco no DevSecOps, no gerenciamento de identidades e acessos (IAM), na autenticação multifator (MFA), no princípio do menor privilégio, na criptografia em trânsito e em repouso, na gestão de patches, no monitoramento contínuo e na resposta a incidentes; apresenta também ferramentas como AWS Security Hub, Azure Security Center, Google Cloud Security Command Center, HashiCorp Vault, SIEM, SAST, DAST, SIEM, Splunk, ELK Stack e Prometheus. A Unidade 4 foca na implementação de uma solução segura e resiliente na AWS, detalhando serviços como Amazon EC2, S3, RDS, DynamoDB, VPC, ELB, Auto Scaling, CloudFront, Route 53, CloudWatch, CloudTrail, AWS Config, IAM, KMS, AWS Shield, AWS WAF, AWS Backup, AWS CloudFormation e o AWS Well-Architected Tool, sempre enfatizando alta disponibilidade multi-AZ, redundância geográfica, infraestrutura como código, observabilidade e o uso conjunto dos pilares de Excelência Operacional, Segurança, Confiabilidade, Eficiência de Desempenho e Otimização de Custos.",
        topics: [
          "Questionário 1 — Conceitos, Modelos de Serviço, Migração, Segurança e AWS",
          "Questionário 2 — Aprofundamento em Arquitetura e Frameworks",
          "Questionário 3 — Segurança Avançada e DevSecOps",
          "Questionário 4 — Implementação e Resiliência na AWS",
        ],
        questions: [
          // ============================================================
          // QUESTIONÁRIO 1 — Unidades 1 a 4
          // ============================================================
          {
            id: "cn-q1-01",
            quiz: 1,
            type: "multipla",
            prompt:
              "Conforme apresentado na Unidade 1 do ebook, a computação em nuvem pode ser definida de forma simples como:",
            options: [
              "A substituição completa de todos os computadores de uma empresa por equipamentos mais modernos e potentes.",
              "Um modelo de prestação de serviços de computação em que recursos como servidores, armazenamento, redes e software são disponibilizados sob demanda pela internet.",
              "Um tipo de antivírus baseado em assinaturas, mantido em servidores remotos e atualizado automaticamente.",
              "Um software instalado localmente que simula a presença de vários sistemas operacionais no mesmo hardware.",
            ],
            correctIndex: 1,
            explanation:
              "Conforme a Unidade 1 (p. 7), a computação em nuvem é um modelo de prestação de serviços de computação em que servidores, armazenamento, redes e software são disponibilizados aos usuários sob demanda pela internet, sem a necessidade de manter a infraestrutura localmente.",
          },
          {
            id: "cn-q1-02",
            quiz: 1,
            type: "multipla",
            prompt:
              "Ainda na Unidade 1, sobre os três principais modelos de serviço em nuvem, assinale a alternativa correta:",
            options: [
              "No IaaS, o provedor entrega a aplicação pronta para uso e o usuário apenas consome o software pelo navegador.",
              "No PaaS, o usuário tem acesso ao hardware puro (máquina virtual) e é responsável por instalar sistema operacional e aplicações.",
              "No IaaS o provedor oferece recursos de computação virtualizados (servidores, armazenamento, redes); no PaaS ele fornece uma plataforma completa de desenvolvimento e implantação; e no SaaS entrega o software pronto como serviço.",
              "No SaaS o usuário precisa instalar e manter a aplicação localmente, diferentemente do que ocorre no IaaS e no PaaS.",
            ],
            correctIndex: 2,
            explanation:
              "Conforme a Unidade 1 (p. 9-14, Figura 01), o IaaS fornece recursos básicos de computação (máquinas virtuais, armazenamento, redes), o PaaS oferece uma plataforma completa de desenvolvimento e o SaaS entrega o software pronto, acessado via navegador, sem instalação local.",
          },
          {
            id: "cn-q1-03",
            quiz: 1,
            type: "multipla",
            prompt:
              "Na Unidade 2, o ebook apresenta três tipos principais de nuvem que podem ser combinados conforme a necessidade da organização. A esse respeito, assinale a alternativa correta:",
            options: [
              "A nuvem pública é dedicada exclusivamente a uma única organização, oferece maior controle, mas exige investimento significativo em infraestrutura.",
              "A nuvem privada é fornecida por provedores terceiros via internet e é compartilhada entre várias organizações, ideais para reduzir custos e ganhar flexibilidade.",
              "A nuvem híbrida combina elementos das nuvens pública e privada, permitindo migrar cargas de trabalho entre ambientes e oferecendo flexibilidade, escalabilidade e segurança.",
              "A nuvem pública é o único tipo de nuvem que permite isolamento total dos dados, sendo ideal para qualquer requisito regulatório.",
            ],
            correctIndex: 2,
            explanation:
              "Conforme a Unidade 2 (p. 24-26), a nuvem híbrida combina arquiteturas de nuvem pública e privada, aproveitando o melhor dos dois mundos: a escalabilidade da pública e o controle/segurança da privada, com a possibilidade de migrar cargas de trabalho entre ambientes conforme a demanda.",
          },
          {
            id: "cn-q1-04",
            quiz: 1,
            type: "vf",
            prompt:
              "A Unidade 2 do ebook apresenta importantes frameworks que auxiliam organizações na jornada de adoção da nuvem. A respeito do Cloud Adoption Framework (CAF), do Well-Architected Framework (WAF) e do NIST, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "O Cloud Adoption Framework (CAF) é uma estrutura desenvolvida pela Microsoft para orientar organizações em sua jornada de adoção da nuvem, possuindo pilares como Segurança, Governança e Plataforma.",
              "O Well-Architected Framework (WAF) foi criado pela Amazon Web Services (AWS) e é composto por cinco pilares: Excelência Operacional, Segurança, Confiabilidade, Eficiência de Desempenho e Otimização de Custos.",
              "O framework NIST define características essenciais da computação em nuvem, como demanda sob demanda, amplo acesso à rede, pool de recursos, elasticidade rápida e serviço mensurável, além de avaliar modelos de serviço (IaaS, PaaS, SaaS).",
              "Os frameworks de migração são úteis apenas para grandes corporações, não trazendo benefícios práticos para pequenas e médias empresas que pretendem adotar a nuvem.",
            ],
            options: [
              "V, V, V, F",
              "V, F, V, F",
              "F, V, F, V",
              "V, V, F, F",
              "F, V, V, V",
            ],
            correctIndex: 0,
            explanation:
              "Apenas a quarta afirmativa é falsa: os frameworks de migração são amplamente recomendados para organizações de todos os portes, pois oferecem diretrizes padronizadas que aceleram a jornada para a nuvem (Unidade 2, p. 26-30 e Unidade 3, p. 47).",
          },
          {
            id: "cn-q1-05",
            quiz: 1,
            type: "vf",
            prompt:
              "Sobre os frameworks de orquestração e infraestrutura como código apresentados na Unidade 2, avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "O Kubernetes é um framework de código aberto, originalmente criado pelo Google e mantido pela Cloud Native Computing Foundation (CNCF), que simplifica a implantação, a escalonabilidade automática e a recuperação de aplicações em contêineres.",
              "O OpenStack é uma plataforma proprietária (de código fechado) que permite construir e gerenciar infraestruturas de nuvens privadas e públicas, oferecendo flexibilidade, mas com custo elevado de licenciamento.",
              "Ferramentas como Terraform, Ansible e AWS CloudFormation permitem definir e provisionar a infraestrutura como código, trazendo consistência, versionamento e automação ao provisionamento de recursos.",
              "A principal desvantagem do Kubernetes é a ausência de portabilidade, o que impede que aplicações containerizadas sejam executadas em diferentes provedores de nuvem.",
            ],
            options: [
              "V, V, F, F",
              "F, V, V, V",
              "V, F, V, F",
              "V, F, V, V",
              "F, F, F, V",
            ],
            correctIndex: 2,
            explanation:
              "Duas afirmativas são falsas: a II (o OpenStack é uma plataforma de código aberto, não proprietária) e a IV (a portabilidade é justamente uma das principais vantagens do Kubernetes, permitindo executar aplicações em qualquer ambiente que suporte contêineres) (Unidade 2, p. 30-33).",
          },
          {
            id: "cn-q1-06",
            quiz: 1,
            type: "assercao",
            prompt:
              "Sobre o DevSecOps e a integração de segurança no ciclo de desenvolvimento, conforme descrito na Unidade 3, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O DevSecOps surge como uma evolução do DevOps, integrando as equipes de desenvolvimento, operações e segurança desde o início do ciclo de vida do software.",
              ii: "Essa abordagem colaborativa incorpora práticas de segurança — como análise estática (SAST), análise dinâmica (DAST), gestão de identidades e automação de testes — em todas as fases do desenvolvimento, em vez de tratá-las como uma reflexão tardia.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "As asserções I e II são proposições falsas.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
            ],
            correctIndex: 0,
            explanation:
              "Conforme a Unidade 3 (p. 40-41, 49-52), o DevSecOps integra segurança, desenvolvimento e operações desde o início do ciclo de vida, automatizando testes (SAST, DAST) e controles ao longo do pipeline. A asserção II complementa a I, justificando como essa integração se materializa na prática.",
          },
          {
            id: "cn-q1-07",
            quiz: 1,
            type: "assercao",
            prompt:
              "A Unidade 4 apresenta o AWS Well-Architected Framework como base para a construção de soluções seguras, resilientes e eficientes na nuvem. A esse respeito, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O AWS Well-Architected Framework é composto por cinco pilares — Excelência Operacional, Segurança, Confiabilidade, Eficiência de Desempenho e Otimização de Custos — que orientam a construção e a melhoria contínua de arquiteturas em nuvem.",
              ii: "Esses pilares não são independentes: práticas como o uso de automação (Excelência Operacional), criptografia e IAM (Segurança), multi-AZ e replicação (Confiabilidade), Auto Scaling (Eficiência de Desempenho) e monitoramento de gastos (Otimização de Custos) se reforçam mutuamente para garantir soluções robustas.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "As asserções I e II são proposições falsas.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
            ],
            correctIndex: 0,
            explanation:
              "Conforme a Unidade 4 (p. 62-63), o AWS Well-Architected Framework é composto pelos cinco pilares citados, e as práticas recomendadas em cada um deles se complementam, formando uma abordagem holística. A asserção II exemplifica como os pilares se inter-relacionam, justificando a I.",
          },
          {
            id: "cn-q1-08",
            quiz: 1,
            type: "afirmativas",
            prompt:
              "Sobre os pilares de segurança abordados no Cloud Adoption Framework (CAF) e no Well-Architected Framework (WAF), analisados nas Unidades 3 e 4, avalie as afirmativas a seguir:",
            statements: [
              "O gerenciamento de identidades e acessos (IAM) é uma prática central, que envolve a definição de políticas granulares de permissão e a aplicação do princípio do menor privilégio.",
              "A criptografia deve ser aplicada tanto aos dados em trânsito (em protocolos como TLS) quanto aos dados em repouso, sendo complementada por uma gestão segura de chaves (por exemplo, com o AWS KMS).",
              "O monitoramento contínuo, aliado a soluções de SIEM e logging centralizado, é fundamental para detectar atividades suspeitas e responder rapidamente a incidentes de segurança.",
              "A conformidade regulatória e a privacidade dos dados não são preocupações do framework de segurança na nuvem, ficando a cargo exclusivamente das áreas jurídica e de negócios.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II e IV, apenas.",
              "II e III, apenas.",
              "I e II, apenas.",
              "I, II, III e IV.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é incorreta: a conformidade regulatória e a privacidade dos dados são pilares explícitos do WAF, sendo responsabilidade compartilhada entre provedor e cliente, com governança contínua (Unidade 3, p. 45-48 e Unidade 4, p. 47-48).",
          },
          {
            id: "cn-q1-09",
            quiz: 1,
            type: "afirmativas",
            prompt:
              "A Unidade 4 destaca diversos serviços da AWS que contribuem para a alta disponibilidade e a resiliência das aplicações. A esse respeito, analise as afirmativas a seguir:",
            statements: [
              "A distribuição de instâncias EC2 em múltiplas Zonas de Disponibilidade (AZs) dentro de uma região é uma estratégia fundamental para garantir alta disponibilidade e resiliência a falhas de datacenter.",
              "O Elastic Load Balancing (ELB) distribui o tráfego de forma equilibrada entre as instâncias, enquanto o Amazon Route 53 realiza o gerenciamento de DNS com suporte a failover automático baseado em localização.",
              "Grupos de Auto Scaling ajustam automaticamente a capacidade de computação conforme a demanda, mantendo o desempenho e otimizando custos ao desligar instâncias ociosas em períodos de baixa.",
              "A alta disponibilidade na nuvem depende exclusivamente de fatores de hardware; configurações de software, redes e políticas de backup não exercem influência relevante.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "II e III, apenas.",
              "I e II, apenas.",
              "III e IV, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é incorreta: a alta disponibilidade depende de uma combinação de fatores — distribuição multi-AZ, redundância de software, redes, políticas de backup, monitoramento e automação — e não apenas de hardware (Unidade 4, p. 68, Quadro 'A alta disponibilidade na nuvem').",
          },
          {
            id: "cn-q1-10",
            quiz: 1,
            type: "afirmativas",
            prompt:
              "Sobre as ferramentas de monitoramento, auditoria e resposta a incidentes na nuvem, apresentadas na Unidade 4, avalie as afirmativas a seguir:",
            statements: [
              "O AWS CloudWatch permite coletar métricas, monitorar logs e definir alarmes para recursos da AWS, com suporte a dashboards personalizados e notificações por e-mail ou SMS.",
              "O AWS CloudTrail registra em log todas as chamadas de API feitas na conta AWS, fornecendo visibilidade sobre quem fez o quê e quando — fundamental para auditoria e investigação de incidentes.",
              "O AWS Config avalia e audita continuamente as configurações dos recursos da AWS, ajudando a garantir conformidade com políticas internas e regulamentações externas.",
              "Ferramentas de monitoramento não têm utilidade para detectar gargalos de desempenho, sendo recomendadas apenas para fins de auditoria de segurança.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "II e III, apenas.",
              "I e II, apenas.",
              "III e IV, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é incorreta: ferramentas de monitoramento como o CloudWatch são amplamente utilizadas para detectar gargalos de desempenho, otimizar recursos e dar suporte à melhoria contínua, indo muito além da auditoria de segurança (Unidade 4, p. 68-69).",
          },
          // ============================================================
          // QUESTIONÁRIO 2 — Aprofundamento conceitual, modelos, DevSecOps e AWS
          // ============================================================
          {
            id: "cn-q2-01",
            quiz: 2,
            type: "afirmativas",
            prompt:
              "Considere as afirmativas a seguir sobre o conceito fundamental de computação em nuvem. Em seguida, assinale a opção correta:",
            statements: [
              "A nuvem computacional é formada por “computadores de outros”, isto é, recursos mantidos por um provedor.",
              "Os elementos de segurança precisam ser considerados em todos os passos e cenários, assim como em uma infraestrutura local.",
              "O usuário sempre possui acesso físico aos servidores que executam suas aplicações.",
            ],
            options: [
              "I e II, apenas.",
              "I, II e III.",
              "I apenas.",
              "II apenas.",
              "I e III, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "As afirmativas I e II estão corretas. A III é falsa: o usuário não tem acesso físico aos equipamentos na nuvem — toda a administração física (energia, refrigeração, hardware) é responsabilidade do provedor.",
          },
          {
            id: "cn-q2-02",
            quiz: 2,
            type: "multipla",
            prompt:
              "Sobre o modelo de cobrança pay-as-you-go e os benefícios financeiros da nuvem, assinale a alternativa correta:",
            options: [
              "No modelo pay-as-you-go, a empresa paga um valor fixo mensal independente do uso, semelhante a uma assinatura de TV a cabo.",
              "A nuvem é sempre mais barata do que manter data centers próprios, independentemente do porte ou do padrão de uso da organização.",
              "No modelo pay-as-you-go, a empresa paga apenas pelos recursos que efetivamente consome, o que ajuda a evitar ociosidade e desperdício de capacidade.",
              "Os custos na nuvem são totalmente imprevisíveis, não existindo ferramentas de controle ou limites de gasto oferecidos pelos provedores.",
            ],
            correctIndex: 2,
            explanation:
              "O modelo pay-as-you-go é justamente a essência da elasticidade financeira da nuvem: paga-se apenas pelo que se consome, sem grandes investimentos iniciais. As demais alternativas contêm distorções comuns: pagamento fixo (não característico de pay-as-you-go), “sempre mais barato” (depende do cenário) e “imprevisível sem controle” (existem ferramentas como AWS Budgets, Cost Explorer e Azure Cost Management).",
          },
          {
            id: "cn-q2-03",
            quiz: 2,
            type: "multipla",
            prompt:
              "Uma das pegadinhas mais comuns em computação em nuvem diz respeito à responsabilidade sobre a segurança. Considerando o modelo de responsabilidade compartilhada, assinale a alternativa correta:",
            options: [
              "Todo e qualquer elemento de segurança é de responsabilidade exclusiva do provedor de nuvem.",
              "A segurança do data center físico é do cliente; a segurança dos dados e das aplicações é do provedor.",
              "O provedor é responsável pela segurança “da nuvem” (infraestrutura física, hosts, rede base) e o cliente é responsável pela segurança “na nuvem” (dados, identidade, aplicações, configuração).",
              "A responsabilidade pela segurança é sempre 50% do provedor e 50% do cliente, independentemente do serviço utilizado.",
            ],
            correctIndex: 2,
            explanation:
              "O modelo de responsabilidade compartilhada divide tarefas: ao provedor cabe a segurança da nuvem (datacenters, hardware, rede subjacente), e ao cliente cabe a segurança na nuvem (dados, contas, permissões, configurações dos serviços que consome). A divisão exata muda conforme o modelo de serviço (IaaS, PaaS, SaaS), mas a regra geral permanece.",
          },
          {
            id: "cn-q2-04",
            quiz: 2,
            type: "vf",
            prompt:
              "Os diferentes modelos de serviço em nuvem oferecem níveis distintos de abstração e controle. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "No modelo IaaS, o provedor oferece acesso ao hardware virtualizado (máquinas virtuais, armazenamento e redes), e o cliente é responsável por instalar o sistema operacional e as aplicações sobre esse hardware.",
              "O FaaS (Function as a Service), também chamado de serverless, executa funções sob demanda sem que o cliente precise provisionar ou gerenciar servidores continuamente.",
              "O DRaaS (Disaster Recovery as a Service) é uma solução de backup simples, que substitui por completo a necessidade de planos de recuperação de desastres internos.",
              "No modelo FaaS, mesmo funções que nunca são executadas continuam gerando cobrança mensal fixa, pois os recursos ficam reservados 24 horas por dia.",
            ],
            options: [
              "V, V, F, F",
              "V, F, V, V",
              "F, V, V, F",
              "V, V, V, V",
              "F, V, F, V",
            ],
            correctIndex: 0,
            explanation:
              "Apenas as duas primeiras afirmativas são verdadeiras. A III é falsa: o DRaaS replica sistemas críticos para a nuvem e permite a recuperação após falhas ou desastres, mas não substitui completamente um plano interno bem estruturado. A IV também é falsa: no FaaS a cobrança é pela execução, e funções ociosas não geram custo enquanto não são invocadas.",
          },
          {
            id: "cn-q2-05",
            quiz: 2,
            type: "vf",
            prompt:
              "A jornada para a nuvem envolve decisões estratégicas sobre o que migrar, como migrar e para qual ambiente. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "O modelo de migração definido pelo Gartner é conhecido informalmente como “7 Rs” e orienta estratégias como Rehost, Replatform, Refactor, Repurchase, Retire, Retain e Relocate.",
              "A abordagem lift-and-shift é sinônimo de refazer completamente a aplicação durante a migração, aproveitando ao máximo os recursos nativos da nuvem.",
              "A nuvem híbrida combina recursos de nuvens pública e privada, permitindo que dados sensíveis permaneçam em ambiente local enquanto cargas elásticas usam a nuvem pública.",
              "AWS, Microsoft Azure e Google Cloud são exemplos de CSPs (Cloud Service Providers), provedores responsáveis por oferecer e operar a infraestrutura de computação em nuvem.",
            ],
            options: [
              "V, F, V, V",
              "F, V, V, V",
              "V, V, F, F",
              "V, F, V, F",
              "F, F, V, V",
            ],
            correctIndex: 0,
            explanation:
              "A II é a única falsa: lift-and-shift (Rehost) significa mover a aplicação para a nuvem com o mínimo de alterações, e não refazê-la — o refactor é justamente o oposto, redesenhar a aplicação para tirar proveito da nuvem. As demais afirmativas estão alinhadas com o conteúdo do ebook sobre migração e provedores.",
          },
          {
            id: "cn-q2-06",
            quiz: 2,
            type: "assercao",
            prompt:
              "Sobre os pilares do AWS Well-Architected Framework, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O pilar de Confiabilidade do AWS Well-Architected Framework tem como foco a capacidade do sistema de se recuperar de falhas e cumprir consistentemente as suas funções, incluindo recuperação automática e o cumprimento de SLAs.",
              ii: "Por esse motivo, a Confiabilidade também é chamada de “Eficiência de Desempenho” no contexto do framework, sendo responsável pelo dimensionamento correto dos recursos computacionais sob demanda.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 1,
            explanation:
              "A asserção I está correta: Confiabilidade é o pilar voltado a recuperação de falhas e cumprimento consistente das funções. Já a asserção II é falsa: a Confiabilidade não é chamada de Eficiência de Desempenho — são pilares distintos. Eficiência de Desempenho é o pilar que trata do uso eficiente dos recursos de TI para atender à demanda do sistema.",
          },
          {
            id: "cn-q2-07",
            quiz: 2,
            type: "assercao",
            prompt:
              "A automação é peça-chave em uma estratégia de DevSecOps na nuvem. Sobre o uso de ferramentas SOAR e a automação de resposta a incidentes, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "Ferramentas de orquestração, automação e resposta de segurança (SOAR) ajudam a coordenar e automatizar a resposta a incidentes, desde a detecção inicial até a remediação, acelerando a recuperação.",
              ii: "Esse tipo de automação é exclusivo da fase de desenvolvimento de software, não se aplicando a ambientes em produção, que ainda dependem exclusivamente de intervenção manual.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 2,
            explanation:
              "A asserção I está correta: ferramentas SOAR automatizam a resposta a incidentes de segurança, atuando desde a detecção até a remediação. Já a asserção II é falsa: a automação de resposta a incidentes aplica-se justamente a ambientes em produção, onde a velocidade de reação é crítica — e não apenas à fase de desenvolvimento.",
          },
          {
            id: "cn-q2-08",
            quiz: 2,
            type: "afirmativas",
            prompt:
              "A governança e a conformidade são aspectos cada vez mais críticos em ambientes de nuvem. Sobre boas práticas de governança em nuvem, analise as afirmativas a seguir:",
            statements: [
              "A governança em nuvem envolve a definição de políticas claras de uso, responsabilidades bem definidas e processos de auditoria para garantir conformidade com regulamentações.",
              "Políticas bem definidas devem ser aplicadas somente após a ocorrência de incidentes, como forma de corrigir falhas já identificadas.",
              "Regulamentações como GDPR e HIPAA exigem que empresas lidem com dados pessoais e de saúde de acordo com regras específicas, impactando diretamente a estratégia de nuvem.",
              "Estabelecer uma governança sólida desde o início é considerado uma boa prática que ajuda a evitar problemas de conformidade e gestão no futuro.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I, III e IV, apenas.",
              "II e IV, apenas.",
              "I e III, apenas.",
            ],
            correctIndex: 2,
            explanation:
              "A afirmativa II é falsa: políticas de governança devem ser definidas de forma proativa, antes da ocorrência de incidentes, e não como reação a eles. As demais estão alinhadas com o conteúdo do ebook: políticas claras, conformidade com GDPR/HIPAA e governança desde o início são práticas recomendadas.",
          },
          {
            id: "cn-q2-09",
            quiz: 2,
            type: "afirmativas",
            prompt:
              "A computação serverless e os serviços gerenciados mudaram a forma como aplicações são construídas e operadas. Sobre esse modelo, analise as afirmativas a seguir:",
            statements: [
              "No modelo serverless, o provedor é responsável por provisionar, escalar e gerenciar a infraestrutura subjacente, permitindo que o desenvolvedor foque apenas no código.",
              "O AWS Lambda é um exemplo de serviço serverless baseado em eventos, no qual o cliente paga apenas pelo tempo de execução das funções.",
              "Funções serverless ficam em execução contínua 24 horas por dia, garantindo tempos de resposta mínimos mesmo sem receber requisições.",
              "A arquitetura serverless pode trazer economia quando há cargas intermitentes, pois não há cobrança por recursos ociosos.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I, II e IV, apenas.",
              "II e IV, apenas.",
              "I e III, apenas.",
            ],
            correctIndex: 2,
            explanation:
              "Apenas a afirmativa III é falsa: funções serverless não ficam em execução contínua — elas são invocadas sob demanda e permanecem inativas (sem cobrança) enquanto não houver chamadas. As demais estão alinhadas com o conteúdo do ebook sobre o modelo serverless e o AWS Lambda.",
          },
          {
            id: "cn-q2-10",
            quiz: 2,
            type: "afirmativas",
            prompt:
              "Os provedores de serviços em nuvem disponibilizam ferramentas de gerenciamento de custos que ajudam a manter o controle financeiro. A esse respeito, avalie as afirmativas a seguir:",
            statements: [
              "Ferramentas como o AWS Cost Explorer permitem visualizar e analisar os gastos ao longo do tempo, facilitando a identificação de padrões de consumo e oportunidades de economia.",
              "O AWS Budgets permite definir orçamentos e receber alertas quando os gastos se aproximam ou ultrapassam os limites configurados.",
              "Como a nuvem é pay-as-you-go, não há qualquer necessidade de monitorar custos: a fatura será sempre baixa, independentemente do uso.",
              "A gestão inadequada dos custos é um dos erros mais comuns na adoção da nuvem e pode transformar a promessa de economia em um pesadelo financeiro.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I, II e IV, apenas.",
              "I e II, apenas.",
              "II e IV, apenas.",
            ],
            correctIndex: 2,
            explanation:
              "A afirmativa III é falsa: o modelo pay-as-you-go exige monitoramento ativo, pois recursos não acompanhados podem se acumular rapidamente e gerar faturas elevadas. As demais estão alinhadas com o conteúdo do ebook, que destacam a importância de ferramentas de gestão de custos e alerta para a gestão inadequada como um dos erros mais frequentes na adoção da nuvem.",
          },
          // ============================================================
          // QUESTIONÁRIO 3 — Segurança avançada, DevSecOps e gestão de identidades
          // ============================================================
          {
            id: "cn-q3-01",
            quiz: 3,
            type: "multipla",
            prompt:
              "Em um plano de recuperação de desastres (Disaster Recovery) na nuvem, dois indicadores são amplamente utilizados para definir objetivos. Sobre o RTO e o RPO, assinale a alternativa correta:",
            options: [
              "O RTO (Recovery Time Objective) define a quantidade máxima de dados que podem ser perdidos após um incidente, medido em bytes.",
              "O RPO (Recovery Point Objective) define o tempo máximo de inatividade aceitável até que o sistema volte a operar normalmente.",
              "O RTO indica o tempo máximo aceitável para restaurar o serviço após um incidente, enquanto o RPO indica a janela máxima de dados que se aceita perder.",
              "Tanto o RTO quanto o RPO medem a mesma coisa — o tempo de indisponibilidade do sistema —, sendo usados de forma intercambiável.",
            ],
            correctIndex: 2,
            explanation:
              "RTO (Recovery Time Objective) é o tempo máximo aceitável de inatividade até a restauração do serviço, e RPO (Recovery Point Objective) é a janela máxima de dados que se aceita perder — definida pelo intervalo do último backup válido. São métricas complementares, não intercambiáveis.",
          },
          {
            id: "cn-q3-02",
            quiz: 3,
            type: "multipla",
            prompt:
              "Sobre os principais tipos de criptografia utilizados para proteger dados na nuvem, assinale a alternativa correta:",
            options: [
              "A criptografia simétrica usa a mesma chave para cifrar e decifrar, sendo mais rápida e indicada para grandes volumes de dados.",
              "A criptografia assimétrica utiliza uma única chave secreta compartilhada entre as partes, oferecendo alto desempenho.",
              "A criptografia simétrica é mais lenta e menos segura que a assimétrica, por isso deve ser evitada em qualquer cenário na nuvem.",
              "Na nuvem, somente a criptografia assimétrica é aceita, pois a simétrica foi substituída pelos algoritmos modernos.",
            ],
            correctIndex: 0,
            explanation:
              "A criptografia simétrica usa a única mesma chave para cifrar e decifrar, sendo mais rápida e indicada para grandes volumes de dados (por exemplo, AES-256). A assimétrica usa par de chaves (pública/privada) e é geralmente mais lenta, sendo usada em troca de chaves e assinaturas digitais — não substitui a simétrica.",
          },
          {
            id: "cn-q3-03",
            quiz: 3,
            type: "vf",
            prompt:
              "A gestão de identidades e acessos é um dos pilares da segurança na nuvem. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "A autenticação multifator (MFA) adiciona uma camada extra de proteção às contas, exigindo pelo menos dois fatores distintos para validar o acesso do usuário.",
              "O princípio do menor privilégio recomenda que cada usuário ou serviço receba apenas as permissões estritamente necessárias para realizar suas atividades.",
              "Os Security Groups da AWS funcionam como firewalls stateful, controlando tráfego de entrada e saída das instâncias EC2 com base em regras de portas e protocolos.",
              "Por padrão, todo bucket do Amazon S3 é criado com acesso público habilitado, ficando a cargo do cliente desativá-lo após a criação.",
            ],
            options: [
              "V, V, V, F",
              "V, F, V, F",
              "F, V, V, V",
              "V, V, F, F",
              "F, F, V, V",
            ],
            correctIndex: 0,
            explanation:
              "Apenas a IV é falsa: o Amazon S3 é criado por padrão com acesso privado (bloqueado), e cabe ao usuário liberar o acesso público de forma explícita quando necessário. As demais estão alinhadas com o conteúdo do ebook sobre MFA, menor privilégio e Security Groups.",
          },
          {
            id: "cn-q3-04",
            quiz: 3,
            type: "vf",
            prompt:
              "As práticas de DevSecOps incorporam uma série de testes e ferramentas para detectar vulnerabilidades ao longo do ciclo de desenvolvimento. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "A análise estática (SAST) examina o código-fonte em busca de vulnerabilidades, sem executar a aplicação, sendo aplicada nas etapas iniciais do desenvolvimento.",
              "A análise dinâmica (DAST) testa a aplicação em tempo de execução, simulando ataques para identificar falhas que só se manifestam com o sistema em funcionamento.",
              "Ferramentas de SIEM centralizam logs de diferentes fontes, correlacionam eventos e apoiam a detecção de incidentes de segurança em tempo real.",
              "O pentest (teste de invasão) tem como objetivo principal corrigir automaticamente todas as vulnerabilidades encontradas, dispensando a análise humana.",
            ],
            options: [
              "V, V, V, F",
              "V, F, V, V",
              "F, V, F, V",
              "V, V, F, F",
              "F, V, V, V",
            ],
            correctIndex: 0,
            explanation:
              "Apenas a IV é falsa: o pentest simula ataques reais para identificar vulnerabilidades, mas a correção depende de análise humana e intervenção técnica — não há correção totalmente automática apenas com o pentest. As demais afirmativas descrevem corretamente SAST, DAST e SIEM.",
          },
          {
            id: "cn-q3-05",
            quiz: 3,
            type: "assercao",
            prompt:
              "Sobre as principais plataformas centralizadas de segurança nos três maiores provedores de nuvem, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O Azure Security Center é uma plataforma abrangente de segurança para cargas de trabalho no Microsoft Azure, oferecendo detecção de ameaças, análise de segurança e recomendações personalizadas para postura e conformidade.",
              ii: "Por esse motivo, o Azure Security Center também é considerado a ferramenta oficial de gestão de custos do Azure, responsável por calcular e cobrar a fatura mensal dos recursos provisionados.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 1,
            explanation:
              "A asserção I está correta: o Azure Security Center (atualmente Microsoft Defender for Cloud) é uma plataforma de segurança. Já a asserção II é falsa: a gestão de custos no Azure é feita por ferramentas como Azure Cost Management e Billing, e não pelo Security Center.",
          },
          {
            id: "cn-q3-06",
            quiz: 3,
            type: "assercao",
            prompt:
              "O gerenciamento seguro de segredos é um dos desafios centrais em ambientes de nuvem. Sobre o HashiCorp Vault, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O HashiCorp Vault é uma ferramenta dedicada ao gerenciamento centralizado de segredos — como senhas, tokens, chaves de API e certificados —, oferecendo controle de acesso, auditoria e rotação automatizada.",
              ii: "Graças a isso, o Vault substitui completamente os bancos de dados relacionais da aplicação, funcionando como um SGBD de alta disponibilidade para armazenamento de dados transacionais.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 2,
            explanation:
              "A asserção I está correta: o HashiCorp Vault é uma solução de gerenciamento de segredos, com controle de acesso, auditoria e rotação. Já a asserção II é falsa: o Vault não substitui bancos de dados relacionais — ele complementa a arquitetura, mas a persistência de dados transacionais continua sendo feita por SGBDs como PostgreSQL, MySQL, Oracle, entre outros.",
          },
          {
            id: "cn-q3-07",
            quiz: 3,
            type: "afirmativas",
            prompt:
              "A resposta a incidentes é uma prática fundamental de segurança na nuvem. Sobre as fases típicas desse processo, avalie as afirmativas a seguir:",
            statements: [
              "A fase de preparação envolve o estabelecimento de políticas, processos, equipes e ferramentas necessárias para que a resposta a incidentes seja eficiente quando acionada.",
              "A fase de detecção e análise consiste em identificar possíveis incidentes, avaliar o seu escopo e priorizar a resposta com base no impacto ao negócio.",
              "A fase de contenção, erradicação e recuperação busca limitar o impacto do incidente, remover a causa raiz e restaurar os sistemas a um estado seguro conhecido.",
              "Após a resolução, a fase de atividades pós-incidente é desnecessária, pois o incidente já foi tratado e a equipe pode simplesmente seguir com a operação normal.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I e II, apenas.",
              "II e III, apenas.",
              "I, III e IV, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é falsa: a fase pós-incidente é essencial para documentar lições aprendidas, identificar melhorias nos processos e prevenir reincidências. As demais estão alinhadas com o conteúdo do ebook sobre o ciclo de resposta a incidentes (preparação, detecção/análise, contenção/erradicação/recuperação e pós-incidente).",
          },
          {
            id: "cn-q3-08",
            quiz: 3,
            type: "afirmativas",
            prompt:
              "A conformidade regulatória é um dos pilares do Well-Architected Framework. Sobre as principais regulamentações que afetam ambientes em nuvem, analise as afirmativas a seguir:",
            statements: [
              "O GDPR é uma regulamentação da União Europeia que estabelece regras para o tratamento de dados pessoais de cidadãos europeus, com aplicação extraterritorial.",
              "A LGPD brasileira segue princípios semelhantes ao GDPR, como finalidade, necessidade, segurança e transparência no tratamento de dados pessoais.",
              "O PCI-DSS é o padrão de segurança de dados para organizações que lidam com informações de cartões de crédito, e o HIPAA regula dados de saúde nos Estados Unidos.",
              "Estar em conformidade com uma única regulamentação é suficiente para garantir aderência a todas as outras, pois os requisitos são intercambiáveis.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I e II, apenas.",
              "II e III, apenas.",
              "I, III e IV, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é falsa: cada regulamentação tem escopo, requisitos e penalidades próprios — não há “intercambialidade” entre GDPR, LGPD, PCI-DSS e HIPAA. As organizações geralmente precisam atender a múltiplas normas em paralelo, dependendo do tipo de dado e da jurisdição.",
          },
          {
            id: "cn-q3-09",
            quiz: 3,
            type: "multipla",
            prompt:
              "A AWS oferece serviços específicos para proteger as aplicações contra diferentes tipos de ataques. Sobre o AWS Shield e o AWS WAF, assinale a alternativa correta:",
            options: [
              "O AWS Shield e o AWS WAF são o mesmo serviço, com nomes diferentes em regiões distintas da AWS.",
              "O AWS Shield protege contra ataques DDoS (negação de serviço distribuído), enquanto o AWS WAF é um firewall de aplicação que filtra tráfego HTTP/HTTPS com base em regras personalizáveis.",
              "O AWS WAF substitui completamente a necessidade de um CDN como o Amazon CloudFront, oferecendo a mesma proteção DDoS.",
              "O AWS Shield só pode ser utilizado por aplicações que rodam exclusivamente em instâncias EC2, não funcionando com outros serviços da AWS.",
            ],
            correctIndex: 1,
            explanation:
              "O AWS Shield (Standard e Advanced) é focado em mitigar ataques DDoS, e o AWS WAF é um firewall de aplicação web que filtra requisições HTTP/HTTPS com base em regras personalizáveis (IPs, cabeçalhos, strings, rate limiting). Os dois são complementares, e o WAF não substitui um CDN.",
          },
          {
            id: "cn-q3-10",
            quiz: 3,
            type: "afirmativas",
            prompt:
              "Autenticação e autorização são conceitos complementares, mas frequentemente confundidos. A respeito desses dois pilares da gestão de identidades, avalie as afirmativas a seguir:",
            statements: [
              "Autenticação é o processo de verificar a identidade declarada por um usuário ou sistema, geralmente por meio de credenciais como senha, token ou biometria.",
              "Autorização é o processo de determinar quais ações um usuário autenticado tem permissão de executar sobre determinados recursos.",
              "Após autenticar um usuário, o sistema automaticamente garante que ele tenha acesso a todos os recursos da conta, sem necessidade de políticas adicionais.",
              "O AWS IAM permite configurar tanto a autenticação (quem pode entrar) quanto a autorização (o que pode fazer) por meio de políticas e roles.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I, II e IV, apenas.",
              "I e II, apenas.",
              "II e IV, apenas.",
            ],
            correctIndex: 2,
            explanation:
              "A afirmativa III é falsa: após a autenticação, o acesso do usuário é controlado pela autorização, que é definida por políticas granulares — e não há liberação automática. As demais estão alinhadas com o conteúdo do ebook e do AWS IAM sobre autenticação, autorização e o uso de políticas para controle de acesso.",
          },
          // ============================================================
          // QUESTIONÁRIO 4 — Implementação AWS, redes, alta disponibilidade e DR
          // ============================================================
          {
            id: "cn-q4-01",
            quiz: 4,
            type: "multipla",
            prompt:
              "A Amazon Virtual Private Cloud (VPC) é o alicerce de rede para a maioria das cargas de trabalho na AWS. Sobre subnets, gateways e roteamento dentro de uma VPC, assinale a alternativa correta:",
            options: [
              "Em uma VPC, subnets públicas e privadas são criadas sempre dentro de uma mesma Zona de Disponibilidade, compartilhando a mesma faixa de IPs.",
              "Subnets públicas conseguem alcançar a internet por meio de um Internet Gateway, enquanto subnets privadas normalmente usam NAT Gateway para acesso de saída à internet sem ficarem diretamente expostas.",
              "NAT Gateway é o componente que permite conexões iniciadas da internet para dentro de subnets privadas, substituindo o Internet Gateway.",
              "Subnets privadas são aquelas que ficam fisicamente isoladas em outro datacenter, fora da região da AWS, sendo a forma mais comum de multi-Region.",
            ],
            correctIndex: 1,
            explanation:
              "Subnets existem dentro de uma única AZ (não cruzam AZs). Subnets públicas têm rota direta para um Internet Gateway; subnets privadas usam NAT Gateway (ou NAT Instance) para saída à internet sem permitir entrada. O NAT Gateway não recebe conexões iniciadas da internet — essa é justamente a diferença para o Internet Gateway.",
          },
          {
            id: "cn-q4-02",
            quiz: 4,
            type: "multipla",
            prompt:
              "O AWS Lambda é um dos serviços serverless mais populares da AWS, mas há detalhes importantes que costumam gerar confusão. Sobre o comportamento do Lambda, assinale a alternativa correta:",
            options: [
              "O AWS Lambda mantém cada função em execução contínua 24 horas por dia, garantindo latência de milissegundos para qualquer invocação.",
              "Funções Lambda que ficam inativas por longos períodos podem sofrer um “cold start” na próxima invocação, gerando latência adicional ao carregar o ambiente de execução.",
              "O AWS Lambda cobra por tempo de execução, número de invocações e, principalmente, pelo espaço em disco ocupado pelo pacote da função, independentemente do uso.",
              "Cold start é um problema exclusivo de funções escritas em linguagens compiladas, como Go e Rust, não afetando funções em Python ou Node.js.",
            ],
            correctIndex: 1,
            explanation:
              "Funções Lambda ficam suspensas quando ociosas. Na próxima invocação após esse período, a AWS provisiona um novo ambiente de execução, gerando o chamado “cold start” — que adiciona latência à primeira requisição. Cold start pode ocorrer em qualquer runtime, embora linguagens como Python e Node.js tipicamente sofram menos que Java, por exemplo.",
          },
          {
            id: "cn-q4-03",
            quiz: 4,
            type: "vf",
            prompt:
              "A AWS oferece diversos serviços de armazenamento e banco de dados com características próprias de durabilidade, replicação e resiliência. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "O Amazon RDS permite habilitar o Multi-AZ, que mantém uma réplica standby em outra Zona de Disponibilidade para failover automático em caso de falha.",
              "O Amazon S3 oferece a funcionalidade de versionamento (object versioning), que mantém múltiplas versões de um mesmo objeto e protege contra exclusões acidentais.",
              "O Amazon CloudFront é um serviço de CDN que distribui conteúdo em cache pelos pontos de presença (edge locations) para reduzir latência aos usuários finais.",
              "Os volumes EBS (Elastic Block Store) são multi-AZ por padrão, podendo ser acessados simultaneamente por instâncias EC2 em Zonas de Disponibilidade diferentes.",
            ],
            options: [
              "V, V, V, F",
              "V, F, V, F",
              "F, V, V, V",
              "V, V, F, F",
              "F, V, F, V",
            ],
            correctIndex: 0,
            explanation:
              "Apenas a IV é falsa: volumes EBS são vinculados a uma única Zona de Disponibilidade, ficando presos à AZ da instância EC2 onde foram anexados. Para compartilhamento entre AZs, usam-se serviços como Amazon EFS (NFS multi-AZ) ou Amazon FSx. As demais afirmativas descrevem corretamente RDS Multi-AZ, S3 Versioning e CloudFront.",
          },
          {
            id: "cn-q4-04",
            quiz: 4,
            type: "vf",
            prompt:
              "A Infraestrutura como Código (IaC) é uma prática essencial para provisionar e gerenciar ambientes em nuvem de forma consistente. Avalie as afirmativas a seguir como verdadeiras (V) ou falsas (F).",
            statements: [
              "O AWS CloudFormation permite provisionar recursos da AWS por meio de templates declarativos em JSON ou YAML, gerenciando a ordem e as dependências entre os recursos automaticamente.",
              "Tags aplicadas a recursos de nuvem servem apenas para fins estéticos na console, sem utilidade real para automação, billing ou governança.",
              "O conceito de drift detection identifica diferenças entre o que foi declarado no código (IaC) e o que está realmente provisionado na nuvem, ajudando a manter a conformidade.",
              "Ao adotar IaC, a empresa pode dispensar totalmente a realização de testes, uma vez que o provisionamento se torna consistente e previsível.",
            ],
            options: [
              "V, V, F, F",
              "F, V, V, V",
              "V, F, V, F",
              "F, F, V, V",
              "V, F, V, V",
            ],
            correctIndex: 2,
            explanation:
              "Apenas a II e a IV são falsas. A II é falsa: tags são amplamente usadas para billing, automação, filtros de busca e governança. A IV é falsa: a IaC garante provisionamento consistente, mas não substitui testes — pelo contrário, incentiva testes de templates e validações antes de aplicar mudanças em produção. As demais estão corretas.",
          },
          {
            id: "cn-q4-05",
            quiz: 4,
            type: "assercao",
            prompt:
              "A regra 3-2-1 é uma das recomendações mais conhecidas para estratégias de backup. Sobre essa regra, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "A regra 3-2-1 recomenda manter pelo menos 3 cópias dos dados, em 2 mídias diferentes, sendo 1 cópia off-site (fora do ambiente principal).",
              ii: "Aplicar essa regra em conjunto com serviços automatizados de backup, como o AWS Backup, ajuda a garantir a recuperação dos dados em cenários de falha, ransomware ou desastre físico.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 0,
            explanation:
              "A asserção I descreve corretamente a regra 3-2-1 (3 cópias, 2 mídias, 1 off-site). A asserção II complementa a I, mostrando como o AWS Backup e serviços semelhantes operacionalizam essa regra de forma automatizada, viabilizando a recuperação em diferentes cenários de falha.",
          },
          {
            id: "cn-q4-06",
            quiz: 4,
            type: "assercao",
            prompt:
              "O Amazon Route 53 vai além de um simples serviço de DNS, oferecendo recursos avançados de saúde e failover. Sobre os health checks do Route 53, considere as asserções a seguir e a relação proposta entre elas.",
            assertions: {
              i: "O Amazon Route 53 permite configurar health checks que monitoram endpoints e recursos da aplicação, falhando automaticamente o tráfego para uma região ou endpoint saudável quando um problema é detectado.",
              ii: "Esse comportamento de failover DNS é totalmente estático, ou seja, não considera a saúde real dos recursos e exige intervenção manual a cada indisponibilidade.",
            },
            options: [
              "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
              "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
              "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
              "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
              "As asserções I e II são proposições falsas.",
            ],
            correctIndex: 1,
            explanation:
              "A asserção I está correta: o Route 53 realiza health checks e failover automático entre endpoints. A asserção II é falsa: justamente o oposto — o failover DNS do Route 53 é dinâmico e baseado na saúde verificada dos endpoints, sem exigir intervenção manual para alternar o tráfego.",
          },
          {
            id: "cn-q4-07",
            quiz: 4,
            type: "afirmativas",
            prompt:
              "O AWS Well-Architected Tool apoia a revisão contínua de cargas de trabalho com base nos pilares do framework. Sobre o uso dessa ferramenta, avalie as afirmativas a seguir:",
            statements: [
              "O AWS Well-Architected Tool permite definir workloads e responder questionários alinhados aos cinco pilares do framework, gerando uma visão consolidada dos riscos.",
              "A ferramenta identifica apenas riscos graves, ignorando melhorias de baixo risco que ainda assim agregam valor à arquitetura.",
              "As respostas podem ser revisadas ao longo do tempo, permitindo acompanhar a evolução da maturidade da arquitetura após aplicar melhorias.",
              "Após identificar um risco, a ferramenta sugere boas práticas e materiais de apoio para ajudar na mitigação do problema encontrado.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I, III e IV, apenas.",
              "II e IV, apenas.",
              "I e III, apenas.",
            ],
            correctIndex: 2,
            explanation:
              "A afirmativa II é falsa: o Well-Architected Tool identifica riscos de qualquer severidade — incluindo melhorias de baixo risco que, somadas, aumentam a maturidade da arquitetura. As demais estão alinhadas com o conteúdo do ebook sobre a ferramenta e seu papel na melhoria contínua.",
          },
          {
            id: "cn-q4-08",
            quiz: 4,
            type: "afirmativas",
            prompt:
              "A AWS oferece serviços de mensageria e barramento de eventos que facilitam a integração assíncrona entre componentes. Sobre SQS, SNS e EventBridge, analise as afirmativas a seguir:",
            statements: [
              "O Amazon SQS é um serviço de filas que armazena mensagens temporariamente, permitindo o desacoplamento entre produtores e consumidores.",
              "O Amazon SNS é um serviço de notificações baseado no modelo pub/sub, no qual os publicadores enviam mensagens para tópicos e os assinantes recebem as mensagens de interesse.",
              "O Amazon EventBridge é um barramento de eventos serverless que recebe eventos de aplicações da AWS, serviços SaaS e aplicações customizadas, roteando-os com base em regras.",
              "Os três serviços funcionam exatamente da mesma forma, sendo intercambiáveis em qualquer cenário de integração assíncrona.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I e II, apenas.",
              "I, II e IV, apenas.",
              "II e III, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é falsa: SQS, SNS e EventBridge têm propósitos diferentes e não são intercambiáveis. SQS é fila (1 produtor → 1 consumidor), SNS é pub/sub (1 → N assinantes) e EventBridge é barramento de eventos com regras avançadas. Cada um resolve um problema específico de integração.",
          },
          {
            id: "cn-q4-09",
            quiz: 4,
            type: "multipla",
            prompt:
              "O modelo de responsabilidade compartilhada é uma das peças-chave para entender quem cuida do quê na nuvem. Considerando o Amazon S3, assinale a alternativa correta:",
            options: [
              "A AWS é responsável por criptografar os dados armazenados nos buckets S3 dos clientes, não sendo possível ao cliente gerenciar suas próprias chaves.",
              "O cliente é responsável apenas por escolher a região do bucket; toda a segurança e a criptografia são tratadas exclusivamente pela AWS.",
              "O cliente é responsável pela configuração de permissões, políticas de bucket, criptografia dos objetos e gestão das chaves, enquanto a AWS cuida da infraestrutura física e dos serviços subjacentes.",
              "O modelo de responsabilidade compartilhada não se aplica ao Amazon S3, sendo este o único serviço em que a AWS assume 100% das responsabilidades de segurança.",
            ],
            correctIndex: 2,
            explanation:
              "No S3, a AWS cuida da segurança da nuvem (datacenter, hardware, rede, software do serviço), enquanto o cliente cuida da segurança na nuvem: configuração de permissões, políticas de bucket, criptografia (SSE-S3, SSE-KMS, SSE-C), versionamento, replicação e gestão de chaves. A responsabilidade nunca é 100% de uma única parte em IaaS/PaaS.",
          },
          {
            id: "cn-q4-10",
            quiz: 4,
            type: "afirmativas",
            prompt:
              "Estratégias de continuidade de negócios envolvem decisões sobre multi-AZ, multi-Region e modelos de recuperação. A esse respeito, avalie as afirmativas a seguir:",
            statements: [
              "Implantar recursos em múltiplas Zonas de Disponibilidade (multi-AZ) dentro de uma única região protege contra falhas de datacenter, mas não contra a indisponibilidade da região inteira.",
              "Uma arquitetura multi-Region (ativa-ativa) distribui tráfego entre regiões geograficamente separadas, oferecendo proteção contra falhas regionais e permitindo atender usuários em diferentes localizações com baixa latência.",
              "A estratégia ativa-passiva em multi-Region mantém uma região primária em produção e uma região secundária em standby, com promoção manual ou automatizada em caso de falha.",
              "Estratégias de DR e multi-Region são úteis apenas para empresas globais, não trazendo benefícios para aplicações com usuários concentrados em um único país.",
            ],
            options: [
              "I, II e III, apenas.",
              "I, II, III e IV.",
              "I e II, apenas.",
              "I, II e IV, apenas.",
              "II e III, apenas.",
            ],
            correctIndex: 0,
            explanation:
              "A afirmativa IV é falsa: estratégias de DR e multi-Region beneficiam qualquer organização que dependa de disponibilidade contínua, mesmo com usuários em um único país — falhas regionais, desastres naturais e problemas de provedores de internet podem afetar uma região inteira sem aviso. As demais estão alinhadas com o conteúdo do ebook sobre alta disponibilidade e resiliência.",
          },
        ],
      },
];

export function getSubject(slug: string) {
  return subjects.find((s) => s.slug === slug);
}
