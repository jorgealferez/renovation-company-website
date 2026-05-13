import type { Metadata } from 'next'
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS, SITE_URL } from '@/lib/company'

export const metadata: Metadata = {
  title: `Aviso Legal – ${COMPANY_NAME}`,
  description: `Aviso legal y condiciones de uso del sitio web de ${COMPANY_NAME}.`,
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Aviso Legal</h1>
      <div className="space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Última actualización: enero 2025</p>

        <section aria-labelledby="titular">
          <h2 id="titular" className="text-xl font-bold text-primary mt-8 mb-3">1. Titular del sitio web</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002,
            de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico
            (LSSI-CE), se informa:
          </p>
          <ul className="list-none mt-4 space-y-2">
            <li><strong>Denominación social:</strong> {COMPANY_NAME} S.L.</li>
            <li><strong>NIF:</strong> B-XXXXXXXX</li>
            <li><strong>Domicilio:</strong> {COMPANY_ADDRESS}, España</li>
            <li><strong>Teléfono:</strong> {COMPANY_PHONE}</li>
            <li><strong>Email:</strong> {COMPANY_EMAIL}</li>
            <li><strong>Registro Mercantil:</strong> Madrid, Tomo XXXX, Folio XXX, Sección 8ª, Hoja M-XXXXXX</li>
          </ul>
        </section>

        <section aria-labelledby="objeto">
          <h2 id="objeto" className="text-xl font-bold text-primary mt-8 mb-3">2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso del sitio web {SITE_URL} (en adelante, el &ldquo;Sitio Web&rdquo;),
            del que es titular {COMPANY_NAME} S.L. La utilización del Sitio Web atribuye la condición de usuario
            e implica la aceptación de todas las condiciones incluidas en este aviso legal.
          </p>
        </section>

        <section aria-labelledby="propiedad">
          <h2 id="propiedad" className="text-xl font-bold text-primary mt-8 mb-3">3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del Sitio Web —incluyendo, sin limitación, textos, fotografías, gráficos,
            imágenes, logotipos y código fuente— son propiedad de {COMPANY_NAME} S.L. o de sus licenciantes,
            y están protegidos por la legislación española e internacional sobre propiedad intelectual.
          </p>
          <p className="mt-3">
            Queda prohibida la reproducción, distribución, comunicación pública o transformación de
            dichos contenidos sin la autorización previa y escrita de {COMPANY_NAME} S.L.
          </p>
        </section>

        <section aria-labelledby="responsabilidad">
          <h2 id="responsabilidad" className="text-xl font-bold text-primary mt-8 mb-3">4. Limitación de responsabilidad</h2>
          <p>
            {COMPANY_NAME} S.L. no se responsabiliza de los daños y perjuicios que pudieran derivarse del
            uso del Sitio Web, incluyendo los producidos por fallos de hardware o software, interrupciones
            del servicio o errores en los contenidos.
          </p>
        </section>

        <section aria-labelledby="legislacion">
          <h2 id="legislacion" className="text-xl font-bold text-primary mt-8 mb-3">5. Legislación aplicable y jurisdicción</h2>
          <p>
            Las relaciones entre {COMPANY_NAME} S.L. y los usuarios de su Sitio Web se regirán por la
            legislación española. Para la resolución de cualquier controversia, las partes se someten
            a los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier otro fuero.
          </p>
        </section>
      </div>
    </div>
  )
}
