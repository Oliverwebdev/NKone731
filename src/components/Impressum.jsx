import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Legal.css'

const Impressum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="legal-section" id="impressum" ref={ref}>
      <div className="legal-background">
        <motion.div 
          className="legal-gradient"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="legal-container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.a 
            href="#" 
            className="back-to-home"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Zurück zur Startseite
          </motion.a>
          <h1 className="legal-title">Impressum</h1>
          <div className="legal-divider" />
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="legal-section-block">
            <h2>Angaben gemäß § 5 TMG</h2>
            <div className="legal-info">
              <p><strong>NKone7.3.1 Music Collective</strong></p>
              <p>Vertretungsberechtigte Person: [Name des Hauptverantwortlichen]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Kontakt</h2>
            <div className="legal-info">
              <p><strong>E-Mail:</strong> info@nkone731.de</p>
              <p><strong>Website:</strong> https://nkone731.github.io/NKone731/</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Social Media Profile</h2>
            <div className="legal-info">
              <p><strong>Instagram:</strong> @nkone731</p>
              <p><strong>TikTok:</strong> @nkone731</p>
              <p><strong>YouTube:</strong> @nkone731</p>
              <p><strong>Facebook:</strong> nkone731</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="legal-info">
              <p>[Name des Verantwortlichen]</p>
              <p>[Adresse wie oben]</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Streitschlichtung</h2>
            <div className="legal-info">
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="legal-link">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Haftung für Inhalte</h2>
            <div className="legal-info">
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Haftung für Links</h2>
            <div className="legal-info">
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>Urheberrecht</h2>
            <div className="legal-info">
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="legal-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="legal-update">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Impressum