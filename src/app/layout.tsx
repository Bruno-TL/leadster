import './globals.css'

export const metadata = {
  title: 'Leadster',
  description: 'Instale uma máquina de captação de leads no seu site, já são +2.000 sites com a Leadster! Já são mais de 2.000 sites que Aumentaram a Conversão usando a Leadster. Inicie de graça! Teste grátis por 14 dias. Aumente sua conversão. 3x mais conversão no site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
