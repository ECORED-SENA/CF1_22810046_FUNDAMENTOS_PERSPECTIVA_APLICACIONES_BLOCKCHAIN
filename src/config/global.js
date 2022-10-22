export default {
  global: {
    componenteFormativo: 'Fundamentos de <em>Blockchain</em>',
    descripcionCurso:
      'Mediante el presente componente, se identifican los conceptos básicos del <em>blockchain</em>, tecnologías y herramientas necesarias para su comprensión y uso en los diferentes ámbitos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Conceptos de <em>blockchain</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cadena de bloques ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Origen de la tecnología',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ciclo de vida del <em>blockchain</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '2.	Criptoeconomía y Criptodivisas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y origen de las criptomonedas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de monedas digitales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Regulación legal',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de pagos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de <em>blockchain</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Herramientas de comercio electrónico asociadas a <em>blockchain</em>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Minería de bloques',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>NTF Token no Fungible o Activo no Fungile</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Casos de estudio',
            hash: 't_4_2',
          },
        ],
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
      tema: 'Conceptos de <em>Blockchain</em>',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Guía de referencia de <em>Blockchain</em> para la adopción e implementación de proyectos en el Estado colombiano. ',
      tipo: 'PDF',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf',
    },
    {
      tema: 'CriptoEconomía y Criptodivisas',
      referencia:
        'Domingo, C. (2018). Todo lo que quería saber sobre <em>Bitcoin</em>, criptomonedas y <em>Blockchain</em>, y no te atrvías a preguntar.',
      tipo: 'PDF',
      link:
        'https://pladlibroscl0.cdnstatics.com/libros_contenido_extra/38/37925_Bitcoin_Criptomonedas_Y_Blockchain.pdf',
    },
    {
      tema: '<em>Bitcoin</em>',
      referencia:
        '<em>CoinMarketCap. (s.f.). Top Stablecoin Tokens by Market Capitalization</em>. ',
      tipo: 'Página web',
      link: 'https://coinmarketcap.com/view/stablecoin/',
    },
  ],
  glosario: [
    {
      termino: '<em>Fiat</em>',
      significado:
        'Es dinero de curso legal cuyo valor no deriva del hecho de ser un bien físico o mercancía, sino por ser emitido por un gobierno.',
    },
    {
      termino: '<em>Rig</em>',
      significado:
        'Sistema basado principalmente en tarjetas gráficas que trabajan para obtener el hash de un bloque y obtener así una recompensa.',
    },
    {
      termino: '<em>Satoshi</em>',
      significado:
        'Es la unidad mínima de medida que se puede utilizar en el sistema <em>Bitcoin</em>.',
    },
    {
      termino: '<em>Scam</em>',
      significado:
        'Hace referencia a los productos digitales falsos o que no tienen el respaldo propuesto.',
    },
    {
      termino: '<em>Spot</em>',
      significado:
        'El mercado spot es aquel en el que el valor del activo financiero se paga al contado (precio spot) en el momento de la entrega',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo Guardeño, D. Díaz Vico, J. & Hernández Encinas, L. (2019). <em>Blockchain</em>. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431',
    },
    {
      referencia:
        'García-Morales, E. (2018). Luces y sombras sobre el impacto del blockchain en la gestión de documentos. Anuario ThinkEPI, 12, 345-351.',
      link: 'https://doi.org/10.3145/thinkepi.2018.58',
    },

    {
      referencia:
        'Herrera, J. (2021). Propuesta de un mecanismo de gestión de pagos públicos mediante cadena de bloques (<em>Blockchain</em>). Revista de derecho de la Hacienda Pública, ISSN-e 2215-3624, Nº. 17, 2021, págs. 22-39.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8072557 ',
    },
    {
      referencia:
        'MINTIC. (2022) Guía de referencia de <em>Blockchain</em> para la adopción e implementación de proyectos en el estado colombiano.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf',
    },
    {
      referencia:
        'Mougayar, W. (2016). <em>The business blockchain: promise, practice, and application of the next Internet technology. John Wiley & Sons</em>.',
      link: '',
    },
    {
      referencia:
        'Tapscott, D., & Tapscott, A. (2017). La revolución <em>blockchain</em>. Descubre cómo esta nueva tecnología transformará la economía global. ediciones deusco. séptima edición.',
      link:
        'https://static0planetadelibroscommx.cdnstatics.com/libros_contenido_extra/35/34781_La_revolucion_blockchain.pdf ',
    },
    {
      referencia:
        'Tudela, L (2019) Arquitectura <em>blockchain</em> para la securización de dispositivos IOT mediante <em>smart contracts</em>. ',
      link: 'http://castor.det.uvigo.es:8080/xmlui/handle/123456789/345',
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
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la industria, la Empresa y los Servicios - Regional Norte de Santander ',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distro Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba ',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
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
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
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
