<template lang="pug">
.dialogoTraduccionChat.p-5
  .row.justify-content-center.align-items-center.g-0
    .col-md-12
      .row.g-0.flex-nowrap.dialogoTraduccionChat__chat__item.mb-3(v-for="(line, lineIdx) in dialogoComputed")
        .col-auto.dialogoTraduccionChat__chat__item__person.mt-3
          span.text-bold(v-html="line.personaje.nombre")
        .col.dialogoTraduccionChat__chat__item__message__container
          .dialogoTraduccionChat__chat__item__message
            .row.g-0.align-items-center.dialogoTraduccionChat__chat__item__message__bubble
              .col.dialogoTraduccionChat__chat__item__message__text.me-2
                .dialogoTraduccionChat__chat__item__message__text__eng.h5.mb-0
                  template(v-for="(phrase, phraseIdx) in line.textoIng")
                    .d-inline.dialogoTraduccionChat__chat__item__message__text__drop(
                      v-if="phrase === '*'"
                    )
                      span.dialogoTraduccionChat__chat__item__message__text__drop__response(
                        v-if="answers[line.id]"
                        v-html="answers[line.id].palabra"
                      )
                      span.dialogoTraduccionChat__chat__item__message__text__drop__default(v-else)
                    span(v-else :key="`phrase-${line.id}-${phraseIdx}`" v-html="phrase")
                .dialogoTraduccionChat__chat__item__message__text__esp.text-small(
                  v-if="translations.includes(line.id)"
                )
                  hr.color.my-2
                  template(v-for="phrase in line.textoEsp")
                    .d-inline.traduccion__chat__item__message__text__drop(
                      v-if="phrase === '*'"
                    )
                      span.traduccion__chat__item__message__text__drop__default
                    span(v-else v-html="phrase")
                                   
              .col-auto.dialogoTraduccionChat__chat__item__message__audio
                Audio(
                  :audio="line.audio"
                  @audio-hover="mostrarIndicadorAudio = false"
                  ) 
            .d-flex.justify-content-end.me-3
              button.traduccion__chat__item__message__translate-btn.text-small.brad(
                @click="toggleTranslate(line.id)"
              ) Ver traducción                        
</template>

<script>
import Audio from './Audio.vue'
export default {
  name: 'Chat',
  components: {
    Audio,
  },
  props: {
    dialogo: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    uid: Math.floor(Math.random() * 10 ** 10),
    touchScreen: false,
    dragId: null,
    dropId: null,
    answers: {},
    translations: [],
    score: null,
  }),
  computed: {
    dialogoComputed() {
      if (!this.dialogo.dialogo) return []
      return this.dialogo.dialogo.map((line, idx) => ({
        ...line,
        id: this.uid + idx + 1,
        textoIng: this.splitPhrase(line.textoIng),
        textoEsp: this.splitPhrase(line.textoEsp),
        personaje: this.dialogo.personajes.find(
          personaje => personaje.nombre === line.personaje,
        ),
      }))
    },
  },
  methods: {
    // HELPERS
    toggleTranslate(id) {
      if (this.translations.includes(id)) {
        this.translations = this.translations.filter(tId => tId !== id)
      } else {
        this.translations.push(id)
      }
    },
    onCheck() {
      const finalCheck = Object.values(this.answers).every(
        answer => answer.dragId === answer.dropId,
      )
      this.score = finalCheck ? 'approved' : 'disapproved'
    },
    reset() {
      this.answers = {}
      this.score = null
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    splitPhrase(phrase) {
      return phrase
        .replace(/^\s+|\s+$/g, '&nbsp;')
        .replace('***', '___*___')
        .split('___')
        .filter(Boolean)
    },
  },
}
</script>

<style lang="sass">
.dialogoTraduccionChat
  border-radius: 10px
  overflow: hidden
  border: 2px solid $color-acento-contenido
  &__chat
    overflow-y: scroll
    overflow-x: hidden
    height: 450px
    margin-right: 1.5rem
    padding-top: 0.5rem
    padding-right: 1.5rem
    &::-webkit-scrollbar
      width: 10px
    &::-webkit-scrollbar-track
      border-radius: 10px
      background-color: #e5e5e5
    &::-webkit-scrollbar-thumb
      background-color: #b4bfd8
      height: 20px
      border-radius: 10px
    &::-webkit-scrollbar-thumb:hover
      background-color: $color-acento-contenido
    &::-webkit-scrollbar-thumb:active
      background-color: $color-acento-contenido
    @media only screen and (max-width: 768px)
      height: 300px
      margin-right: 0
      padding-right: 0.5rem
      .dialogoTraduccionChat__chat__item
        margin-right: 0
    @media only screen and (max-width: 450px)
      height: 250px
    &__item
      display: flex
      align-items: flex-start
      &__person
        text-align: center
        margin-right: 1em
        img
          width: 50px
          height: 50px
          border-radius: 50%

      &__message
        display: inline-block
        &__container
        &__bubble
          text-align: left
          padding: 1em
          border-radius: 10px
          background-color: $white
          -webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2)
          box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2)
          position: relative
          &:before
            content: ""
            position: absolute
            top: 0
            left: 0
            width: 15px
            height: 15px
            transform: translate(-5px, 20px ) rotate(45deg)
            background-color: white
          @media (max-width: 768px)
            padding: 0.5em
        &__audio


      &:nth-child(even)
        flex-direction: row-reverse

        .dialogoTraduccionChat__chat__item
          &__person
            margin-right: 0
            margin-left: 1em
          &__message
            &__container
              text-align: right
            &__bubble
              &:before
                left: auto
                right: 0
                transform: translate(5px, 20px ) rotate(45deg)

  $colors-list: ( 'color-primario': $color-primario, 'color-secundario': $color-secundario, 'color-acento-contenido': $color-acento-contenido, 'color-acento-botones': $color-acento-botones, 'color-adicional-1': $color-adicional-1, 'color-adicional-2': $color-adicional-2)

  @each $name, $value in $colors-list
    &.#{$name}
      border-color: $value
      button
        background-color: $value
        color: white
        &:hover
          background-color: lighten($value, 20%)
          color: white
      .dialogo
        &__header
          background-color: $value
          *
            color: textColor($value)
.brad
  border-radius: 0px 0px 10px 10px
.color
  color: $color-acento-contenido
  opacity: 1
  height: 1px !important
  border: 0px
.brad
  border-radius: 0px 0px 10px 10px
.textAudio
  &__ing
    color: $color-sistema-texto
    font-style: italic
  &__esp
    color: $color-sistema-texto
</style>
