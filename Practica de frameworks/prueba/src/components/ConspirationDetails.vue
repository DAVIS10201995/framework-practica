export interface Theory {
  id: number;
  title: string;
  shortDescription: string;
  image?: string;
  fullContent: {
    introduction: string;
    evidences: string[];
    connections: string[];
    conclusion: string;
  };
}

export const theories: Theory[] = [
  {
    id: 1,
    title: "El Fraude del Alunizaje",
    shortDescription: "¿Realmente llegamos a la luna en 1969?",
    image: moonLanding,
    fullContent: {
      introduction: "El programa Apollo de la NASA presenta más de 400 inconsistencias documentadas que sugieren filmación en estudio.",
      evidences: [
        "📸 Las sombras en fotos no son paralelas (indicando múltiples fuentes de luz)",
        "🎥 Velocidad de movimiento imposible en gravedad lunar",
        "☢️ Los astronautas habrían muerto al cruzar los cinturones de Van Allen"
      ],
      connections: [
        "Stanley Kubrick admitió en privado haber filmado escenas del 'alunizaje'",
        "El presupuesto de la NASA en 1966 equivaldría a $200B actuales (¿en qué se usó?)"
      ],
      conclusion: "El gobierno necesitaba una victoria propagandística durante la Guerra Fría, creando el engaño más grande del siglo XX."
    }
  },
  {
    id: 2,
    title: "Los Illuminati en el Entretenimiento",
    shortDescription: "Símbolos ocultos en música y cine",
    image: Illuminati,
    fullContent: {
      introduction: "El 78% de los artistas mainstream muestran simbología ocultista en sus videos.",
      evidences: [
        "👁️ El 'Ojo que todo lo ve' aparece en 65% de videos analizados",
        "△ Pirámides y obeliscos en escenarios de conciertos",
        "🤫 Patrones de letras que forman mensajes satánicos al reverso"
      ],
      connections: [
        "Artistas como Kesha y Britney Spears han denunciado control mental",
        "Extraña muerte de 7 DJs famosos a los 27 años (Club 27)"
      ],
      conclusion: "La industria musical es un sistema de programación mental masiva para preparar la Nueva Era."
    }
  }
  // Añade más teorías aquí...
];