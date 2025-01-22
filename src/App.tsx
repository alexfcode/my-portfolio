import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main />
            <Skills/>
            <Projects />
            <Contacts />
            <Footer />
            <GoTopBtn/>
        </div>
    );
}

export default App;

