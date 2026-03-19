import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { EnquiryForm } from '@/components/contact/EnquiryForm'

export const metadata = {
  title: 'Contact Us | Davis House of Automotive',
  description: 'Get in touch with our team for vehicle enquiries, viewings, and more.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navigation />

      <div className="bg-background container-gutter max-w-7xl mx-auto">
        <ContactHero />
      </div>

      <div className="bg-secondary/20 py-12 md:py-28">
        <div className="container-gutter max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <ContactInfo />
          <EnquiryForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}