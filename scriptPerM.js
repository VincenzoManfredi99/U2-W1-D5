window.addEventListener('load', () => {
    const mSingole = document.querySelectorAll('svg path');

    mSingole.forEach((m) => {
        m.style.transition = 'opacity 1s ease-in-out';
        m.style.opacity = '1';

        const animazione = () => {
            const stato = Math.random() > 0.4 ? "1" : "0";
            m.style.opacity = stato;

            // (tra 2 e 7 secondi) per il PROSSIMO cambio
            const reset = Math.random() * 2000 + 1000;

            // 3. Diciamo alla funzione di auto-eseguirsi di nuovo
            setTimeout(animazione, reset);
        };
        setTimeout(animazione, Math.random() * 10000);
    });
});