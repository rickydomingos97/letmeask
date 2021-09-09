import { useContext } from 'react' // recupera um valor de um contexto
import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../service/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

import { TestContext } from '../App';

export function Home() {
  const history = useHistory();
  const

  function handleCreateRoom() {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    });
     
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
          <button onClick={handleCreateRoom} className="create-room">
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