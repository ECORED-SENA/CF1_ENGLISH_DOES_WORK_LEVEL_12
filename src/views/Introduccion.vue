<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-01
      .row.mb-5
        .col-lg-8.mb-3.mb-lg-0
          .tarjeta.bgr.p-4
            p Al hablar de eventos del pasado, se pueden usar diferentes estructuras gramaticales que permiten hablar de diferentes elementos del pasado. En este componente, se trabajará el pasado perfecto y el pasado simple, los cuales se enfocan en mostrar lo eventos del pasado que ocurrieron antes de otro evento del pasado, en el caso del perfecto, y el simple, que habla de eventos que iniciaron y terminaron en el pasado o simplemente de hechos ocurridos una vez en el pasado. Durante el componente, se mostrarán sus estructuras y, además, cuándo no utilizar estos recursos del lenguaje. 
            p Este componente, además, incluye el uso del tercer condicional, un elemento gramatical que permite exponer situaciones que, si hubiesen pasado, se habría reaccionado de cierta forma. Otros temas que son importantes para este componente son los verbos modales. Además, el uso de cláusulas relativas, tipos de pronombres y verbos como sujetos.
            p.mb-0 El elemento de vocabulario de este componente se basa en expresiones argumentativas, que son elementos de gran importancia al momento de crear argumentos en una discusión. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
        .col-lg-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/introduccion/1.png", alt="alt")
      
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/9_8Or21ki_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .tarjeta.bgr_1.p-4
          .row.d-flex.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/introduccion/2.svg", alt="alt")
            .col-lg-4.mb-3.mb-lg-0
              p.mb-0.text-white Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español. 
            .col-lg-4
              a.anexo(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Guion esp and ingl_Video introductorio



    
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
