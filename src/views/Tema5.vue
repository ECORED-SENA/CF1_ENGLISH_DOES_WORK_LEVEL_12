<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 <em>Pronouns</em> (Pronombres)
    
    .row  
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
      .col-lg-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema5/1.svg", alt="alt")
    
    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 <em>Subject</em> (Sujeto)
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema5/2.svg", alt="alt")
      .col-lg-9
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
    
    .tarjeta.bgr_1.p-4
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>I</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>First singular person.</em>
          p.text-center Primera persona del singular.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>I</i> have worked here for years."
            :audio="require('@/assets/componentes/audios/tema5/1.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>YOU</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>Second person.</em>
          p.text-center Segunda persona.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>You</i> looked awesome in that meeting."
            :audio="require('@/assets/componentes/audios/tema5/2.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>SHE</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>Third singular person feminine.</em>
          p.text-center Tercera persona del singular femenino.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>She</i> is working really hard on that project."
            :audio="require('@/assets/componentes/audios/tema5/3.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>HE</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>Third singular person masculine.</em>
          p.text-center Tercera persona del singular masculino.
          p.text-center.text-bold.colr <em>EXAMPLE</em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>He</i> had managed these kinds of situations many times."
            :audio="require('@/assets/componentes/audios/tema5/4.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>IT</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>Third singular person impersonal.</em>
          p.text-center Tercera persona del singular impersonal.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>It</i> has been difficult to deal with this company."
            :audio="require('@/assets/componentes/audios/tema5/5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>WE</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>First plural person.</em>
          p.text-center Primera persona del plural.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<I>We</i> work harder in January."
            :audio="require('@/assets/componentes/audios/tema5/6.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
                img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop')
          p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
          p.text-center <em>THEY</em>
          p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
          p.mb-0.text-center <em>Third plural person.</em>
          p.text-center Tercera persona del plural.
          p.text-center.text-bold.colr <em>EXAMPLE </em>
          TarjetaAudio.color-secundario.bgr_2.mb-3(
            texto="<i>They</i> bought a new office building."
            :audio="require('@/assets/componentes/audios/tema5/7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              
    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 <em>Object</em> (Objeto)
    
    .bg_grad-10
      .row
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
        .col-lg-8
          .tarjeta.bgr_7.p-4
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>ME</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>First singular person.</em>
                p.text-center Primera persona del singular.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="My boss has promoted <i>me</i> three times this year."
                  :audio="require('@/assets/componentes/audios/tema5/8.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>YOU</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>Second person.</em>
                p.text-center Segunda persona.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="The supervisor called <i>you</i> twice, hurry up!"
                  :audio="require('@/assets/componentes/audios/tema5/9.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>HER</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>Third singular person feminine.</em>
                p.text-center Tercera persona del singular femenino.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="I met <i>her</i> at the last convention. "
                  :audio="require('@/assets/componentes/audios/tema5/10.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>HIM</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>Third singular person masculine.</em>
                p.text-center Tercera persona del singular masculino.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="Did you call <i>him</i> for the interview?"
                  :audio="require('@/assets/componentes/audios/tema5/11.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>IT</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>Third singular person impersonal.</em>
                p.text-center Tercera persona del singular impersonal.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="Henry finished the presentation but nobody liked <i>it</i>."
                  :audio="require('@/assets/componentes/audios/tema5/12.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>US</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>First plural person.</em>
                p.text-center Primera persona del plural.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="The boss gave <i>us</i> too many things to do this week."
                  :audio="require('@/assets/componentes/audios/tema5/13.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .tarjeta.bgr_6.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5
                      img(src='@/assets/curso/tema5/16.svg' alt='AvatarTop')
                p.text-center.colr.text-bold.mb-0 <em>PRONOUN</em>
                p.text-center <em>THEM</em>
                p.mb-0.text-center.colr.text-bold <em>DESCRIPTION</em>
                p.mb-0.text-center <em>Third plural person.</em>
                p.text-center Tercera persona del plural.
                p.text-center.text-bold.colr <em>EXAMPLE </em>
                TarjetaAudio.color-secundario.bgr_2.mb-3(
                  texto="George hired <i>them</i> because they are awesome engineers."
                  :audio="require('@/assets/componentes/audios/tema5/14.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    p.colr.mgt <em>In the following conversation, you will see an interaction in which the pronouns are used in a real-life situation; pay attention to the context and complete using the correct pronoun: </em>
      span.colr_1 / En la siguiente conversaci??n, ver?? una interacci??n en la que se utilizan los pronombres en una situaci??n de la vida real; preste atenci??n al contexto y complete usando el pronombre correcto:
  
    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Using the correct pronoun</em> - Completa la conversaci??n.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema5',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>There are different types of pronouns, which are words that take the place of nouns; namely, things, animals, people, ideas, or concepts. We  use them as subjects to make sentences or to avoid repeating the nouns that they refer to. Pronouns depend on what you need them for. In this component, we will work on the most common pronouns used in English. Let???s see them. </em>',
        textoEsp:
          'Existen diferentes tipos de pronombres, que son palabras que sustituyen a los sustantivos: cosas, animales, personas, ideas o conceptos. Los utilizamos como sujetos para hacer oraciones o para evitar la repetici??n de los sustantivos a los que se refieren. Los pronombres dependen del uso que se les d??. En este componente, vamos a trabajar los pronombres m??s comunes utilizados en ingl??s. Vamos a verlos. ',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Subject pronouns are the ones we use when referring to the element that acts as the subject of the sentence. The subject pronouns are: ???I, you, she, he, it, we, they.??? Something important about the first one is that ???I??? always has to be written in capital letters. Now, let???s see what each of them refers to.</em>',
        textoEsp:
          'Los pronombres de sujeto son los que utilizamos para referirnos al elemento que act??a como sujeto de la frase. Los pronombres de sujeto son: "<em>I, you, she, he, it, we, they</em>". Algo importante del primero es que "<em>I</em>" siempre debe escribirse en may??scula. Ahora, veamos a qu?? se refiere cada uno de ellos: ',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>Object pronouns are the ones we use when referring to the element that acts as the object of the sentence. The object pronouns are: ???me, you, her, him, it, us, them.??? Now, let???s see what each of them refers to.</em>',
        textoEsp:
          'Los pronombres de objeto son los que utilizamos para referirnos al elemento que act??a como objeto de la frase. Los pronombres de objeto son: "<em>me, you, her, him, it, us, them</em>". Veamos a qu?? se refiere cada uno de ellos.',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Juan',
          img: require('@/assets/curso/tema5/17.svg'),
        },
        {
          nombre: 'Dana',
          img: require('@/assets/curso/tema5/18.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Juan',
          textoIng:
            '<em>I texted</em> *** <em>many times before the meeting.</em>',
          textoEsp: 'Te mand?? muchos mensajes antes de la reuni??n.',
          audio: require('@/assets/componentes/audios/tema5/15.mp3'),
          palabra: '<em>you</em>',
        },
        {
          personaje: 'Dana',
          textoIng:
            '<em>I was talking to Maria, why didn???t you text</em> *** <em>too</em>?',
          textoEsp:
            'Estaba hablando con Mar??a, ??por qu?? no le mandaste un mensaje a ella tambi??n?',
          audio: require('@/assets/componentes/audios/tema5/16.mp3'),
          palabra: '<em>her</em>',
        },
        {
          personaje: 'Juan',
          textoIng:
            '<em>Marcos told</em> *** <em>that you were at lunch time.</em>',
          textoEsp: 'Marcos me dijo que estabas en la hora de almuerzo.',
          audio: require('@/assets/componentes/audios/tema5/17.mp3'),
          palabra: '<em>me</em>',
        },
        {
          personaje: 'Dana',
          textoIng: '<em>You know</em> ***, <em>he never knows anything.</em>',
          textoEsp: 'Ya lo conoces, ??l nunca sabe nada.',
          audio: require('@/assets/componentes/audios/tema5/18.mp3'),
          palabra: '<em>him</em>',
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
