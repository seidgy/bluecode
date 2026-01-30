<template>
    <bc-hero>
        <div class="hero__info">
            <h1 class="hero__title">Criamos tecnologia que <span>Acelera negócios</span></h1>
            <p class="hero__subtitle">Tecnologia não é só código. É estratégia, experiência e resultado.</p>
        </div>
    </bc-hero>
    <section class="base-section" color="black" id="programas">
        <div class="center">
            <div class="section-header">
                <h2>Trabalhos recentes</h2>
                <p class="subtitle">Do planejamento à sustentação, cuidamos de tudo.</p>
            </div>
            <div class="clientes">
                <button class="cliente" v-for="c in clientes">
                    <img :src="c.imagem" :alt="c.nome" />
                </button>
            </div>
        </div>
    </section>
    <section class="base-section beneficios" color="black">
        <div class="gradient">
            <img src="/images/decor-2.webp" alt="Decor" aria-hidden="true" />
        </div>
        <div class="center">
            <h2>Como  vamos te ajudar</h2>
            <div class="beneficios-grid">
                <ul class="beneficios-list" v-for="b in beneficios">
                    <li v-for="i in b">
                        <p class="subtitle">{{ i.title }}</p>
                        <p>{{ i.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="base-section foco" color="black">
        <div class="center">
            <h3>Foco real no negócio do cliente</h3>
            <div>
                <p>Nascemos com o propósito de criar soluções digitais modernas, eficientes e escaláveis.</p>
                <p>Nosso time é formado por profissionais altamente capacitados, apaixonados por tecnologia, design e inovação.</p>
            </div>
            <a href="https://wa.me/556182091530" target="_blank" rel="noopener noreferrer" visuals="primary" color="secondary" class="button uppercase">Falar com especialista</a>
        </div>
    </section>
    <section class="base-section servicos" color="tertiary">
        <div class="center">
            <h2>Simples, transparente e sob medida</h2>
            <div class="servicos-grid">
                <bc-servico-card v-for="s in servicos" :servico="s"></bc-servico-card>
            </div>
        </div>
    </section>
    <section class="base-section foco" color="black">
        <div class="center">
            <h3>Foco real no negócio do cliente</h3>
            <div>
                <p>Em cada etapa do seu negócios conseguimos te ajudar a escalar e tomar as melhores decisões para seu produto digital.</p>
            </div>
            <a href="https://wa.me/556182091530" target="_blank" rel="noopener noreferrer" visuals="primary" color="secondary" class="button uppercase">Falar com especialista</a>
        </div>
    </section>
    <bc-footer></bc-footer>
</template>

<script setup>
    const clientes = [
        {
            nome: 'IEPREV Premium',
            imagem: '/images/ieprev-gray.png'
        },
        {
            nome: 'RediRedi',
            imagem: '/images/rediredi-gray.png'
        },
        {
            nome: 'Ancar Ivanhoe',
            imagem: '/images/ancar-gray.png'
        },
        {
            nome: 'Pilotis Imóveis',
            imagem: '/images/pilotis-gray.png'
        },
        {
            nome: 'Conecta Campo',
            imagem: '/images/conecta-gray.png'
        },
    ]

    const servicos = [  
        {
            title: 'Design UX/UI e Desenvolvimento de Sites',
            description: 'Design e Desenvolvemos desde sites institucionais até landing pages estratégicas, com foco em performance, SEO e experiência do usuário. Ideal para Empresas que precisam fortalecer a presença digital, gerar leads e transmitir credibilidade',
            image: '/images/step-1.webp'
        },
        {
            title: 'Apps Mobile',
            description: 'Aplicativos focados em usabilidade, performance e escalabilidade. Criamos apps Android e iOS, desde o MVP até produtos robustos, sempre com foco na experiência do usuário e nos objetivos do negócio.',
            image: '/images/step-2.webp'
        },
        {
            title: 'Sistemas Web Sob Medida',
            description: 'Criamos sistemas personalizados para resolver problemas reais do seu negócio. Desenvolvemos plataformas, painéis administrativos, ERPs, CRMs e sistemas internos, totalmente adaptados ao seu fluxo operacional',
            image: '/images/step-3.webp'
        },
        {
            title: 'Automações, IA e Integrações',
            description: 'Automatizamos processos para reduzir custos e ganhar eficiência. Integramos sistemas, plataformas e ferramentas para eliminar tarefas manuais, erros operacionais e retrabalho.',
            image: '/images/step-4.webp'
        },
        {
            title: 'Sustentação e Evolução de Sistemas',
            description: 'Seu sistema está no ar? A gente garante que continue funcionando e evoluindo. Oferecemos suporte técnico, manutenção preventiva e evolução contínua para sistemas já existentes.',
            image: '/images/step-5.webp'
        },
    ]

    const beneficios = [
        [
            {
                title: 'Entendimento do negócio',
                description: 'Entender sua estrutura é importante para orientar o que precisa ser feito'
            },
            {
                title: 'Planejamento técnico e estratégico',
                description: 'Nosso time técnico vai planejar cada entrega com acompanhamento e estratégia para o melhor aproveitamento do seu investimento'
            },
            {
                title: 'Design e prototipação',
                description: 'Experiência para reduzir erros e aumentar a assertividade do produto'
            }
        ],
        [
            {
                title: 'Desenvolvimento',
                description: 'Com o protótipo validade e testado vamos iniciar o desenvolvimento'
            },
            {
                title: 'Testes e entrega',
                description: 'Testes de toda a jornada para garantir o melhor lançamento'
            },
            {
                title: 'Sustentação e evolução contínua',
                description: 'Aqui vamos garantir que tudo fique 100% para o seu crescimento e escala'
            }
        ]
    ]

</script>

<style scoped lang="scss">

.hero__info {
    max-width: 65%;
    padding-block: 85px;
    * {
        color: var(--white-color);
    }
    .hero__title {
        font-family: var(--display-font);
        padding-block: 16px 40px;
        font-weight: 700;
        color: #FEF2FF;
        font-size: 10em;
        letter-spacing: 0;
        line-height: 1em;
        display: flex;
        flex-flow: column nowrap;
        gap: 0.25em;
        span {
            font-family: var(--display-font);
            line-height: 1em;
            color: #0088FF;
        }
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
        font-size: 1.25em;
        line-height: 1.4em;
        max-width: 720px;
        @media(max-width:36em) {
            font-size: 1.125em;
        }
    }
}

.section-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.clientes {
    gap: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    overflow-x: auto;
    .cliente {
        flex-shrink: 0;
        background-image: url('/images/cliente-gradient.webp');
        background-size: cover;
        background-position: center;
        width: 196px;
        height: 196px;
        padding: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        img {
            max-width: 100%;;
        }
    }
}

.beneficios {
    position: relative;
    & > .center {
        gap: 80px;
    }
    h2 {
        width: 100%;
    }
    .gradient {
      background: var(--bg-gradient);
      position: absolute;
      top: 183px;
      left: 0;
      right: 5%;
      bottom: 0;
      img {
        position: absolute;
        width: 18px;
        bottom: 10%;
        right: 0;
        transform: translateX(50%);
        animation-duration: 10s;
        animation-name: decor;
        animation-iteration-count: infinite;
      }
    }
}

    .beneficios-grid {
        @media(min-width:36em) {
            padding-right: 90px;
        }
        display: grid;
        gap:  60px 150px;
        grid-template-columns: auto auto;
        list-style: none;
        @media(max-width:36em) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

        .beneficios-list {
            display: flex;
            flex-direction: column;
            gap: 60px;
            li {
                font-size: 1.25em;
                line-height: 1.5em;
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .subtitle {
                    text-transform: uppercase;
                }
            }
        }

    .servicos-grid {
        display: grid;
        gap: 150px;
        grid-template-columns: auto auto auto;
        @media(max-width:36em) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

.foco {
    & > .center {
        gap: 23px;
        p {
            text-align: center;
            font-size: 2.5em;
            line-height: 1.2em;
        }
    }
}

@keyframes decor {
  0% {
    bottom: 10%;
    opacity: 0.5;
  }

  50% {
    bottom: 15%;
    opacity: 1;
  }

  100% {
    bottom: 10%;
    opacity: 0.5;
  }
}
</style>
