import './globals.css';

type Metadata = {
  title: string;
  description: string;
  openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      images: string;
      locale: string;
      type: string;
  };
  icons: {
      icon: string;
  };
}

export const metadata: Metadata = {
  title: 'Leadster: Chatbot de Marketing para Aumentar Geração de Leads',
  description:
    'Instale uma máquina de captação de leads no seu site, já são +2.000 sites com a Leadster! Já são mais de 2.000 sites que Aumentaram a Conversão usando a Leadster. Inicie de graça! Teste grátis por 14 dias. Aumente sua conversão. 3x mais conversão no site.',
  openGraph: {
    title: 'Leadster: Chatbot de Marketing para Aumentar Geração de Leads',
    description:
      'Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!',
    url: 'https://leadster.com.br/',
    siteName: 'Leadster',
    images: 'https://leadster.com.br/img/leadster/leadster_aumento_geracao_leads.png',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon/asset-header.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
