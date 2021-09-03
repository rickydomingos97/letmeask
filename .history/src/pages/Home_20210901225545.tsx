import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

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
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie a sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
            type="text"
            placeholder="Digite o codigo da sala"
            />
            <button type="submit"></button>
          </form>
        </div>
      </main>
    </div>
  )
}