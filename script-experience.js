document.addEventListener('DOMContentLoaded', function() {
    const expTranslations = {
        en: {
            title: "[ EVENT_LOG: CAREER_HISTORY ]",
            exit: "EXIT",
            at: "@",
            exp1: {
                title: "Front Desk Agent",
                company: "Royal Continental Hotel",
                details: [
                    "Identity & Access Management: responsible for guest identity verification and secure data handling.",
                    "Crisis Management: primary point of contact for operational anomalies and security during night shifts.",
                    "Systems Administration: daily utilization of Protel PMS for financial reconciliation and resource allocation."
                ]
            },
            exp2: {
                title: "Gaming Inspector",
                company: "Casino St. Moritz",
                details: [
                    "Real-time Monitoring: supervised high-profile gaming operations to ensure integrity and fraud prevention.",
                    "Regulatory Compliance: guaranteed 100% adherence to international gaming laws and security protocols.",
                    "Incident Response: mediated high-stakes disputes and anomalies, maintaining operational continuity."
                ]
            },
            exp3: {
                title: "Senior Croupier",
                company: "Dragonara Casino",
                details: [
                    "Asset Protection: managed high-volume financial transactions with zero-margin for error.",
                    "Access Control: monitored table-level security and enforced strict procedural integrity."
                ]
            },
            exp4: {
                title: "Logistics Manager",
                company: "Newlat s.p.a.",
                details: [
                    "Supply Chain Security: managed end-to-end distribution logistics and warehouse integrity.",
                    "Resource Optimization: coordinated distribution networks and inventory data management."
                ]
            },
            exp5: {
                title: "Croupier",
                company: "Opera House Casino",
                details: [
                    "Operational Security: maintained strict table security in an international fast-paced environment.",
                    "Financial Integrity: expert management of payout accuracy and procedural compliance."
                ]
            }
        },
        it: {
            title: "[ REGISTRO_EVENTI: STORIA_CARRIERA ]",
            exit: "ESCI",
            at: "@",
            exp1: {
                title: "Front Desk Agent",
                company: "Royal Continental Hotel",
                details: [
                    "Identity & Access Management: verifica identità ospiti e gestione sicura dei dati (GDPR).",
                    "Crisis Management: punto di contatto per anomalie operative e sicurezza durante i turni notturni.",
                    "Systems Administration: utilizzo quotidiano di Protel PMS per riconciliazione finanziaria."
                ]
            },
            exp2: {
                title: "Ispettore di Gioco",
                company: "Casino St. Moritz",
                details: [
                    "Monitoraggio Real-time: supervisione operazioni ad alto profilo per prevenzione frodi e integrità.",
                    "Regulatory Compliance: garanzia di totale aderenza alle leggi internazionali e protocolli interni.",
                    "Incident Response: mediazione di dispute critiche e anomalie, garantendo la continuità operativa."
                ]
            },
            exp3: {
                title: "Croupier Senior",
                company: "Dragonara Casino",
                details: [
                    "Asset Protection: gestione di transazioni finanziarie ad alto volume con margine di errore zero.",
                    "Access Control: monitoraggio sicurezza del tavolo e integrità procedurale."
                ]
            },
            exp4: {
                title: "Logistic Manager",
                company: "Newlat s.p.a.",
                details: [
                    "Supply Chain Security: gestione logistica della distribuzione e integrità del magazzino.",
                    "Ottimizzazione Risorse: coordinamento reti distributive e gestione dati inventariali."
                ]
            },
            exp5: {
                title: "Croupier",
                company: "Opera House Casino",
                details: [
                    "Sicurezza Operativa: mantenimento della sicurezza dei tavoli in ambiente internazionale dinamico.",
                    "Integrità Finanziaria: gestione esperta dei pagamenti e conformità procedurale."
                ]
            }
        },
        es: {
            title: "[ LOG_EVENTOS: HISTORIAL_PROFESIONAL ]",
            exit: "SALIR",
            at: "@",
            exp1: {
                title: "Agente de Recepción",
                company: "Royal Continental Hotel",
                details: [
                    "Identity & Access Management: verificación de identidad y manejo seguro de datos sensibles.",
                    "Crisis Management: contacto principal para anomalías operativas y seguridad en turnos nocturnos.",
                    "Systems Administration: uso diario de Protel PMS para reconciliación financiera."
                ]
            },
            exp2: {
                title: "Inspector de Juego",
                company: "Casino St. Moritz",
                details: [
                    "Monitoreo Real-time: supervisión de operaciones de alto perfil para prevención de fraudes.",
                    "Regulatory Compliance: garantía de cumplimiento de leyes internacionales y protocolos de seguridad.",
                    "Incident Response: mediación en disputas críticas, manteniendo la continuidad operativa."
                ]
            },
            exp3: {
                title: "Crupier Senior",
                company: "Dragonara Casino",
                details: [
                    "Asset Protection: gestión de transacciones financieras de alto volumen sin margen de error.",
                    "Access Control: monitoreo de seguridad en mesa e integridad procesal."
                ]
            },
            exp4: {
                title: "Gerente de Logística",
                company: "Newlat s.p.a.",
                details: [
                    "Supply Chain Security: gestión logística de distribución e integridad de almacén.",
                    "Optimización de Recursos: coordinación de redes de distribución y gestión de inventarios."
                ]
            },
            exp5: {
                title: "Crupier",
                company: "Opera House Casino",
                details: [
                    "Seguridad Operativa: mantenimiento de seguridad en mesas en un entorno internacional dinámico.",
                    "Integridad Financiera: gestión experta de pagos y cumplimiento de procedimientos."
                ]
            }
        }
    };

    function changeLanguage(lang) {
        const data = expTranslations[lang];
        
        // Titoli e Nav
        document.querySelector('.log-title').textContent = data.title;
        document.querySelector('.home-text').textContent = data.exit;
        
        const entries = document.querySelectorAll('.log-entry');
        
        // Mappa delle chiavi nell'oggetto traduzione per facilitare il ciclo
        const keys = ['exp1', 'exp2', 'exp3', 'exp4', 'exp5'];

        entries.forEach((entry, index) => {
            const key = keys[index];
            if (data[key]) {
                const titleEl = entry.querySelector('h3');
                titleEl.innerHTML = `${data[key].title} <span class="at">${data.at}</span> ${data[key].company}`;
                
                const listItems = entry.querySelectorAll('li');
                data[key].details.forEach((text, i) => {
                    if (listItems[i]) listItems[i].textContent = text;
                });
            }
        });
    }

    document.getElementById('english').onclick = () => changeLanguage('en');
    document.getElementById('italian').onclick = () => changeLanguage('it');
    document.getElementById('spanish').onclick = () => changeLanguage('es');

    // Default: English
    changeLanguage('en'); 
});