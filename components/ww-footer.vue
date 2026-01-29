<template>
  <footer>
    <div class="center">
      <div class="footer__column">
        <nuxt-link to="/"><img src="/images/work-work.svg" alt="Work Work Consulting"></nuxt-link>
        <nuxt-link to="#programas" visuals="transparent" color="secondary" class="button button--nopadding">Programas</nuxt-link>
      </div>
     <div class="footer__column footer__column--minimal">
        <p><strong>Endereço:</strong> SHS Bloco 06 - Asa Sul, Brasília - DF, 70316-102 - Bloco E Sala 1812</p>
        <p><strong>CNPJ:</strong> 61.943.953/0001-88</p>
        <p><strong>Contato:</strong> <a href="mailto:contato@workworkconsulting.com.br">contato@workworkconsulting.com.br</a></p>
     </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
footer {
  padding-block: 50px 100px;
  & > .center {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 36em) {
        flex-direction: column;
        gap: 40px
    }
  }

    .footer__column {
      display: flex;
      flex-direction: column;
      gap: 40px;
      * {
        color: var(--white-color);
      }
      img {
          max-width: 200px;
      }
    }

      .footer__column--minimal {
        gap: 16px;
      }
}
</style>