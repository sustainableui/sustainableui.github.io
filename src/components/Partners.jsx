import AdoraFoundation from '@/components/logos/AdoraFoundation'
import Edi from '@/components/logos/edi'

export default function Partners() {
  return (
    <>
      <h2 className="text-center">Our partners</h2>
      <div className="not-prose mt-10 flex flex-row items-center justify-center gap-10">
        <Edi />
        <AdoraFoundation />
      </div>
    </>
  )
}
