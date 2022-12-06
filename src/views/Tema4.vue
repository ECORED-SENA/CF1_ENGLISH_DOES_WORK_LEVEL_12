<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Relative clauses</em> (Cláusulas relativas)
    
    .row  
      .col-lg-2.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/1.svg", alt="alt")
      .col-lg-10
        TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row  
      .col-lg-10.d-flex.align-items-center.mb-3.mb-lg-0
        p.colr.mb-0 <em>Now, we keep on understanding the topic, and there are two types of relative clauses that depend on what type of information is provided. They can be defining or non-defining clauses. Let’s see what they refer to: </em>
          span.colr_1 / Ahora, seguimos entendiendo el tema, y hay dos tipos de oraciones relativas que dependen de qué tipo de información se proporciona. Pueden ser cláusulas definitorias o no definitorias. Veamos a qué se refieren:
      .col-lg-2
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/2.svg", alt="alt")
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 <em>Defining and non-defining clauses</em> (Cláusulas subordinadas especificativas y explicativas)

    .bg_grad-06
      .row
        .col-lg-3
          p.colr <em>When using relative clauses, it is important to discriminate the type of information being added: defining or non-defining:</em>
          p.colr_1 Cuando se utilizan cláusulas relativas, es importante discriminar el tipo de información que se añade:  especificativa o explicativa.
        .col-lg-9
          .tarjeta.bgr.p-4.mb-5
            SlyderA(tipo="b")
              div
                h4.text-center <em>Defining clauses</em> (Cláusulas especificativas)
                span.colr <em>They are necessary information added in order to understand what we refer to. When written, you use no comma</em> 
                span.colr_1 / Es información necesaria que se añade para entender a qué nos referimos. Cuando se escribe, no se utiliza ninguna coma. 
                .row.justify-content-center
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-3.mt-3
                      img.w-auto(src="@/assets/curso/tema4/3.svg", alt="alt")
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="The person <i>who</i> is in the office works for a big company."
                      :audio="require('@/assets/componentes/audios/tema4/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p La persona que está en la oficina trabaja para una gran empresa.
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-3.mt-3
                      img.w-auto(src="@/assets/curso/tema4/4.svg", alt="alt")
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="The documents <i>that</i> are on the desk are mine."
                      :audio="require('@/assets/componentes/audios/tema4/2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p Los documentos que están en el escritorio son míos. 
                TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
              div
                h4.text-center <em>Non-defining clauses</em> (Cláusulas explicativas)
                span.colr <em>They are extra pieces of information given that are not essential to understand the whole idea of the sentence. When written, they are placed in the middle of commas.</em> 
                span.colr_1 / Se trata de datos adicionales que no son imprescindibles para comprender la idea global de la frase. Cuando se escriben, se colocan en medio de comas. 
                .row.justify-content-center
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-3.mt-3
                      img.w-auto(src="@/assets/curso/tema4/5.svg", alt="alt")
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="Sara, <i>who</i> is an accountant, makes a lot of money."
                      :audio="require('@/assets/componentes/audios/tema4/3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p Sara, que es contadora, gana mucho dinero.
                  .col-lg-5
                    figure.d-flex.justify-content-center.mb-3.mt-3
                      img.w-auto(src="@/assets/curso/tema4/6.svg", alt="alt")
                    TarjetaAudio.color-secundario.bgr_2.mb-3(
                      texto="The presentation, <i>which</i> I just finished, is really important for the meeting. "
                      :audio="require('@/assets/componentes/audios/tema4/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p La presentación, que acabo de terminar, es realmente importante para la reunión. 
                TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
    
    .row
      .col-lg-3
        figure.d-flex.justify-content-center.mb-3.mt-3
          img.w-auto(src="@/assets/curso/tema4/7.svg", alt="alt")
      .col-lg-9.d-flex.align-items-center
        div
          p.colr <em>The words in bold in the examples are relative pronouns; however, they are not the only ones used when writing relative clauses; let’s see what other elements we use in English. </em>
          p.mb-0.colr_1 Las palabras en negrita en los ejemplos son pronombres relativos; sin embargo, no son los únicos que se utilizan al escribir cláusulas relativas; veamos qué otros elementos utilizamos en inglés.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 <em>Relative pronouns</em> (Pronombres relativos)
    
    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
      .col-lg-4
        figure.d-flex.justify-content-center.mb-3.mt-3
          img.w-auto(src="@/assets/curso/tema4/8.png", alt="alt")
    
    .row
      .col-lg-3
        figure.d-flex.justify-content-center.mb-3.mt-3
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema4/9.svg", alt="alt")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bgr_7")
          .row(titulo="<em>Who</em>").tarjeta.bgr.p-4
            p.colr <em>This pronoun is used to refer to people, it can be used as subject or object in the sentence. </em>
              span.colr_1 / Este pronombre se utiliza para referirse a personas, puede ser utilizado como sujeto u objeto en la frase.
            p Examples:
            .col-lg-4
              figure.d-flex.justify-content-center.mb-3.mt-3
                img.w-auto(src="@/assets/curso/tema4/10.svg", alt="alt")
            .col-lg-8
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="Daniela, <i>who</i> is in Human Resources, works from 9 to 5 on weekdays."
                :audio="require('@/assets/componentes/audios/tema4/5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p Daniela, que está en Recursos Humanos, trabaja de 9 a 5 entre semana.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The man <i>who</i> manages the production area is very efficient."
                :audio="require('@/assets/componentes/audios/tema4/6.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p El hombre que dirige el área de producción es muy eficiente.
          .row(titulo="<em>Whom</em>").tarjeta.bgr.p-4
            p.colr <em>This pronoun refers to the object of the sentences. it means that it can replace the person to whom the verb refers to. </em>
              span.colr_1 / Este pronombre se refiere al objeto de las frases. Significa que puede sustituir la persona a la que se refiere el verbo. 
            p Examples:
            .col-lg-4
              figure.d-flex.justify-content-center.mb-3.mt-3
                img.w-auto(src="@/assets/curso/tema4/11.svg", alt="alt")
            .col-lg-8
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The person <i>whom</i> you talked to is the biggest shareholder of the company."
                :audio="require('@/assets/componentes/audios/tema4/7.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p La persona con la que has hablado es el mayor accionista de la empresa.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="Is he the client <i>whom</i> you called?"
                :audio="require('@/assets/componentes/audios/tema4/8.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p ¿Es el cliente al que has llamado?  
          .row(titulo="<em>Which</em>").tarjeta.bgr.p-4
            p.colr <em>This pronoun refers to animals and things. It can be used as subject or object in the sentences.</em>
              span.colr_1 / Este pronombre se refiere a animales y cosas. Puede utilizarse como sujeto u objeto en las frases. 
            .col-lg-4
              figure.d-flex.justify-content-center.mb-3.mt-3
                img.w-auto(src="@/assets/curso/tema4/12.svg", alt="alt")
            .col-lg-8
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The office <i>which</i> you were in is the smallest in the building."
                :audio="require('@/assets/componentes/audios/tema4/9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p La oficina en la que estabas es la más pequeña del edificio.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The cat, <i>which</i> is on the second floor, is the manager’s pet."
                :audio="require('@/assets/componentes/audios/tema4/10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p El gato, que está en el segundo piso, es la mascota del director. 
          .row(titulo="<em>That</em>").tarjeta.bgr.p-4
            p.colr <em>This pronoun can be used to refer to people, things or animals. Therefore, it can replace “who” or “which” if needed.</em>
              span.colr_1 / Este pronombre puede utilizarse para referirse a personas, cosas o animales. Por lo tanto, puede sustituir a "<em>who</em>" o "<em>which</em>" si es necesario. 
            .col-lg-4
              figure.d-flex.justify-content-center.mb-3.mt-3
                img.w-auto(src="@/assets/curso/tema4/13.svg", alt="alt")
            .col-lg-8
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The person <i>that</i> was in the elevator is the CEO of the company."
                :audio="require('@/assets/componentes/audios/tema4/11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p La persona que estaba en el ascensor es el director general de la empresa.
              TarjetaAudio.color-secundario.bgr_2.mb-3(
                texto="The book <i>that</i> you have there is the most important one for the accounting area. "
                :audio="require('@/assets/componentes/audios/tema4/12.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p El libro que tiene ahí es el más importante para el área de contabilidad.  

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 <em>Relative adverbs</em> (adverbios relativos)

    .bg_grad-09
      .row.mb-5
        .col-lg-5
          TraduccionT.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
          figure.d-flex.justify-content-center
            img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema4/14.svg", alt="alt")
        .col-lg-7
           SlyderF.mb-5(columnas="col-xl-12")
            .tarjeta.bgr_6.p-4
              .row.justify-content-center.mb-3
                .col-3
                  img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop')
              h4.text-center.colr.text-bold <em>When</em>
              p.text-center.colr <em>This adverb refers to time.</em>
              p.text-center.corl_1 Este adverbio se refiere al tiempo.
              p.text-center.colr.text-bold <em>Examples:</em>
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="December is the month <i>when</i> I get the most clients."
                    :audio="require('@/assets/componentes/audios/tema4/13.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p Diciembre es el mes en el que recibo más clientes.
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="2008, <i>when</i> the crisis happened, was the worst year for the company."
                    :audio="require('@/assets/componentes/audios/tema4/14.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p 2008, cuando se produjo la crisis, fue el peor año para la empresa. 
            .tarjeta.bgr_6.p-4
              .row.justify-content-center.mb-3
                .col-3
                  img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop')
              h4.text-center.colr.text-bold <em>Where</em>
              p.text-center.colr <em>This adverb refers to location.</em>
              p.text-center.corl_1 Este adverbio se refiere a la ubicación.
              p.text-center.colr.text-bold <em>Examples:</em>
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="Paris, <i>where</i> we have our second branch, is a gold mine for investors."
                    :audio="require('@/assets/componentes/audios/tema4/15.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p París, donde tenemos nuestra segunda sucursal, es una mina de oro para los inversores.
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="The building <i>where</i> I work has more than 15 floors."
                    :audio="require('@/assets/componentes/audios/tema4/16.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p El edificio donde trabajo tiene más de 15 pisos. 
            .tarjeta.bgr_6.p-4
              .row.justify-content-center.mb-3
                .col-3
                  img(src='@/assets/curso/tema4/17.svg' alt='AvatarTop')
              h4.text-center.colr.text-bold <em>Why</em>
              p.text-center.colr <em>This adverb refers to reasons.</em>
              p.text-center.corl_1 Este adverbio se refiere a razones.
              p.text-center.colr.text-bold <em>Examples:</em>
              .row.justify-content-center
                .col-lg-10
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="The big recession is the reason <i>why</i> I am unemployed."
                    :audio="require('@/assets/componentes/audios/tema4/17.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p La gran recesión es la razón por la que estoy desempleado.
                  TarjetaAudio.color-secundario.bgr_2.mb-3(
                    texto="That is <i>why</i> I don’t trust anyone in my area."
                    :audio="require('@/assets/componentes/audios/tema4/18.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p Por eso no me fío de nadie en mi área. 
    
    p.colr <em>Now it’s time for you to practice what we have learned so far. Complete the following conversation using the correct relative pronoun or adverb. </em>
      span.colr_1 / Es hora de que practique lo que hemos aprendido hasta ahora. Complete la siguiente conversación utilizando los pronombres o adverbios relativos correctos.
    
    Dialogo.color-primario.mb-5.mt-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Pronoun or adverb</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Relatives clauses are extra pieces of information that complement a main sentence. However, they are not just added by writing more ideas in the text, they have to be introduced by relative pronouns or relative adverbs, depending on the type of information given. Let’s watch the next explanation.</em>',
        textoEsp:
          'Las cláusulas relativas son piezas de información adicionales que complementan una frase principal. Sin embargo, no se añaden simplemente escribiendo más ideas en el texto, deben introducirse mediante pronombres relativos o adverbios relativos, según el tipo de información que se dé. En este tema, se estudiará el uso de las cláusulas relativas y sus componentes más importantes. Revisemos el siguiente video explicativo:',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>In the sentences, we can tell that if we omit the information given after the words in <b>bold</b>, we would not know anything about the first elements given, because those parts of the sentences define them.</em>',
        textoEsp:
          'En las oraciones anteriores, podemos decir que, si omitimos la información dada después de las palabras en <b>negrita</b>, no sabríamos nada sobre los primeros elementos dados, porque esas partes de las frases los definen.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>In the examples, we can tell that if the information in between the commas is removed, we still have an understandable sentence.</em>',
        textoEsp:
          'En estos ejemplos, podemos decir que, si se elimina la información entre las comas, seguimos teniendo una frase comprensible.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Relative pronouns are  words that introduce  dependent clauses and connect them to independent clauses. They identify or give us additional information about the subject of the independent clause they relate to. The relative pronouns are: who, whom, what, which, and that. Now let’s see how each of them work:</em>',
        textoEsp:
          'Los pronombres relativos son palabras que introducen cláusulas dependientes y las conectan con cláusulas independientes; identifican o nos dan información adicional sobre el sujeto de la cláusula independiente con la que se relacionan. Los pronombres relativos son: <em>who, whom, what, which y that</em>. Veamos ahora cómo funciona cada uno de ellos: ',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>Relative adverbs are words that introduce dependent clauses and connect them to independent clauses. They identify or give us additional information about the subject of the independent clause they relate to. The difference with the relative pronouns is just the focus. Relative pronouns focus on the subject or object; on the other hand, relative adverbs focus on time, location, or reason. Let’s see them:</em>',
        textoEsp:
          'Los adverbios relativos son palabras que introducen cláusulas dependientes y las conectan con cláusulas independientes. Identifican o nos dan información adicional sobre el sujeto de la cláusula independiente con la que se relacionan. La diferencia con los pronombres relativos es solo el enfoque. Los pronombres relativos se centran en el sujeto u objeto; mientras que los adverbios relativos se centran en el tiempo, el lugar o la razón. Veámoslos: ',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Ana',
          img: require('@/assets/curso/tema4/18.svg'),
        },
        {
          nombre: 'Joe',
          img: require('@/assets/curso/tema4/19.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Ana',
          textoIng: 'Did you read the message *** they sent us?',
          textoEsp: '¿Leíste el mensaje que nos enviaron?',
          audio: require('@/assets/componentes/audios/tema4/19.mp3'),
          palabra: 'that',
        },
        {
          personaje: 'Joe',
          textoIng: 'No, at the moment *** I saw the notification I was busy.',
          textoEsp:
            'No, en el momento en que vi la notificación estaba ocupado.',
          audio: require('@/assets/componentes/audios/tema4/20.mp3'),
          palabra: 'when',
        },
        {
          personaje: 'Ana',
          textoIng:
            'The person *** sent it wants us to have a meeting tomorrow.',
          textoEsp:
            'La persona que lo envió quiere que tengamos una reunión mañana.',
          audio: require('@/assets/componentes/audios/tema4/21.mp3'),
          palabra: 'who',
        },
        {
          personaje: 'Joe',
          textoIng: 'Is he the person *** company is worth 10 billion dollars?',
          textoEsp:
            '¿Es la persona cuya empresa vale 10 mil millones de dólares?',
          audio: require('@/assets/componentes/audios/tema4/22.mp3'),
          palabra: 'whose',
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
