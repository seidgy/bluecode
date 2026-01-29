<template>
    <ww-hero :button="false">
        <div class="hero__info">
            <p class="hero__brow">Quem somos</p>
            <h1 class="hero__title">Work Work</h1>
            <p>A Work Work nasceu como um serviço de consultoria especializada, com foco no aumento da eficiência e na capacitação profissional.</p>
            <p>Ao longo do tempo, ampliamos nossa atuação junto a diversos parceiros e, hoje, apoiamos organizações dos mais variados segmentos na estruturação e melhoria de seus processos e ferramentas de gestão.</p>
        </div>
    </ww-hero>
    <section class="base-section conteudo" id="produtos">
        <div class="center">
            <h2>Nossos produtos</h2>
            <p>Com foco no aumento da eficiência, da transparência e da clareza na tomada de decisões, desenvolvemos produtos e soluções sob medida para atender diferentes necessidades organizacionais, incluindo:</p>
            <ul>
                <li>Diagnóstico e prototipação de melhorias de processos</li>
                <li>Consultoria em tecnologia</li>
                <li>Diagnóstico institucional de eficiência</li>
                <li>Consultoria em gestão e governança</li>
                <li>Cursos de capacitação profissionalizantes</li>
            </ul>
            <p>A Work Work atua lado a lado com seus clientes, traduzindo desafios em soluções práticas. Nosso objetivo é tornar a gestão do dia a dia mais fluida, transparente e alinhada às estratégias da organização.</p>
            <h3>Alguns de nossos clientes</h3>
            <div class="clientes">
                <img src="/images/cleartech.svg" alt="Cleartech" />
                <img src="/images/maq.svg" alt="MAQMÓVEIS" />
                <img src="/images/logo-fec-horizontal-fundoescuro.png" alt="FEC – Fundação Euclides Cunha" />
                <img src="/images/datami.webp" alt="datami" />
                <img src="/images/kutz.png" class="white" alt="Kutz Móveis" />
                <img src="/images/Logo-Grupo-EBN.png" class="white" alt="Grupo EBN" />
                
            </div>
        </div>
    </section>
    <section class="base-section conteudo" id="plataforma">
        <div class="center">
            <h2>Nossa plataforma</h2>
            <h3>Plataforma: Transforme seu Futuro</h3>
            <p>A Work Work apresenta a Plataforma Transforme seu Futuro, o maior programa de capacitação digital voltado à empregabilidade, ao empreendedorismo e à inovação com Inteligência Artificial.</p>
            <p>Com cursos 100% online e certificados digitais verificáveis, o programa oferece trilhas formativas práticas, criadas para quem quer se destacar no mercado de trabalho e construir novas oportunidades profissionais.</p>
            <p>Por meio de uma plataforma exclusiva de aprendizagem, os participantes têm acesso a videoaulas, exercícios interativos e mentorias com especialistas. A metodologia é dinâmica, baseada em resultados reais e no desenvolvimento de competências essenciais para o mundo digital e produtivo.</p>
            <nuxt-link to="/cursos" visuals="primary" color="secondary" class="button uppercase">Saiba mais</nuxt-link>
        </div>
    </section>
    <ww-footer></ww-footer>
</template>

<script setup>


</script>

<style scoped lang="scss">

.hero__info {
    max-width: 65%;
    padding-block: 85px;
    * {
        color: var(--white-color);
    }
    .hero__title {
        padding-block: 16px 40px;
    }
    .hero__brow {
        font-weight: 300;
        font-size: 1.875em;
        line-height: 1em;
        @media(max-width:36em) {
            font-size: 1.5em;
        }
    }
    .hero__subtitle {
        font-size: 1.5em;
        line-height: 1.4em;
        max-width: 720px;
        @media(max-width:36em) {
            font-size: 1.125em;
        }
    }
    p+p {
        padding-top: 1em;
    }
}

.conteudo {
    padding-top: 0;
    .center {
        gap: 0;
        p + h3 {
            padding-top: 1em;
        }
        h2, h3, p, ul {
            padding-bottom: 1em;
            color: var(--white-color);
        }
        ul {
            padding-left: 1em;
            li {
                color: var(--white-color);
                list-style: disc;
            }
        }
        .button {
            margin-top: 2em;
        }
    }
    @media(min-width: 36em) {
        .center {
            align-items: flex-start;
        }
        h2, h3, p, ul {
            text-align: left;
            max-width: 65%;
        }
    }

    .clientes {
        display: flex;
        flex-flow: row nowrap;
        gap: 24px;
        align-items: center;
        img {
            max-width: 20%;
            max-height: 75px;
            &.white {
                background: white;
            }
        }
        @media (max-width: 36em) {
            padding-top: 30px;
            flex-flow: column nowrap;
            gap: 36px;
            img {
                max-width: 80%;
                max-height: 80px;
            }
        }
    }
}
</style>
