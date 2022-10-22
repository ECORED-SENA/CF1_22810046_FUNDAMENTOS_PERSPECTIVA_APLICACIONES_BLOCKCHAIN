<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>NTF Token no Fungible o Activo no Fungile</em>
    .row.bg-c15
      .col-12.px-5
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img2.png' style="width: 350px").m-auto
          .col-lg-8
            .row.align-items-start.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img3.svg')
              .col
                p.mb-0 En los últimos años se ha escuchado del término NFT, que quiere decir “Token no Fungible”, pero en ocasiones no se conoce su significado y el impacto que viene generando dentro de los ecosistemas digitales, y es que después de que se iniciaran las charlas sobre ambiente de realidad virtual como los del metaverso, se comenzó a revelar un universo en donde cualquier elemento que represente un objeto del mundo real podría ser llevado hasta allá, y representar algo de valor mediante un certificado digital único registrado en una cadena de bloques mediante un contrato inteligente.
            .cajon.color-acento-contenido.p-4
              p.mb-0 #[b En este orden de ideas el término NFT hace referencia a un activo digital que no podrá consumirse ni sustituirse y este puede ser un gráfico, un audio, video, documento entre otros, a continuación, se conocerá un poco sobre esta tendencia tecnológica.]
        Separador
        #t_4_1
        .titulo-segundo.color-acento-contenido
          h2 4.1 Conceptos
        .dual-txt-deco2.mb-5
          p Los tokens, sin duda, hacen parte de los nuevos términos de la economía digital; estos son “una unidad de valor que una organización crea para gobernar su modelo de negocio y dar más poder a sus usuarios para interactuar con sus productos, al tiempo que facilita la distribución y reparto de beneficios entre todos sus accionistas” (Mougayar, 2016).  A continuación, se  conocerán algunos conceptos importantes sobre NFT que permitirán comprender mejor esta tendencia tecnológica:
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            LineaTiempoD.color-acento-contenido.bg3
              .row(numero="1" titulo="Bien fungible")
                .col-12
                  p Los bienes fungibles son los que pueden intercambiarse, teniendo un valor en función de su número, medida o peso, por ejemplo, un billete o una moneda.
              .row(numero="2" titulo="Bien no fungible")
                .col-12
                  p Son los que no son sustituibles, por ejemplo, una obra de arte.
              .row(numero="3" titulo="¿Qué son los NFT?")
                .col-12
                  p Son unidades de valor que se le asignan a un modelo de negocio, son únicos, indivisibles y transferibles.
              .row(numero="4" titulo="¿Cómo funcionan los NFT?")
                .col-12
                  p En un NFT se les puede asignar una especie de certificado digital de autenticidad, una serie de metadatos que no se van a poder modificar. En estos metadatos se garantiza su autenticidad, se registra el valor de partida y todas las adquisiciones o transacciones que se hayan hecho y también a su autor.
              .row(numero="5" titulo="<em>Market</em>")
                .col-12
                  p Tienda digital para el intercambio de nft.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img1.svg' style="width: 450px").m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Casos de estudio
    .row.align-items-center.bg-c16.mb-5
      .col-lg-3.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src='@/assets/curso/tema4/img3.png' style="width: 350px").m-auto
      .col-lg-9.my-4.mb-ly-0.order-1.order-lg-2
        p La adopción y uso de los NFT viene en continuo crecimiento y cobró fuerza con el anuncio del metaverso y la variedad de posibilidades para adentrarse en un mundo virtual en donde se tendrán necesidades, ofertas y espacios para compartir información digital, a continuación, se presentan algunos casos de estudio donde se involucran estos tokens.
        .row
          .col-12
            figure.d-flex.justify-content-end
              img(src='@/assets/curso/tema2/img6.svg' style="width: 50px")
    .tarjeta.bgr_2.p-md-4
      SlyderA(tipo="b")
        .row.p-4.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Arte digital
            p Los NFT han abierto la posibilidad de llevar el arte a escenarios digitales como son galerías, tiendas de arte y presenta una alternativa para el comercio de estas piezas que anteriormente era imposible, pero que gracias a las bondades del <em>blockchain</em>, esta le permite agregar información que permite garantizar su originalidad, además que el contrato inteligente permite establecer los alcances y permisos de uso; en la figura 21, podemos encontrar una colección de arte digital, titulada “Bored Ape Yacht Club” la cual ha sido valorada hasta en 2.9 millones de dólares.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/img4.png' style="width: 350px").m-auto
        .row.p-4.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img5.png' style="width: 350px").m-auto
          .col-lg-8
            h4 Metaverso
            p Sin duda, este proyecto ha generado un gran impacto, porque extiende la funcionalidad de los NFT para permitir enriquecer los espacios de este mundo virtual propuesto y representarlo digitalmente mejorando la percepción y experiencia del usuario.
        .row.p-4.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Música
            p Este campo de la música también ha sido beneficiado con la inclusión de los NFT, respaldada y certificada a través de una red <em>blockchain</em> permitiendo valorar y garantizar la autoría de las pistas musicales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/img6.png' style="width: 350px").m-auto
        .row.p-4.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img7.png' style="width: 350px").m-auto
          .col-lg-8
            h4 Contratos inteligentes
            p Esta adopción de los NFT no haría sido posible sin la participación de los contratos inteligentes, en los cuales se encuentran los detalles del contrato de tenencia de cada token, así como los alcances. El intercambio de nft se desarrolla a través de los <em>market’s</em> en los cuales se puede consultar los detalles y metainformación de cada artículo digital.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
