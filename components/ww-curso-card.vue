<template>
  <div class="curso-card">
    <img :src="curso.imagem" :alt="curso.titulo" />
    <h4>{{ curso.titulo }}</h4>
    <p class="curso-card__desc">{{ curso.descricao }}</p>
    <div v-if="curso.valor > 0">
      <p><strong>Valor de inscrição:</strong></p>
      <p class="curso-card__valor">R$ {{ curso.valor }}</p>
    </div>
    <ul class="aulas" v-if="curso.aulas">
      <li class="aulas__titulo"><h5 visuals="h4">Aulas</h5></li>
      <li v-for="a in curso.aulas">
        <h6 visuals="h5">{{ a.titulo }}</h6>
        <p>{{ a.descricao }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  curso: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .curso-card {
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

    .curso-card__desc {
      color: var(--base-color);
      @media(min-width: 36em){
        min-height: 100px;
      }
    }

    .curso-card__valor {
      color: var(--accent-color);
      font-weight: 700;
      font-size: 1.5em;
      padding-top: 8px;
    }
  }

  h4 {
    @media(min-width: 36em){
      height: 60px;
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