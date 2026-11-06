import "./App.css";


function App() {
  return (
    <>
      <header>
        <div className="container header-inner">
          <a href="#inicio" className="logo">beauty<span>salon</span>.</a>
          <nav>
            <ul>
              <li><a href="#inicio" className="active">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Saúde natural para<br />os seus cabelos</h1>
              <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
              <a href="#contato" className="btn">Agendar um horário</a>
            </div>
            <div className="hero-media">
              <div className="photo"><img src="d6138017ad39b1ec6fa8fac88a091079138bfb20.jpg" alt="Cabeleireira secando o cabelo da cliente" className="photo" /></div>
            </div>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="container about-inner">
            <div className="about-media">
              <div className="photo"><img src="fc6876edee658014aecfcb582625849b13c8349d.jpg" alt="Cabeleireira secando o cabelo da cliente" className="photo" /></div>
            </div>
            <div className="about-text">
              <h2 className="section-title">Sobre nós</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisl luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus.</p>
              <p>In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.</p>
              <p>Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor.</p>
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="container">
            <div className="services-header">
              <h2>Serviços</h2>
              <p>Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais.</p>
            </div>

            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">♡</div>
                <h3>Terapia capilar</h3>
                <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✂</div>
                <h3>Cortes</h3>
                <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✦</div>
                <h3>Tratamentos</h3>
                <p>O Beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="depoimentos">
          <div className="container">
            <h2>Depoimentos de quem já<br />passou por aqui</h2>
            <div className="testimonial-grid">
              <div className="testimonial">
                <span className="quote-mark">“</span>
                <p>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</p>
                <div className="author">
                  <div className="avatar" />
                  <span>Wanessa Souza</span>
                </div>
              </div>
              <div className="testimonial">
                <span className="quote-mark">“</span>
                <p>Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.</p>
                <div className="author">
                  <div className="avatar" />
                  <span>Luna Falcão</span>
                </div>
              </div>
            </div>

            <div className="dots">
              <span className="active" />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-inner">
            <div className="contact-text">
              <h2>Entre em contato<br />com a gente!</h2>
              <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
              <a href="#" className="btn">Entrar em contato</a>
            </div>
            <ul className="contact-list">
              <li>
                <div className="icon">☎</div>
                <span>11 99845-6754</span>
              </li>
              <li>
                <div className="icon">⌖</div>
                <span>R. Amauri Souza, 346</span>
              </li>
              <li>
                <div className="icon">✉</div>
                <span>contato@beautysalon.com</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <div className="footer-logo">beauty<span>salon</span>.</div>
            <small>©2021 Beautysalon.<br />Todos os direitos reservados.</small>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">▣</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;