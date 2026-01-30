<template>
    <bc-hero>
        <div class="hero__info">
            <h1 class="hero__title">Criamos tecnologia que <span>Acelera negócios</span></h1>
            <p class="hero__subtitle">Tecnologia não é só código. É estratégia, experiência e resultado.</p>
        </div>
    </bc-hero>
    <section class="base-section" color="tertiary" id="programas">
        <div class="center">
            <div class="section-header">
                <h2>Sobre o programa</h2>
                <p class="text--xl">A Work Work lança o maior programa de capacitação digital voltadas à empregabilidade, ao empreendedorismo e à inovação pública, com formações 100% online. Os cursos são certificados, têm acesso a plataforma virtual exclusiva e foram desenvolvidos com metodologias práticas, focadas em resultados reais.</p>
            </div>
            <div class="section-tabs">
                <button v-for="(t, i) in trilhas" :key="t.numero" class="section-tabs__tab" :class="{ 'section-tabs__tab--active': data.activeTrilha == i }" @click="data.activeTrilha = i">Trilha {{ t.numero }} <span>{{ t.titulo }}</span></button>
            </div>
            <div class="section-tabs-content">
                <div v-for="(t, i) in trilhas" :trilha="t">
                    <bc-grid-cursos :trilha="t" v-if="data.activeTrilha == i"></bc-grid-cursos>
                </div>
            </div>
        </div>
    </section>
    <section class="base-section beneficios" color="black">
        <div class="gradient">
            <img src="/images/decor-2.webp" alt="Decor" aria-hidden="true" />
        </div>
        <div class="center">
            <h2>Benefícios do programa</h2>
            <ul class="beneficios-grid">
                <li v-for="i in beneficios1">{{ i }}</li>
            </ul>
        </div>
    </section>
    <section class="base-section inscricao" color="black">
        <div class="center">
            <h2 visuals="h4">Como se inscrever</h2>
            <ol>
                <li>Escolha sua trilha ou curso individual e clique em Inscreva-se.</li>
                <li>Preencha o formulário digital (nome, CPF, e-mail, telefone e município).</li>
                <li>Confirme sua inscrição e receba o acesso à plataforma exclusiva por e-mail.</li>
            </ol>
            <nuxt-link to="/inscricao" visuals="primary" color="secondary" class="button uppercase">Inscreva-se</nuxt-link>
        </div>
    </section>
    <bc-footer></bc-footer>
</template>

<script setup>
    const data = reactive({
        activeTrilha: 0
    })

    const trilhas = [
        {
            numero: '1',
            titulo: 'Profissional do Futuro - Marca, Produtividade e IA',
            valor: '8.320',
            duracao: '30 dias',
            certificados: '6 certificados digitais',
            modalidade: '100% online, com videoaulas, exercícios práticos e certificação digital.',
            cursos: [
                {
                    titulo: 'Currículos Inteligentes com IA',
                    descricao: 'Aprenda a construir e adaptar currículos para diferentes vagas, utilizando inteligência artificial (04 h/a) ',
                    valor: '900',
                    imagem: '/images/step-1.webp'
                },
                {
                    titulo: 'LinkedIn Estratégico e Reputação Digital',
                    descricao: 'Transforme seu perfil em vitrine profissional e conquiste novas oportunidades (04 h/a) ',
                    valor: '1.200',
                    imagem: '/images/step-2.webp'
                },
                {
                    titulo: 'Marca Pessoal, Presença nas Redes Sociais e Canais Digitais ',
                    descricao: 'Aprenda a comunicar sua história e destacar seu valor profissional (04 h/a) ',
                    valor: '900',
                    imagem: '/images/step-3.webp'
                },
                {
                    titulo: 'Produtividade Inteligente com IA',
                    descricao: 'ferramentas e métodos para organizar sua rotina com mais eficiência (20 h/a)',
                    valor: '2.500',
                    imagem: '/images/step-4.webp'
                },
                {
                    titulo: 'Conteúdo Profissional com IA ',
                    descricao: 'Transforme seu perfil em vitrine profissional e conquiste novas oportunidades (12 h/a)',
                    valor: '1.950',
                    imagem: '/images/step-5.webp'
                },
                {
                    titulo: 'Dominando a IA para o Mercado de Trabalho',
                    descricao: 'domine as técnicas para gerar resultados profissionais com IA (12 h/a)',
                    valor: '2.950',
                    imagem: '/images/step-6.webp'
                },
            ]
        },
        {
            numero: '2',
            titulo: 'Empreendedorismo Digital e Vendas Online',
            valor: '10.360',
            duracao: '30 dias',
            certificados: '6 certificados digitais',
            modalidade: 'Online com atividades práticas e mentorias.',
            cursos: [
                {
                    titulo: 'Aprenda a Vender Online ',
                    descricao: 'Crie e otimize sua loja virtual, aprenda funis de vendas e estratégias digitais (20 h/a) ',
                    valor: '2.950',
                    imagem: '/images/step-1.webp'
                },
                {
                    titulo: 'Marketing Digital com IA',
                    descricao: 'Aprenda a usar IA para aumentar o alcance e posicionamento do seu negócio (20h/a)',
                    valor: '2.500',
                    imagem: '/images/step-2.webp'
                },
                {
                    titulo: 'Marketing de Conteúdo com IA',
                    descricao: 'Desenvolva o conteúdo certo para atrair e fidelizar clientes (20 h/a)',
                    valor: '2.500',
                    imagem: '/images/step-3.webp'
                },
                {
                    titulo: 'Como Criar e Vender Infoprodutos ',
                    descricao: 'Transforme conhecimento em produto digital e gere renda recorrente (20h/a)',
                    valor: '2.500',
                    imagem: '/images/step-4.webp'
                },
                {
                    titulo: 'Dominando a IA para Negócios e Vendas',
                    descricao: 'Automatize rotinas e processos, reduzindo custos e tempo (12h/a)',
                    valor: '2.950',
                    imagem: '/images/step-5.webp'
                }
            ]
        },
        {
            numero: '3',
            titulo: 'Formação que transforma territórios e fortalece profissionais',
            valor: '16.920',
            duracao: '64 horas (4 cursos de 16h)',
            extra: '*Condições especiais para aquisição de trilhas completas ou grupos – sob consulta.',
            certificados: '',
            modalidade: 'Curso on-line - 100% ao vivo.',
            cursos: [
                {
                    titulo: 'Práticas para Garantir Segurança com Proximidade e Resultado',
                    descricao: 'Este curso aprofunda o modelo de polícia de proximidade e suas interfaces com a comunidade, trabalhando fundamentos de polícia comunitária, cidadania ativa e direitos humanos. A trilha desenvolve habilidades para atuar com resultado, mas sempre ancorado em confiança, diálogo e respeito à dignidade humana, fortalecendo o papel do policial e das lideranças comunitárias como agentes de transformação social no território.',
                    valor: '4.230',
                    imagem: '/images/step-1.webp',
                    aulas: [
                       {
                        titulo: '1º Encontro',
                        descricao: 'Polícia de Proximidade e o Papel do Líder Comunitário'
                       },
                       {
                        titulo: '2º Encontro',
                        descricao: 'Cidadania Ativa e Segurança Pública'
                       },
                       {
                        titulo: '3º Encontro',
                        descricao: 'Direitos Humanos e Relação com a Sociedade'
                       },
                       {
                        titulo: '4º Encontro',
                        descricao: 'Liderança Comunitária e Policiamento Ativo'
                       },
                    ]
                },
                {
                    titulo: 'Construindo Confiança com Ética e Responsabilidade',
                    descricao: 'Este curso foca na atuação ética, transparente e responsável de profissionais da segurança e lideranças comunitárias, especialmente em contextos de vulnerabilidade. A trilha trabalha competências para interagir com grupos vulneráveis, conduzir atendimentos com empatia, tomar decisões com base em critérios éticos e comunicar incidentes com transparência, fortalecendo a confiança entre todos os atores do território.',
                    valor: '4.230',
                    imagem: '/images/step-2.webp',
                    aulas: [
                       {
                        titulo: '1º Encontro',
                        descricao: 'Atuação Sensível com Grupos Vulneráveis: um Dever Compartilhado'
                       },
                       {
                        titulo: '2º Encontro',
                        descricao: 'Práticas Eficazes de Interação com a Comunidade'
                       },
                       {
                        titulo: '3º Encontro',
                        descricao: 'Critérios Éticos e Responsabilidade Pública'
                       },
                       {
                        titulo: '4º Encontro',
                        descricao: 'Transparência e Relato de Incidentes: Comunicação Segura entre Atores'
                       },
                    ]
                },
                {
                    titulo: 'Governança Comunitária e Gestão de Conflitos no Território',
                    descricao: 'Este curso desenvolve competências para organizar redes, lideranças e instituições em torno de uma governança comunitária sólida, com foco na prevenção e gestão de conflitos. A trilha aprofunda conceitos de redes territoriais, sociologia do conflito, construção de acordos comunitários e atuação conjunta em situações sensíveis, oferecendo ferramentas para decisão compartilhada e coordenação efetiva entre comunidade e polícia de proximidade.',
                    valor: '4.230',
                    imagem: '/images/step-3.webp',
                    aulas: [
                       {
                        titulo: '1º Encontro',
                        descricao: 'Redes de Liderança e Cooperação Territorial'
                       },
                       {
                        titulo: '2º Encontro',
                        descricao: 'Sociologia do Conflito e Dinâmicas da Violência Urbana'
                       },
                       {
                        titulo: '3º Encontro',
                        descricao: 'Estratégias de Acordo e Gestão Comunitária de Tensões'
                       },
                       {
                        titulo: '4º Encontro',
                        descricao: 'Atuação Conjunta: Comunidade e Polícia de Proximidade em Situações Sensíveis'
                       },
                    ]
                },
                {
                    titulo: 'Inovação Social e Prevenção Integrada no Território',
                    descricao: 'Este curso trabalha a inovação social aplicada à prevenção da violência e à proteção do território, unindo diagnóstico vivo, informação qualificada e articulação em rede. A trilha desenvolve capacidades para ler o território em movimento, planejar ações preventivas integradas, usar dados e redes digitais a favor da segurança social e construir projetos rápidos de impacto comunitário, sempre em parceria com atores locais e políticas públicas existentes.',
                    valor: '4.230',
                    imagem: '/images/step-4.webp',
                    aulas: [
                       {
                        titulo: '1º Encontro',
                        descricao: 'Diagnóstico Vivo do Território: Mapas Sociais, Fluxos e Pontos Sensíveis'
                       },
                       {
                        titulo: '2º Encontro',
                        descricao: 'Prevenção Inteligente e Articulação com a Rede Pública Local'
                       },
                       {
                        titulo: '3º Encontro',
                        descricao: 'Informação, Redes Digitais e Segurança Social na Era Contemporânea'
                       },
                       {
                        titulo: '4º Encontro',
                        descricao: 'Projetos Rápidos de Impacto Comunitário: Construção Colaborativa'
                       },
                    ]
                },
            ]
        }
    ]

    const beneficios1 = [
        'Certificação digital verificável com QR Code',
        'Flexibilidade de horários (autoestudo + encontros síncronos opcionais)',
        'Acesso à plataforma exclusiva de aprendizagem',
        'Networking com empreendedores, gestores e profissionais do setor público',
        'Aulas 100% online com tutores especializados',
        'Participação em comunidades digitais de aprendizagem e mentorias'
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
    p {
        font-size: 1.25em;
        max-width: 890px;
        @media(max-width:36em) {
            font-size: 1.125em;
        }
    }
}

.section-tabs {
    border-bottom: 1px solid var(--primary-color);
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 24px;
    @media(max-width:36em) {
        gap: 12px;
    }
}

    .section-tabs__tab {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: 2px;
        font-size: 1em;
        padding: 12px 16px;
        border: none;
        background: var(--white-color);
        border-radius: 8px 8px 0 0;
        font-weight: 700;
        cursor: pointer;
        opacity: 0.75;
        span {
            font-size: 1.25em;
            font-weight: 500;
            text-align: left;
        }
        @media(max-width:36em) {
            font-size: 0.875em;
            span {
                font-size: 0.75em
            }
        }
    }
        
        .section-tabs__tab--active {
            color: var(--white-color);
            background-color: var(--primary-color);
            opacity: 1;
            span {
                color: var(--white-color);
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
        display: grid;
        gap:  60px 150px;
        grid-template-columns: auto auto;
        list-style: none;
        @media(max-width:36em) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        li {
            text-transform: uppercase;
            font-size: 1.25em;
            font-weight: 700;
            color: hsla(274, 100%, 78%, 1);
            letter-spacing: 0.05em;
            @media(max-width:36em) {
                font-size: 1.125em;
            }
        }
    }

.inscricao {
    h2 {
        font-size: 2em;
        color: var(--accent-color);
        @media(max-width:36em) {
            font-size: 1.5em;
        }
    }
    ol {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        li {
            font-size: 1.25em;
            @media(max-width:36em) {
                font-size: 1.125em;
            }
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
