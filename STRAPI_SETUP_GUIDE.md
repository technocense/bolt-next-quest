# Strapi CMS Setup Guide

Your website is now integrated with Strapi! All page content can be managed dynamically through your Strapi admin panel.

## 🔐 Configuration

Your Strapi API is configured with:
- **API URL**: `https://technocense.com/api`
- **API Token**: Securely stored in Lovable Cloud

## 📋 Required Content Types

You need to create the following content types in your Strapi admin panel:

### 1. Hero Sections (`hero-sections`)
**Fields:**
- `title` (Text) - Main hero title
- `subtitle` (Text) - Hero subtitle
- `description` (Long text) - Hero description
- `ctaText` (Text) - Primary button text
- `ctaSecondaryText` (Text) - Secondary button text
- `backgroundImage` (Media - Single) - Hero background image

**Example Entry:**
```
Title: "Launch Your Business in the GCC with Confidence"
Subtitle: "Serving Bahrain & Saudi Arabia"
Description: "Your trusted partner for seamless company formation..."
CTA Text: "Start Your Business"
CTA Secondary Text: "Book Free Consultation"
```

### 2. Services (`services`)
**Fields:**
- `title` (Text) - Service name
- `description` (Long text) - Service description
- `icon` (Text) - Lucide icon name (e.g., "Building2", "FileCheck", "Users")
- `order` (Number) - Display order

**Example Entries:**
```
Title: "Company Formation"
Description: "Complete business setup from CR to license"
Icon: "Building2"
Order: 1
```

### 3. Why Choose Items (`why-choose-items`)
**Fields:**
- `title` (Text) - Benefit title
- `description` (Long text) - Benefit description
- `icon` (Text) - Lucide icon name (e.g., "CheckCircle2", "Globe", "Clock")
- `order` (Number) - Display order

### 4. Process Steps (`process-steps`)
**Fields:**
- `stepNumber` (Number) - Step number (1, 2, 3, 4)
- `title` (Text) - Step title
- `description` (Long text) - Step description
- `icon` (Text) - Lucide icon name (e.g., "MessageSquare", "FileText")

### 5. FAQ Items (`faq-items`)
**Fields:**
- `question` (Text) - FAQ question
- `answer` (Long text) - FAQ answer
- `category` (Text) - Optional category
- `order` (Number) - Display order

### 6. Government Authorities (`government-authorities`)
**Fields:**
- `name` (Text) - Authority name
- `description` (Long text) - Authority description
- `logo` (Media - Single) - Optional authority logo
- `order` (Number) - Display order

### 7. Blog Posts (`blog-posts`)
**Fields:**
- `title` (Text) - Post title
- `description` (Long text) - Post excerpt
- `content` (Rich text) - Full post content
- `slug` (Text) - URL slug
- `category` (Text) - Post category
- `readTime` (Text) - Reading time (e.g., "5 min read")
- `featuredImage` (Media - Single) - Post featured image

### 8. Pages (`pages`)
**Fields:**
- `title` (Text) - Page title
- `slug` (Text) - URL slug (e.g., "about-us", "privacy-policy")
- `content` (Rich text) - Page content
- `metaTitle` (Text) - SEO title
- `metaDescription` (Text) - SEO description
- `metaKeywords` (Text) - SEO keywords

### 9. Contact Info (`contact-infos`)
**Fields:**
- `address` (Text) - Office address
- `phone` (Text) - Phone number
- `email` (Text) - Email address
- `businessHours` (Text) - Business hours
- `mapUrl` (Text) - Google Maps embed URL

## 🎨 Using Lucide Icons

For icon fields, use the exact name of Lucide React icons. Common examples:
- `Building2` - Buildings/offices
- `FileCheck` - Documents/licensing
- `Users` - People/teams
- `Shield` - Security/compliance
- `CreditCard` - Banking/payments
- `Briefcase` - Business
- `Globe` - International
- `Clock` - Time/speed
- `Award` - Achievement
- `MessageSquare` - Communication
- `Rocket` - Launch/growth
- `CheckCircle2` - Completion/success

Full icon list: https://lucide.dev/icons/

## 🚀 How It Works

1. **Fallback Content**: Your site will show the original hardcoded content if Strapi content isn't available yet
2. **Dynamic Updates**: Once you create content in Strapi, it automatically replaces the fallback content
3. **Secure API**: All API calls go through your Lovable Cloud edge function with your secure token
4. **Caching**: Content is cached for performance using React Query

## 📝 Next Steps

1. **Access Your Strapi Admin**: Go to `https://technocense.com/admin`
2. **Create Content Types**: Set up each content type listed above
3. **Add Content**: Populate your content types with data
4. **Publish**: Make sure to publish each entry
5. **Test**: Your website will automatically fetch and display the new content

## 🔧 API Endpoints Used

- `/hero-sections?populate=*`
- `/services?sort=order:asc`
- `/why-choose-items?sort=order:asc`
- `/process-steps?sort=stepNumber:asc`
- `/faq-items?sort=order:asc`
- `/government-authorities?sort=order:asc&populate=*`
- `/blog-posts?populate=*`
- `/pages?filters[slug][$eq]=YOUR_SLUG`

## 🆘 Troubleshooting

**Content not showing?**
- Check that entries are published in Strapi
- Verify API token is correct
- Check browser console for errors
- Ensure content type names match exactly

**Icons not displaying?**
- Verify icon names match Lucide React icon names exactly (case-sensitive)
- Check the Lucide icons documentation for valid names

**Need Help?**
Your Strapi integration is fully set up and ready to use. Start by creating one content type at a time and testing as you go!
