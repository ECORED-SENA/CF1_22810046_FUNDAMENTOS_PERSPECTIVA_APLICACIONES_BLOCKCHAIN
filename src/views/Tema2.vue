<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Criptoeconomía y Criptodivisas
    .row.justify-content-center
      .col-12
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img1.jpg", alt="alt")
    .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
      .col-10
        .crd.bg--gray.shadow.brd--rad_01.p-4
          p.mb-0 Sin lugar a dudas el ámbito económico y de control de divisas es la aplicación más común que se puede asociar al <em>blockchain</em>, esto se debe a que en la última década se han venido implementando gran cantidad de soluciones y prácticas que hacen uso de las teorías económicas, que al combinarlas con las teorías tecnológicas han generado la tendencia de economía basada en criptodivisas.
    .row.align-items-center.mb-5
      .col-lg-auto.mb-5
        figure
          img(src='@/assets/curso/tema2/img2.svg')
      .col-lg
        p Esta tendencia ha llegado en un momento crítico de orden mundial, después de pasar por una pandemia que afectó su economía, crisis de cadena de suministros y la inflación económica de muchos países, entre otras acciones que de cierto modo afectan la estabilidad de los mercados financieros, ha comenzado a tomar fuerza y varios analistas predicen que a partir del año 2022 la economía basada en criptomonedas tendrá un gran crecimiento, esto fomentado por la habilitación de plataformas que permiten el comercio e intercambio persona-persona (p2p), así como la de plataformas para promover el consumo de bienes, servicios y experiencias como lo es el tan esperado metaverso.
      .cajon.color-primario.p-4
        p.mb-0 Para el caso de Colombia, aún no hay reglas claras para trabajar con estas nuevas tecnologías, pero ya se han venido adelantando iniciativas para regular y controlar este tipo de mercado, aunque conociendo la naturaleza del <em>blockchain</em> este no surgió para ser controlado ni administrado.
    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 	Definición y origen de las criptomonedas
    .row.align-items-center.mb-5
      .col-lg
        p Las criptomonedas son monedas digitales que también se suelen llamar activos financieros digitales o criptoactivos, llevan un largo camino el cual ha sido fortalecido por personal matemático, científico y personas con visión de futuro, quienes han llegado a consolidar este tipo de activos y agregarle un valor diferente al del dinero real que está respaldado en oro por lo general.
        .row.align-items-start.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img3.svg')(data-aos="fade-right")
          .col
            p(data-aos="fade-left").mb-0 <b>Estas criptomonedas no cuentan con un respaldo físico real, estas se respaldan en la confianza que le dan las personas que operan con ellas, y con una especulación de servicios y beneficios que pueden obtenerse al realizar su intercambio</b>.
      .col-lg-auto.mb-5
        figure
          img(src='@/assets/curso/tema2/img4.svg')
</template>

<script>
export default {
  name: 'Tema2',
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
