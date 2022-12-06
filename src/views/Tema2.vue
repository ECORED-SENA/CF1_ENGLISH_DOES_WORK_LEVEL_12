<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Third conditional</em> (Tercer condicional)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")

    .bg_grad-08 
      h4.colr.mb-5 <em>Condition</em> (Condición) 

      .row.mb-5
        .col-lg-9
          TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
        .col-lg-3(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/2.svg", alt="alt")

      p.text-center <em>Let’s see the general structure in the following chart:</em> / Veamos la estructura general en el siguiente cuadro:

      .tarjeta.bgr.p-4.mb-5
        .row
          .col-lg-3
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/3.svg", alt="alt")
          .col-lg-9
            .row.mb-3
              .col-lg-1.mt-3.mb-3.mb-lg-0
                Audio.color-acento-botones.mx-lg-3.m-auto(
                :audio="require('@/assets/componentes/audios/tema2/1.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-11
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema2/4.svg", alt="alt")
            p.colr.text-center <em>For example, listen and repeat:</em>
            .row
              .col-lg-6
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="We had hired a new chef when my brother gave me your CV."
                  :audio="require('@/assets/componentes/audios/tema2/2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-lg-6
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="Nina had seen the whole series before I started watching it"
                  :audio="require('@/assets/componentes/audios/tema2/3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        p.colr <em>In the examples, we have two events in the past. Only the first part of the sentence uses past perfect because that is the event that happened first. Therefore, past perfect allows us to place an event in the past before another event in the past without using any other type of time markers or expressions.</em>
        p.colr_1.mb-0 En el ejemplo, tenemos dos acontecimientos en el pasado. Solo la primera parte de la frase utiliza el pretérito perfecto porque es el acontecimiento que ocurrió primero. Por lo tanto, el pretérito perfecto nos permite poner un acontecimiento en el pasado antes de otro acontecimiento en el pasado sin utilizar ningún otro tipo de marcadores de tiempo o expresiones.

    h4.colr.mb-5.mgt <em>Result</em> (Resultado)

    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
      .col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/5.png", alt="alt")
    
    p.colr.text-center <em>Let’s see the general structure in the following chart: </em>
      span.colr_1 / Veamos la estructura general en el siguiente cuadro:

    .bgr_6.p-4.mb-5
      .row
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/6.svg", alt="alt")
        .col-lg-9
          .row.mb-3
            .col-lg-1.mt-3.mb-3.mb-lg-0
              Audio.color-acento-botones.mx-lg-3.m-auto(
              :audio="require('@/assets/componentes/audios/tema2/4.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .col-lg-11
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/7.svg", alt="alt")
          p.colr.text-center <em>For example, listen and repeat:</em>
          .row
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="Laura would have come if I had told her in time."
                  :audio="require('@/assets/componentes/audios/tema2/5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="George would have brought his car if he had put gas."
                :audio="require('@/assets/componentes/audios/tema2/6.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    .bg_grad-08 
      h4.colr.mb-5 <em>Structures</em> (Estructuras)

      .row.mb-5
        .col-lg-9
          TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
        .col-lg-3(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/8.png", alt="alt")

      p.text-center <em>Let’s see the general structure in the following chart:</em> / Veamos la estructura general en el siguiente cuadro:

      .tarjeta.bgr.p-4.mb-5
        .row
          .col-lg-3.mb-3.mb-lg-0
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/9.svg", alt="alt")
          .col-lg-9
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/10.svg", alt="alt")
            p.text-center.colr <em>There is another way of writing these sentences, let’s see it. </em>
              span.colr_1 / Hay otra forma de escribir estas oraciones, veámosla.
            .row.mb-3
              .col-lg-1.mt-3.mb-3.mb-lg-0
                Audio.color-acento-botones.mx-lg-3.m-auto(
                :audio="require('@/assets/componentes/audios/tema2/7.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-11
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema2/11.svg", alt="alt")
            
    p.colr.mgt <em>It’s time for you to practice what we have learned so far. Complete the following conversation using the structures of the third conditional: </em>
      span.colr_1 / Es hora de que practique lo que hemos aprendido hasta ahora. Complete la siguiente conversación utilizando las estructuras del tercer condicional:

    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Third conditional practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.






</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The third conditional is used to talk about situations of the past that did not occur, but we fantasize about what could have happened. In order to do that, it is necessary to use two elements, as in all the conditionals: the condition, in this case we need the past perfect, and to show the result, we use the expression “would have” plus the verb in past participle.</em>',
        textoEsp:
          'El tercer condicional se utiliza para hablar de situaciones del pasado que no ocurrieron, pero fantaseamos con lo que podría haber ocurrido. Para ello, es necesario utilizar dos elementos, como en todos los condicionales: la condición, en este caso necesitamos el pasado perfecto, y para mostrar el resultado, utilizamos la expresión "<em>would have</em>" más el verbo en participio pasado.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The condition is created by using the past perfect, which is a tense that helps you show events that occurred before another event in the past. It is similar to present perfect in structure; however, past perfect uses “HAD” as the auxiliary verb. There isn’t a different auxiliary verb for the third person (he, she, it), all of the pronouns use the same auxiliary verb (HAD). </em>',
        textoEsp:
          'La condición se crea utilizando el pasado perfecto, que es un tiempo verbal que ayuda a mostrar eventos que ocurrieron antes de otro evento en el pasado. Su estructura es similar a la del pretérito perfecto, sin embargo, el pretérito perfecto utiliza "<em>HAD</em>" como verbo auxiliar. No hay un verbo auxiliar diferente para la tercera persona (<em>he, she, it</em>), todos los pronombres utilizan el mismo verbo auxiliar (<em>HAD</em>).',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The result in the third conditional is expressed with “would have”, which is just an expression that helps you show something you would have liked to do. There is only one important rule: the verb after “would have” has to be written in the past participle.</em>',
        textoEsp:
          'El resultado en el tercer condicional se enuncia con "would have", que es solo una expresión que le ayuda a mostrar algo que le hubiera gustado hacer. Solo hay una regla importante: el verbo que sigue a "<em>would have</em>" tiene que escribirse en pasado participio.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>There isn’t a specific way of writing conditional sentences, and the third conditional is not an exception. Both ways, starting with the conditional word or with the result, are ok, it only depends on the intention or the emphasis of the sentence.</em>',
        textoEsp:
          'No hay una forma específica de escribir oraciones condicionales, y el tercer condicional no es una excepción. De ambas formas, empezando por la palabra condicional o por el resultado, está bien, solo depende de la intención o el énfasis de la oración.',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Harold',
          img: require('@/assets/curso/tema2/12.svg'),
        },
        {
          nombre: 'Norma',
          img: require('@/assets/curso/tema2/13.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Harold',
          textoIng: '*** you have gone to Europe if you had the money?',
          textoEsp: '¿Habrías ido a Europa si tuvieras el dinero?',
          audio: require('@/assets/componentes/audios/tema2/8.mp3'),
          palabra: 'Would',
        },
        {
          personaje: 'Norma',
          textoIng: 'Of course! But it *** too expensive.',
          textoEsp: '¡Por supuesto! Pero era demasiado caro.',
          audio: require('@/assets/componentes/audios/tema2/9.mp3'),
          palabra: 'was',
        },
        {
          personaje: 'Harold',
          textoIng:
            'I know, however, if you had *** money last year, you would have had enough money to go.',
          textoEsp:
            'Sin embargo, sé que si hubieras ahorrado dinero el año pasado, habrías tenido suficiente dinero para ir.',
          audio: require('@/assets/componentes/audios/tema2/10.mp3'),
          palabra: 'saved',
        },
        {
          personaje: 'Norma',
          textoIng: 'Yes, I *** too much money on my car.',
          textoEsp: 'Sí, gasté demasiado dinero en mi automóvil.',
          audio: require('@/assets/componentes/audios/tema2/11.mp3'),
          palabra: 'spent',
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
