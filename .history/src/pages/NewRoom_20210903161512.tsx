import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
          <h2>Create a new room</h2>

          <form>
            <input
            type="text"
            placeholder="Room's name"
            />
            <Button type="submit">
              To create room
            </Button>
          </form>
          <p></p>
        </div>
      </main>
    </div>
  )
}