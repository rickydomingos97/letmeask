import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustracao simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="" />
        </div>
      </main>
    </div>
  )
}