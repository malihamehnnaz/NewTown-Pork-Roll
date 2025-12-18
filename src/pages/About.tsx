import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-900">Our Story</h2>
            <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
              <p>
                At Newtown Pork Roll, we believe in serving more than just food, we serve an experience. 
                As a small, family-run restaurant, every dish we prepare is infused with love and a deep respect for our heritage.
              </p>
              <p>
                Our menu is a celebration of Vietnam’s rich culinary traditions, with each dish crafted from the freshest local ingredients and bursting with bold, authentic flavors.
              </p>
              <p>
                Whether you’re here for a quick lunch or a cozy dinner with friends, Newtown Pork Roll is where great flavors and great company meet.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-npr-red/10 rounded-[40px] rotate-3"></div>
            <img src="/NPR_image/unnamed.webp" alt="About Us" className="relative rounded-[32px] shadow-2xl w-full h-[700px] object-cover" />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block max-w-xs"
            >
              <p className="text-npr-red font-serif text-3xl italic leading-tight">
                "Made with love, served with a smile."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-npr-red">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" size={24} />
              ))}
            </div>
            <p className="text-gray-600 text-lg">Rated 4.8/5 on Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Benjamin Wang",
                role: "Local Guide",
                content: "This is the best banh mi I’ve had, and I’ve even tried a few in Hanoi. The ingredients are authentic and fresh. I ordered the crispy pork banh mi and was delighted that the pork stayed crispy, even after a 20-minute trip home!",
                date: "2 months ago"
              },
              {
                name: "Alice",
                role: "Local Guide",
                content: "One of my goals this trip was to find a good bánh mì and I’m so glad I stopped by Newtown Pork Roll. Everything was fresh, crunchy, and packed with flavour. For just $9, you get a giant roll that’s seriously satisfying 😋 Definitely lives up to the hype!",
                date: "a month ago"
              },
              {
                name: "Bridie Shingles",
                role: "Local Guide",
                content: "The bread was nice and fresh, while maintaining a good crunch and being flaky. The pate was absolutely delicious, and the sauces used added to this. Overall, a splendid roll. It is quite filling. I would get again if in the area.",
                date: "5 months ago"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">"{review.content}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-npr-red/10 flex items-center justify-center text-npr-red font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role} • {review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
