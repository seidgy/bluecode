<template>
  <div class="servico-card">
    <img :src="servico.image" :alt="servico.titulo" />
    <h4>{{ servico.title }}</h4>
    <p class="servico-card__desc">{{ servico.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  servico: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .servico-card {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    p {
      font-size: 1.25em;
      strong {
        color: var(--base-color);
      }
    }

    .servico-card__desc {
      color: var(--base-color);
    }
  }


  img {
    max-width: 80%;
    align-self: center;
    max-height: 250px;
  }

  .aulas {
      list-style: none;
      padding-left: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      .aulas__titulo {
        padding-bottom: 8px;
      }
  }
</style>