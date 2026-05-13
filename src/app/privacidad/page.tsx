import type { Metadata } from 'next'
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS } from '@/lib/company'

export const metadata: Metadata = {
  title: `Política de Privacidad – ${COMPANY_NAME}`,
  description: `Política de privacidad y protección de datos personales de ${COMPANY_NAME}.`,
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Política de Privacidad</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Última actualización: enero 2025</p>

        <section aria-labelledby="responsable">
          <h2 id="responsable" className="text-xl font-bold text-primary mt-8 mb-3">1. Responsable del tratamiento</h2>
          <p>
            <strong>{COMPANY_NAME} S.L.</strong> (en adelante &ldquo;la empresa&rdquo;) es el responsable del
            tratamiento de sus datos personales. NIF: B-XXXXXXXX. Domicilio social: {COMPANY_ADDRESS}.
            Email de contacto: <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent">{COMPANY_EMAIL}</a>.
          </p>
        </section>

        <section aria-labelledby="datos">
          <h2 id="datos" className="text-xl font-bold text-primary mt-8 mb-3">2. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes datos personales:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Descripción del proyecto o consulta</li>
            <li>Datos de navegación (cookies de análisis, con su consentimiento)</li>
          </ul>
        </section>

        <section aria-labelledby="finalidad">
          <h2 id="finalidad" className="text-xl font-bold text-primary mt-8 mb-3">3. Finalidad del tratamiento</h2>
          <p>Sus datos se tratan para:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Gestionar su solicitud de presupuesto o consulta</li>
            <li>Enviarle información comercial sobre nuestros servicios (solo con su consentimiento)</li>
            <li>Mejorar nuestros servicios mediante análisis estadístico anónimo</li>
            <li>Cumplir con las obligaciones legales aplicables</li>
          </ul>
        </section>

        <section aria-labelledby="legitimacion">
          <h2 id="legitimacion" className="text-xl font-bold text-primary mt-8 mb-3">4. Base legitimadora</h2>
          <p>
            El tratamiento de sus datos se basa en: (a) el consentimiento que nos otorga al cumplimentar
            el formulario, (b) la ejecución de una relación precontractual, y (c) el interés legítimo
            para el análisis estadístico anónimo de la web.
          </p>
        </section>

        <section aria-labelledby="conservacion">
          <h2 id="conservacion" className="text-xl font-bold text-primary mt-8 mb-3">5. Conservación de datos</h2>
          <p>
            Sus datos se conservarán mientras exista una relación comercial o durante el tiempo necesario para
            cumplir con las obligaciones legales. Transcurrido dicho plazo, los datos serán eliminados de forma
            segura.
          </p>
        </section>

        <section aria-labelledby="derechos">
          <h2 id="derechos" className="text-xl font-bold text-primary mt-8 mb-3">6. Sus derechos</h2>
          <p>Puede ejercer los siguientes derechos en cualquier momento:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato electrónico</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos</li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, envíe un email a{' '}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent">{COMPANY_EMAIL}</a>.
            También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" className="text-xl font-bold text-primary mt-8 mb-3">7. Cookies</h2>
          <p>
            Esta web utiliza cookies propias (técnicas, necesarias para el funcionamiento) y cookies de
            terceros (Google Analytics, solo con su consentimiento). Puede gestionar sus preferencias
            de cookies en cualquier momento a través del banner de cookies.
          </p>
        </section>
      </div>
    </div>
  )
}
