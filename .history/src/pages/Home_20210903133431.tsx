import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustracao simbolizando perguntas e respostas" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer your audience questions in real timeTire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Create a room using Google
          </button>
          <div className="separator">or come into in a room</div>
          <form>
            <input
            type="text"
            placeholder="Digite o codigo da sala"
            />
            <button type="submit">
              Enter in a room
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}