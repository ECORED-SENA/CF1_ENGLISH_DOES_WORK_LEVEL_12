<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 <em>Verbs as subjects</em> (Verbos como sujetos)
    
    .bg_grad-11
      .row.mb-5
        .col-lg-8
          TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
        .col-lg-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema6/1.svg", alt="alt")
      
      .row.mb-5.justify-content-center
        .col-md-10.col-lg-2.bgr_9.p-4.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
          .text-center
            p.text-bold <em>Base form / Imperative: Go</em>
            p Forma base / Imperativo: <em>Go</em>
        .col-md-10.col-lg-2.bgr_10.p-4.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
          .text-center
            p.text-bold <em>Third person in present: Goes</em>
            p Tercera persona en presente: <em>Goes</em>
        .col-md-10.col-lg-2.bgr_10.p-4.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
          .text-center
            p.text-bold <em>Infinitive: To go</em>
            p Infinitivo: <em>To go</em>
        .col-md-10.col-lg-2.bgr_10.p-4.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
          .text-center
            p.text-bold <em>Past tense: Went</em>
            p Tiempo pasado: <em>Went</em>
        .col-md-10.col-lg-2.bgr_10.p-4.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
          .text-center
            p.text-bold <em>Past Participle: Gone</em>
            p Participio pasado: <em>Gone</em>
        .col-md-10.col-lg-2.bgr_11.p-4.d-flex.align-items-center.justify-content-center
          .text-center
            p.text-bold <em>Gerund / Present participle: Going</em>
            p Gerundio / Participio presente: <em>Going</em>

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema6/2.png", alt="alt")
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
      
    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Verbs as subjects</em> - Completa la conversaci??n.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema6',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>The verbs in English can be used in different forms depending on what you want to communicate with them. In this component, we are going to work on how to use verbs as subjects, and to do that, we have to use them in a specific form. But first, we have to learn all the verb forms, so you can understand them better. Let???s see them based on the verb ???to go???.</em>',
        textoEsp:
          'Los verbos en ingl??s se pueden utilizar de diferentes formas, dependiendo de lo que se quiera comunicar con ellos. En este componente, vamos a trabajar en c??mo usar los verbos como sujetos, y para ello, tenemos que usarlos de una forma espec??fica. Pero antes, tenemos que aprender todas las formas verbales, para que pueda entenderlas mejor. Vamos a verlas en funci??n del verbo ???<em>to go</em>???.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>In English, verbs cannot be used as subjects in their base form. So, verbs are turned into nouns by using the ING form. We call this a <b>gerund</b>. The present participle is also a verb in ING form, however, this name makes reference to a verb conjugated due to a continuous tense or a verb pattern. In Spanish, we use the infinitive form in order to present verbs. Therefore, this use of verbs as subjects in English might be a little tricky at the beginning. Let???s see how it works in everyday conversations and complete with the correct option:</em>',
        textoEsp:
          'En ingl??s, los verbos no pueden usarse como sujetos en su forma base. Por eso, los verbos se convierten en sustantivos utilizando la forma <em>ING</em>. A esto lo llamamos gerundio. El participio presente tambi??n es un verbo en forma <em>ING</em>, sin embargo, este nombre hace referencia a un verbo conjugado por un tiempo continuo o un patr??n verbal. En espa??ol, utilizamos la forma de infinitivo para presentar los verbos. Por lo tanto, este uso de los verbos como sujetos en ingl??s puede ser un poco complicado al principio. Veamos c??mo funciona en las conversaciones cotidianas y complete con la opci??n correcta:',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Frank',
          img: require('@/assets/curso/tema6/3.svg'),
        },
        {
          nombre: 'Debby',
          img: require('@/assets/curso/tema6/4.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Frank',
          textoIng:
            '*** <em>in between work activities has helped me a lot these last two months.</em>',
          textoEsp:
            'Hacer ejercicio entre las actividades laborales me ha ayudado mucho estos dos ??ltimos meses.',
          audio: require('@/assets/componentes/audios/tema6/1.mp3'),
          palabra: '<em>Exercising</em>',
        },
        {
          personaje: 'Debby',
          textoIng:
            '<em>Drinking coffee as you are</em> *** <em>lately won???t help you at all.</em>',
          textoEsp:
            'Tomar caf?? como lo est??s haciendo ??ltimamente no te ayudar?? en absoluto.',
          audio: require('@/assets/componentes/audios/tema6/2.mp3'),
          palabra: '<em>doing</em>',
        },
        {
          personaje: 'Frank',
          textoIng:
            '<em>Come on, Debby!</em> *** <em>coffee is not that bad!</em>',
          textoEsp: '??Vamos, Debby! ??Beber caf?? no es tan malo!',
          audio: require('@/assets/componentes/audios/tema6/3.mp3'),
          palabra: '<em>Drinking</em>',
        },
        {
          personaje: 'Debby',
          textoIng:
            '<em>Anyways, working out won???t help you much if you don???t</em> *** <em>your diet.</em>',
          textoEsp:
            'De todos modos, hacer ejercicio no ayudar?? mucho si no cambias tu dieta.',
          audio: require('@/assets/componentes/audios/tema6/4.mp3'),
          palabra: '<em>change</em>',
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
