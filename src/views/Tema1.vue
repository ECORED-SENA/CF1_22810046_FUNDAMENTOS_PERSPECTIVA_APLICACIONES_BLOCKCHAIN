<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos de <em>blockchain</em>
    .bg1
      .row.mb-5.align-items-center.justify-content-center
        .col-lg.mb-4.mb-lg-0
          p.mb-4 El <em>blockchain</em> es un conjunto de tecnologías que permiten llevar un registro seguro, descentralizado, sincronizado y distribuido de las operaciones digitales, sin necesidad de la intermediación de terceros.
          .cajon.color-secundario.p-4
            p.mb-0 A continuación, se podrá reconocer algunos conceptos fundamentales que permiten comprender mejor esta tecnología, así como algunas aplicaciones útiles en la vida cotidiana como en las grandes industrias.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/img1.png' style="width: 450px").m-auto
      .row.mb-3.mb-md-5.justify-content-center.align-items-center
        .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-7.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          LineaTiempoD.color-acento-contenido.bg3
            .row(numero="1" titulo="Criptografía")
              .col-md-12.mb-4.mb-md-0
                p La criptografía, es un conjunto de técnicas para asegurar información haciendo uso del ocultamiento y securización de la información.
            .row(numero="2" titulo="Función <em>Hash</em>")
              .col-md-12.mb-4.mb-md-0
                p.mb-3 Es una función que permite cifrar información, generando un texto con longitud definida y cuenta con 3 propiedades básicas. <br> <br> Propiedades básicas Función <em>Hash</em>         
              .col-md-12
                figure.mb-4
                  img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
                p De esta manera se garantiza la verificación de la integridad de la información y que esta no ha sido alterada.
            .row(numero="3" titulo="Criptografía asimétrica")
              .col-md-12.mb-4.mb-md-0
                p También llamada criptografía de llave pública, facilita la comunicación entre 2 partes interesadas haciendo uso de las llaves privada que se mantiene en secreto y la llave pública que se comparte con los demás para que se pueda leer el mensaje.
            .row(numero="4" titulo="Firma digital")
              .col-md-12.mb-4.mb-md-0
                p Es un mecanismo mediante el cual se procede a garantizar que la información no ha sido alterada, eso se logra con el uso de llave privada, con lo que se evita el repudio de la información al contar con la información original.
            .row(numero="5" titulo="<em>Asset</em>")
              .col-md-12.mb-4.mb-md-0
                p Representación digital de un objeto del mundo real, por ejemplo, una tarjeta de identificación, un coche, etc.
            .row(numero="6" titulo="Criptomoneda")
              .col-md-12.mb-4.mb-md-0
                p Corresponde a un <em>Asset</em> representado en dinero digital, y este puede comercializarse a través de su propia red de <em>blockchain</em>.
            .row(numero="7" titulo="<em>Token</em>")
              .col-md-12.mb-4.mb-md-0
                p Son una representación de una unidad de valor en dinero de alguna denominación, el cual está definido por la organización fundadora, por lo general operan sobre redes de privadas.     
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-lg-7.mb-3.mb-lg-0(data-aos="fade-left")
          LineaTiempoD.color-acento-contenido.bg3
            .row(numero="8" titulo="Contrato inteligente")
              .col-md-12.mb-4.mb-md-0
                p Son programas que trabajan sobre redes de <em>blockchain</em>, los cuales implementan reglas sobre de operación sobre activos digitales los cuales deben ser cumplidos por los interesados y firmantes de un contrato inteligente.
            .row(numero="9" titulo="<em>Wallet</em>").justify-content-center
              .col-md-12.mb-4.mb-md-0
                p.mb-3 Son programas que se utilizan para almacenar las claves para operar sobre una red de <em>blockchain</em>, con las cuales se puede demostrar la propiedad que existe sobre ciertos <em>tokens</em>, criptomonedas, NFT o identidades digitales.         
              .col-md-8
                figure.mb-4
                  img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')              
            .row(numero="10" titulo="<em>DApp (Decentralized Applications)</em>")
              .col-md-12.mb-4.mb-md-0
                p Una aplicación descentralizada, es aquella que no está controlada por alguna organización u organismo centralizado, que es abierto y opera de manera distribuida bajo la red de <em>blockchain</em>, en este tipo de aplicaciones, los usuarios controlan las llaves de sus <em>wallet</em>, a diferencia de las centralizadas estas llaves no son entregadas a los usuarios, siendo este un riesgo para el inversor en caso de que la aplicación sea regulada por algún ente o alguna normatividad.
            .row(numero="11" titulo="Exchange")
              .col-md-12.mb-4.mb-md-0
                p Es una aplicación por lo general sobre internet que permite el comercio e intercambio de criptomonedas o acciones de cualquier tipo a través de operaciones llamadas <em>trading</em>.
            .row(numero="12" titulo="<em>Exchanges Centralizados o CEX</em>")
              .col-md-12.mb-4.mb-md-0
                p Que son centralizados, muy comunes, fáciles de operar y con una alta liquidez, pero la custodia de los activos está en manos de terceros.
            .row(numero="13" titulo="<em>Exchanges Descentralizados o DEX</em>")
              .col-md-12.mb-4.mb-md-0
                p Que son descentralizados, con un alto nivel de seguridad y privacidad, también manejan altos índices de liquidez y a diferencia de los <em>exchanges</em> centralizados la custodia de los activos está en manos de cada propietario. 
        .col-12.col-md-6.col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.img450(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')
    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Cadena de bloques
    p.mb-5 Una cadena de bloques es un sistema de mantenimiento de registro donde múltiples fuentes validan una entrada antes que se la agregue a la cadena de datos, tal como se puede observar a continuación.
    .tarjeta.bgr_2.p-md-4.mb-5(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.p-5.bgr_3.justify-content-center
          .col-12.col-md-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')
          .col-1
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex.align-items-center
            div
              p.mb-0 El <em>blockchain</em> es una estructura de datos que almacena información en bloques a los cuales puede agregarse información denominada metainformación. Además cuenta con su propio <em>hash</em> y el <em>hash</em> del bloque inmediatamente anterior, la cual acepta una estrecha relación con otros bloques de una red permitiendo mantener una relación y línea temporal, la información se almacena haciendo uso de técnicas y algoritmos criptográficos garantizando así su confiabilidad. 
        .row.p-5.bgr_4.justify-content-center
          .col-12.col-md-8.col-lg-6
            figure
              img(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen').mb-3
              p <b>Adaptado de <i>Blockchain</i>: ¿Qué hay considerar al implementar una cadena de bloques? (ticportal.es)</b> 
          .col-lg-1
          .col-12.col-lg-5.mb-3.mb-lg-0.d-flex.align-items-center
            div
              p.mb-0 Esta información solo puede ser modificada por bloques de orden posterior; cada bloque de información guarda la metainformación del bloque inmediatamente anterior, tal como se representa en la siguiente figura; en caso de que la información contenida en un bloque anterior sea modificada el <em>hash</em> cambia automáticamente lo que conlleva a que el siguiente bloque ya no sería valido comprometiendo la información contenida.
        .row.p-5.bgr_5.justify-content-center
          .col-12.col-md-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
          .col-1
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex.align-items-center
            div
              p.mb-0  Ahora bien, el <em>hash</em> por sí solo no sería suficiente para garantizar la información contenida ya que las maquinas actuales pueden calcular <em>hash</em> de manera rápida y regenerar la cadena completa para que esta sea válida, por esto el <em>blockchain</em> incorpora el protocolo Proof Of Work (prueba de trabajo) el cual evita que se generen y recalculen los <em>hashes</em> de manera inmediata.
        .row.p-5.bgr_6.justify-content-center
          .col-12.col-md-8.col-lg-3
            figure
              img.img-t(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen').mx-auto
          .col-1
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex.align-items-center
            div
              p.mb-0 Sumado al anterior que <em>blockchain</em> utiliza redes descentralizadas p2p que permiten generar bloques para validar los <em>hashes</em> creados y bloqueando cualquiera que haya sido modificado, dificultando cualquier operación que afecte la información contenida.
              p El ha sido pensado y está siendo utilizada para almacenar información de manera creciente a través del tiempo.
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Origen de la tecnología 
    .row.align-items-center.mb-5
      .col-lg-auto.mb-5
        figure
          img(src='@/assets/curso/tema1/img12.svg' style="width: 450px").m-auto
      .col-lg
        p El <em>blockchain</em> comúnmente es relacionado directamente con Bitcoin, dado que esta tecnología dio paso al manejo de transacciones en monedas digitales y que no estuvieran controladas por algún organismo externo.
        .row.align-items-start.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img13.svg')(data-aos="fade-right")
          .col
            p(data-aos="fade-left").mb-0 <b>Uno de los problemas que llevaron al surgimiento de esta tecnología, estuvo relacionada con la necesidad de ofrecer un medio que facilitara el comercio electrónico y garantizara el éxito de las transacciones reduciendo los riesgos de pérdida de bienes o servicios sin necesidad de manipular dinero físico, manteniendo la titularidad de estos durante la transacción</b>.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg.mb-4.mb-lg-0
        p.mb-4 Para realizar una transacción con bancos tradicionales, estos certifican que se cuenta con el dinero y se encargan de procesar los movimientos correspondientes; por esta razón se buscó también que la solución permitiera que el usuario fuese el que tuviera control sobre la transacción sin ser controlado ni limitado.
        .cajon.color-primario.p-4
          p.mb-0 Es desde los años 90 donde empiezan a surgir propuestas descentralizadas para dar solución a estas necesidades, y se puede realizar una vista rápida en la siguiente figura 1 de los principales hechos que marcaron el origen del <em>blockchain</em> como se conoce hasta el momento.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/img14.svg' style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
      LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #F4F7FE" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img19.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p En principio el <em>blockchain</em> surgió para autenticar documentos digitales, pero no fue sino hasta el 2008 cuando fue usada por Satoshi Nakamoto cuando la usó para generar el Bitcoin.
    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h3 1.3 Ciclo de vida del <em>blockchain</em>
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img20.svg' style="width: 450px").m-auto
      .col-lg
        p.mb-4 Para realizar una transacción con bancos tradicionales, estos certifican que se cuenta con el dinero y se encargan de procesar los movimientos correspondientes; por esta razón se buscó también que la solución permitiera que el usuario fuese el que tuviera control sobre la transacción sin ser controlado ni limitado.
        .cajon.color-primario.p-4
          p.mb-0 Es desde los años 90 donde empiezan a surgir propuestas descentralizadas para dar solución a estas necesidades, y se puede realizar una vista rápida en la siguiente figura 1 de los principales hechos que marcaron el origen del <em>blockchain</em> como se conoce hasta el momento.
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1]. Modelos para el análisis de los datos
      .row.justify-content-center.mb-5
        .col-lg-6
          figure
            img(src='@/assets/curso/tema1/img26.svg')
          figcaption  Nota. Adaptado de Las 4 fases del espectro de <em>Blockchain</em> de Gartner.
    .row.align-items-start.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img27.svg')(data-aos="fade-right")
      .col
        p.mb-0 Así mismo, la figura 3 presenta un espectro de ciclo de vida del <em>blockchain</em> en el cual indica cómo se han venido desarrollando cada uno de los componentes anteriormente nombrados, y dónde se refleja dicha tecnología. Aún no se desarrolla completamente y es posible que hasta después del año 2030 se podrá contar con un ecosistema completo.   
    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1]. Modelos para el análisis de los datos
      .row.justify-content-center.mb-5
        .col-lg-10
          figure
            img(src='@/assets/curso/tema1/img28.svg')
          figcaption  Nota. Adaptado de Las 4 fases del espectro de <em>Blockchain</em> de Gartner.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1990',
        texto:
          'El científico informático Stuart Haber y el físico W. Scott Stornetta aplicaron técnicas criptográficas en una cadena de bloques como una forma de proteger los documentos digitales contra la manipulación de datos.',
        icono: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: '2008-2010',
        texto:
          'En este lapso de tiempo, Satoshi Nakamoto presenta el Bitcoin, se da lugar a la primera compra de Bitcoin (10.000 BTC) y se utiliza por primera vez como medio de pago.',
        icono: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: '2013-2015',
        texto:
          'Se presenta Ethereum. Ya para esta fecha, el mercado de los Bitcoins supera los mil millones de dólares. También se presentan los contratos inteligentes. Aunque la tecnología Blockchain es más antigua que Bitcoin, es un componente subyacente central de la mayoría de las redes de criptomonedas, que actúa como un libro mayor digital descentralizado, distribuido y público, que es responsable de mantener un registro permanente (cadena de bloques) de todas las transacciones previamente confirmadas.',
        icono: require('@/assets/curso/tema1/img18.png'),
      },
      {
        titulo: '2016-2018',
        texto:
          'En este periodo, Linux Foundation presenta Hyperledger, para mejorar el desarrollo de Blockchain. <br><br>También sucede el primer gran fallo de ciberseguridad, con un ataque a Ethereum que le hizo perder un tercio de su criptomoneda Nativa (Ether). <br><br>A partir de estos años, naciones como Japón y Suiza comienzan a aceptar las criptomonedas.',
        icono: require('@/assets/curso/tema1/img22.png'),
      },
      {
        titulo: '2019',
        texto:
          'Un gigante se suma al juego; Facebook (ahora, Meta) anuncia su criptomoneda “Libra”.  <br><br> En Colombia, a través del Conpes 3975, se define la Política de Transformación Digital e Inteligencia Artificial, para aprovechar las oportunidades tecnológicas y enfrentar los retos relacionados con la Cuarta Revolución Industrial (4RI)',
        icono: require('@/assets/curso/tema1/img21.png'),
      },
      {
        titulo: '2020',
        texto:
          'Se publica una primera versión de los lineamientos de Blockchain para el Estado colombiano, denominada “Guía para el uso y la implementación de tecnología de registros distribuidos (DLT/Blockchain) en el sector público”, documento en el que se desarrollaron bases teóricas y se evidenciaron algunos ejemplos implementados en el sector público en países como Emiratos Árabes Unidos, Estonia, China, Unión Europea, Canadá y Estados Unidos, para su adopción e implementación en proyectos con tecnología Blockchain.',
        icono: require('@/assets/curso/tema1/img23.png'),
      },
      {
        titulo: 'Actualidad',
        texto:
          'La tecnología Blockchain continúa evolucionando, representada por un mayor número de criptomonedas, así como las empresas y gobiernos que aprovechan esta tecnología para mejorar su eficiencia y seguridad. <br><br> Aunque el futuro es incierto, es evidente que la cadena de bloques es una de las tecnologías más prometedoras de nuestro tiempo.',
        icono: require('@/assets/curso/tema1/img24.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
