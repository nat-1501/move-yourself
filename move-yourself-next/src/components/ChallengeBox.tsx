import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);


    return (
        <div className={styles.challengeContainer}>
            { activeChallenge ? (
            <div className={styles.challengeActive}>    
                <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={'icons/${activeChallenge.type}.svg'} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={completeChallenge}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
             ) : (
            <div className={styles.challengeNoActive}>
               <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios.
                </p>
            
            </div>
            ) }
        </div>
    );
}