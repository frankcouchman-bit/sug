import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function WritingTool() {
  return (
    <>
      <Helmet>
        <title>Best Writing Tool for Content Creation - Free | SEOScribe</title>
        <meta name="description" content="The most powerful writing tool for SEO content. Free AI writing software with 15+ tools including article generation and optimization." />
        <link rel="canonical" href="https://seoscribe.pro/writing-tool" />
      </Helmet>

      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              All-in-One <span className="gradient-text">Writing Tool</span>
              <br />for Content Teams
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              More than just a <strong>writing tool</strong> – a complete content creation platform. 
              Our <strong>AI writing tool</strong> includes 15+ features for research, writing, and optimization.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
