// data/local-cities.ts

export type LocalCity = {
  slug: string;
  name: string;
  postalCodes: string[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    visualLabel: string;
    visualTitle: string;
    visualItems: string[];
  };

  pathologies: {
    title: string;
    intro: string;
    items: {
      title: string;
      description: string;
    }[];
    adviceTitle: string;
    adviceText: string;
  };

  access: {
    title: string;
    intro: string;
    items: {
      title: string;
      description: string;
    }[];
    note: string;
  };

  expertise: {
    title: string;
    intro: string;
    items: {
      title: string;
      description: string;
    }[];
    editorialTitle: string;
    editorialText: string;
    commitments: string[];
    patrimonialNote?: string;
  };

  process: {
    title: string;
    intro: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    reassurance: string;
  };

  urbanisme: {
    title: string;
    intro: string;

    urbanisme: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };

    copropriete: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };

    disclaimer: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];

  nearby: {
    slug: string;
    name: string;
    description: string;
  }[];
};

/**
 * ============================================================
 * ANGERS
 * ============================================================
 */

const angers: LocalCity = {
  slug: "angers",
  name: "Angers",
  postalCodes: ["49000", "49100"],

  seo: {
    title:
      "Couvreur à Angers | Réparation, rénovation et entretien de toiture",
    description:
      "Couvreur à Angers spécialisé dans la réparation, la rénovation et l'entretien de toiture. Intervention sur les toitures en ardoise, le bâti ancien, la zinguerie et les gouttières.",
    keywords: [
      "couvreur Angers",
      "couvreur à Angers",
      "toiture Angers",
      "réparation toiture Angers",
      "rénovation toiture Angers",
      "entretien toiture Angers",
      "ardoise Angers",
      "zinguerie Angers",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Angers · Maine-et-Loire",
    title:
      "Votre toiture à Angers mérite une expertise adaptée à son environnement.",
    description:
      "Maisons de ville anciennes, toitures en ardoise, bâti traditionnel angevin ou habitat plus récent : chaque toiture présente ses propres contraintes. Nous intervenons pour la réparation, la rénovation et l'entretien de votre couverture.",
    highlights: [
      "Intervention à Angers",
      "Devis gratuit",
      "Toitures & ardoises",
    ],
    visualLabel: "Angers · 49",
    visualTitle: "Patrimoine angevin",
    visualItems: [
      "Angers & alentours",
      "Toitures en ardoise",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Angers.",
    intro:
      "L'état d'une toiture dépend de son âge, de ses matériaux, de son exposition et de son environnement. Un diagnostic permet d'identifier l'origine du problème avant d'engager les travaux.",
    items: [
      {
        title: "Mousses et végétation",
        description:
          "L'humidité et l'accumulation de végétation peuvent favoriser le vieillissement prématuré de certains matériaux de couverture.",
      },
      {
        title: "Ardoises vieillissantes",
        description:
          "Une ardoise fragilisée, déplacée ou cassée peut créer un point d'infiltration et nécessiter une intervention ciblée.",
      },
      {
        title: "Infiltrations et humidité",
        description:
          "Une trace d'humidité dans les combles ou au plafond ne permet pas toujours de localiser directement l'origine de la fuite.",
      },
      {
        title: "Zinguerie et raccords",
        description:
          "Les noues, solins, abergements et autres raccords constituent des zones particulièrement importantes pour l'étanchéité.",
      },
      {
        title: "Gouttières et évacuation",
        description:
          "Une gouttière obstruée, déformée ou mal évacuée peut perturber l'écoulement des eaux pluviales.",
      },
    ],
    adviceTitle: "Un doute sur votre toiture ?",
    adviceText:
      "Une intervention rapide permet souvent de mieux comprendre le problème et d'éviter qu'un désordre localisé ne s'aggrave.",
  },

  access: {
    title: "À Angers, l'accès au chantier fait partie de la préparation.",
    intro:
      "Centre-ville, rues étroites, maisons mitoyennes ou accès limités : les conditions d'accès peuvent influencer l'organisation d'un chantier de toiture.",
    items: [
      {
        title: "Échafaudage et sécurisation",
        description:
          "La configuration du bâtiment et de ses abords doit être prise en compte avant l'installation des équipements nécessaires au chantier.",
      },
      {
        title: "Rues étroites et accès limités",
        description:
          "L'accès aux maisons du centre ou de certaines rues peut nécessiter une organisation spécifique pour les équipes et le matériel.",
      },
      {
        title: "Stationnement et livraison",
        description:
          "La livraison des matériaux et le stationnement des véhicules peuvent être anticipés afin de limiter les contraintes pendant l'intervention.",
      },
      {
        title: "Évacuation des matériaux",
        description:
          "Dépose d'ardoises, gravats et anciens éléments de toiture doivent être évacués dans de bonnes conditions.",
      },
      {
        title: "Maisons mitoyennes",
        description:
          "La proximité des bâtiments voisins demande une préparation particulièrement attentive du chantier.",
      },
      {
        title: "Stockage sur chantier",
        description:
          "Lorsque l'espace disponible est limité, l'organisation du stockage des matériaux fait partie de la préparation.",
      },
    ],
    note:
      "Lorsque le chantier occupe temporairement le domaine public, certaines autorisations peuvent être nécessaires selon la situation.",
  },

  expertise: {
    title: "Une expertise toiture pensée pour le bâti angevin.",
    intro:
      "À Angers, l'intervention sur une toiture peut demander une attention particulière aux matériaux existants, à l'âge du bâtiment et à la configuration de la couverture.",
    items: [
      {
        title: "Ardoise naturelle",
        description:
          "Les couvertures en ardoise demandent une approche adaptée au matériau existant et à son état.",
      },
      {
        title: "Bâti ancien",
        description:
          "Sur une maison ancienne, comprendre la construction existante permet d'adapter les travaux plutôt que de traiter uniquement le symptôme.",
      },
      {
        title: "Zinguerie et étanchéité",
        description:
          "Les raccords entre couverture, murs, cheminées et évacuations d'eau nécessitent une attention particulière.",
      },
      {
        title: "Formes de toiture",
        description:
          "Chaque toiture possède sa propre configuration : pentes, raccords, ouvertures, cheminées et éléments singuliers.",
      },
    ],
    editorialTitle:
      "Ne pas traiter uniquement le symptôme. Comprendre la toiture dans son ensemble.",
    editorialText:
      "Une réparation efficace commence par l'identification de l'origine du désordre et par l'observation de l'ensemble de la couverture.",
    commitments: [
      "Préserver ce qui peut l'être",
      "Identifier l'origine des désordres",
      "Adapter les matériaux à l'existant",
      "Anticiper les points sensibles",
    ],
    patrimonialNote:
      "Dans le centre historique d'Angers, le contexte patrimonial peut également entrer en compte dans les choix de matériaux et d'aspect extérieur.",
  },

  process: {
    title: "Comment se déroule une intervention à Angers ?",
    intro:
      "De la première prise de contact à la fin du chantier, chaque étape permet de préparer une intervention cohérente avec votre toiture.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Vous nous présentez votre projet, les symptômes constatés ou les travaux envisagés.",
      },
      {
        number: "02",
        title: "Visite et diagnostic",
        description:
          "La toiture et son environnement sont examinés afin de mieux comprendre les travaux à prévoir.",
      },
      {
        number: "03",
        title: "Proposition adaptée",
        description:
          "Les travaux nécessaires sont définis en fonction de l'état de la toiture et des contraintes du chantier.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé avec une attention particulière portée à la sécurité et à la qualité des finitions.",
      },
    ],
    reassurance: "Un chantier préparé avant d'être commencé.",
  },

  urbanisme: {
    title: "Urbanisme et copropriété à Angers : les règles à anticiper.",
    intro:
      "Selon la nature des travaux, l'adresse et le statut du bâtiment, certaines démarches administratives peuvent être nécessaires avant le chantier.",

    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Déclaration préalable",
          description:
            "Selon la nature du projet, une déclaration préalable ou une autre autorisation d'urbanisme peut être nécessaire.",
        },
        {
          title: "Centre historique d'Angers",
          description:
            "Dans les secteurs soumis à des règles patrimoniales particulières, les prescriptions applicables au bâtiment doivent être vérifiées.",
        },
        {
          title: "Matériaux et aspect extérieur",
          description:
            "Le choix d'un matériau ou la modification de l'aspect extérieur peut être soumis à des règles spécifiques selon le secteur.",
        },
      ],
    },

    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "La toiture peut relever des parties communes : le règlement de copropriété permet de déterminer les responsabilités.",
        },
        {
          title: "Vote en assemblée",
          description:
            "Selon la nature des travaux, une décision de copropriété peut être nécessaire avant leur réalisation.",
        },
        {
          title: "Un projet à préparer",
          description:
            "Pour une copropriété, mieux vaut anticiper les aspects techniques et administratifs avant de lancer les travaux.",
        },
      ],
    },

    disclaimer:
      "Les règles peuvent varier d'un projet à l'autre. Les informations présentées ici sont générales et ne remplacent pas une vérification auprès des services compétents ou des documents applicables au bâtiment.",
  },

  faq: [
    {
      question:
        "Ma maison se trouve dans le centre historique d'Angers : puis-je modifier ma toiture librement ?",
      answer:
        "Pas nécessairement. Certains secteurs d'Angers sont soumis à des règles patrimoniales particulières. Selon les travaux envisagés, les matériaux et l'aspect extérieur de la toiture peuvent être encadrés.",
    },
    {
      question:
        "Puis-je remplacer mes anciennes ardoises par un autre matériau ?",
      answer:
        "Cela dépend notamment du bâtiment, de son emplacement et de la nature du projet. Dans certains secteurs patrimoniaux, les règles applicables peuvent imposer des prescriptions particulières.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture à Angers ?",
      answer:
        "Cela dépend de la nature exacte des travaux et de leur impact sur l'aspect extérieur du bâtiment. Une vérification préalable des règles d'urbanisme applicables à votre adresse permet de déterminer les démarches nécessaires.",
    },
    {
      question:
        "Faut-il une autorisation pour installer un échafaudage devant ma maison à Angers ?",
      answer:
        "Lorsque l'installation occupe temporairement le domaine public, une autorisation peut être nécessaire. Les démarches dépendent notamment de l'emprise du chantier et de ses conséquences sur la circulation ou le stationnement.",
    },
    {
      question:
        "Intervenez-vous sur les maisons anciennes et les toitures en ardoise à Angers ?",
      answer:
        "Oui, les interventions peuvent notamment concerner les couvertures en ardoise, les maisons anciennes, la réparation de toiture, la zinguerie et l'entretien. Chaque intervention est adaptée à l'état réel de la toiture.",
    },
    {
      question:
        "Comment organiser un chantier dans une rue étroite ou avec peu de stationnement ?",
      answer:
        "Les contraintes d'accès sont prises en compte lors de la préparation du chantier : accès des équipes, livraison des matériaux, installation des équipements et évacuation des anciens matériaux.",
    },
  ],

  nearby: [
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Couverture en ardoise et rénovation de toiture.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Intervention sur toitures et couvertures.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description: "Réparation et entretien des toitures.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description: "Intervention sur toitures et couvertures.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d'Anjou",
      description: "Réparation et entretien des toitures.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Réparation et entretien des toitures.",
    },
    {
      slug: "sainte-gemmes-sur-loire",
      name: "Sainte-Gemmes-sur-Loire",
      description: "Réparation et entretien des toitures.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Réparation et entretien des toitures.",
    },
  ],
};

/**
 * ============================================================
 * REGISTRE DES VILLES
 * ============================================================
**/
const avrille: LocalCity = {
  slug: "avrille",
  name: "Avrillé",
  postalCodes: ["49240"],

  seo: {
    title: "Couvreur à Avrillé (49240) | Couverture Vasseur",
    description:
      "Couvreur à Avrillé : réparation, rénovation, entretien de toiture, couverture, ardoise, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Avrillé",
      "couvreur 49240",
      "réparation toiture Avrillé",
      "rénovation toiture Avrillé",
      "toiture Avrillé",
      "ardoise Avrillé",
      "zinguerie Avrillé",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Avrillé · Maine-et-Loire",
    title:
      "Votre toiture à Avrillé mérite une intervention adaptée à son environnement.",
    description:
      "Réparation, rénovation, entretien ou recherche de fuite : nous intervenons sur les toitures des maisons et bâtiments d’Avrillé avec une attention particulière portée à l’état de la couverture, aux raccords et à l’environnement du chantier.",
    highlights: [
      "Intervention à Avrillé",
      "Devis gratuit",
      "Toitures & ardoises",
    ],
    visualLabel: "Avrillé · 49",
    visualTitle: "Une toiture pensée pour durer.",
    visualItems: [
      "Réparation de couverture",
      "Entretien et rénovation",
      "Zinguerie et étanchéité",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Avrillé.",
    intro:
      "Les désordres d’une toiture peuvent apparaître progressivement. Une inspection permet de distinguer un simple besoin d’entretien d’une intervention plus importante.",
    items: [
      {
        title: "Mousses et végétation",
        description:
          "L’accumulation de végétation peut retenir l’humidité et accélérer le vieillissement de certains éléments de couverture.",
      },
      {
        title: "Ardoises vieillissantes",
        description:
          "Une couverture ancienne peut présenter des ardoises fragilisées, déplacées ou cassées nécessitant une vérification précise.",
      },
      {
        title: "Infiltrations et humidité",
        description:
          "Une trace d’humidité à l’intérieur ne signifie pas toujours que l’origine se trouve exactement au-dessus de la zone visible.",
      },
      {
        title: "Zinguerie et raccords",
        description:
          "Les noues, solins, abergements et autres raccords constituent des points sensibles de l’étanchéité.",
      },
      {
        title: "Gouttières et évacuation",
        description:
          "Une évacuation mal entretenue peut provoquer des débordements et favoriser l’apparition d’humidité sur certaines parties du bâtiment.",
      },
    ],
    adviceTitle: "Une toiture se diagnostique avant de se réparer.",
    adviceText:
      "Avant de remplacer ou de traiter un élément, nous cherchons à comprendre l’origine du désordre afin de proposer une intervention cohérente avec l’état général de la toiture.",
  },

  access: {
    title: "À Avrillé, l’organisation du chantier compte autant que l’intervention.",
    intro:
      "La préparation du chantier permet d’anticiper l’accès à la maison, l’installation des protections et la circulation des matériaux autour du bâtiment.",
    items: [
      {
        title: "Échafaudage et sécurisation",
        description:
          "Les équipements nécessaires sont définis en fonction de la hauteur, de la configuration du bâtiment et des travaux prévus.",
      },
      {
        title: "Accès résidentiels",
        description:
          "La configuration des quartiers résidentiels doit être prise en compte avant l’arrivée des matériaux et des équipements.",
      },
      {
        title: "Stationnement et livraison",
        description:
          "L’organisation des livraisons et du stationnement peut être anticipée lorsque l’intervention nécessite plusieurs équipements.",
      },
      {
        title: "Évacuation des matériaux",
        description:
          "Les éléments déposés sont évacués au fur et à mesure selon l’organisation retenue pour le chantier.",
      },
      {
        title: "Maisons mitoyennes",
        description:
          "Les interventions proches des propriétés voisines demandent une préparation attentive des protections et des zones de travail.",
      },
      {
        title: "Protection des abords",
        description:
          "Façades, accès, végétation et espaces extérieurs sont pris en compte lors de la préparation du chantier.",
      },
    ],
    note:
      "Selon l’emplacement et l’organisation du chantier, une occupation temporaire de l’espace public ou une autorisation spécifique peut être nécessaire. Ces démarches sont à vérifier selon la situation exacte.",
  },

  expertise: {
    title: "Une expertise toiture adaptée au bâti d’Avrillé.",
    intro:
      "Chaque toiture présente ses propres caractéristiques. L’objectif est de préserver les éléments encore sains tout en traitant durablement les points qui nécessitent une intervention.",
    items: [
      {
        title: "Ardoise naturelle",
        description:
          "Inspection de la couverture, remplacement des éléments défectueux et recherche d’une cohérence avec l’existant.",
      },
      {
        title: "Bâti résidentiel",
        description:
          "Intervention adaptée aux maisons individuelles et aux différentes configurations de toiture rencontrées sur la commune.",
      },
      {
        title: "Zinguerie et étanchéité",
        description:
          "Vérification des raccords, évacuations d’eau et points singuliers susceptibles de provoquer des infiltrations.",
      },
      {
        title: "Formes de toiture",
        description:
          "La pente, les volumes, les lucarnes et les raccordements sont pris en compte dans le diagnostic.",
      },
    ],
    editorialTitle:
      "Une réparation efficace commence par une bonne lecture de la toiture.",
    editorialText:
      "Notre approche consiste à ne pas traiter uniquement le symptôme visible. Nous cherchons à comprendre comment les différents éléments de la toiture fonctionnent ensemble.",
    commitments: [
      "Préserver ce qui peut l’être",
      "Identifier l’origine des désordres",
      "Adapter les matériaux à l’existant",
      "Anticiper les points sensibles",
    ],
  },

  process: {
    title: "Comment se déroule une intervention à Avrillé ?",
    intro:
      "Chaque chantier commence par une compréhension précise du besoin et de l’état de la toiture.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Vous nous présentez votre besoin, les symptômes observés et les éventuelles contraintes connues.",
      },
      {
        number: "02",
        title: "Visite et diagnostic",
        description:
          "Nous examinons la toiture et les éléments accessibles afin d’identifier les travaux à envisager.",
      },
      {
        number: "03",
        title: "Proposition adaptée",
        description:
          "Une proposition est établie en fonction de l’état réel de la couverture et des travaux nécessaires.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé avec les protections et les moyens adaptés.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title: "Travaux de toiture à Avrillé : anticiper le cadre du projet.",
    intro:
      "Les règles applicables dépendent notamment de la nature des travaux, de leur impact sur l’aspect extérieur et de la localisation du bâtiment.",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Déclaration préalable",
          description:
            "Selon les travaux envisagés, une autorisation d’urbanisme peut être nécessaire avant le démarrage du chantier.",
        },
        {
          title: "Aspect extérieur",
          description:
            "Une modification visible de la couverture ou de certains éléments de toiture peut être soumise à des règles particulières.",
        },
        {
          title: "PLUi",
          description:
            "Le projet doit être apprécié au regard des règles d’urbanisme applicables à la parcelle concernée.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "Dans un immeuble, certains éléments de toiture peuvent relever des parties communes selon le règlement de copropriété.",
        },
        {
          title: "Décision collective",
          description:
            "Lorsque les travaux concernent les parties communes, les modalités de décision doivent être vérifiées avec le syndic.",
        },
        {
          title: "Projet à préparer",
          description:
            "Un dossier clair facilite les échanges entre copropriétaires, syndic et entreprise.",
        },
      ],
    },
    disclaimer:
      "Les démarches dépendent de la nature exacte des travaux et de l’adresse du bâtiment. Une vérification auprès des services compétents reste nécessaire avant tout projet soumis à autorisation.",
  },

  faq: [
    {
      question: "Intervenez-vous sur les maisons individuelles à Avrillé ?",
      answer:
        "Oui, les interventions peuvent concerner les maisons individuelles et différents types de bâtiments. Le besoin est évalué en fonction de l’état de la toiture et de la nature des travaux.",
    },
    {
      question: "Pouvez-vous intervenir sur une toiture en ardoise à Avrillé ?",
      answer:
        "Oui. Une toiture en ardoise peut nécessiter une recherche d’ardoises cassées ou déplacées, une intervention ponctuelle ou une rénovation plus globale selon son état.",
    },
    {
      question: "Une fuite de toiture doit-elle être réparée immédiatement ?",
      answer:
        "Une infiltration mérite d’être examinée rapidement afin d’éviter que l’humidité ne provoque des dégradations supplémentaires.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture à Avrillé ?",
      answer:
        "Cela dépend de la nature précise des travaux et de leur impact sur l’aspect extérieur du bâtiment. Le projet doit être vérifié au regard des règles d’urbanisme applicables.",
    },
    {
      question: "Intervenez-vous pour l’entretien d’une toiture ?",
      answer:
        "Oui. L’entretien peut notamment permettre d’identifier les éléments fragilisés, les accumulations de végétation ou les problèmes d’évacuation d’eau.",
    },
    {
      question: "Comment obtenir un devis pour ma toiture à Avrillé ?",
      answer:
        "Vous pouvez nous présenter votre projet et les problèmes constatés afin d’organiser un échange et, lorsque cela est nécessaire, une visite de la toiture.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Couvreur à Angers pour vos travaux de toiture.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Couvreur à Beaucouzé pour vos travaux de toiture.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description: "Couvreur à Bouchemaine pour vos travaux de toiture.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Couvreur à Écouflant pour vos travaux de toiture.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d’Anjou",
      description:
        "Couvreur à Saint-Barthélemy-d’Anjou pour vos travaux de toiture.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Couvreur à Trélazé pour vos travaux de toiture.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description: "Couvreur aux Ponts-de-Cé pour vos travaux de toiture.",
    },
  ],
};

const beaucouze: LocalCity = {
  slug: "beaucouze",
  name: "Beaucouzé",
  postalCodes: ["49070"],

  seo: {
    title: "Couvreur à Beaucouzé (49070) | Couverture Vasseur",
    description:
      "Couvreur à Beaucouzé : réparation, rénovation, entretien de toiture, ardoise, couverture, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Beaucouzé",
      "couvreur 49070",
      "réparation toiture Beaucouzé",
      "rénovation toiture Beaucouzé",
      "toiture Beaucouzé",
      "ardoise Beaucouzé",
      "zinguerie Beaucouzé",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Beaucouzé · Maine-et-Loire",
    title:
      "Votre toiture à Beaucouzé mérite une intervention précise et durable.",
    description:
      "Nous intervenons à Beaucouzé pour les travaux de réparation, rénovation, entretien et zinguerie, avec une préparation adaptée à la configuration du bâtiment et à son environnement.",
    highlights: [
      "Intervention à Beaucouzé",
      "Devis gratuit",
      "Réparation & rénovation",
    ],
    visualLabel: "Beaucouzé · 49",
    visualTitle: "Une intervention adaptée au bâtiment.",
    visualItems: [
      "Réparation de couverture",
      "Rénovation de toiture",
      "Zinguerie & évacuation",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Beaucouzé.",
    intro:
      "Une toiture peut rester fonctionnelle tout en présentant progressivement des signes de vieillissement. Le diagnostic permet de déterminer les priorités.",
    items: [
      {
        title: "Mousses et végétation",
        description:
          "Les dépôts présents sur la couverture peuvent retenir l’humidité et nécessitent une évaluation avant tout traitement.",
      },
      {
        title: "Éléments de couverture dégradés",
        description:
          "Ardoises cassées, déplacées ou vieillissantes peuvent fragiliser localement la couverture.",
      },
      {
        title: "Infiltrations",
        description:
          "Une infiltration peut provenir de la couverture mais aussi d’un raccord, d’une zinguerie ou d’un point singulier.",
      },
      {
        title: "Raccords et zinguerie",
        description:
          "Les zones autour des cheminées, murs, fenêtres de toit et changements de pente demandent une attention particulière.",
      },
      {
        title: "Gouttières",
        description:
          "Une évacuation d’eau encombrée ou dégradée peut entraîner des débordements et des ruissellements indésirables.",
      },
    ],
    adviceTitle: "Identifier la cause avant de multiplier les réparations.",
    adviceText:
      "Une intervention durable repose d’abord sur une bonne compréhension de l’origine du problème. Cela permet d’éviter de traiter uniquement les manifestations visibles.",
  },

  access: {
    title:
      "À Beaucouzé, la préparation du chantier accompagne chaque intervention.",
    intro:
      "Entre secteurs résidentiels, voies aménagées et zones urbaines en évolution, l’organisation des accès et des protections est anticipée avant les travaux.",
    items: [
      {
        title: "Échafaudage et sécurité",
        description:
          "Le dispositif est adapté à la hauteur et à la configuration du bâtiment.",
      },
      {
        title: "Accès au bâtiment",
        description:
          "Les possibilités d’accès sont étudiées avant l’acheminement des équipements.",
      },
      {
        title: "Livraison des matériaux",
        description:
          "Les besoins en matériaux et leur acheminement sont intégrés à la préparation du chantier.",
      },
      {
        title: "Gestion des déchets",
        description:
          "Les éléments déposés sont organisés et évacués selon les besoins du chantier.",
      },
      {
        title: "Environnement résidentiel",
        description:
          "Les protections et l’organisation sont pensées pour limiter les contraintes autour du bâtiment.",
      },
      {
        title: "Stockage temporaire",
        description:
          "Les zones disponibles sont prises en compte afin de conserver un chantier organisé.",
      },
    ],
    note:
      "Les conditions d’occupation de l’espace public et les éventuelles autorisations doivent être vérifiées selon l’adresse et l’organisation du chantier.",
  },

  expertise: {
    title: "Une expertise toiture pensée pour les bâtiments de Beaucouzé.",
    intro:
      "L’intervention tient compte de l’existant, de la configuration du bâtiment et de la nature précise des désordres constatés.",
    items: [
      {
        title: "Ardoise et couverture",
        description:
          "Contrôle de la couverture et recherche des éléments nécessitant une réparation ou un remplacement.",
      },
      {
        title: "Bâti résidentiel",
        description:
          "Approche adaptée aux maisons individuelles et aux différents volumes de toiture.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des évacuations et des raccords susceptibles de compromettre l’étanchéité.",
      },
      {
        title: "Étanchéité",
        description:
          "Recherche des points sensibles autour des ouvertures, murs, cheminées et raccordements.",
      },
    ],
    editorialTitle:
      "Une toiture mérite une vision d’ensemble.",
    editorialText:
      "Une réparation ponctuelle peut être suffisante dans certains cas. Dans d’autres, elle doit s’inscrire dans une réflexion plus globale sur l’état de la couverture.",
    commitments: [
      "Conserver les éléments encore sains",
      "Rechercher l’origine des infiltrations",
      "Respecter la cohérence de l’existant",
      "Préparer chaque intervention",
    ],
  },

  process: {
    title: "Comment se déroule une intervention à Beaucouzé ?",
    intro:
      "De la première prise de contact à la réalisation, chaque étape permet de préciser le besoin et les conditions d’intervention.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Nous recueillons les informations concernant votre toiture et les problèmes constatés.",
      },
      {
        number: "02",
        title: "Diagnostic",
        description:
          "La toiture et ses principaux éléments sont examinés pour comprendre la situation.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Les travaux à envisager sont présentés de manière claire et adaptée.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé dans les conditions définies ensemble.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title: "Travaux de toiture à Beaucouzé : anticiper les règles applicables.",
    intro:
      "La commune invite les propriétaires à se rapprocher du service urbanisme avant certains projets de construction, aménagement ou rénovation et à consulter les règles du PLUi. :contentReference[oaicite:3]{index=3}",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Démarches avant travaux",
          description:
            "Selon la nature du projet, une autorisation d’urbanisme peut être nécessaire.",
        },
        {
          title: "PLUi",
          description:
            "Les règles applicables à une parcelle doivent être vérifiées avant les travaux concernés.",
        },
        {
          title: "Aspect extérieur",
          description:
            "Une modification de la couverture ou d’un élément visible du bâtiment peut nécessiter une vérification préalable.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Toiture et parties communes",
          description:
            "Le règlement de copropriété permet de déterminer le statut des différents éléments concernés.",
        },
        {
          title: "Syndic",
          description:
            "Lorsque le projet concerne les parties communes, les échanges avec le syndic doivent être anticipés.",
        },
        {
          title: "Dossier de travaux",
          description:
            "Une présentation précise du projet facilite son étude par les différents interlocuteurs.",
        },
      ],
    },
    disclaimer:
      "Les règles d’urbanisme dépendent de la nature exacte des travaux et de leur localisation. Une vérification auprès de la commune ou du service compétent reste recommandée.",
  },

  faq: [
    {
      question: "Intervenez-vous sur les toitures à Beaucouzé ?",
      answer:
        "Oui, nous intervenons pour différents travaux de couverture, réparation, rénovation, entretien et zinguerie.",
    },
    {
      question: "Pouvez-vous réparer seulement quelques ardoises ?",
      answer:
        "Oui, lorsqu’une réparation ponctuelle est techniquement adaptée à l’état général de la couverture.",
    },
    {
      question: "Comment savoir si ma toiture doit être rénovée ?",
      answer:
        "Un examen de la couverture permet de distinguer les réparations ponctuelles d’une rénovation plus importante.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture à Beaucouzé ?",
      answer:
        "Cela dépend de la nature et de l’impact des travaux. Les règles d’urbanisme applicables à la parcelle doivent être vérifiées.",
    },
    {
      question: "Intervenez-vous pour une recherche de fuite ?",
      answer:
        "Oui, l’objectif est d’identifier autant que possible l’origine de l’infiltration avant de déterminer la réparation adaptée.",
    },
    {
      question: "Comment demander un devis ?",
      answer:
        "Vous pouvez nous présenter votre projet et les désordres constatés afin d’organiser la suite de l’intervention.",
    },
  ],

  nearby: [
    { slug: "angers", name: "Angers", description: "Couvreur à Angers" },
    { slug: "avrille", name: "Avrillé", description: "Couvreur à Avrillé" },
    { slug: "bouchemaine", name: "Bouchemaine", description: "Couvreur à Bouchemaine" },
    { slug: "ecouflant", name: "Écouflant", description: "Couvreur à Écouflant" },
    { slug: "saint-barthelemy-d-anjou", name: "Saint-Barthélemy-d’Anjou", description: "Couvreur à Saint-Barthélemy-d’Anjou" },
    { slug: "trelaze", name: "Trélazé", description: "Couvreur à Trélazé" },
    { slug: "les-ponts-de-ce", name: "Les Ponts-de-Cé", description: "Couvreur aux Ponts-de-Cé" },
  ],
};

const lesPontsDeCe: LocalCity = {
  slug: "les-ponts-de-ce",
  name: "Les Ponts-de-Cé",
  postalCodes: ["49130"],

  seo: {
    title: "Couvreur aux Ponts-de-Cé (49130) | Couverture Vasseur",
    description:
      "Couvreur aux Ponts-de-Cé : réparation, rénovation, entretien de toiture, ardoise, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Les Ponts-de-Cé",
      "couvreur 49130",
      "réparation toiture Les Ponts-de-Cé",
      "rénovation toiture Les Ponts-de-Cé",
      "toiture Les Ponts-de-Cé",
      "ardoise Les Ponts-de-Cé",
      "zinguerie Les Ponts-de-Cé",
    ],
  },

  hero: {
    eyebrow: "Couvreur aux Ponts-de-Cé · Maine-et-Loire",
    title:
      "Votre toiture aux Ponts-de-Cé mérite une attention adaptée au bâti et à son environnement.",
    description:
      "Réparation, rénovation, entretien ou recherche de fuite : nous intervenons aux Ponts-de-Cé sur les toitures de maisons et bâtiments avec une approche adaptée à chaque configuration.",
    highlights: [
      "Intervention aux Ponts-de-Cé",
      "Devis gratuit",
      "Couverture & zinguerie",
    ],
    visualLabel: "Les Ponts-de-Cé · 49",
    visualTitle: "Réparer avec méthode, rénover avec cohérence.",
    visualItems: [
      "Réparation de toiture",
      "Entretien de couverture",
      "Recherche de fuite",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures aux Ponts-de-Cé.",
    intro:
      "Une toiture exposée aux intempéries peut progressivement présenter des signes de vieillissement. L’identification du problème permet de prioriser les travaux.",
    items: [
      {
        title: "Mousses et dépôts",
        description:
          "Les dépôts accumulés sur une couverture peuvent retenir l’humidité et masquer certains défauts.",
      },
      {
        title: "Ardoises endommagées",
        description:
          "Les éléments cassés ou déplacés doivent être identifiés afin de préserver l’étanchéité générale.",
      },
      {
        title: "Infiltrations",
        description:
          "Une fuite peut avoir plusieurs origines et nécessite une recherche méthodique.",
      },
      {
        title: "Abergements et raccords",
        description:
          "Les raccords autour des cheminées, murs et ouvertures sont des zones importantes à contrôler.",
      },
      {
        title: "Évacuation des eaux",
        description:
          "Gouttières et descentes doivent permettre une évacuation correcte des eaux de pluie.",
      },
    ],
    adviceTitle: "Une fuite visible n’est pas toujours la vraie origine du problème.",
    adviceText:
      "L’eau peut circuler avant d’apparaître à l’intérieur. C’est pourquoi la recherche de l’origine doit précéder la réparation lorsque la situation le nécessite.",
  },

  access: {
    title:
      "Aux Ponts-de-Cé, chaque chantier commence par une préparation des accès.",
    intro:
      "La configuration de la parcelle, les accès à la maison et l’environnement immédiat sont pris en compte avant l’installation du chantier.",
    items: [
      {
        title: "Sécurisation",
        description:
          "Les protections nécessaires sont définies selon la hauteur et la configuration de la toiture.",
      },
      {
        title: "Accès à la propriété",
        description:
          "Les possibilités d’accès pour les équipements et matériaux sont vérifiées avant l’intervention.",
      },
      {
        title: "Stationnement",
        description:
          "Les besoins liés au chantier sont anticipés lorsque l’espace disponible est limité.",
      },
      {
        title: "Évacuation",
        description:
          "Les matériaux déposés sont organisés et évacués dans le cadre prévu pour le chantier.",
      },
      {
        title: "Proximité des voisins",
        description:
          "Les protections sont adaptées lorsque les bâtiments sont proches ou mitoyens.",
      },
      {
        title: "Protection des abords",
        description:
          "Les espaces extérieurs et zones de passage sont pris en compte dans l’organisation.",
      },
    ],
    note:
      "Lorsqu’un chantier nécessite une occupation temporaire de l’espace public, les démarches à effectuer doivent être vérifiées selon la localisation et les équipements nécessaires.",
  },

  expertise: {
    title: "Une expertise toiture adaptée aux Ponts-de-Cé.",
    intro:
      "Nous adaptons l’intervention à l’état de la couverture, à la structure apparente du bâtiment et aux éléments qui composent son étanchéité.",
    items: [
      {
        title: "Couverture en ardoise",
        description:
          "Contrôle des éléments de couverture et remplacement ciblé lorsque cela est possible.",
      },
      {
        title: "Bâti ancien et résidentiel",
        description:
          "Intervention avec attention portée à la cohérence entre les éléments existants et les réparations.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des évacuations et raccords participant à la protection du bâtiment.",
      },
      {
        title: "Points singuliers",
        description:
          "Cheminées, fenêtres de toit, noues et changements de pente font partie des zones à examiner.",
      },
    ],
    editorialTitle:
      "La bonne intervention est celle qui répond réellement au problème.",
    editorialText:
      "Une toiture ne se résume pas à sa couverture. Les éléments qui l’entourent participent eux aussi à sa durabilité et à son étanchéité.",
    commitments: [
      "Comprendre avant d’intervenir",
      "Préserver l’existant lorsque possible",
      "Traiter les points sensibles",
      "Adapter les travaux à l’état réel",
    ],
  },

  process: {
    title: "Comment se déroule une intervention aux Ponts-de-Cé ?",
    intro:
      "Nous avançons étape par étape afin que le besoin, les travaux et l’organisation du chantier soient clairement définis.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Nous recueillons les informations concernant votre toiture et votre demande.",
      },
      {
        number: "02",
        title: "Visite",
        description:
          "La toiture est examinée pour identifier les éléments nécessitant une intervention.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Les travaux nécessaires sont définis en fonction du diagnostic.",
      },
      {
        number: "04",
        title: "Réalisation",
        description:
          "Le chantier est préparé puis réalisé selon les conditions convenues.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title:
      "Travaux de toiture aux Ponts-de-Cé : vérifier le cadre applicable.",
    intro:
      "Les travaux de toiture doivent être appréciés selon leur nature, leur impact sur l’aspect extérieur et les règles applicables à la parcelle.",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Autorisation éventuelle",
          description:
            "Certains travaux peuvent nécessiter une démarche préalable auprès des services compétents.",
        },
        {
          title: "Aspect de la toiture",
          description:
            "Le remplacement ou la modification d’éléments visibles doit être étudié selon le projet.",
        },
        {
          title: "Règles du PLUi",
          description:
            "Les règles applicables à la parcelle doivent être consultées lorsque le projet le nécessite.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "La toiture peut relever des parties communes selon les documents de copropriété.",
        },
        {
          title: "Syndic",
          description:
            "Lorsque les travaux concernent les parties communes, le syndic doit être associé au projet.",
        },
        {
          title: "Validation du projet",
          description:
            "Les modalités de validation dépendent du projet et du règlement de copropriété.",
        },
      ],
    },
    disclaimer:
      "Les démarches administratives ne sont pas identiques pour tous les projets. Elles doivent être vérifiées selon l’adresse et les travaux envisagés.",
  },

  faq: [
    {
      question: "Intervenez-vous aux Ponts-de-Cé ?",
      answer:
        "Oui, nous intervenons aux Ponts-de-Cé pour différents travaux de toiture, de couverture, de zinguerie et d’entretien.",
    },
    {
      question: "Réparez-vous les toitures en ardoise ?",
      answer:
        "Oui, lorsque l’état de la couverture permet une intervention ciblée. Le choix entre réparation et rénovation dépend de son état général.",
    },
    {
      question: "Pouvez-vous rechercher une fuite ?",
      answer:
        "Oui. La recherche vise à identifier les zones susceptibles d’être à l’origine de l’infiltration avant de définir la réparation.",
    },
    {
      question: "Une rénovation complète est-elle toujours nécessaire ?",
      answer:
        "Non. Une toiture présentant des désordres localisés peut parfois être réparée. Un diagnostic permet de déterminer la solution appropriée.",
    },
    {
      question: "Faut-il une autorisation pour modifier une toiture ?",
      answer:
        "Selon la nature des travaux et leur impact extérieur, une démarche administrative peut être nécessaire.",
    },
    {
      question: "Comment demander un devis aux Ponts-de-Cé ?",
      answer:
        "Présentez-nous votre projet et les problèmes observés afin que nous puissions définir les prochaines étapes.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Découvrez nos services de couverture à Angers.",
    },
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Découvrez nos services de couverture à Avrillé.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Découvrez nos services de couverture à Beaucouzé.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description: "Découvrez nos services de couverture à Bouchemaine.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d’Anjou",
      description:
        "Découvrez nos services de couverture à Saint-Barthélemy-d’Anjou.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Découvrez nos services de couverture à Trélazé.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Découvrez nos services de couverture à Écouflant.",
    },
  ],
};

const trelaze: LocalCity = {
  slug: "trelaze",
  name: "Trélazé",
  postalCodes: ["49800"],

  seo: {
    title: "Couvreur à Trélazé (49800) | Couverture Vasseur",
    description:
      "Couvreur à Trélazé : réparation, rénovation, entretien de toiture, ardoise, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Trélazé",
      "couvreur 49800",
      "réparation toiture Trélazé",
      "rénovation toiture Trélazé",
      "toiture Trélazé",
      "ardoise Trélazé",
      "zinguerie Trélazé",
      "toiture ardoise Trélazé",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Trélazé · Maine-et-Loire",
    title:
      "À Trélazé, votre toiture s’inscrit dans une ville profondément marquée par l’ardoise.",
    description:
      "Trélazé possède une histoire ardoisière particulièrement forte. Pour une toiture, cette identité locale rappelle l’importance de considérer le matériau, le bâti existant et la cohérence de la couverture lors d’une intervention.",
    highlights: [
      "Intervention à Trélazé",
      "Spécialiste couverture & ardoise",
      "Devis gratuit",
    ],
    visualLabel: "Trélazé · 49",
    visualTitle: "L’ardoise comme héritage, la toiture comme patrimoine.",
    visualItems: [
      "Couverture en ardoise",
      "Réparation et rénovation",
      "Zinguerie et étanchéité",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Trélazé.",
    intro:
      "Une couverture en ardoise demande une attention régulière. Les désordres peuvent être ponctuels ou révéler un vieillissement plus global de la toiture.",
    items: [
      {
        title: "Ardoises cassées ou déplacées",
        description:
          "Un élément de couverture défectueux peut créer un point d’entrée pour l’eau et doit être traité selon son environnement.",
      },
      {
        title: "Vieillissement de la couverture",
        description:
          "Une toiture ancienne peut nécessiter une évaluation globale avant de décider entre réparation et rénovation.",
      },
      {
        title: "Infiltrations",
        description:
          "Une fuite peut provenir d’une ardoise mais aussi d’un raccord, d’une noue ou d’un élément de zinguerie.",
      },
      {
        title: "Zinguerie",
        description:
          "Les raccords entre la couverture et les différents éléments du bâtiment constituent des zones importantes à surveiller.",
      },
      {
        title: "Gouttières",
        description:
          "Les systèmes d’évacuation doivent rester fonctionnels pour limiter les débordements et ruissellements.",
      },
    ],
    adviceTitle: "À Trélazé, l’ardoise mérite une attention particulière.",
    adviceText:
      "L’histoire ardoisière de Trélazé fait partie de l’identité de la commune. Sur une toiture existante, l’objectif est d’abord de comprendre son état et sa composition avant de définir les travaux.",
  },

  access: {
    title:
      "À Trélazé, l’organisation du chantier fait partie de l’intervention.",
    intro:
      "La configuration du bâtiment, l’accès à la propriété et l’environnement immédiat sont étudiés avant l’installation des équipements.",
    items: [
      {
        title: "Échafaudage",
        description:
          "La hauteur et la configuration de la toiture déterminent les moyens de sécurisation nécessaires.",
      },
      {
        title: "Accès au chantier",
        description:
          "Les possibilités d’accès sont étudiées avant la livraison des matériaux et équipements.",
      },
      {
        title: "Stationnement",
        description:
          "Les besoins liés au chantier sont anticipés lorsque l’espace disponible est limité.",
      },
      {
        title: "Évacuation",
        description:
          "Les anciennes ardoises et autres matériaux déposés sont intégrés à l’organisation du chantier.",
      },
      {
        title: "Bâtiments proches",
        description:
          "Les protections sont adaptées lorsque les constructions sont proches les unes des autres.",
      },
      {
        title: "Protection des abords",
        description:
          "Les zones de passage et espaces extérieurs sont pris en compte pendant les travaux.",
      },
    ],
    note:
      "Si le chantier nécessite une occupation temporaire de l’espace public, les autorisations applicables doivent être vérifiées selon la situation.",
  },

  expertise: {
    title: "Une expertise toiture particulièrement attentive à l’ardoise.",
    intro:
      "À Trélazé, le matériau de couverture peut être un élément important de l’identité du bâtiment. L’intervention doit donc tenir compte de l’existant et de l’état réel de la toiture.",
    items: [
      {
        title: "Ardoise",
        description:
          "Évaluation de l’état des ardoises et recherche des éléments nécessitant une intervention.",
      },
      {
        title: "Couverture ancienne",
        description:
          "Analyse de l’état général pour distinguer réparation ponctuelle et rénovation plus importante.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des raccords et évacuations associés à la couverture.",
      },
      {
        title: "Étanchéité",
        description:
          "Recherche des points sensibles autour des cheminées, ouvertures, murs et changements de pente.",
      },
    ],
    editorialTitle:
      "Préserver une couverture, c’est aussi comprendre son histoire.",
    editorialText:
      "Une toiture ancienne ne doit pas être abordée comme une surface isolée. Son matériau, sa mise en œuvre et son état général orientent les choix de réparation ou de rénovation.",
    commitments: [
      "Respecter l’existant",
      "Évaluer l’état réel de la couverture",
      "Privilégier les réparations pertinentes",
      "Anticiper les zones sensibles",
    ],
    patrimonialNote:
      "Trélazé est historiquement associée à l’exploitation de l’ardoise. Cette identité ardoisière constitue un contexte local pertinent lorsqu’on intervient sur des couvertures anciennes ou en ardoise.",
  },

  process: {
    title: "Comment se déroule une intervention à Trélazé ?",
    intro:
      "Une intervention commence par l’identification précise du problème avant de déterminer la solution technique la plus cohérente.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Nous recueillons les informations sur la toiture, son âge connu et les problèmes constatés.",
      },
      {
        number: "02",
        title: "Diagnostic",
        description:
          "La couverture et les éléments associés sont examinés pour comprendre les désordres.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Nous définissons les travaux à envisager selon l’état réel de la toiture.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé avec les moyens adaptés.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title:
      "Travaux de toiture à Trélazé : vérifier les démarches avant d’intervenir.",
    intro:
      "La Ville de Trélazé met à disposition des informations sur les démarches liées aux travaux et rappelle l’importance du PLUi pour connaître les règles applicables à un projet. :contentReference[oaicite:5]{index=5}",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Déclaration préalable",
          description:
            "Certains travaux peuvent relever d’une déclaration préalable selon leur nature et leur impact extérieur.",
        },
        {
          title: "PLUi",
          description:
            "Les règles applicables à la parcelle doivent être consultées avant les travaux concernés.",
        },
        {
          title: "Aspect extérieur",
          description:
            "Une modification de couverture ou d’éléments visibles peut nécessiter une vérification préalable.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "La toiture et certains éléments associés peuvent relever des parties communes selon le règlement.",
        },
        {
          title: "Syndic",
          description:
            "Les travaux concernés doivent être préparés avec les interlocuteurs de la copropriété.",
        },
        {
          title: "Projet documenté",
          description:
            "Une description claire des travaux facilite l’instruction et les échanges.",
        },
      ],
    },
    disclaimer:
      "Les démarches administratives dépendent du projet et de son emplacement. Les informations doivent être vérifiées avant le début des travaux.",
  },

  faq: [
    {
      question: "Pourquoi l’ardoise est-elle particulièrement présente dans l’histoire de Trélazé ?",
      answer:
        "Trélazé possède une histoire ardoisière ancienne qui a fortement marqué son développement et son paysage urbain.",
    },
    {
      question: "Intervenez-vous sur les toitures en ardoise à Trélazé ?",
      answer:
        "Oui, nous pouvons intervenir sur les couvertures en ardoise pour des réparations, de l’entretien ou une rénovation selon leur état.",
    },
    {
      question: "Comment savoir si une toiture en ardoise doit être rénovée ?",
      answer:
        "L’état général de la couverture, la quantité d’éléments dégradés et les éventuels problèmes d’étanchéité doivent être examinés.",
    },
    {
      question: "Une seule ardoise cassée nécessite-t-elle une rénovation complète ?",
      answer:
        "Non. Lorsque le problème est localisé et que la couverture reste en bon état, une réparation ponctuelle peut être appropriée.",
    },
    {
      question: "Faut-il une autorisation pour modifier une toiture à Trélazé ?",
      answer:
        "Cela dépend des travaux envisagés. Une vérification des règles d’urbanisme applicables est nécessaire avant le chantier.",
    },
    {
      question: "Comment demander un devis pour une toiture à Trélazé ?",
      answer:
        "Vous pouvez nous décrire votre projet et les problèmes constatés afin d’organiser un échange et, si nécessaire, une visite.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Couvreur à Angers et dans les environs.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d’Anjou",
      description: "Couvreur à Saint-Barthélemy-d’Anjou et dans les environs.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description: "Couvreur aux Ponts-de-Cé et dans les environs.",
    },
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Couvreur à Avrillé et dans les environs.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Couvreur à Beaucouzé et dans les environs.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description: "Couvreur à Bouchemaine et dans les environs.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Couvreur à Écouflant et dans les environs.",
    },
  ],
};

const saintBarthelemyDAnjou: LocalCity = {
  slug: "saint-barthelemy-d-anjou",
  name: "Saint-Barthélemy-d’Anjou",
  postalCodes: ["49124"],

  seo: {
    title:
      "Couvreur à Saint-Barthélemy-d’Anjou (49124) | Couverture Vasseur",
    description:
      "Couvreur à Saint-Barthélemy-d’Anjou : réparation, rénovation, entretien de toiture, couverture, ardoise, zinguerie et recherche de fuite.",
    keywords: [
      "couvreur Saint-Barthélemy-d’Anjou",
      "couvreur 49124",
      "réparation toiture Saint-Barthélemy-d’Anjou",
      "rénovation toiture Saint-Barthélemy-d’Anjou",
      "toiture Saint-Barthélemy-d’Anjou",
      "ardoise Saint-Barthélemy-d’Anjou",
      "zinguerie Saint-Barthélemy-d’Anjou",
    ],
  },

  hero: {
    eyebrow:
      "Couvreur à Saint-Barthélemy-d’Anjou · Maine-et-Loire",
    title:
      "Votre toiture à Saint-Barthélemy-d’Anjou mérite une intervention précise et adaptée.",
    description:
      "Réparation, rénovation, entretien ou recherche de fuite : nous intervenons sur les toitures de Saint-Barthélemy-d’Anjou avec une approche centrée sur l’état réel du bâtiment et les contraintes du chantier.",
    highlights: [
      "Intervention locale",
      "Devis gratuit",
      "Couverture & zinguerie",
    ],
    visualLabel: "Saint-Barthélemy-d’Anjou · 49",
    visualTitle: "Une toiture entretenue, un bâtiment mieux protégé.",
    visualItems: [
      "Réparation",
      "Rénovation",
      "Entretien de toiture",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Saint-Barthélemy-d’Anjou.",
    intro:
      "Les signes de vieillissement d’une toiture ne sont pas toujours visibles depuis le sol. Une vérification permet d’identifier les points nécessitant une attention.",
    items: [
      {
        title: "Mousses et végétation",
        description:
          "Les dépôts peuvent retenir l’humidité et rendre certains défauts moins visibles.",
      },
      {
        title: "Ardoises dégradées",
        description:
          "Les ardoises cassées ou déplacées peuvent créer des points faibles dans la couverture.",
      },
      {
        title: "Infiltrations",
        description:
          "Une humidité intérieure peut provenir de plusieurs zones de la toiture et nécessite une recherche adaptée.",
      },
      {
        title: "Zinguerie",
        description:
          "Les raccords et évacuations d’eau font partie des éléments à surveiller.",
      },
      {
        title: "Gouttières",
        description:
          "Les évacuations doivent rester dégagées et fonctionnelles pour limiter les ruissellements.",
      },
    ],
    adviceTitle: "Ne pas attendre qu’un petit désordre devienne un gros chantier.",
    adviceText:
      "Un contrôle régulier permet parfois d’identifier les éléments fragilisés avant qu’ils ne provoquent des infiltrations ou des dégradations plus importantes.",
  },

  access: {
    title:
      "À Saint-Barthélemy-d’Anjou, chaque intervention est préparée en amont.",
    intro:
      "L’accès au bâtiment, les protections et l’organisation des matériaux sont définis selon la configuration du chantier.",
    items: [
      {
        title: "Sécurisation",
        description:
          "Les moyens d’accès et de protection sont adaptés aux caractéristiques de la toiture.",
      },
      {
        title: "Accès résidentiel",
        description:
          "Les accès disponibles sont étudiés avant la mise en place des équipements.",
      },
      {
        title: "Stationnement",
        description:
          "Les contraintes liées au stationnement et aux livraisons sont prises en compte.",
      },
      {
        title: "Matériaux",
        description:
          "Les besoins en matériaux sont anticipés afin de limiter les manipulations inutiles.",
      },
      {
        title: "Voisinage",
        description:
          "La proximité des propriétés voisines peut nécessiter des protections supplémentaires.",
      },
      {
        title: "Abords",
        description:
          "Les accès et espaces extérieurs sont protégés pendant les travaux.",
      },
    ],
    note:
      "Lorsque le chantier impacte temporairement l’espace public, les démarches nécessaires doivent être vérifiées selon la localisation exacte.",
  },

  expertise: {
    title:
      "Une expertise toiture adaptée au bâti de Saint-Barthélemy-d’Anjou.",
    intro:
      "Notre approche consiste à tenir compte de l’ensemble des éléments visibles de la toiture afin de proposer une intervention cohérente.",
    items: [
      {
        title: "Couverture",
        description:
          "Évaluation de l’état des éléments de couverture et identification des réparations nécessaires.",
      },
      {
        title: "Bâti résidentiel",
        description:
          "Intervention adaptée aux différentes configurations de maisons et bâtiments.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des raccords et systèmes d’évacuation des eaux.",
      },
      {
        title: "Étanchéité",
        description:
          "Recherche des points sensibles susceptibles de provoquer des infiltrations.",
      },
    ],
    editorialTitle:
      "Une toiture doit être comprise avant d’être transformée.",
    editorialText:
      "L’objectif est de conserver les éléments qui peuvent l’être et de concentrer les travaux sur les zones qui nécessitent réellement une intervention.",
    commitments: [
      "Diagnostiquer avant de réparer",
      "Préserver l’existant",
      "Traiter les causes",
      "Anticiper l’entretien futur",
    ],
  },

  process: {
    title:
      "Comment se déroule une intervention à Saint-Barthélemy-d’Anjou ?",
    intro:
      "Nous avançons de manière structurée afin de définir précisément les travaux nécessaires.",
    steps: [
      {
        number: "01",
        title: "Échange",
        description:
          "Présentation du problème, de vos attentes et du contexte du bâtiment.",
      },
      {
        number: "02",
        title: "Diagnostic",
        description:
          "Examen de la toiture et des éléments susceptibles d’être concernés.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Définition des travaux adaptés à l’état constaté.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Organisation puis réalisation du chantier.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title:
      "Travaux de toiture à Saint-Barthélemy-d’Anjou : anticiper les démarches.",
    intro:
      "Les travaux doivent être étudiés selon leur nature, leur impact visuel et les règles d’urbanisme applicables au bâtiment.",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Autorisation éventuelle",
          description:
            "Certains travaux peuvent nécessiter une démarche préalable.",
        },
        {
          title: "Règles locales",
          description:
            "Le projet doit respecter les règles applicables à la parcelle concernée.",
        },
        {
          title: "Modification visible",
          description:
            "Les changements de couverture ou d’aspect extérieur peuvent nécessiter une vérification.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "Le statut de la toiture doit être vérifié dans les documents de copropriété.",
        },
        {
          title: "Syndic",
          description:
            "Les travaux relevant des parties communes doivent être préparés avec le syndic.",
        },
        {
          title: "Validation",
          description:
            "Les modalités de validation dépendent du règlement et du projet.",
        },
      ],
    },
    disclaimer:
      "Les démarches dépendent de chaque projet. Les règles applicables doivent être vérifiées avant le démarrage des travaux.",
  },

  faq: [
    {
      question:
        "Intervenez-vous à Saint-Barthélemy-d’Anjou ?",
      answer:
        "Oui, nous intervenons pour différents travaux de réparation, rénovation, entretien et zinguerie.",
    },
    {
      question: "Réparez-vous les toitures en ardoise ?",
      answer:
        "Oui, lorsqu’une réparation ciblée est adaptée à l’état de la couverture.",
    },
    {
      question: "Pouvez-vous intervenir après une infiltration ?",
      answer:
        "Oui. L’objectif est d’identifier autant que possible l’origine de l’infiltration avant de définir la réparation.",
    },
    {
      question: "Quand faut-il envisager une rénovation ?",
      answer:
        "Une rénovation peut être envisagée lorsque les désordres sont nombreux ou que l’état général de la couverture le justifie.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture ?",
      answer:
        "Selon les travaux, une démarche d’urbanisme peut être nécessaire. Le projet doit être vérifié avant intervention.",
    },
    {
      question: "Comment demander un devis ?",
      answer:
        "Vous pouvez nous présenter votre projet et les problèmes constatés pour définir les prochaines étapes.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Intervention de couverture à Angers et dans ses environs.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Intervention de couverture à Trélazé et dans ses environs.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description:
        "Intervention de couverture aux Ponts-de-Cé et dans ses environs.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Intervention de couverture à Écouflant et dans ses environs.",
    },
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Intervention de couverture à Avrillé et dans ses environs.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Intervention de couverture à Beaucouzé et dans ses environs.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description:
        "Intervention de couverture à Bouchemaine et dans ses environs.",
    },
  ],
};

const ecouflant: LocalCity = {
  slug: "ecouflant",
  name: "Écouflant",
  postalCodes: ["49000"],

  seo: {
    title: "Couvreur à Écouflant (49000) | Couverture Vasseur",
    description:
      "Couvreur à Écouflant : réparation, rénovation, entretien de toiture, ardoise, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Écouflant",
      "couvreur 49000",
      "réparation toiture Écouflant",
      "rénovation toiture Écouflant",
      "toiture Écouflant",
      "ardoise Écouflant",
      "zinguerie Écouflant",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Écouflant · Maine-et-Loire",
    title:
      "Votre toiture à Écouflant mérite une intervention adaptée au bâtiment et à son environnement.",
    description:
      "Nous intervenons à Écouflant pour la réparation, la rénovation, l’entretien et la recherche de fuite sur les toitures des maisons et bâtiments.",
    highlights: [
      "Intervention à Écouflant",
      "Devis gratuit",
      "Couverture & rénovation",
    ],
    visualLabel: "Écouflant · 49",
    visualTitle: "Une toiture adaptée à chaque bâtiment.",
    visualItems: [
      "Réparation de couverture",
      "Rénovation",
      "Zinguerie",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Écouflant.",
    intro:
      "Entre maisons anciennes, habitations plus récentes et bâtiments aux configurations différentes, chaque toiture doit être examinée selon son état réel.",
    items: [
      {
        title: "Mousses",
        description:
          "Les dépôts végétaux peuvent retenir l’humidité et masquer certains défauts de couverture.",
      },
      {
        title: "Ardoises fragilisées",
        description:
          "Une ardoise cassée ou déplacée peut créer un point faible localisé.",
      },
      {
        title: "Infiltrations",
        description:
          "Une fuite peut être liée à la couverture, à la zinguerie ou à un raccord.",
      },
      {
        title: "Zinguerie",
        description:
          "Les raccords et évacuations doivent être contrôlés lorsqu’une toiture présente des problèmes d’étanchéité.",
      },
      {
        title: "Gouttières",
        description:
          "Une évacuation insuffisante peut entraîner des débordements ou des ruissellements.",
      },
    ],
    adviceTitle: "Une toiture bien suivie permet d’anticiper certains travaux.",
    adviceText:
      "L’entretien et l’observation régulière des éléments de couverture permettent d’identifier plus tôt les zones fragilisées.",
  },

  access: {
    title:
      "À Écouflant, l’accès au chantier est anticipé dès la préparation.",
    intro:
      "La diversité des environnements résidentiels et les secteurs en évolution rendent la préparation des accès particulièrement importante.",
    items: [
      {
        title: "Sécurité",
        description:
          "Les moyens de protection sont définis selon la hauteur et la configuration de la toiture.",
      },
      {
        title: "Accès",
        description:
          "Les accès à la propriété sont étudiés avant la livraison des matériaux.",
      },
      {
        title: "Stationnement",
        description:
          "Les besoins liés aux véhicules et équipements sont anticipés.",
      },
      {
        title: "Évacuation",
        description:
          "Les matériaux déposés sont intégrés à l’organisation générale du chantier.",
      },
      {
        title: "Voisinage",
        description:
          "Les protections sont adaptées à la proximité éventuelle des bâtiments voisins.",
      },
      {
        title: "Stockage",
        description:
          "Les zones disponibles permettent d’organiser les matériaux sans encombrer inutilement les abords.",
      },
    ],
    note:
      "Pour les chantiers nécessitant une occupation de l’espace public, les autorisations et conditions applicables doivent être vérifiées au cas par cas.",
  },

  expertise: {
    title: "Une expertise toiture adaptée au contexte d’Écouflant.",
    intro:
      "L’objectif est de proposer une intervention proportionnée à l’état réel de la toiture, qu’il s’agisse d’une réparation ponctuelle ou d’un projet de rénovation.",
    items: [
      {
        title: "Couverture",
        description:
          "Évaluation de l’état des matériaux et recherche des éléments nécessitant une intervention.",
      },
      {
        title: "Bâti résidentiel",
        description:
          "Approche adaptée aux différentes configurations de maisons et bâtiments.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des raccords et évacuations d’eau.",
      },
      {
        title: "Étanchéité",
        description:
          "Recherche des zones susceptibles d’être à l’origine des infiltrations.",
      },
    ],
    editorialTitle:
      "Adapter les travaux à l’état réel plutôt qu’à une solution standard.",
    editorialText:
      "Chaque toiture possède son propre historique. Notre rôle est d’identifier ce qui doit réellement être traité et de construire une intervention cohérente.",
    commitments: [
      "Analyser avant d’intervenir",
      "Préserver l’existant",
      "Prioriser les travaux nécessaires",
      "Préparer le chantier",
    ],
  },

  process: {
    title: "Comment se déroule une intervention à Écouflant ?",
    intro:
      "Une intervention structurée permet de mieux comprendre la situation et de définir les travaux réellement nécessaires.",
    steps: [
      {
        number: "01",
        title: "Échange",
        description:
          "Nous recueillons les informations sur votre toiture et les problèmes rencontrés.",
      },
      {
        number: "02",
        title: "Diagnostic",
        description:
          "La couverture et ses principaux points sensibles sont examinés.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Les travaux adaptés sont définis à partir des constatations.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé selon les conditions convenues.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title:
      "Travaux de toiture à Écouflant : vérifier les règles avant de commencer.",
    intro:
      "La commune indique que les modifications apportées à une habitation peuvent nécessiter des autorisations spécifiques et invite les propriétaires à consulter le service urbanisme. :contentReference[oaicite:7]{index=7}",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Construire ou rénover",
          description:
            "Certains travaux sur une habitation nécessitent une démarche préalable auprès du service urbanisme.",
        },
        {
          title: "PLUi",
          description:
            "Le PLUi constitue l’un des documents à consulter pour connaître les règles applicables au territoire.",
        },
        {
          title: "Projet résidentiel",
          description:
            "Les règles peuvent différer selon la localisation précise du bâtiment et la nature des travaux.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Toiture commune",
          description:
            "Le règlement de copropriété permet de déterminer les responsabilités et les parties concernées.",
        },
        {
          title: "Syndic",
          description:
            "Les travaux portant sur les parties communes doivent être préparés avec le syndic.",
        },
        {
          title: "Projet collectif",
          description:
            "Les démarches dépendent du type de travaux et du fonctionnement de la copropriété.",
        },
      ],
    },
    disclaimer:
      "Les règles d’urbanisme et de copropriété doivent être vérifiées selon le projet, l’adresse et les documents applicables.",
  },

  faq: [
    {
      question: "Intervenez-vous à Écouflant ?",
      answer:
        "Oui, nous intervenons à Écouflant pour différents travaux de couverture, réparation, rénovation, entretien et zinguerie.",
    },
    {
      question: "Pouvez-vous réparer une fuite de toiture ?",
      answer:
        "Oui. Une recherche de l’origine permet de déterminer les travaux adaptés à la situation.",
    },
    {
      question: "Une toiture ancienne peut-elle être réparée sans être entièrement rénovée ?",
      answer:
        "Oui, lorsque les désordres restent localisés et que l’état général de la couverture le permet.",
    },
    {
      question: "Faut-il une autorisation pour rénover une toiture à Écouflant ?",
      answer:
        "Selon la nature et l’impact des travaux, une autorisation peut être nécessaire. Le projet doit être vérifié au regard des règles applicables.",
    },
    {
      question: "Faites-vous l’entretien des gouttières ?",
      answer:
        "Les systèmes d’évacuation peuvent être examinés dans le cadre de l’entretien général de la toiture.",
    },
    {
      question: "Comment obtenir un devis ?",
      answer:
        "Décrivez-nous votre projet et les problèmes rencontrés afin de déterminer la suite à donner.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Intervention de couvreur à Angers et dans ses environs.",
    },
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Intervention de couvreur à Avrillé et dans ses environs.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Intervention de couvreur à Beaucouzé et dans ses environs.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Intervention de couvreur à Trélazé et dans ses environs.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d’Anjou",
      description:
        "Intervention de couvreur à Saint-Barthélemy-d’Anjou et dans ses environs.",
    },
    {
      slug: "bouchemaine",
      name: "Bouchemaine",
      description: "Intervention de couvreur à Bouchemaine et dans ses environs.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description: "Intervention de couvreur aux Ponts-de-Cé et dans ses environs.",
    },
  ],
};

const bouchemaine: LocalCity = {
  slug: "bouchemaine",
  name: "Bouchemaine",
  postalCodes: ["49080"],

  seo: {
    title: "Couvreur à Bouchemaine (49080) | Couverture Vasseur",
    description:
      "Couvreur à Bouchemaine : réparation, rénovation, entretien de toiture, couverture, ardoise, zinguerie et recherche de fuite. Devis gratuit.",
    keywords: [
      "couvreur Bouchemaine",
      "couvreur 49080",
      "réparation toiture Bouchemaine",
      "rénovation toiture Bouchemaine",
      "toiture Bouchemaine",
      "ardoise Bouchemaine",
      "zinguerie Bouchemaine",
    ],
  },

  hero: {
    eyebrow: "Couvreur à Bouchemaine · Maine-et-Loire",
    title:
      "Votre toiture à Bouchemaine mérite une attention adaptée à son environnement.",
    description:
      "Réparation, rénovation, entretien ou recherche de fuite : nous intervenons à Bouchemaine avec une approche adaptée à la configuration du bâtiment et aux contraintes du chantier.",
    highlights: [
      "Intervention à Bouchemaine",
      "Devis gratuit",
      "Toitures & ardoises",
    ],
    visualLabel: "Bouchemaine · 49",
    visualTitle: "Une toiture pensée dans son environnement.",
    visualItems: [
      "Réparation",
      "Rénovation",
      "Entretien",
    ],
  },

  pathologies: {
    title:
      "Les problèmes que nous rencontrons fréquemment sur les toitures à Bouchemaine.",
    intro:
      "Les toitures peuvent présenter des désordres progressifs qu’il est préférable d’identifier avant qu’ils ne deviennent plus importants.",
    items: [
      {
        title: "Mousses et végétation",
        description:
          "Les dépôts peuvent retenir l’humidité et masquer certains défauts de couverture.",
      },
      {
        title: "Ardoises vieillissantes",
        description:
          "Les éléments cassés ou fragilisés peuvent nécessiter une intervention ciblée.",
      },
      {
        title: "Infiltrations",
        description:
          "L’origine d’une infiltration doit être recherchée avant de définir la réparation.",
      },
      {
        title: "Zinguerie",
        description:
          "Les raccords, noues, solins et évacuations constituent des zones importantes à contrôler.",
      },
      {
        title: "Gouttières",
        description:
          "Un mauvais écoulement des eaux peut provoquer des débordements et des ruissellements.",
      },
    ],
    adviceTitle: "Une toiture doit être surveillée dans son ensemble.",
    adviceText:
      "La couverture, les raccords, les évacuations et les différents points singuliers participent ensemble à la protection du bâtiment.",
  },

  access: {
    title:
      "À Bouchemaine, l’environnement du chantier est pris en compte dès le départ.",
    intro:
      "La configuration des propriétés et des différents secteurs de la commune nécessite une préparation adaptée à chaque intervention.",
    items: [
      {
        title: "Sécurisation",
        description:
          "Les moyens d’accès et de protection sont définis en fonction du bâtiment.",
      },
      {
        title: "Accès au chantier",
        description:
          "Les accès disponibles sont vérifiés avant l’arrivée des équipements.",
      },
      {
        title: "Stationnement",
        description:
          "Les contraintes de stationnement sont intégrées à la préparation lorsque nécessaire.",
      },
      {
        title: "Livraison",
        description:
          "L’arrivée des matériaux est organisée selon les possibilités du site.",
      },
      {
        title: "Voisinage",
        description:
          "La proximité des propriétés voisines peut nécessiter des protections adaptées.",
      },
      {
        title: "Protection des abords",
        description:
          "Les zones de passage et espaces extérieurs sont intégrés à l’organisation du chantier.",
      },
    ],
    note:
      "Lorsque l’intervention nécessite une occupation temporaire de l’espace public, les autorisations applicables doivent être vérifiées selon la situation exacte.",
  },

  expertise: {
    title: "Une expertise toiture adaptée au bâti de Bouchemaine.",
    intro:
      "Chaque bâtiment possède ses propres caractéristiques. Nous cherchons à adapter les travaux à l’état réel de la couverture et aux éléments existants.",
    items: [
      {
        title: "Ardoise",
        description:
          "Évaluation de la couverture et remplacement ciblé des éléments défectueux lorsque cela est possible.",
      },
      {
        title: "Bâti résidentiel",
        description:
          "Intervention adaptée aux différentes configurations de maisons et bâtiments.",
      },
      {
        title: "Zinguerie",
        description:
          "Contrôle des raccords et évacuations d’eau.",
      },
      {
        title: "Étanchéité",
        description:
          "Recherche des points sensibles autour des éléments traversants et raccordements.",
      },
    ],
    editorialTitle:
      "Préserver le caractère du bâtiment tout en traitant les vrais désordres.",
    editorialText:
      "Notre approche privilégie une lecture globale de la toiture afin d’éviter les réparations successives qui ne répondraient pas à la cause du problème.",
    commitments: [
      "Comprendre la toiture",
      "Préserver ce qui peut l’être",
      "Identifier les causes",
      "Adapter les travaux",
    ],
    patrimonialNote:
      "Bouchemaine possède un environnement local marqué par différents lieux et éléments de patrimoine. Pour une toiture ancienne, la cohérence avec le bâtiment existant doit être prise en compte dans la réflexion sur les travaux.",
  },

  process: {
    title: "Comment se déroule une intervention à Bouchemaine ?",
    intro:
      "Une bonne préparation permet de définir les travaux, les accès et les conditions d’intervention avant le démarrage.",
    steps: [
      {
        number: "01",
        title: "Premier échange",
        description:
          "Nous recueillons les informations sur la toiture et les problèmes observés.",
      },
      {
        number: "02",
        title: "Visite et diagnostic",
        description:
          "La toiture et ses différents éléments sont examinés.",
      },
      {
        number: "03",
        title: "Proposition",
        description:
          "Les travaux adaptés sont définis à partir du diagnostic.",
      },
      {
        number: "04",
        title: "Intervention",
        description:
          "Le chantier est organisé puis réalisé selon les conditions définies.",
      },
    ],
    reassurance: "Un chantier préparé avant d’être commencé.",
  },

  urbanisme: {
    title:
      "Travaux de toiture à Bouchemaine : anticiper les règles applicables.",
    intro:
      "La nature des travaux et la localisation précise du bâtiment peuvent influencer les démarches à effectuer avant une intervention.",
    urbanisme: {
      title: "Urbanisme",
      items: [
        {
          title: "Autorisation éventuelle",
          description:
            "Certains travaux peuvent nécessiter une autorisation avant leur réalisation.",
        },
        {
          title: "Aspect extérieur",
          description:
            "Une modification visible de la toiture peut nécessiter une vérification préalable.",
        },
        {
          title: "Règles locales",
          description:
            "Le projet doit être examiné au regard des règles applicables à la parcelle.",
        },
      ],
    },
    copropriete: {
      title: "Copropriété",
      items: [
        {
          title: "Parties communes",
          description:
            "Le statut des éléments de toiture doit être vérifié dans les documents de copropriété.",
        },
        {
          title: "Syndic",
          description:
            "Les travaux concernant les parties communes nécessitent d’anticiper les échanges avec le syndic.",
        },
        {
          title: "Projet à présenter",
          description:
            "Une description précise des travaux facilite l’étude du projet.",
        },
      ],
    },
    disclaimer:
      "Les démarches dépendent de la nature du projet, de l’adresse et des règles qui lui sont applicables. Une vérification préalable est recommandée.",
  },

  faq: [
    {
      question: "Intervenez-vous à Bouchemaine ?",
      answer:
        "Oui, nous intervenons à Bouchemaine pour différents travaux de couverture, réparation, rénovation, entretien et zinguerie.",
    },
    {
      question: "Intervenez-vous sur les toitures anciennes ?",
      answer:
        "Oui. L’intervention est adaptée à l’état de la couverture et aux caractéristiques du bâtiment existant.",
    },
    {
      question: "Une infiltration doit-elle être traitée rapidement ?",
      answer:
        "Oui, une infiltration mérite d’être examinée afin de limiter le risque de dégradation supplémentaire du bâtiment.",
    },
    {
      question: "Pouvez-vous remplacer quelques ardoises ?",
      answer:
        "Oui, lorsque la couverture générale permet une réparation ciblée.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture à Bouchemaine ?",
      answer:
        "Cela dépend de la nature des travaux et de leur impact sur le bâtiment. Les règles applicables doivent être vérifiées.",
    },
    {
      question: "Comment demander un devis à Bouchemaine ?",
      answer:
        "Vous pouvez nous présenter votre besoin et les problèmes observés afin de définir les prochaines étapes.",
    },
  ],

  nearby: [
    {
      slug: "angers",
      name: "Angers",
      description: "Interventions de couverture et de zinguerie à Angers.",
    },
    {
      slug: "beaucouze",
      name: "Beaucouzé",
      description: "Interventions de couverture et de zinguerie à Beaucouzé.",
    },
    {
      slug: "avrille",
      name: "Avrillé",
      description: "Interventions de couverture et de zinguerie à Avrillé.",
    },
    {
      slug: "les-ponts-de-ce",
      name: "Les Ponts-de-Cé",
      description: "Interventions de couverture et de zinguerie aux Ponts-de-Cé.",
    },
    {
      slug: "saint-barthelemy-d-anjou",
      name: "Saint-Barthélemy-d’Anjou",
      description:
        "Interventions de couverture et de zinguerie à Saint-Barthélemy-d’Anjou.",
    },
    {
      slug: "ecouflant",
      name: "Écouflant",
      description: "Interventions de couverture et de zinguerie à Écouflant.",
    },
    {
      slug: "trelaze",
      name: "Trélazé",
      description: "Interventions de couverture et de zinguerie à Trélazé.",
    },
  ],
};

export const localCities: Record<string, LocalCity> = {
  angers,
  avrille,
  beaucouze,
  bouchemaine,
  "les-ponts-de-ce": lesPontsDeCe,
  trelaze,
  "saint-barthelemy-d-anjou": saintBarthelemyDAnjou,
  ecouflant,
};

/**
 * Récupérer une ville depuis son slug.
 */
export function getLocalCity(slug: string): LocalCity | undefined {
  return localCities[slug];
}

/**
 * Récupérer toutes les villes disponibles.
 */
export function getAllLocalCities(): LocalCity[] {
  return Object.values(localCities);
}

/**
 * Générer les paramètres statiques Next.js.
 */
export function getLocalCityParams() {
  return getAllLocalCities().map((city) => ({
    ville: city.slug,
  }));
}