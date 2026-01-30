<template>
  <footer>
    <div class="center">
        <nuxt-link to="/"><img src="/images/bluecode-ng.svg" alt="Blue Code"></nuxt-link>
        <p>Criamos tecnologia que acelera negócios</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
footer {
  p {
    color: var(--white-color);
    font-weight: 300;
    font-size: 1.1em;
    line-height: 1.2em;
    letter-spacing: .08em;
  }
  padding-block: 100px 160px;
  & > .center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px
  }
}
</style>