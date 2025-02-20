
import { motion } from "framer-motion";
import { Heart, PawPrint, Camera, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-warm-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-warm-600" />
            <span className="text-xl font-semibold text-warm-800">PawPlace</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-warm-600 hover:text-warm-800 transition-colors">About</a>
            <a href="#" className="text-warm-600 hover:text-warm-800 transition-colors">Gallery</a>
            <a href="#" className="text-warm-600 hover:text-warm-800 transition-colors">Contact</a>
            <Button variant="outline" className="bg-transparent border-warm-300 text-warm-800 hover:bg-warm-100">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-warm-100 text-warm-800 rounded-full">
                Welcome to PawPlace
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-warm-900 mb-6 leading-tight">
                Every Dog Deserves a Perfect Home
              </h1>
              <p className="text-lg md:text-xl text-warm-600 mb-8 max-w-2xl mx-auto">
                Discover the joy of connecting with furry friends. We bring together dogs and loving families, creating perfect matches that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-warm-800 hover:bg-warm-900 text-white px-8 py-6 rounded-full">
                  Find Your Perfect Match
                </Button>
                <Button variant="outline" className="bg-transparent border-warm-300 text-warm-800 hover:bg-warm-100 px-8 py-6 rounded-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-warm-50 border border-warm-200"
            >
              <Heart className="h-10 w-10 text-warm-600 mb-4" />
              <h3 className="text-xl font-semibold text-warm-900 mb-3">Loving Matches</h3>
              <p className="text-warm-600">We carefully pair dogs with families based on lifestyle, preferences, and compatibility.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-warm-50 border border-warm-200"
            >
              <Camera className="h-10 w-10 text-warm-600 mb-4" />
              <h3 className="text-xl font-semibold text-warm-900 mb-3">Photo Updates</h3>
              <p className="text-warm-600">Share and receive regular photo updates of your furry friends in their new homes.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-warm-50 border border-warm-200"
            >
              <Map className="h-10 w-10 text-warm-600 mb-4" />
              <h3 className="text-xl font-semibold text-warm-900 mb-3">Local Support</h3>
              <p className="text-warm-600">Connect with local communities and get support from experienced dog owners near you.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center bg-warm-800 rounded-3xl p-12 md:p-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Meet Your New Best Friend?
            </h2>
            <p className="text-warm-200 mb-8 max-w-2xl mx-auto">
              Join thousands of happy families who have found their perfect companion through PawPlace.
            </p>
            <Button className="bg-white text-warm-800 hover:bg-warm-100 px-8 py-6 rounded-full">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
