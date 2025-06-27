import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Legal.css'

const Datenschutz = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="legal-section" id="datenschutz" ref={ref}>
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
          <h1 className="legal-title">Datenschutzerklärung</h1>
          <div className="legal-divider" />
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="legal-section-block">
            <h2>1. Datenschutz auf einen Blick</h2>
            <div className="legal-info">
              <h3>Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>2. Datenerfassung auf unserer Website</h2>
            <div className="legal-info">
              <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              
              <h3>Wie erfassen wir Ihre Daten?</h3>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
              
              <h3>Wofür nutzen wir Ihre Daten?</h3>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>3. Hosting und Content Delivery Networks (CDN)</h2>
            <div className="legal-info">
              <h3>GitHub Pages</h3>
              <p>Wir hosten unsere Website bei GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). GitHub kann beim Besuch unserer Website automatisch Daten über Sie erfassen, einschließlich Informationen über Ihr Gerät, Ihre IP-Adresse, Ihren Browser und Ihre Interaktion mit der Website.</p>
              <p>Diese Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung unserer Website gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p>Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="legal-link">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a></p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>4. Allgemeine Hinweise und Pflichtinformationen</h2>
            <div className="legal-info">
              <h3>Datenschutz</h3>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              
              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>NKone7.3.1 Music Collective<br/>
              [Adresse siehe Impressum]</p>
              <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>5. Datenerfassung auf unserer Website</h2>
            <div className="legal-info">
              <h3>Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>6. Social Media</h2>
            <div className="legal-info">
              <h3>Externe Links zu Social Media Plattformen</h3>
              <p>Unsere Website enthält Links zu folgenden Social Media Plattformen:</p>
              <ul>
                <li><strong>Instagram:</strong> Meta Platforms, Inc., 1 Hacker Way, Menlo Park, CA 94301, USA</li>
                <li><strong>TikTok:</strong> TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland</li>
                <li><strong>YouTube:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</li>
                <li><strong>Facebook:</strong> Meta Platforms, Inc., 1 Hacker Way, Menlo Park, CA 94301, USA</li>
              </ul>
              <p>Diese Links führen zu externen Websites der jeweiligen Anbieter. Beim Klick auf diese Links verlassen Sie unsere Website. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Anbieter.</p>
              <p>Informationen zur Datenverarbeitung der Anbieter finden Sie in den jeweiligen Datenschutzerklärungen der Plattformen.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>7. Ihre Rechte</h2>
            <div className="legal-info">
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul>
                <li><strong>Recht auf Auskunft</strong> nach Art. 15 DSGVO</li>
                <li><strong>Recht auf Berichtigung</strong> nach Art. 16 DSGVO</li>
                <li><strong>Recht auf Löschung</strong> nach Art. 17 DSGVO</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung</strong> nach Art. 18 DSGVO</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> nach Art. 20 DSGVO</li>
                <li><strong>Widerspruchsrecht</strong> nach Art. 21 DSGVO</li>
                <li><strong>Recht auf Beschwerde</strong> bei einer Aufsichtsbehörde nach Art. 77 DSGVO</li>
              </ul>
              <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@nkone731.de</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>8. Datenschutz bei Bewerbungen</h2>
            <div className="legal-info">
              <p>Falls Sie sich für eine Zusammenarbeit mit uns interessieren und uns Bewerbungsunterlagen zusenden, verarbeiten wir Ihre personenbezogenen Daten ausschließlich zum Zweck der Bearbeitung Ihrer Bewerbung.</p>
              <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie § 26 BDSG (Verarbeitung für Zwecke des Beschäftigungsverhältnisses).</p>
              <p>Ihre Daten werden nach Abschluss des Bewerbungsverfahrens gelöscht, spätestens jedoch nach 6 Monaten.</p>
            </div>
          </div>

          <div className="legal-section-block">
            <h2>9. Änderungen dieser Datenschutzerklärung</h2>
            <div className="legal-info">
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
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

export default Datenschutz