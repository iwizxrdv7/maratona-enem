export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <img
                        src="https://ext.same-assets.com/3858286225/472381476.png"
                        alt="Arena Online"
                        className="h-12"
                    />
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src="https://ext.same-assets.com/3858286225/822443805.webp"
                                alt="Maratona ENEM"
                                className="w-96 mb-8"
                            />

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-6 py-3">
                                    <img src="https://ext.same-assets.com/3858286225/671927242.svg" alt="" className="w-6 h-6" />
                                    <span className="text-sm font-medium">5, 6, 7, 13 e 14 de Novembro, às 19h</span>
                                </div>
                                <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-6 py-3">
                                    <img src="https://ext.same-assets.com/3858286225/3495032678.svg" alt="" className="w-6 h-6" />
                                    <span className="text-sm font-medium">Ao vivo</span>
                                </div>
                                <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-6 py-3">
                                    <img src="https://ext.same-assets.com/3858286225/238481265.svg" alt="" className="w-6 h-6" />
                                    <span className="text-sm font-medium">100% Gratuito</span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 leading-tight">
                                PREPARE-SE COM O ARENA PARA{' '}
                                <span className="text-[#27afab]">O VESTIBULAR MAIS ESPERADO</span>{' '}
                                DO PAÍS
                            </h1>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Dias <strong>06, 07, 08, 13 e 14 de Novembro</strong>, sempre às <strong>19h AO VIVO.</strong> Aulas <strong>GRATUITAS</strong> com foco total na prova do <strong>ENEM 2025</strong>!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cronograma Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-4 text-gray-900">
                        O QUE VOCÊ VAI APRENDER<br />NA MARATONA ENEM
                    </h2>
                    <p className="text-center text-lg text-gray-600 mb-12">
                        Confira o cronograma das aulas e veja como o Arena vai te preparar para disputar sua<br />
                        vaga nas universidades federais do país:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Linguagens */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white min-h-[320px]">
                            <div className="text-xs font-semibold mb-3 text-gray-400">1ª Semana</div>
                            <div className="text-4xl font-black mb-4">05/11</div>
                            <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">LINGUAGENS</h3>
                            <p className="text-sm leading-relaxed text-gray-300">Interpretação, gêneros textuais e habilidades que mais aparecem na prova. O que é preciso estudar nos últimos dias.</p>
                        </div>

                        {/* Humanas */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white min-h-[320px]">
                            <div className="text-xs font-semibold mb-3 text-gray-400">1ª Semana</div>
                            <div className="text-4xl font-black mb-4">06/11</div>
                            <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">HUMANAS</h3>
                            <p className="text-sm leading-relaxed text-gray-300">Atualidades, leitura crítica e interpretação de textos. Aulas voltadas para História, Geografia e Filosofia.</p>
                        </div>

                        {/* Redação */}
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white min-h-[320px]">
                            <div className="text-xs font-semibold mb-3 text-gray-400">1ª Semana</div>
                            <div className="text-4xl font-black mb-4">07/11</div>
                            <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">REDAÇÃO</h3>
                            <p className="text-sm leading-relaxed text-gray-300">As competências mais cobradas, os tipos de proposta, temas possíveis e a estrutura ideal para sair na frente.</p>
                        </div>

                        {/* Matemática */}
                        <div className="bg-gradient-to-br from-[#27afab] to-[#1a8a87] rounded-2xl p-6 text-white min-h-[320px]">
                            <div className="text-xs font-semibold mb-3 text-teal-100">2ª Semana</div>
                            <div className="text-4xl font-black mb-4">13/11</div>
                            <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">MATEMÁTICA</h3>
                            <p className="text-sm leading-relaxed text-teal-50">Revisão com foco em previsibilidade e resolução de questões. O que não pode faltar para garantir pontos.</p>
                        </div>

                        {/* Natureza */}
                        <div className="bg-gradient-to-br from-[#27afab] to-[#1a8a87] rounded-2xl p-6 text-white min-h-[320px]">
                            <div className="text-xs font-semibold mb-3 text-teal-100">2ª Semana</div>
                            <div className="text-4xl font-black mb-4">14/11</div>
                            <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">NATUREZA</h3>
                            <p className="text-sm leading-relaxed text-teal-50">Biologia, Física e Química com abordagem objetiva e prática, ideal para revisar nos dias finais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Saiba se este evento section */}
            <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-4 text-gray-900">
                        SAIBA SE ESTE EVENTO <span className="text-[#27afab]">É<br />PARA VOCÊ</span>
                    </h2>
                    <p className="text-center text-lg mb-8">
                        A resposta é <strong>SIM</strong>, se você:
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border-2 border-teal-500 rounded-xl p-6">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Vai fazer o Exame Nacional do Ensino Médio em 2025</p>
                        </div>

                        <div className="bg-white border-2 border-teal-500 rounded-xl p-6">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Precisa revisar com quem tem foco e estratégia</p>
                        </div>

                        <div className="bg-white border-2 border-teal-500 rounded-xl p-6">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Quer aulas com professores especialistas em aprovação</p>
                        </div>

                        <div className="bg-white border-2 border-teal-500 rounded-xl p-6">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Busca conteúdo gratuito, objetivo e de qualidade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que você recebe section - WITHOUT Aulas AO VIVO */}
            <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-12 text-white">
                        O QUE VOCÊ <span className="text-[#27afab]">RECEBE</span> AO SE<br />INSCREVER
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">
                                Preparação <span className="text-[#27afab]">focada nas 5 áreas</span> da prova
                            </h3>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">
                                Acesso a um <span className="text-[#27afab]">grupo VIP</span> com todos os links das aulas
                            </h3>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">
                                Dicas de especialistas que mais aprovam em Goiás
                            </h3>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">
                                Estratégia de prova para aumentar sua pontuação
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aprovações Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">
                        ESSAS 5 AULAS SERÃO <span className="text-[#27afab]">O COMEÇO</span> DA SUA<br />
                        <span className="text-[#27afab]">APROVAÇÃO!</span>
                    </h2>
                    <p className="text-center text-lg text-gray-600 mb-12">
                        Reúna o conteúdo certo, com o time certo, no momento certo.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                            <img src="https://ext.same-assets.com/3858286225/2874809017.webp" alt="ITA" className="w-32 mx-auto mb-4" />
                            <div className="text-5xl font-black text-[#27afab] mb-2">32</div>
                            <div className="text-xl font-bold">Aprovações<br />no ITA</div>
                            <p className="text-gray-600 mt-2">nos últimos 6 anos.</p>
                        </div>

                        <div className="text-center">
                            <img src="https://ext.same-assets.com/3858286225/1174874303.webp" alt="ENEM" className="w-32 mx-auto mb-4" />
                            <div className="text-5xl font-black text-[#27afab] mb-2">NOTA 1000</div>
                            <div className="text-lg font-bold">3x em Redação no ENEM:<br />2021, 2023 e 2024</div>
                        </div>

                        <div className="text-center lg:col-span-1 md:col-span-2">
                            <img src="https://ext.same-assets.com/3858286225/220469649.webp" alt="Aluna" className="w-64 mx-auto mb-4" />
                        </div>

                        <div className="text-center">
                            <img src="https://ext.same-assets.com/3858286225/3500015235.webp" alt="UFG" className="w-32 mx-auto mb-4" />
                            <div className="text-5xl font-black text-[#27afab] mb-2">19</div>
                            <div className="text-xl font-bold">Aprovações em<br />Medicina na UFG<br />2024</div>
                            <p className="text-gray-600 mt-2">19 das 55 vagas</p>
                        </div>

                        <div className="text-center">
                            <img src="https://ext.same-assets.com/3858286225/2495856843.webp" alt="Global" className="w-32 mx-auto mb-4" />
                            <div className="text-5xl font-black text-[#27afab] mb-2">12</div>
                            <div className="text-xl font-bold">Aprovações em<br />Universidades de<br />renome global</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre o Colégio Section */}
            <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-12">
                        SOBRE O COLÉGIO <span className="text-[#27afab]">ARENA ONLINE</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://ext.same-assets.com/3858286225/3026525135.webp"
                                alt="Aluno Arena"
                                className="w-full rounded-2xl"
                            />
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-700">
                                <strong>O Colégio Arena é referência em preparação para o ENEM e vestibulares em Goiás e nacionalmente.</strong> Nossa equipe é formada pelos professores mais <strong>reconhecidos</strong> da região, com <strong>resultados comprovados</strong> em aprovações nas <strong>principais universidades do Brasil.</strong>
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700">
                                Somos um colégio especializado em <strong>transformar conhecimento em aprovação</strong>, com estratégias que aliam <strong>conteúdo de alto nível</strong>, <strong>tecnologia</strong> e <strong>acompanhamento real dos alunos.</strong>
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700">
                                Estamos na linha de frente da educação, seja nas salas presenciais em Goiânia ou no nosso ambiente 100% online, com a mesma qualidade.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href="https://www.instagram.com/cursoarena_online/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-[#27afab] rounded-lg flex items-center justify-center hover:bg-[#1a8a87] transition-colors"
                                >
                                    <img src="https://ext.same-assets.com/3858286225/3666093010.svg" alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@ArenaOnlineCurso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-[#27afab] rounded-lg flex items-center justify-center hover:bg-[#1a8a87] transition-colors"
                                >
                                    <img src="https://ext.same-assets.com/3858286225/3769692376.svg" alt="YouTube" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - NEW */}
            <section className="py-20 bg-gradient-to-br from-[#27afab] to-[#1a8a87]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        GARANTA SUA APROVAÇÃO AGORA!
                    </h2>
                    <p className="text-xl text-white mb-8 leading-relaxed">
                        Não perca essa oportunidade de se preparar com os melhores professores<br />
                        e conquistar sua vaga na universidade dos seus sonhos!
                    </p>
                    <button className="bg-white text-[#27afab] px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                        COMPRAR AGORA
                    </button>
                    <p className="text-white mt-6 text-sm">
                        Investimento único no seu futuro
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://ext.same-assets.com/3858286225/472381476.png"
                                alt="Arena Online"
                                className="h-12"
                            />
                            <div className="text-sm text-gray-600">
                                <p><strong>Unidade Enem Vestibulares</strong> - AV. T-11, QD 112, LT 5A, Setor Bueno - Goiânia/GO</p>
                                <p>62 99920-7672</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/cursoarenaonline/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#27afab] hover:text-[#1a8a87]"
                            >
                                <img src="https://ext.same-assets.com/3858286225/915078100.svg" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.youtube.com/tvarena"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#27afab] hover:text-[#1a8a87]"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">© 2025 Colégio Arena – Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
