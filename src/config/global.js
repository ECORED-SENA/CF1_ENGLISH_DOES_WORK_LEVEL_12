export default {
  global: {
    componenteFormativo:
      '<em>If I had tried this before, I wouldn’t have produced it in mass</em><br> Si hubiese probado esto antes, no lo habría producido en masa',
    descripcionCurso:
      'En este componente se pretende trabajar el uso del pretérito perfecto y del pretérito simple, que permiten hablar de acciones en el pasado ocurridas en el pasado y antes de otra acción. Además, trabajaremos el uso del tercer condicional que nos permitirá hablar de arrepentimientos y de cosas que hubieras hecho en situaciones hipotéticas. Los verbos modales, las cláusulas relativas, los pronombres y los verbos utilizados como sujetos complementarán las ideas presentadas, y, para terminar, estudiaremos algunas expresiones argumentativas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>Past simple vs. past perfect</em> (pasado simple vs. pasado perfecto)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Third conditional</em> (Tercer condicional)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Modal verbs</em> (Verbos modales)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Relative clauses</em> (Cláusulas relativas)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              '<em>Defining and non defining clauses</em> (Cláusulas subordinadas especificativas y explicativas)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Relative pronouns</em> (Pronombres relativos)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '<em>Relative adverbs</em> (Adverbios relativos)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Pronouns</em> (Pronombres) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '<em>Subject</em> (Sujeto)',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '<em>Object</em> (Objeto)',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '<em>Verbs as subjects</em> (Verbos como sujetos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          '<em>Argumentative expressions</em> (Expresiones argumentativas)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '<em>Past simple vs past perfect</em> (pasado simple vs pasado perfecto)',
      referencia:
        '<em>BBC Learning English (2018). The Past Perfect Tense: The Grammar Gameshow Episode 13</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=05HXVE05vjg',
    },
    {
      tema:
        '<em>Past simple vs past perfect</em> (pasado simple vs pasado perfecto)',
      referencia:
        '<em>Beckwith, S. (s. f.). Past Perfect Exercise 1. Perfect English Grammar.</em>',
      tipo: 'Ejercicio',
      link:
        'https://www.perfect-english-grammar.com/past-perfect-exercise-1.html',
    },
    {
      tema: '<em>Third conditional</em>',
      referencia:
        '<em>BBC Learning English. (2016).  A review of conditionals: BBC English Class</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uDoBdq0s8eY&ab_channel=BBCLearningEnglish',
    },
    {
      tema: '<em>Third conditional</em>',
      referencia:
        '<em>Beckwith, S. (s. f.). Third Conditional Exercise 1. Perfect English Grammar.</em>',
      tipo: 'Ejercicio',
      link:
        'https://www.perfect-english-grammar.com/third-conditional-exercise-1.html',
    },
  ],
  glosario: [
    {
      termino: '<em>Base form</em> / Forma base',
      significado:
        'forma más básica de un verbo, sin ningún tipo de terminación específica.',
    },
    {
      termino: '<em>Modal verbs</em>/ Verbos modales',
      significado:
        'son palabras que permiten cambiar de manera ligera la forma en que se entiende un verbo.',
    },
    {
      termino: '<em>Past simple</em> / Pasado simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Third conditional</em> / Tercer condicional',
      significado:
        'oración compuesta que permite hablar de situaciones que no ocurrieron en el pasado, pero da posibles resultados a esas situaciones imaginarias.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Austen, J. (s. f.). Letter 4th Laura to MARIANNE. Project Gutenberg</em>',
      link:
        'https://www.gutenberg.org/files/1212/1212-h/1212-h.htm#link2H_4_0005',
    },
    {
      referencia:
        '<em>Beckwith, S. (s. f.). The Past Perfect Tense. Perfect English Grammar.</em>',
      link: ' https://www.perfect-english-grammar.com/past-perfect.html',
    },
    {
      referencia:
        '<em>English with Cambridge. (2021). Past simple y past perfect. Universidad de Cambridge.</em>',
      link: 'https://www.inglesconcambridge.com/past-simple-y-past-perfect/',
    },
    {
      referencia:
        'Equipo académico. (2021). <em>Past perfect: claves para usarlo como nativo. British Council México.</em>',
      link: 'https://www.britishcouncil.org.mx/blog/past-perfect',
    },
    {
      referencia:
        '<em>Murphy, R. (2019). English grammar in use. Cambridge University Press.</em>',
      link:
        'https://corsidilaurea.uniroma1.it/sites/default/files/english_grammar_in_use_intermediate_2019_5th-ed.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesús Edgardo Contreras Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo <em>front-end</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres ',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual Y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
