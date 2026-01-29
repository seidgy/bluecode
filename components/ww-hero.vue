<template>
  <section class="ww-hero">
    <ww-menu />
    <div class="ww-hero__content">
      <div class="gradient">
        <img class="gradient__decor" src="/images/decor-3.webp" alt="Decoração" aria-hidden="true" />
        <img class="gradient__cursor gradient__cursor--1" src="/images/cursor-1.webp" alt="Cursor" aria-hidden="true" />
        <img class="gradient__cursor gradient__cursor--2" src="/images/cursor-2.webp" alt="Cursor" aria-hidden="true" />
      </div>
      <div class="center">
        <slot></slot>
        <nuxt-link v-if="button" to="/inscricao" visuals="primary" color="secondary" class="button uppercase">Inscreva-se</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped lang="scss">
  .ww-hero {
    padding-bottom: 170px;
    overflow: hidden;
  }
    .ww-hero__content {
      position: relative;
    }

    .gradient {
      background: var(--bg-gradient);
      position: absolute;
      top: 0;
      left: 0;
      right: 25%;
      bottom: 0;
      @media(max-width:36em) {
        right: 5%;
      }
      img {
        position: absolute;
      }
      .gradient__decor {
        max-width: 150px;
        width: 20%;
        top: 10%;
        right: 0;
        transform: translateX(65%);
        animation-duration: 10s;
        animation-name: decor;
        animation-iteration-count: infinite;
        @media(max-width:36em) {
            top: 5%;
            right: 10%;
        }
      }
      .gradient__cursor--1 {
        max-width: 180px;
        width: 20%;
        right: 0;
        top: 40%;
        transform: translateX(110%);
        animation-duration: 10s;
        animation-name: cursor-1;
        animation-iteration-count: infinite;
        @media(max-width:36em) {
            bottom: 10%;
            top: auto;
            right: 15%;
        }
      }
      .gradient__cursor--2 {
        max-width: 215px;
        width: 20%;
        right: 0;
        top: 38%;
        transform: translateX(72%);
        animation-duration: 10s;
        animation-name: cursor-2;
        animation-iteration-count: infinite;
        @media(max-width:36em) {
            bottom: 12%;
            top: auto;
            right: 15%;
        }
      }
    }

    .button {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }

@keyframes decor {
  0% {
    transform: translateX(65%);
    opacity: 0.5;
  }

  50% {
    
    transform: translateX(55%);
    opacity: 1;
  }

  100% {
    transform: translateX(65%);
    opacity: 0.5;
  }
}

@keyframes cursor-1 {
  0% {
    transform: translateX(110%);
  }

  50% {
    
    transform: translateX(120%);
  }

  100% {
    transform: translateX(110%);
  }
}

@keyframes cursor-2 {
  0% {
    transform: translateX(72%);
  }

  50% {
    
    transform: translateX(65%);
  }

  100% {
    transform: translateX(72%);
  }
}
</style>