export default function Head() {
  return (
    <>
      <title>Jianxia Liu | Portfolio</title>
      <meta name="description" content="Explore my projects, certificates, and hobbies on my personal portfolio." />

      {/* Open Graph / LinkedIn Preview */}
      <meta property="og:title" content="Jianxia Zhang | Portfolio" />
      <meta property="og:description" content="Explore my projects, certificates, and hobbies on my personal portfolio." />
      <meta property="og:image" content="https://jianxia-portfolio.vercel.app/og-banner.png" />
      <meta property="og:url" content="https://jianxia-portfolio.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jianxia Liu | Portfolio" />
      <meta name="twitter:description" content="Explore my projects, certificates, and hobbies on my personal portfolio." />
      <meta name="twitter:image" content="https://jianxia-portfolio.vercel.app/og-banner.png" />
    </>
  )
}