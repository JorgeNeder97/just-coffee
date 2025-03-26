import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const HistoriaTitle = () => {

    useEffect(() => {
        if(typeof window !== "undefined") {
            const sr = ScrollReveal({
                origin: "left",
                duration: 2000,
                distance: '30px',
                delay: 10,
                beforeReveal(domEl) {
                    if (domEl instanceof HTMLElement) {
                        domEl.style.transform = '';
                    }
                },
                reset: false,
            });

            sr.reveal('.historiaTitulo');
        }
    }, []);

  return <h3 className="historiaTitulo lg:text-[32px] font-semibold place-self-start mt-[10px] mb-[30px]">El Origen del Café</h3>
};

export default HistoriaTitle;