<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Modal verbs</em> (Verbos modales) 

    TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up") 
    
    .row
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema3/1.svg", alt="alt")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bgr_7")
          .row(titulo="<em>Can</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="We <i>can</i> type faster than anyone in the office."
                :audio="require('@/assets/componentes/audios/tema3/1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Nosotros podemos teclear más rápido que cualquiera en la oficina.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="Sara <i>can</i> speak 5 languages."
                :audio="require('@/assets/componentes/audios/tema3/2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Sara puede hablar 5 idiomas. 
          .row(titulo="<em>Could</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>could</i> find my glasses last night."
                :audio="require('@/assets/componentes/audios/tema3/3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Yo pude encontrar mis gafas anoche.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="<i>Could</i> you help me finish this presentation?"
                :audio="require('@/assets/componentes/audios/tema3/4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Podrías ayudarme a terminar esta presentación?  
          .row(titulo="<em>Would</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="<i>Would</i> you give me a hand with this process?"
                :audio="require('@/assets/componentes/audios/tema3/5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Me echarías una mano con este proceso?
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>would</i> make copies everyday in my last job."
                :audio="require('@/assets/componentes/audios/tema3/6.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p En mi último trabajo, hacía copias todos los días.  
          .row(titulo="<em>Might</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="My parents <i>might</i> come in the morning"
                :audio="require('@/assets/componentes/audios/tema3/7.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Mis padres podrían venir a la mañana.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="<i>Might</i> I change my business plan this year?"
                :audio="require('@/assets/componentes/audios/tema3/8.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Podría cambiar mi plan de negocios este año?  
          .row(titulo="<em>Will</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="My boss <i>will</i> give me a raise next month if I achieve the goals."
                :audio="require('@/assets/componentes/audios/tema3/9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Mi jefe me dará un aumento de sueldo el mes que viene si consigo los objetivos.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>will</i> talk to my supervisor about these new policies."
                :audio="require('@/assets/componentes/audios/tema3/10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Hablaré con mi supervisor sobre estas nuevas políticas.  
          .row(titulo="<em>Shall</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo7")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="<i>Shall</i> we meet this afternoon?"
                :audio="require('@/assets/componentes/audios/tema3/11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Nos vemos esta tarde?
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>shall</i> be at my supervisor’s office tomorrow."
                :audio="require('@/assets/componentes/audios/tema3/12.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Estaré en la oficina de mi supervisor mañana.
    .row
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bgr_7")
          .row(titulo="<em>Should / Ought to</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo8")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="You <i>should</i> go to the presentation."
                :audio="require('@/assets/componentes/audios/tema3/13.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Deberías ir a la presentación.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="You <i>ought to</i> buy a new phone."
                :audio="require('@/assets/componentes/audios/tema3/14.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Deberías comprar un nuevo teléfono. 
          .row(titulo="<em>Must</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo9")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="She <i>must</i> finish the report by tomorrow."
                :audio="require('@/assets/componentes/audios/tema3/15.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Ella debe terminar el informe para mañana..
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="<i>Must</i> I take my vacation this month?"
                :audio="require('@/assets/componentes/audios/tema3/16.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Debo tomar mis vacaciones este mes?   
          .row(titulo="<em>Be able to</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo10")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="She <i>is able to</i> make everybody pay attention."
                :audio="require('@/assets/componentes/audios/tema3/17.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Ella es capaz de hacer que todo el mundo preste atención.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>am able to</i> speak Chinese."
                :audio="require('@/assets/componentes/audios/tema3/18.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Soy capaz de hablar chino.  
          .row(titulo="<em>Have got</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo11")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>have got</i> to work at least 3 extra hours a week."
                :audio="require('@/assets/componentes/audios/tema3/19.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Tengo que trabajar al menos 3 horas extra a la semana.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="Sara <i>has to</i> make copies every morning."
                :audio="require('@/assets/componentes/audios/tema3/20.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Sara tiene que hacer copias todas las mañanas.  
          .row(titulo="<em>Need to</em>")
            .col-lg-6
              TraduccionT.color-acento-botones(:dialogo="dialogo12")(data-aos="flip-up") 
            .col-lg-6
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="I <i>need to</i> re-write the report that I just sent."
                :audio="require('@/assets/componentes/audios/tema3/21.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Necesito reescribir el informe que acabo de enviar.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="George <i>needs to</i> stay at work to finish his duties"
                :audio="require('@/assets/componentes/audios/tema3/22.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p George necesita quedarse en el trabajo para terminar sus tareas.   
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema3/2.svg", alt="alt")
    
    p.colr <em>After seeing different examples, it’s time for you to practice what we have learned so far. Complete the following conversation using the modal verbs we just worked on. </em>
      span.colr_1 / Después de diferentes ejemplos, es hora de que practique lo que hemos aprendido hasta ahora. Complete la siguiente conversación utilizando los verbos modales con los que acabamos de trabajar.
    
    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Modal verbs practice</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Modal verbs are words used to express some kind of hypothetical conditions, such as advice, capability, or request. They are used along with a main verb to change the way they are understood. As they are auxiliary verbs, they can’t necessarily be used on their own. Taking this into consideration, let’s see how each of them works in sentences:</em>',
        textoEsp:
          'Los verbos modales son palabras que se utilizan para expresar algún tipo de condición hipotética, como un consejo, una capacidad o una petición. Se utilizan junto con un verbo principal para cambiar la forma en que este se entiende. Como son verbos auxiliares, no pueden usarse necesariamente solos. Teniendo esto en cuenta, veamos cómo funciona cada uno de ellos en las frases:',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>“Can” expresses ability or possibility. It is not conjugated with the third person in simple present tense, and the verbs after CAN are not conjugated either. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Can</em>” expresa habilidad o posibilidad. No se conjuga con la tercera persona en presente simple, y los verbos que siguen a <em>CAN</em> tampoco se conjugan. Veamos algunos ejemplos.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>“Could” is the past form of CAN, but it is also used to express possibility. Besides, it is used as a more formal way of asking for favors. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Could</em>” es la forma pasada de <em>CAN</em>, pero también se utiliza para expresar posibilidad. Además, se utiliza como una forma más formal de pedir favores. Veamos algunos ejemplos.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>“Would” is used to ask kindly. It is also used to talk about routines in the past and to express conditional sentences. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Would</em>” se utiliza para pedir amablemente. También se utiliza para hablar de rutinas en el pasado y para expresar oraciones condicionales. Veamos algunos ejemplos.',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>“Might” is used to give suggestions, express possibilities in the future, and it is also used for offers and requests. Let’s see some examples. </em>',
        textoEsp:
          '“<em>Might</em>” se utiliza para dar sugerencias, expresar posibilidades en el futuro y también se utiliza para ofertas y peticiones. Veamos algunos ejemplos. ',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>“Will” is used to turn verbs into the future; however, it is also used to express decisions made right in the moment. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Will</em>” se utiliza para convertir los verbos en futuro; sin embargo, también se utiliza para expresar decisiones tomadas en el momento. Veamos algunos ejemplos.',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>“Shall” is used to talk about the future, but also, it is used to invite someone to do something in a polite way. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Shall</em>” se utiliza para hablar del futuro, pero también se utiliza para invitar a alguien a hacer algo de forma educada. Veamos algunos ejemplos.',
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>“Should” and “ought to”, are used to give advice, and there is no difference between the two. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Should</em>” y “<em>ought to</em>” se utilizan para dar consejos, y no hay diferencia entre ambos. Veamos algunos ejemplos.',
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em>“Must” expresses obligation and commitment. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Must</em>” expresa obligación y compromiso. Veamos algunos ejemplos.',
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em>“Be able to” expresses ability or possibility as the modal verb CAN.  Let’s see some examples.</em>',
        textoEsp:
          '“<em>Be able to</em>” expresa capacidad o posibilidad como el verbo modal <em>CAN</em>.  Veamos algunos ejemplos. ',
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em>“Have got” refers to obligation, but it is not about commitment. You have to conjugate the verb HAVE with the third person, as HAS. Let’s see some examples.</em>',
        textoEsp:
          '“<em>Have got</em>” se refiere a obligación, pero no se trata de un compromiso. Hay que conjugar el verbo <em>HAVE</em> con la tercera persona, como <em>HAS</em>. Veamos algunos ejemplos. ',
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em>“Need to” expresses necessity. The verb “need” can be conjugated in different tenses.  Let’s see some examples.</em>',
        textoEsp:
          '“<em>Need to</em>” expresa necesidad. El verbo “<em>need</em>” puede conjugarse en diferentes tiempos. Veamos algunos ejemplos. ',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Marcos',
          img: require('@/assets/curso/tema3/3.svg'),
        },
        {
          nombre: 'Fanny',
          img: require('@/assets/curso/tema3/4.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Marcos',
          textoIng: '*** <em>you help me organize these documents?</em>',
          textoEsp: '¿Podrías ayudarme a organizar estos documentos?',
          audio: require('@/assets/componentes/audios/tema3/23.mp3'),
          palabra: '<em>Could</em>',
        },
        {
          personaje: 'Fanny',
          textoIng:
            '<em>Of course! I</em> *** <em>to finish my report first.</em>',
          textoEsp: 'Por supuesto. Primero tengo que terminar mi informe.',
          audio: require('@/assets/componentes/audios/tema3/24.mp3'),
          palabra: '<em>need</em>',
        },
        {
          personaje: 'Marcos',
          textoIng: '<em>Thanks! I</em> *** <em>finish this by tomorrow.</em>',
          textoEsp: '¡Gracias! Tengo que terminarlo para mañana.',
          audio: require('@/assets/componentes/audios/tema3/25.mp3'),
          palabra: '<em>must</em>',
        },
        {
          personaje: 'Fanny',
          textoIng: '<em>Don’t worry, we</em> *** <em>finish it.</em>',
          textoEsp: 'No te preocupes, lo terminaremos.',
          audio: require('@/assets/componentes/audios/tema3/26.mp3'),
          palabra: '<em>will</em>',
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
