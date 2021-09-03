import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('/')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustracao simbolizando perguntas e respostas" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Answer your audience in real time</p>
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
            <Button type="submit">
              Enter in a room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}