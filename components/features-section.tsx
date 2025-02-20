import { Plant, Brain, BarChart3, Cloud, Users, Sprout } from 'react-bootstrap-icons';
import { FeatureCard } from './feature-card';
import { motion } from 'framer-motion';

{/* Features Section */}
<section id="features" className="py-20 bg-white">
{/* Features content remains the same */}
<div className="container mx-auto px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="font-space text-4xl font-bold mb-4">Intelligent Agriculture Solutions</h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Leverage cutting-edge AI technology to revolutionize your farming practices
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <FeatureCard
      icon={<Plant className="h-8 w-8" />}
      title="Crop Monitoring"
      description="Real-time monitoring of crop health using advanced sensors and AI analysis"
    />
    <FeatureCard
      icon={<Brain className="h-8 w-8" />}
      title="AI Predictions"
      description="Predictive analytics for optimal planting and harvesting times"
    />
    <FeatureCard
      icon={<BarChart3 className="h-8 w-8" />}
      title="Yield Optimization"
      description="Data-driven insights to maximize crop yields and reduce waste"
    />
    <FeatureCard
      icon={<Cloud className="h-8 w-8" />}
      title="Weather Integration"
      description="Smart weather forecasting and automated climate response"
    />
    <FeatureCard
      icon={<Users className="h-8 w-8" />}
      title="Expert Network"
      description="Connect with agricultural experts and share knowledge"
    />
    <FeatureCard
      icon={<Sprout className="h-8 w-8" />}
      title="Sustainable Farming"
      description="Eco-friendly practices optimized by artificial intelligence"
    />
  </div>
</div>
</section>