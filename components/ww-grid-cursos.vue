<template>
    <div class="trilha">
        <h3 visuals="h2" class="align-center">Trilha {{ trilha.numero }}: {{ trilha.titulo }}</h3>
        <div class="trilha__grid">
            <ww-curso-card v-for="c in trilha.cursos" :curso="c"></ww-curso-card>
        </div>
        <div class="trilha__info">
            <p class="trilha__cta">Trilha {{ trilha.numero }}</p>
            <p class="trilha__pacote">Pacote completo da Trilha {{ trilha.numero }} <strong>R$ {{ trilha.valor }}</strong>*</p>
            <div>
                <p class="trilha__info-text align-center"><em>{{ trilha.extra }}</em></p>
                <p class="trilha__info-text align-center"><strong>Modalidade: </strong>{{ trilha.modalidade }}</p>
                <p class="trilha__info-text align-center"><strong>Duração: </strong>{{ trilha.duracao }} | {{ trilha.certificados }}</p>
            </div>
            <nuxt-link to="/inscricao" visuals="primary" color="secondary" class="button uppercase">Inscreva-se</nuxt-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    trilha: {
        type: Object
    }
})
</script>

<style scoped lang="scss">
    .trilha {
        display: flex;
        flex-direction: column;
        gap: 100px;
    }

    h3 {
        padding-bottom: 70px;
    }
    
    .trilha__grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 150px 80px;
        @media (max-width: 36em) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

    .trilha__info {
        padding-top: 24px;
        border-top: 1px solid var(--accent-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

        .trilha__cta {
            letter-spacing: 0.2em;
            text-transform: uppercase;
            font-weight: 700;
        }

        .trilha__pacote {
            font-size: 2.5em;
            color: var(--base-color);
            @media (max-width: 36em) {
                font-size: 1.25em;
            }
            strong  {
                color: var(--accent-color);
            }
        }

        .trilha__info-text {
            color: var(--base-color);
            strong  {
                color: var(--base-color);
            }
            em {
                color: var(--base-color);
            }
        }
</style>