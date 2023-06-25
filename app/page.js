import getData from '@/firebase/firestore/getData'

import { TypographyH1 } from '@/components/TypographyH1'
import { PaymentMethodCard } from '@/components/payment-method-card'

export default async function Home() {
  const collectionName = "car-spare-parts-6b231"
  const data = await getData(collectionName)
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center pt-10">
      <TypographyH1>Spare Car Parts</TypographyH1>
      <div className='py-8'>
        {data.map((item, index) => (
          <PaymentMethodCard key={index}>
            {item.name} - {item.detail}
          </PaymentMethodCard>
        ))}
      </div>
    </main>
  )
}
