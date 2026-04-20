# Ascendant Strategy — Comprehensive SEO & AI Search Visibility Audit

## Executive Summary

This audit identifies critical SEO and LLM visibility improvements for ascendant.company. **Immediate action items (implement within 2 weeks)** are marked with 🚀. **High-priority items** are marked with 🔴.

---

## 1. TECHNICAL SEO AUDIT

### 1.1 Meta Tags & On-Page SEO ✅ JUST IMPLEMENTED

| Element | Current State | Recommendation | Priority |
|---------|--------------|----------------|----------|
| Title Tag | Basic generic title | ✅ Added comprehensive title with primary keyword + location | 🔴 High |
| Meta Description | Missing | ✅ Added compelling 160-char description with CTA | 🔴 High |
| Open Graph Tags | Missing | ✅ Added complete OG tags with image | 🔴 High |
| Canonical URL | N/A | ✅ Added self-referential canonical | 🔴 High |
| Robots Meta | N/A | ✅ Added index, follow directive | Medium |

**Remaining Meta Tags to Add (per-page):**

Add to `Pricing.jsx`:
```jsx
<Helmet>
  <title>Sales Funnel Pricing | Strategy Sessions from $150 NZD | Ascendant Strategy</title>
  <meta name="description" content="Transparent funnel pricing from $150-$1,500 NZD. Strategy sessions, full implementation, and growth partnerships for ambitious NZ businesses." />
  <link rel="canonical" href="https://ascendant.company/pricing" />
</Helmet>
```

Add to `Quiz.jsx`:
```jsx
<Helmet>
  <title>Free Funnel Strategy Quiz | Get Your Custom Sales Plan | Ascendant Strategy</title>
  <meta name="description" content="Take our free 3-minute quiz and get a custom sales funnel strategy tailored to your business. No commitment required." />
  <link rel="canonical" href="https://ascendant.company/quiz" />
</Helmet>
```

### 1.2 Schema Markup ✅ JUST IMPLEMENTED

Created comprehensive JSON-LD markup including:
- **Organization** — Entity recognition for AI tools
- **LocalBusiness** — NZ location signals
- **Service** — Product catalog with pricing
- **WebSite** — Search action for featured snippets
- **FAQPage** — FAQ schema for "People Also Ask" positioning
- **BreadcrumbList** — Navigation structure for SERP rich results

**Additional Schema to Implement:**

1. **Review/AggregateRating Schema** (for testimonials section):
```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5"
}
```

2. **HowTo Schema** (for process section):
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Build a High-Converting Sales Funnel",
  "step": [
    { "@type": "HowToStep", "name": "Take the Quiz", "text": "Complete our 10-question assessment to understand your business needs." },
    { "@type": "HowToStep", "name": "Receive Your Strategy", "text": "Get a custom funnel blueprint within 24 hours." },
    { "@type": "HowToStep", "name": "Watch It Work", "text": "We build your funnel while you focus on growing your business." }
  ]
}
```

### 1.3 Sitemap & Robots.txt ✅ JUST IMPLEMENTED

| File | Purpose | Status |
|------|---------|--------|
| `/sitemap.xml` | Search engine indexing | ✅ Created |
| `/robots.txt` | Crawler instructions | ✅ Created |
| `/llms.txt` | AI visibility | ✅ Created |

**Note:** Add `/llms.txt` to Vercel deployment or configure it to serve from public folder.

### 1.4 Core Web Vitals & Performance

| Metric | Current State | Recommendation | Priority |
|--------|--------------|----------------|----------|
| LCP (Largest Contentful Paint) | Likely > 2.5s | Lazy load below-fold images, optimize font loading | 🔴 High |
| FID (First Input Delay) | Likely OK | Code-split JS bundles, defer non-critical scripts | Medium |
| CLS (Cumulative Layout Shift) | Likely OK | Add explicit dimensions to images, reserve space for ads | Medium |

**Quick Performance Wins:**
1. Add `loading="lazy"` to non-critical images
2. Use `<link rel="preconnect">` for Google Fonts (already added)
3. Implement `<link rel="preload">` for hero images
4. Add `font-display: swap` to custom fonts

### 1.5 URL Structure Analysis

| Current URL | Recommended URL | Change Priority |
|-------------|----------------|-----------------|
| `/` | `/` | N/A |
| `/pricing` | `/pricing` | N/A |
| `/quiz` | `/quiz` | N/A |
| `/contact` | `/contact` | N/A |
| `/payment` | `/payment` | N/A (blocked from index) |

✅ URL structure is clean and SEO-friendly.

---

## 2. ON-PAGE CONTENT OPTIMIZATION

### 2.1 Homepage Content Analysis

**Current H1:** "We Build Funnels That Print Money" (on hero)
**Missing:** Clear H1 hierarchy, descriptive headings throughout

**Recommended H1 Structure:**
```
H1: Sales Funnel Agency NZ | High-Ticket Conversion Specialists
H2: What We Build (Lead Magnet Funnels, Webinar Funnels, Upsell Flows)
H2: Our Track Record (240+ Funnels, $18M+ Generated)
H2: Our Process (3 Steps to Revenue)
H2: Client Success Stories
H2: Pricing Options
```

### 2.2 Keyword Mapping Strategy

| Page | Primary Keyword | Secondary Keywords | Search Intent |
|------|----------------|-------------------|---------------|
| Homepage | "sales funnel agency nz" | "funnel builder nz", "conversion optimization nz" | Commercial |
| Pricing | "sales funnel pricing nz" | "funnel strategy cost", "funnel agency prices" | Commercial |
| Quiz | "free funnel strategy" | "sales funnel quiz", "funnel assessment" | Commercial/Lead Gen |
| Contact | "funnel consultant nz" | "conversion agency", "marketing automation agency" | Commercial |

### 2.3 E-E-A-T Improvements (Critical for B2B)

**Experience Signals:**
- Add case studies with actual client names and verifiable results
- Include founder/team bios with photo, credentials, and years of experience
- Add "As seen in" or press mentions section
- Include client logos and testimonials with attribution

**Expertise Signals:**
- Create definitive guides on funnel strategy (become the authoritative source)
- Add author bylines to all content
- Include industry-specific certifications or credentials
- Publish original research or data ("We analyzed 240+ funnels and found...")

**Authoritativeness Signals:**
- Guest post on industry publications
- Get quoted in business publications
- Build backlinks from marketing/tech directories
- Create shareable original data/reports

**Trustworthiness Signals:**
- Add SSL badge and security trustmarks to payment flow
- Include physical address or "NZ-based" prominently
- Add phone number if possible
- Include clear refund/money-back guarantees on every page

### 2.4 Featured Snippet Optimization

Target these queries for featured snippet opportunities:

| Query | Target Snippet Format |
|-------|----------------------|
| "how long does it take to build a sales funnel" | **Answer:** "Strategy sessions complete in 3-5 days. Full implementation takes 2-3 weeks. Your first funnel is live within 14 days of purchase." |
| "what is a sales funnel" | **Definition + Example** with clear bullet points |
| "how much does a sales funnel cost" | **Comparison table** with pricing tiers |

**Implementation:**
Use structured content with clear question-answer format. Include `<table>` elements for comparisons. Use `<ol>` for step-by-step processes.

---

## 3. LLM & AI SEARCH VISIBILITY

### 3.1 llms.txt Implementation ✅ JUST CREATED

Created `/public/llms.txt` with:
- Company overview and service descriptions
- Pricing table in markdown format
- Key metrics (240+ funnels, $18M+ generated)
- Process breakdown
- FAQ section
- Contact information

**Deployment Note:** Vercel serves static files from `/public`. Ensure this file is included in build output.

### 3.2 Content Structure for AI Citation

AI tools (ChatGPT, Claude, Perplexity) cite sources that:
1. Have clear, structured data
2. Include specific metrics and numbers
3. Answer direct questions concisely
4. Use definitive language ("We specialize in...", "Our process includes...")

**Current Strengths:**
✅ Clear service descriptions
✅ Specific pricing ($150, $750, $1,500)
✅ Named testimonials with companies
✅ Process steps with timelines

**Gaps to Fill:**
❌ No founding date/years in business
❌ No team member names/credentials
❌ No case study URLs with specific data
❌ No industry awards or recognition

### 3.3 Entity Building Strategy

To become a recognized entity in AI knowledge graphs:

1. **Claim Knowledge Panel elements:**
   - Google Business Profile (create if not done)
   - LinkedIn Company Page (complete all fields)
   - Crunchbase or similar database listing

2. **Build entity signals:**
   - Consistent NAP (Name, Address, Phone) across all platforms
   - Wikipedia-style factual data on About page
   - Press mentions and citations

3. **Create citeable content:**
   - Industry reports with original data
   - "State of [X] Funnels" annual report
   - Toolkits and resources that other sites link to

### 3.4 "Best Agency" Recommendation Optimization

To appear in AI recommendations for "best sales funnel agency nz" queries:

1. **Build citations on review platforms:**
   - Google Reviews (target 10+ reviews)
   - Clutch.co profile
   - Trustpilot
   - G2 (for SaaS-related services)

2. **Create comparison page content:**
   - "How to Choose a Funnel Agency" guide
   - "Funnel Agency vs DIY" comparison
   - Include specific differentiators that AI can quote

3. **Get listed in directories:**
   - Business.govt.nz (NZ government business directory)
   - TopTech.tools or similar curated lists
   - Industry-specific directories

---

## 4. B2B AUTHORITY & OFF-PAGE STRATEGY

### 4.1 Link-Building Opportunities

**High-Value Targets:**
| Source Type | Example Targets | Value |
|-------------|-----------------|-------|
| Marketing blogs | HubSpot, Copyblogger, MarketingProfs | High DR, relevant audience |
| Business podcasts | Guest appearance opportunities | Citation + links |
| Industry directories | Software review sites, agency lists | Local SEO + trust signals |
| Local NZ | nztech.org, business-summit sites | Geo-targeting signals |

**Quick Wins:**
- Submit to "Best NZ Marketing Agencies" lists
- Guest post on SaaS blogs about conversion optimization
- Create tools/resources others link to

### 4.2 Digital PR Strategy

1. **Original Research:** "State of NZ Sales Funnels 2024" report with:
   - Survey data from 100+ NZ businesses
   - Industry benchmarks
   - Expert quotes

2. **Expert Commentary:**
   - Respond to HARO/Connectively queries
   - Offer quotes for marketing articles
   - Create PR-worthy company milestones

3. **Thought Leadership:**
   - Launch "Funnel Failures" or "Conversion Wins" series
   - Create controversial/opinion content that gets shared
   - Build case studies that become reference materials

### 4.3 LinkedIn & Professional Signals

AI tools crawl LinkedIn for entity information. Ensure:
- Company page is 100% complete
- Employee profiles reference the company
- Regular posts with company insights
- Recommendations on company page

---

## 5. CONTENT STRATEGY ROADMAP (90 Days)

### Month 1: Foundation

| Content Type | Title | Target Keyword | Priority |
|--------------|-------|----------------|----------|
| Case Study | "How [Client Type] 3x'd Revenue in 90 Days" | "funnel case study" | 🔴 High |
| Guide | "The Complete Sales Funnel Checklist for NZ Businesses" | "sales funnel checklist" | 🔴 High |
| Comparison | "Funnel Builder vs Agency: Which is Right for You?" | "funnel builder vs agency" | 🔴 High |

### Month 2: Authority Building

| Content Type | Title | Target Keyword | Priority |
|--------------|-------|----------------|----------|
| Original Research | "2024 NZ Funnel Benchmark Report" | "funnel benchmarks nz" | 🔴 High |
| Service Detail | "Webinar Funnel Mastery: Complete Guide" | "webinar funnel guide" | Medium |
| FAQ Page | "Sales Funnel FAQ: 20 Questions Answered" | "sales funnel faq" | Medium |

### Month 3: Conversion Content

| Content Type | Title | Target Keyword | Priority |
|--------------|-------|----------------|----------|
| Calculator | Interactive funnel ROI calculator | "funnel roi calculator" | Medium |
| Checklist | "50-Point Funnel Audit Checklist" | "funnel audit checklist" | Medium |
| Video | "Behind the Funnel" case study walkthroughs | YouTube SEO | Medium |

---

## 6. QUICK WINS (Implement Within 2 Weeks) 🚀

### 🚀 Win 1: Create OG Image (Already Done)
**What:** Create branded Open Graph image with logo, stats, and tagline
**Why:** AI search and social sharing use this image as the primary visual
**Impact:** High for social/sharing, Medium for SEO

### 🚀 Win 2: Add Page-Specific Meta Tags
**What:** Install `react-helmet-async` and add unique meta tags to each page
**Why:** Google shows different titles/descriptions based on query intent
**Impact:** Medium for rankings, High for CTR

### 🚀 Win 3: Complete FAQ Schema Expansion
**What:** Expand FAQ schema to include 10+ questions from your FAQ section
**Why:** FAQ schema creates rich results and positions content in "People Also Ask"
**Impact:** High for featured snippets

### 🚀 Win 4: Add About/Founder Page
**What:** Create `/about` page with founder bio, team photos, company story
**Why:** E-E-A-T signals require author/entity information; B2B buyers research agencies
**Impact:** High for trust, Medium for SEO

### 🚀 Win 5: Add Structured Data to Testimonials
**What:** Wrap testimonial section in Review/AggregateRating schema
**Why:** Star ratings in SERPs increase CTR by 15-25%
**Impact:** Medium for SEO, High for CTR

---

## Implementation Checklist

### This Week (Days 1-7)
- [ ] Deploy updated `index.html` with meta tags
- [ ] Deploy `robots.txt` and `sitemap.xml`
- [ ] Deploy `llms.txt`
- [ ] Verify Schema markup works (use Rich Results Test)
- [ ] Create OG image and deploy

### Next Week (Days 8-14)
- [ ] Add `react-helmet-async` and page-specific meta tags
- [ ] Add Review schema to testimonials
- [ ] Add HowTo schema to process section
- [ ] Create basic About page
- [ ] Submit sitemap to Google Search Console

### Month 1 (Days 15-30)
- [ ] Create case study content
- [ ] Build "Complete Sales Funnel Checklist" guide
- [ ] Start building Google Business Profile (if not exists)
- [ ] Begin LinkedIn company page optimization

---

## Technical Notes for Deployment

### Vercel Configuration
The current `vercel.json` correctly rewrites all routes to `/index.html`. Ensure:
1. Schema markup files are in `/public`
2. `llms.txt` is accessible at root URL
3. Sitemap is in public folder

### Schema Testing
Use these tools to verify implementation:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org)
- [Google Search Console](https://search.google.com/search-console)

### Performance Monitoring
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

---

*Report generated for Ascendant Strategy | ascendant.company*
*Last updated: January 2024*