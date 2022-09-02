import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;


    return (
        <div className={styles.challengeBoxContainer} >
            { hasActiveChallenge ? (
            <div className={styles.challengeActive}>    
                <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/bodt.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 10 polichinelos</p>
                    </main>
                <div/>
            ) : (
            <div className={styles.challengeNoActive}>
               <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios.
                </p>
            
            </div>
            )}
        </div>
    )
}