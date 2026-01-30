<template>
    <nav>
        <div class="center">
            <div class="ww-nav">
                <nuxt-link to="/"><img src="/images/bluecode.svg" alt="Work Work Consulting"></nuxt-link>
                <div class="ww-nav__actions">
                    <a href="https://wa.me/556182091530" target="_blank" rel="noopener noreferrer" visuals="primary" color="secondary" class="button button--sm uppercase">Falar com especialista</a>
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
        padding-block: 36px;
        @media(max-width:36em) {
            padding-block: 24px;
        }
    }

    img {
        max-width: 140px;
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
