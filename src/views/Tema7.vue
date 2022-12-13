<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 <em>Argumentative expressions</em> (Expresiones argumentativas)

    .bg_grad-12
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
        .col-lg-8
          SlyderE(indicadores="derecha").tarjeta.bgr.p-4.mb-3.mb-lg-0
            div
              p.colr.text-bold <em>On the whole and generally speaking</em> (En general)
              p.colr <em>We use these expressions to imply that what you are saying is a general truth. Something everybody knows or thinks that is true. </em>
                span.colr_1 / Utilizamos estas expresiones para dar a entender que lo que se dice es una verdad general. Algo que todo el mundo sabe o piensa que es cierto.
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema7/1.svg", alt="alt")
                .col-lg-9
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="<i>On the whole</i>, people miss a lot of opportunities because they are afraid of losing their steadiness.  "
                    :audio="require('@/assets/componentes/audios/tema7/1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p En general, la gente pierde muchas oportunidades porque tiene miedo de perder su estabilidad. 
            div
              p.colr.text-bold <em>I think it is a good idea</em> (Pienso que es una buena idea)
              p.colr <em>This expression is used to introduce an idea that is considered as good not in general, but from the utterer’s point of view. </em>
                span.colr_1 / Esta expresión se utiliza para introducir una idea que se considera buena no en general, sino desde el punto de vista del emisor.
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema7/2.svg", alt="alt")
                .col-lg-9
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="<i>I think it is a good idea to</i> increase workers' salaries based on their performance, not on the time they have worked for the company."
                    :audio="require('@/assets/componentes/audios/tema7/2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p Creo que es una buena idea aumentar los salarios de los trabajadores en función de su rendimiento, no del tiempo que hayan trabajado para la empresa. 
            div
              p.colr.text-bold <em>More often than not</em> (La mayoría de las veces)
              p.colr <em>This expression is used to talk about something that happens most of the time. </em>
                span.colr_1 / Esta expresión se utiliza para hablar de algo que ocurre la mayoría de las veces. 
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema7/3.svg", alt="alt")
                .col-lg-9
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="Hiring new employees is a difficult task, and <i>more often than not</i>, you end up hiring bad workers."
                    :audio="require('@/assets/componentes/audios/tema7/3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p Contratar nuevos empleados es una tarea difícil, y la mayoría de las veces se acaba contratando a malos trabajadores.  

          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema7/4.svg", alt="alt")     

    p.colr <em>After learning these new expressions, let’s use them in the following conversation, so you can see an interaction in which they are used in a real-life situation; pay attention to the context and try to complete with the correct answer: </em>
      span.colr_1 / Después de aprender estas nuevas expresiones, vamos a utilizarlas en la siguiente conversación, para que pueda ver una interacción en la que se utilizan en una situación de la vida real. Preste atención al contexto y trate de completar con la respuesta correcta:

    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Practice expressions</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
   


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema7',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Argumentative expressions are sentences used to introduce ideas and tools to structure your speech whenever you are elaborating an argument. Depending on what type of argument you are constructing or the intention you want to put into it, you will have to use the appropriate one. Based on the previous introduction, it is noticeable that you have to understand under what context you can use these expressions. Let’s see them:</em>',
        textoEsp:
          'Las expresiones argumentativas son frases que sirven para introducir ideas y herramientas para estructurar su discurso cuando está elaborando un argumento. Dependiendo del tipo de argumento que esté construyendo o de la intención que quiera poner en él, tendrá que utilizar la adecuada. A partir de la introducción anterior, se nota que tiene que entender en qué contexto puede utilizar estas expresiones. Veámoslas:',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Harvey',
          img: require('@/assets/curso/tema7/5.svg'),
        },
        {
          nombre: 'Donna',
          img: require('@/assets/curso/tema7/6.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Harvey',
          textoIng:
            '<em>I</em> *** <em>it is a good idea to send our engineers to an updating course next month.</em>',
          textoEsp:
            'Creo que es una buena idea enviar a nuestros ingenieros a un curso de actualización el próximo mes.',
          audio: require('@/assets/componentes/audios/tema7/4.mp3'),
          palabra: '<em>think</em>',
        },
        {
          personaje: 'Donna',
          textoIng:
            '<em>I don’t think so. On the</em> ***, <em>they use these courses as free days.</em>',
          textoEsp:
            'No lo creo. En general, utilizan estos cursos como días libres.',
          audio: require('@/assets/componentes/audios/tema7/5.mp3'),
          palabra: '<em>whole</em>',
        },
        {
          personaje: 'Harvey',
          textoIng:
            '<em>You may be</em> ***, <em>but next month there isn’t much work to do.</em>',
          textoEsp:
            'Puede que tengas razón, pero el mes que viene no hay mucho trabajo que hacer.',
          audio: require('@/assets/componentes/audios/tema7/6.mp3'),
          palabra: '<em>right</em>',
        },
        {
          personaje: 'Donna',
          textoIng:
            '<em>However, more</em> *** <em>than not, a client asks for some random work</em>',
          textoEsp:
            'Sin embargo, lo más frecuente es que un cliente pida algún trabajo al azar.',
          audio: require('@/assets/componentes/audios/tema7/7.mp3'),
          palabra: '<em>often</em>',
        },
      ],
    },
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
