export type CategorySlug =
  | "commercials"
  | "music-videos"
  | "documentary"
  | "short-films";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: CategorySlug;
  description: string;
  seoDescription: string;
  deliverables: string[];
  role: string;
  video: string;
  directorNote: string;
  gallery: GalleryImage[];
  nextSlug?: string;
  nextLabel: string;
  nextExternalUrl?: string;
};

export type CategoryRecord = {
  slug: CategorySlug;
  title: string;
  tagline: string;
  cover: GalleryImage;
  projectSlugs: string[];
};

const images = {
  crewWarehouse: {
    src: "https://framerusercontent.com/images/LjI3BRBy3eJdHobMxkbXMCyyzo.jpg?width=1600&height=1067",
    alt: "Equipe preparando uma câmera em um galpão",
  },
  crewLights: {
    src: "https://framerusercontent.com/images/iMEXkO9Dnix5QHRGvVIQjg0eUg.jpg?width=1600&height=1067",
    alt: "Equipe e luzes posicionadas ao redor da câmera",
  },
  redLight: {
    src: "https://framerusercontent.com/images/PvmtrHuoPH4BrEPM2H0v5Wpjmyk.jpg?width=1600&height=1066",
    alt: "Operador de câmera filmando sob luz vermelha",
  },
  monitor: {
    src: "https://framerusercontent.com/images/liRlGEQ1dKz38opckzuHDTxuFy0.jpg?width=1600&height=1067",
    alt: "Operador acompanhando uma cena em uma sala escura",
  },
  clapper: {
    src: "https://framerusercontent.com/images/5E5JoRjc9yFHOeuIN4FoSy4mJv8.jpg?width=1600&height=1067",
    alt: "Assistente segurando uma claquete no set",
  },
  emptyStudio: {
    src: "https://framerusercontent.com/images/fhzUj7B9M7JmZq52eiN4eJ8qLa4.jpg?width=1600&height=900",
    alt: "Estúdio vazio com as luzes preparadas",
  },
  filmLight: {
    src: "https://framerusercontent.com/images/W178y3GCIRJbGRl6t8ffSvNFWig.jpg?width=1600&height=1067",
    alt: "Luz de cinema e câmera montadas em uma sala escura",
  },
  soundstage: {
    src: "https://framerusercontent.com/images/Q73vUfPKzGxX4eAYesRfBlLxho.jpg?width=1600&height=1067",
    alt: "Equipe de filmagem trabalhando em um grande estúdio",
  },
} satisfies Record<string, GalleryImage>;

const project = (
  value: Omit<ProjectRecord, "seoDescription"> & { seoDescription?: string },
): ProjectRecord => ({
  ...value,
  seoDescription:
    value.seoDescription ??
    `${value.description.split(".")[0]}. Direção criativa da Better Films.`,
});

export const projects: ProjectRecord[] = [
  project({
    slug: "venum",
    title: "Venum",
    client: "Venum",
    year: "2026",
    category: "commercials",
    description:
      "Um filme para uma fabricante de equipamentos de pedreira, construído em torno de um caminhão carregado subindo para fora da cava. Posicionamos a câmera rente à estrada e deixamos o caminhão preencher o quadro ao passar. Poeira, barulho do motor e uma correção de cor sutil fizeram o resto.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "/assets/snapinsta-1794510997437.mp4",
    directorNote:
      "Queríamos transmitir o peso da carga. Cada plano fica na altura das rodas para que o caminhão pareça tão grande quanto realmente é.",
    gallery: [images.crewWarehouse, images.crewLights, images.redLight, images.monitor],
    nextSlug: "alpenglas-summit",
    nextLabel: "Alpenglas",
  }),
  project({
    slug: "alpenglas-summit",
    title: "ATEEI",
    client: "ATEEI",
    year: "2026",
    category: "commercials",
    description:
      "Um filme para uma marca de água que começa com uma nuvem passando pelo topo de uma montanha ao nascer do sol. A equipe esperou três manhãs até que a nuvem ficasse logo abaixo do cume. O corte final usa um plano longo e fixo, quase sem correção de cor.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "/assets/snapinsta-1794512082703.mp4",
    directorNote:
      "A ideia era paciência. Mantivemos o enquadramento e deixamos o clima se mover no lugar da câmera.",
    gallery: [images.redLight, images.monitor, images.clapper, images.emptyStudio],
    nextSlug: "dune-moto-open-desert",
    nextLabel: "Dune Moto",
  }),
  project({
    slug: "dune-moto-open-desert",
    title: "Open Desert",
    client: "Dune Moto",
    year: "2026",
    category: "commercials",
    description:
      "Um filme de lançamento para uma moto de aventura, gravado do alto enquanto um motociclista solitário cruza o deserto. Um drone acompanhou a moto sobre a areia e a trilha seca durante a hora dourada. O piloto repetiu o percurso uma dúzia de vezes até o rastro de poeira encontrar a luz.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/tQ7nO4dtZi52D1f9idtNl3x9Rw.mp4",
    directorNote:
      "A escala era toda a história. Um pequeno piloto em uma paisagem imensa diz mais sobre autonomia do que qualquer ficha técnica.",
    gallery: [images.soundstage, images.crewWarehouse, images.crewLights, images.redLight],
    nextSlug: "ridgeline-outfitters-halfway-up",
    nextLabel: "Ridgeline Outfitters",
  }),
  project({
    slug: "ridgeline-outfitters-halfway-up",
    title: "Halfway Up",
    client: "Ridgeline Outfitters",
    year: "2025",
    category: "commercials",
    description:
      "Um filme de equipamentos para atividades ao ar livre sobre a pausa no meio de uma subida, quando os caminhantes param para descansar e conversar. Filmamos um grupo real de amigos em uma longa caminhada pela crista e mantivemos a câmera à distância. A maior parte do diálogo não foi roteirizada.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/4vSvS6OhY1L1qYraLSYNu8QEFE.mp4",
    directorNote:
      "A melhor parte de uma caminhada muitas vezes é a pausa. Construímos o filme em torno desse momento, não do cume.",
    gallery: [images.emptyStudio, images.filmLight, images.soundstage, images.crewWarehouse],
    nextSlug: "pace-running-morning-miles",
    nextLabel: "Pace Running",
  }),
  project({
    slug: "pace-running-morning-miles",
    title: "Morning Miles",
    client: "Pace Running",
    year: "2024",
    category: "commercials",
    description:
      "Um filme de tênis de corrida que acompanha um corredor por uma passarela da cidade antes do início da rotina diária. Fechamos a ponte por vinte minutos ao amanhecer e filmamos de um carrinho em movimento ao lado dele. A montagem segue o ritmo de seus passos.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/nK4XN4N0xaHQFJGf1jBbfTWkkI.mp4",
    directorNote:
      "A marca vende rotina. Mantivemos a corrida cotidiana e deixamos a luz torná-la especial.",
    gallery: [images.monitor, images.clapper, images.emptyStudio, images.filmLight],
    nextSlug: "pawly-best-friend",
    nextLabel: "Pawly",
  }),
  project({
    slug: "pawly-best-friend",
    title: "Best Friend",
    client: "Pawly",
    year: "2023",
    category: "commercials",
    description:
      "Um comercial de ração sobre uma garota e seu cachorro passando juntos uma tarde tranquila ao ar livre. Escolhemos uma tutora de verdade e seu cão e demos tempo para que brincassem antes de filmar. As câmeras de mão ficaram fora do caminho.",
    deliverables: ["Direção", "Fotografia"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/KVBOMuSqU1dzLSXEwRzcQTj5IM.mp4",
    directorNote:
      "Cães não seguem direção, então não tentamos. Nós os acompanhamos e encontramos a história na montagem.",
    gallery: [images.filmLight, images.soundstage, images.crewWarehouse, images.crewLights],
    nextSlug: "sahra-lune-caravan",
    nextLabel: "Sahra Lune",
  }),
  project({
    slug: "sahra-lune-caravan",
    title: "Caravan",
    client: "Sahra Lune",
    year: "2026",
    category: "music-videos",
    description:
      "Um videoclipe construído sobre uma caravana de camelos que atravessa lentamente o deserto ao fim do dia. Filmamos planos abertos com lentes longas para que os animais parecessem se mover no ritmo da música. A montagem segue o compasso constante da caminhada.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/oKfRUNSLPF3m5kOPoMKTlmAksBI.mp4",
    directorNote:
      "A faixa parecia uma jornada, então deixamos a caravana conduzi-la. Nada no quadro tem pressa.",
    gallery: [images.crewLights, images.redLight, images.monitor, images.clapper],
    nextSlug: "the-lowlands-festival-night",
    nextLabel: "The Lowlands",
  }),
  project({
    slug: "the-lowlands-festival-night",
    title: "Festival Night",
    client: "The Lowlands",
    year: "2025",
    category: "music-videos",
    description:
      "Um videoclipe ao vivo filmado em meio ao público durante a apresentação principal da banda em um festival ao ar livre. Três operadores trabalharam entre a multidão com câmeras pequenas. Sincronizamos as imagens com a gravação ao vivo e mantivemos uma montagem livre.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/GGMC5KR3IZQyFIvbjXaAArQ4Q.mp4",
    directorNote:
      "Queríamos transmitir a sensação de estar ali. A banda quase não aparece no quadro, e essa é a ideia.",
    gallery: [images.clapper, images.emptyStudio, images.filmLight, images.soundstage],
    nextSlug: "kito-six-strings",
    nextLabel: "Kito",
  }),
  project({
    slug: "kito-six-strings",
    title: "Six Strings",
    client: "Kito",
    year: "2025",
    category: "music-videos",
    description:
      "Um vídeo de performance que permanece próximo às mãos do guitarrista durante a maior parte da música. Iluminamos o palco com duas fontes duras e filmamos com uma única lente macro. Todo o vídeo surgiu de três tomadas.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/l7rFqLoPtyZYQ2pjUzqhJ63vg.mp4",
    directorNote:
      "A performance é a história. Mantivemos a câmera perto das cordas e deixamos a música decidir os cortes.",
    gallery: [images.soundstage, images.crewWarehouse, images.crewLights, images.redLight],
    nextSlug: "juno-ray-afterhours",
    nextLabel: "Juno Ray",
  }),
  project({
    slug: "juno-ray-afterhours",
    title: "Afterhours",
    client: "Juno Ray",
    year: "2024",
    category: "music-videos",
    description:
      "Um vídeo de clube para um single noturno, filmado atrás das pick-ups durante um set real de DJ. Gravamos depois da meia-noite com as luzes do próprio local e um pequeno painel de LED. A montagem acompanha a subida e a queda da faixa.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/9mQhRdH9OVYw3lUbxoAZNxeeYFs.mp4",
    directorNote:
      "Queríamos o calor de uma casa cheia sem mostrar os rostos. A visão da cabine consegue isso.",
    gallery: [images.redLight, images.monitor, images.clapper, images.emptyStudio],
    nextSlug: "static-bloom-open-air",
    nextLabel: "Static Bloom",
  }),
  project({
    slug: "static-bloom-open-air",
    title: "Open Air",
    client: "Static Bloom",
    year: "2024",
    category: "music-videos",
    description:
      "Um vídeo de festival que registra o público dançando sob luzes coloridas depois do anoitecer. Filmamos de uma plataforma no fundo do campo e de dentro da multidão. As imagens receberam tons quentes para acompanhar a iluminação do palco.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/ss0lhPpQEWdOlobExy9CrlbNPIU.mp4",
    directorNote:
      "A música foi escrita para espaços abertos. Queríamos que cada quadro parecesse cheio, alto e ao ar livre.",
    gallery: [images.emptyStudio, images.filmLight, images.soundstage, images.crewWarehouse],
    nextSlug: "ines-moreau-stage-light",
    nextLabel: "Ines Moreau",
  }),
  project({
    slug: "ines-moreau-stage-light",
    title: "Stage Light",
    client: "Ines Moreau",
    year: "2023",
    category: "music-videos",
    description:
      "Um vídeo ao vivo para uma balada, filmado da lateral do palco enquanto ela canta sob um único foco de luz. Usamos uma câmera sobre um slider e não mudamos nada entre as tomadas. O corte final é quase um único plano.",
    deliverables: ["Direção", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/woPs4mpGFKdbbwmp8dAsJ0fAoU.mp4",
    directorNote:
      "A voz dela conduz a música. O trabalho da câmera era permanecer imóvel e não interferir.",
    gallery: [images.crewWarehouse, images.crewLights, images.redLight, images.monitor],
    nextSlug: "harbour-line-cargo",
    nextLabel: "Harbour Line",
  }),
  project({
    slug: "harbour-line-cargo",
    title: "Cargo",
    client: "Harbour Line",
    year: "2026",
    category: "documentary",
    description:
      "Um documentário curto sobre um porto de contêineres e os navios que passam por ele todos os dias. Passamos uma semana com a equipe portuária, filmando de rebocadores e do cais. As entrevistas foram gravadas durante o turno da noite.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/eSUOjDhkLrjGbeZrOLVO0PIVkrM.mp4",
    directorNote:
      "A maioria das pessoas nunca vê onde suas coisas chegam. Queríamos que o porto parecesse tão grande quanto realmente é.",
    gallery: [images.monitor, images.clapper, images.emptyStudio, images.filmLight],
    nextSlug: "field-notes-the-sample",
    nextLabel: "Field Notes",
  }),
  project({
    slug: "field-notes-the-sample",
    title: "The Sample",
    client: "Field Notes",
    year: "2025",
    category: "documentary",
    description:
      "Um retrato documental de uma cientista preparando amostras para um estudo de longa duração sobre a água. Filmamos durante cinco dias em um laboratório em funcionamento, com luz natural e equipe reduzida. A cientista narra com suas próprias palavras.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/nq5V9wqCvfvjzDGfnrukTxTg4.mp4",
    directorNote:
      "A ciência é, em grande parte, repetição cuidadosa. Deixamos o filme avançar no ritmo do trabalho.",
    gallery: [images.filmLight, images.soundstage, images.crewWarehouse, images.crewLights],
    nextSlug: "open-door-foundation-around-the-fire",
    nextLabel: "Open Door Foundation",
  }),
  project({
    slug: "open-door-foundation-around-the-fire",
    title: "Around the Fire",
    client: "Open Door Foundation",
    year: "2025",
    category: "documentary",
    description:
      "Um filme para uma instituição comunitária sobre voluntários compartilhando bebidas quentes ao redor de uma fogueira depois de um longo turno. Acompanhamos o grupo durante uma noite em um único local. A luz do fogo foi a única fonte na maior parte da filmagem.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/szTZiQIw2LMUKTCCyzQbL1JkdIU.mp4",
    directorNote:
      "A proposta era acolhimento. Ficamos junto à fogueira e deixamos a conversa definir o tom.",
    gallery: [images.crewLights, images.redLight, images.monitor, images.clapper],
    nextSlug: "longform-studio-the-grill-master",
    nextLabel: "Longform Studio",
  }),
  project({
    slug: "longform-studio-the-grill-master",
    title: "The Grill Master",
    client: "Longform Studio",
    year: "2024",
    category: "documentary",
    description:
      "Um documentário sobre um chef que cozinha na mesma grelha aberta há vinte anos. Filmamos um serviço completo de jantar a partir da passagem da cozinha. A maioria dos planos é próxima e com câmera na mão para acompanhar o calor.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/nxe87QWsNjwOYgRKfkhXqxs9c.mp4",
    directorNote:
      "Ele fala com as mãos, então filmamos suas mãos. A comida conta o restante da história.",
    gallery: [images.clapper, images.emptyStudio, images.filmLight, images.soundstage],
    nextSlug: "paper-lantern-headwaters",
    nextLabel: "Paper Lantern",
  }),
  project({
    slug: "paper-lantern-headwaters",
    title: "Headwaters",
    client: "Paper Lantern",
    year: "2024",
    category: "documentary",
    description:
      "Um documentário de natureza que percorre um rio de volta à cachoeira na floresta onde ele nasce. Levamos o equipamento a pé durante dois dias e filmamos sob chuva leve. O som foi gravado no local em uma faixa separada.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/bgZFWI4U79OGsdUJj2CbxmUxLwU.mp4",
    directorNote:
      "O filme segue rio acima, então o ritmo desacelera à medida que avançamos. Na cachoeira, não há música alguma.",
    gallery: [images.soundstage, images.crewWarehouse, images.crewLights, images.redLight],
    nextSlug: "quiet-hours-sunflower-season",
    nextLabel: "Quiet Hours",
  }),
  project({
    slug: "quiet-hours-sunflower-season",
    title: "Sunflower Season",
    client: "Quiet Hours",
    year: "2023",
    category: "documentary",
    description:
      "Um documentário curto sobre uma fazenda familiar durante as duas semanas em que seus campos de girassóis florescem. Voltamos ao mesmo campo todas as manhãs e registramos a mudança dia após dia. Os agricultores foram entrevistados entre as fileiras.",
    deliverables: ["Direção", "Fotografia", "Montagem"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/AqWEM0MWvCDui9mSjTbORvtd8.mp4",
    directorNote:
      "A colheita tem prazo. Queríamos a beleza do campo e a pressão por trás dela no mesmo quadro.",
    gallery: [images.redLight, images.monitor, images.clapper, images.emptyStudio],
    nextSlug: "better-films-original-lavender",
    nextLabel: "Better Films Original",
  }),
  project({
    slug: "better-films-original-lavender",
    title: "Lavender",
    client: "Better Films Original",
    year: "2026",
    category: "short-films",
    description:
      "Um curta-metragem sobre um casal caminhando por um campo de lavanda no último dia de uma viagem de verão. Filmamos em uma tarde, com uma equipe de duas pessoas e luz natural. O diálogo foi improvisado a partir de um breve argumento.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/JBmfT8Mv6dLBWn6oVVL7yjYj7w.mp4",
    directorNote:
      "É um filme sobre não querer que algo termine. Prolongamos cada plano um pouco além do esperado de propósito.",
    gallery: [images.emptyStudio, images.filmLight, images.soundstage, images.crewWarehouse],
    nextSlug: "northlight-pictures-last-train",
    nextLabel: "Northlight Pictures",
  }),
  project({
    slug: "northlight-pictures-last-train",
    title: "Last Train",
    client: "Northlight Pictures",
    year: "2025",
    category: "short-films",
    description:
      "Um curta-metragem ambientado em uma rua tranquila da cidade à noite, depois da partida do último trem. Filmamos durante duas noites com a luz real das vitrines e dos postes. Um pequeno dolly elétrico manteve os movimentos suaves.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/eWzahP5L8FfB1nJ0V02HJvZwQ.mp4",
    directorNote:
      "A rua vazia é a personagem principal. Mantivemos as pessoas pequenas no quadro e deixamos a cidade vibrar ao redor delas.",
    gallery: [images.crewWarehouse, images.crewLights, images.redLight, images.monitor],
    nextSlug: "cinder-films-shuffle",
    nextLabel: "Cinder Films",
  }),
  project({
    slug: "cinder-films-shuffle",
    title: "Shuffle",
    client: "Cinder Films",
    year: "2025",
    category: "short-films",
    description:
      "Um curta sobre um jovem atravessando a cidade com fones de ouvido, perdido em sua própria trilha sonora. Nós o seguimos a pé com um gimbal em meio a multidões reais. A trilha foi composta para acompanhar o ritmo de seus passos.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/ERkOiekif7M0rXAcFEjypMo2VM.mp4",
    directorNote:
      "A música que só ele escuta conduz o filme. A montagem muda sempre que sua playlist muda.",
    gallery: [images.monitor, images.clapper, images.emptyStudio, images.filmLight],
    nextSlug: "better-films-original-into-the-pines",
    nextLabel: "Better Films Original",
  }),
  project({
    slug: "better-films-original-into-the-pines",
    title: "Into the Pines",
    client: "Better Films Original",
    year: "2024",
    category: "short-films",
    description:
      "Um curta contemplativo que avança por uma floresta de pinheiros enquanto a luz muda da manhã para o meio-dia. Construímos um pequeno trilho entre as árvores e movemos a câmera no ritmo de uma caminhada. O filme tem apenas seis planos.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/8GJ3Rp6hXSn2JSiMYxrFnRNB6Y.mp4",
    directorNote:
      "Queríamos a sensação de uma respiração suspensa. Cada plano avança um pouco mais para dentro.",
    gallery: [images.filmLight, images.soundstage, images.crewWarehouse, images.crewLights],
    nextSlug: "grey-harbor-switchbacks",
    nextLabel: "Grey Harbor",
  }),
  project({
    slug: "grey-harbor-switchbacks",
    title: "Switchbacks",
    client: "Grey Harbor",
    year: "2024",
    category: "short-films",
    description:
      "Um curta de estrada que acompanha um carro por uma rodovia sinuosa nas montanhas durante uma longa viagem de volta para casa. Filmamos de um veículo de acompanhamento e de um drone ao longo de uma manhã. A história é contada quase inteiramente pela estrada.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/HtcPzRQfFPZV4kUbwUoIh6fRM.mp4",
    directorNote:
      "Cada curva é uma decisão. O filme dá ao motorista tempo para pensar entre uma e outra.",
    gallery: [images.crewLights, images.redLight, images.monitor, images.clapper],
    nextSlug: "halftone-pictures-golden-hour",
    nextLabel: "Halftone Pictures",
  }),
  project({
    slug: "halftone-pictures-golden-hour",
    title: "Golden Hour",
    client: "Halftone Pictures",
    year: "2023",
    category: "short-films",
    description:
      "Um curta silencioso sobre uma mulher meditando ao pôr do sol com seu cachorro sentado ao lado. Filmamos no mesmo local durante três tardes para encontrar a mesma luz. O filme não tem diálogos.",
    deliverables: ["Roteiro", "Direção"],
    role: "Diretor Criativo",
    video: "https://framerusercontent.com/assets/HhKPe6D0yWuoz6UuPNk4LlaWm8.mp4",
    directorNote: "A quietude era o objetivo. Deixamos o sol fazer o movimento.",
    gallery: [images.clapper, images.emptyStudio, images.filmLight, images.soundstage],
    nextLabel: "Maison Ostra",
    nextExternalUrl:
      "https://better-films.framer.website/projects/maison-ostra-little-black-dress",
  }),
];

export const categories: CategoryRecord[] = [
  {
    slug: "commercials",
    title: "Publicidade",
    tagline: "Grandes ideias, trinta segundos de cada vez.",
    cover: {
      src: "https://framerusercontent.com/images/1VptKcHl7dogFnXSqFQbsEzyg.jpg?width=1800&height=1200",
      alt: "Publicidade da Better Films",
    },
    projectSlugs: [
      "venum",
      "alpenglas-summit",
      "dune-moto-open-desert",
      "ridgeline-outfitters-halfway-up",
      "pace-running-morning-miles",
      "pawly-best-friend",
    ],
  },
  {
    slug: "music-videos",
    title: "Videoclipes",
    tagline: "Som que você pode ver.",
    cover: {
      src: "https://framerusercontent.com/images/lGrzFaRu2iA9EOlCyuGZlzlG4.png?width=1124&height=750",
      alt: "Videoclipes da Better Films",
    },
    projectSlugs: [
      "sahra-lune-caravan",
      "the-lowlands-festival-night",
      "kito-six-strings",
      "juno-ray-afterhours",
      "static-bloom-open-air",
      "ines-moreau-stage-light",
    ],
  },
  {
    slug: "documentary",
    title: "Documentários",
    tagline: "Pessoas reais, momentos reais.",
    cover: {
      src: "https://framerusercontent.com/images/pvthCe09uEmApkdLfQV4b0Njss.png?width=1125&height=750",
      alt: "Documentários da Better Films",
    },
    projectSlugs: [
      "harbour-line-cargo",
      "field-notes-the-sample",
      "open-door-foundation-around-the-fire",
      "longform-studio-the-grill-master",
      "paper-lantern-headwaters",
      "quiet-hours-sunflower-season",
    ],
  },
  {
    slug: "short-films",
    title: "Curtas-metragens",
    tagline: "Pequenas histórias, contadas por inteiro.",
    cover: {
      src: "https://framerusercontent.com/images/Agi2rBUEEmvM4D9Qv2EvadA4yKc.png?width=1123&height=750",
      alt: "Curtas-metragens da Better Films",
    },
    projectSlugs: [
      "better-films-original-lavender",
      "northlight-pictures-last-train",
      "cinder-films-shuffle",
      "better-films-original-into-the-pines",
      "grey-harbor-switchbacks",
      "halftone-pictures-golden-hour",
    ],
  },
];

export const categoryMap = new Map(categories.map((item) => [item.slug, item]));
export const projectMap = new Map(projects.map((item) => [item.slug, item]));

export const homeProjectSlugs = categories[0].projectSlugs;

export const aboutImage: GalleryImage = {
  src: "https://framerusercontent.com/images/oF9BK1E7b9inHH9oojbU0ck4Q.png?width=1125&height=750",
  alt: "Cineasta operando uma câmera de cinema em uma praia",
};

export function framerSrcSet(src: string) {
  const [path, query = ""] = src.split("?");
  const suffix = query ? `&${query}` : "";
  return `${path}?scale-down-to=512${suffix} 512w, ${path}?scale-down-to=1024${suffix} 1024w, ${src} 1600w`;
}
