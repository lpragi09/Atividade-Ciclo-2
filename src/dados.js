export const produtos = [
  {
    id: 1,
    nome: 'Notebook Gamer',
    preco: 5000,
    precoAntigo: 6200,
    emoji: '💻',
    categoria: 'Computadores',
    nota: 4.9,
    avaliacoes: 312,
    etiqueta: 'Mais vendido',
    descricao:
      'Tela de 15,6" a 144Hz, placa dedicada de 8GB e teclado retroiluminado. Roda os jogos atuais no ultra sem esquentar.'
  },
  {
    id: 2,
    nome: 'Mouse sem Fio',
    preco: 150,
    precoAntigo: 199,
    emoji: '🖱️',
    categoria: 'Periféricos',
    nota: 4.7,
    avaliacoes: 1248,
    etiqueta: 'Oferta',
    descricao:
      'Sensor de 16.000 DPI, seis botões programáveis e bateria que aguenta até 70 dias de uso sem recarregar.'
  },
  {
    id: 3,
    nome: 'Teclado Mecânico',
    preco: 420,
    precoAntigo: 520,
    emoji: '⌨️',
    categoria: 'Periféricos',
    nota: 4.8,
    avaliacoes: 864,
    etiqueta: 'Novo',
    descricao:
      'Switches azuis hot-swap, estrutura de alumínio e iluminação RGB por tecla. Vem com keycaps extras na caixa.'
  },
  {
    id: 4,
    nome: 'Monitor Ultrawide',
    preco: 2300,
    precoAntigo: 2790,
    emoji: '🖥️',
    categoria: 'Monitores',
    nota: 4.9,
    avaliacoes: 197,
    etiqueta: '-18%',
    descricao:
      'Curvo de 34" na proporção 21:9, 165Hz e 1ms. Espaço de sobra para o editor de código e o navegador lado a lado.'
  },
  {
    id: 5,
    nome: 'Headset 7.1',
    preco: 680,
    precoAntigo: 799,
    emoji: '🎧',
    categoria: 'Áudio',
    nota: 4.6,
    avaliacoes: 542,
    etiqueta: 'Oferta',
    descricao:
      'Som surround por software, espuma em couro sintético e microfone com cancelamento de ruído destacável.'
  },
  {
    id: 6,
    nome: 'Cadeira Ergonômica',
    preco: 1450,
    precoAntigo: 1690,
    emoji: '🪑',
    categoria: 'Setup',
    nota: 4.8,
    avaliacoes: 389,
    etiqueta: 'Conforto',
    descricao:
      'Encosto em tela respirável, apoio lombar regulável e braços 4D. Feita para quem passa o dia inteiro sentado.'
  },
  {
    id: 7,
    nome: 'Webcam 4K',
    preco: 890,
    precoAntigo: 1050,
    emoji: '📷',
    categoria: 'Periféricos',
    nota: 4.5,
    avaliacoes: 233,
    etiqueta: 'Novo',
    descricao:
      'Gravação em 4K a 30fps, foco automático e correção de luz. Ideal para aula online e gravação de conteúdo.'
  },
  {
    id: 8,
    nome: 'SSD NVMe 2TB',
    preco: 970,
    precoAntigo: 1180,
    emoji: '💾',
    categoria: 'Armazenamento',
    nota: 5,
    avaliacoes: 726,
    etiqueta: 'Turbo',
    descricao:
      'Leitura de 7.000 MB/s no padrão PCIe 4.0. O sistema abre antes de você terminar de sentar na cadeira.'
  }
];

export const clientes = [
  {
    nome: 'Ana Clara',
    email: 'ana.clara@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=47',
    nota: 5,
    comprou: 'Notebook Gamer',
    comentario:
      'Chegou dois dias antes do prazo e muito bem embalado. Uso para faculdade e para jogar, não travou nenhuma vez.'
  },
  {
    nome: 'Bruno Teixeira',
    email: 'bruno.teixeira@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=12',
    nota: 5,
    comprou: 'Teclado Mecânico',
    comentario:
      'O barulho das teclas é viciante. Montei o setup inteiro aqui na loja e não tive problema com nenhum pedido.'
  },
  {
    nome: 'Carla Menezes',
    email: 'carla.menezes@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=32',
    nota: 4,
    comprou: 'Monitor Ultrawide',
    comentario:
      'A tela é gigante e o suporte veio completo. Só achei a caixa difícil de carregar sozinha, o resto foi perfeito.'
  },
  {
    nome: 'Diego Rocha',
    email: 'diego.rocha@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=68',
    nota: 5,
    comprou: 'SSD NVMe 2TB',
    comentario:
      'Instalei em dez minutos seguindo o guia que veio junto. A diferença de velocidade é absurda.'
  },
  {
    nome: 'Elisa Prado',
    email: 'elisa.prado@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=45',
    nota: 5,
    comprou: 'Cadeira Ergonômica',
    comentario:
      'Minha coluna agradeceu. O atendimento respondeu no mesmo dia quando pedi ajuda para regular o encosto.'
  },
  {
    nome: 'Felipe Andrade',
    email: 'felipe.andrade@email.com',
    avatarUrl: 'https://i.pravatar.cc/160?img=15',
    nota: 4,
    comprou: 'Headset 7.1',
    comentario:
      'Som muito bom pelo preço e o microfone é limpo nas chamadas. Compraria de novo sem pensar.'
  }
];

export const beneficios = [
  {
    emoji: '🚚',
    titulo: 'Frete grátis',
    texto: 'Em compras acima de R$ 199 para todo o Brasil, com rastreio em tempo real.'
  },
  {
    emoji: '🛡️',
    titulo: 'Garantia de 12 meses',
    texto: 'Assistência autorizada em mais de 300 cidades e troca em até 30 dias.'
  },
  {
    emoji: '💳',
    titulo: 'Em até 12x',
    texto: 'Parcelamento sem juros no cartão ou 10% de desconto no Pix à vista.'
  },
  {
    emoji: '🔒',
    titulo: 'Compra segura',
    texto: 'Pagamento criptografado e seus dados nunca são compartilhados.'
  }
];

export const categorias = [
  { emoji: '💻', nome: 'Computadores', itens: 42 },
  { emoji: '🖱️', nome: 'Periféricos', itens: 128 },
  { emoji: '🖥️', nome: 'Monitores', itens: 36 },
  { emoji: '🎧', nome: 'Áudio', itens: 54 },
  { emoji: '🪑', nome: 'Setup', itens: 27 },
  { emoji: '💾', nome: 'Armazenamento', itens: 61 }
];

export const perguntas = [
  {
    pergunta: 'Em quanto tempo o pedido chega?',
    resposta:
      'Pedidos aprovados até as 14h saem no mesmo dia. A entrega leva de 2 a 7 dias úteis dependendo da região.'
  },
  {
    pergunta: 'Posso trocar se não gostar?',
    resposta:
      'Sim. Você tem 30 dias corridos para devolver o produto lacrado ou usado, e a coleta é por nossa conta.'
  },
  {
    pergunta: 'A nota fiscal vem junto?',
    resposta:
      'A nota é enviada por e-mail assim que o pedido é faturado e fica disponível na página de downloads.'
  },
  {
    pergunta: 'Vocês montam o setup para mim?',
    resposta:
      'Montamos em Lavras e região sem custo adicional. Nas demais cidades enviamos o guia de montagem completo.'
  }
];

export const listaDeCompras = ['Maçã', 'Banana', 'Pão'];

export const arquivos = [
  {
    nome: 'Relatório de pedidos',
    formato: 'PDF · 2,4 MB',
    texto: 'Resumo de tudo que passou pela sua conta nos últimos doze meses.'
  },
  {
    nome: 'Nota fiscal eletrônica',
    formato: 'XML · 38 KB',
    texto: 'Arquivo oficial do último pedido, pronto para enviar ao contador.'
  },
  {
    nome: 'Manual do setup',
    formato: 'PDF · 6,1 MB',
    texto: 'Guia de montagem com fotos, cabeamento e dicas de organização.'
  }
];
