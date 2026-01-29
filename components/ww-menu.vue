<template>
    <nav>
        <div class="center">
            <div class="ww-nav">
                <nuxt-link to="/"><img src="/images/work-work.svg" alt="Work Work Consulting"></nuxt-link>
                <div class="ww-nav__actions">
                    <nuxt-link v-if="route.name === 'cursos'" to="#programas" visuals="transparent" color="secondary" class="button button--sm">Programas</nuxt-link>
                    <nuxt-link v-else-if="route.name === 'index'" to="/cursos" visuals="transparent" color="secondary" class="button button--sm">Cursos</nuxt-link>
                    <nuxt-link to="/inscricao" visuals="primary" color="secondary" class="button button--sm uppercase">Inscreva-se</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
const route = useRoute()
</script>
<style scoped lang="scss">
    nav {
        padding-block: 45px;
        @media(max-width:36em) {
            padding-block: 24px;
        }
    }

    img {
        max-width: 200px;
        @media(max-width:36em) {
            max-width: 100px;
        }
    }

    .ww-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

        .ww-nav__actions {
            display: flex;
            align-items: center;
            gap: 5px;
        }
</style>
