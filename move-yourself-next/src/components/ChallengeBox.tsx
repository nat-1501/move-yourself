import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;


    return (
        <div className={styles.challengeContainer}>
            { hasActiveChallenge ? (
            <div className={styles.challengeActive}>    
                <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 10 polichinelos</p>
                    </main>

                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceedeButton}
                        >
                            Completei
                        </button>
                    </footer>
                <div/>
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