import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            opacity: 0.6 
          }}
          transition={{ 
            scale: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            opacity: {
              duration: 1.5
            }
          }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/NPR_image/Gemini_Generated_Image_g78uzdg78uzdg78u.png" 
            alt="Vietnamese Cuisine" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Traditional Vietnamese Food with a <span className="text-npr-red">modern Twist</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-100 mb-12 italic font-serif tracking-wide"
            >
              "Small restaurant, big heart. Handcrafted with love since day one."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <a href="/menu">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary px-12 py-5 text-lg shadow-xl shadow-red-900/20">Eat In</motion.button>
              </a>
              <a href="/menu">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary px-12 py-5 text-lg shadow-xl shadow-red-900/20">Take Away</motion.button>
              </a>
              <a 
                href="https://www.ubereats.com/au/store/newtown-pork-roll-surry-hills/VB5cvYN2TSSh3vhskY1ORA?srsltid=AfmBOooWrOdHOalduU1YBbf08VeVCW_ASb8V5adBuPlHlmdlz3DePIGO" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary px-12 py-5 text-lg shadow-xl shadow-red-900/20 bg-black hover:bg-gray-800">Uber Eats</motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-32 px-4 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-npr-red/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-npr-red">Our Signature Dishes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Pork Prawn Carrot Taro Pepper Spring Roll', img: '/NPR_image/Gemini_Generated_Image_1rpv6x1rpv6x1rpv.png' },
              { name: 'Vegan Salad Bowl', img: '/NPR_image/Gemini_Generated_Image_3u5l533u5l533u5l.png' },
              { name: 'Crispy Fish Cake Roll', img: '/NPR_image/Gemini_Generated_Image_b885nob885nob885.png' },
              { name: 'Lemongrass Barbecue Pork', img: '/NPR_image/Gemini_Generated_Image_rllhcmrllhcmrllh.png' },
              { name: 'Organic Vietnamese Iced Coffee', img: '/NPR_image/Gemini_Generated_Image_t1wgr7t1wgr7t1wg.png' },
              { name: 'Meatball Roll', img: '/NPR_image/Gemini_Generated_Image_zdedr1zdedr1zded.png' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 mb-8 overflow-hidden rounded-3xl shadow-2xl">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-bold text-lg">View Details →</p>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-npr-red transition-colors">{item.name}</h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <a href="/menu">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-16 py-5 text-lg"
              >
                Explore Full Menu
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

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
            <motion.button 
              whileHover={{ x: 10 }}
              className="text-npr-red font-bold text-xl mt-12 flex items-center gap-3 group"
            >
              Learn more about our journey <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.button>
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
