import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function EnterRoom() {
  const history = useHistory();

  function navigateToEnterRoom() {
    history.push('/rooms/new')
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
          
          <div className="separator">or come into in a room</div>
          <form>
            
            <Button type="submit">
              Entrar em uma sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}