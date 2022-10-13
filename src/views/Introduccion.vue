<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/img1.png', style="width:300px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 <b>El <em>blockchain</em> es una tecnología que permite llevar un registro seguro, descentralizado, sincronizado y distribuido de las operaciones digitales, sin necesidad de la intermediación de terceros. Se da la bienvenida al estudio del componente formativo “Fundamentos de <em>blockchain</em>”. Para comenzar, se invita a explorar el recurso que se presenta a continuación</b>:
    
    .row.justify-content-center
      .col-lg-12
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
