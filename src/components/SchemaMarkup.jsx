import { useEffect } from 'react'

export default function SchemaMarkup() {
  useEffect(() => {
    const schemas = [
      {
        type: 'Organization',
        data: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ascendant Strategy",
          "url": "https://ascendant.company",
          "description": "NZ-based sales funnel agency specializing in high-ticket conversion optimization for B2B businesses, coaches, course creators, and e-commerce brands.",
          "areaServed": "NZ",
          "address": { "@type": "PostalAddress", "addressCountry": "NZ" },
          "contactPoint": { "@type": "ContactPoint", "email": "hello@ascendantstrategy.com", "contactType": "customer service" }
        }
      },
      {
        type: 'LocalBusiness',
        data: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ascendant Strategy",
          "image": "https://ascendant.company/logo.png",
          "url": "https://ascendant.company",
          "telephone": "+64-XXX-XXX-XXX",
          "address": { "@type": "PostalAddress", "addressRegion": "NZ", "addressCountry": "NZ" },
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "17:00" },
          "priceRange": "$$",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47" }
        }
      },
      {
        type: 'Service',
        data: {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Sales Funnel Development",
          "provider": { "@type": "Organization", "name": "Ascendant Strategy", "url": "https://ascendant.company" },
          "areaServed": { "@type": "Country", "name": "New Zealand" },
          "description": "We architect high-converting sales funnels for ambitious NZ businesses. 240+ funnels built, $18M+ revenue generated.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Funnel Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Funnel Strategy Session", "description": "Full sales funnel audit and custom blueprint" }, "price": "150", "priceCurrency": "NZD" },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Funnel Implementation", "description": "Complete 4-6 page sales funnel" }, "price": "750", "priceCurrency": "NZD" },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Partner Package", "description": "Ongoing management and optimization" }, "price": "1500", "priceCurrency": "NZD" }
            ]
          }
        }
      },
      {
        type: 'WebSite',
        data: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Ascendant Strategy",
          "url": "https://ascendant.company",
          "potentialAction": {
            "@type": "SearchAction",
            "target": { "@type": "EntryPoint", "urlTemplate": "https://ascendant.company/quiz" },
            "query-input": "required name=quiz"
          }
        }
      },
      {
        type: 'FAQPage',
        data: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How long does it take to build a sales funnel?", "acceptedAnswer": { "@type": "Answer", "text": "Strategy sessions complete in 3-5 days. Full funnel implementation takes 2-3 weeks. Growth Partner delivers first funnel in 2 weeks." }},
            { "@type": "Question", "name": "What's included in ad campaign setup?", "acceptedAnswer": { "@type": "Answer", "text": "Campaign structure, audience definition, conversion tracking, and ad creative guidelines. You handle ad spend — we handle strategy." }},
            { "@type": "Question", "name": "Do you offer refunds?", "acceptedAnswer": { "@type": "Answer", "text": "100% money-back guarantee on all packages. Strategy: 7 days. Full Funnel: 30 days. Growth Partner: Double money back if no results in 60 days." }},
            { "@type": "Question", "name": "What businesses do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in coaches, consultants, SaaS companies, e-commerce brands, course creators, agency owners, and B2B service businesses looking to scale revenue." }}
          ]
        }
      },
      {
        type: 'BreadcrumbList',
        data: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ascendant.company" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ascendant.company/#services" },
            { "@type": "ListItem", "position": 3, "name": "Pricing", "item": "https://ascendant.company/pricing" }
          ]
        }
      }
    ]

    schemas.forEach(({ type, data }) => {
      const existing = document.querySelector(`script[data-schema="${type}"]`)
      if (existing) existing.remove()
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-schema', type)
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [])
  return null
}