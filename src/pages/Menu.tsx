import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <div className="pt-32 pb-20 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-npr-red mb-6">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic flavors, fresh ingredients, and traditional recipes passed down through generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 text-left">
          {/* Banh Mese */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Banh Mese (Banh Mi)</h4>
            <div className="space-y-8">
              {[
                { name: "Pork Roll", desc: "Pork, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Crackling and Pork Belly Roll", desc: "Crackling pork, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish, lettuce and chilli." },
                { name: "Barbecue Pork Roll", desc: "Barbecue pork, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish, lettuce and chilli." },
                { name: "Barbecue Pork and Pork Skin Roll", desc: "Barbecue pork, pork skin, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Chicken Roll", desc: "Chicken, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Lemongrass Barbecue Pork", desc: "Marinated pork with lemongrass, lettuce, carrot, mayonnaise, pate, onion shallot, coriander and daikon (chilli)." },
                { name: "Crispy Fish Cake Roll", desc: "Crispy fish roll combination of mayonnaise, carrot, lettuce, coriander, shallot and sweet chilli sauce." },
                { name: "Meatball Roll", desc: "Meatballs, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Bacon and Egg Roll", desc: "Bacon, egg, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                  <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Categories */}
          <div className="space-y-16">
            {/* Spring Rolls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Spring Rolls & Salads</h4>
              <div className="space-y-8">
                {[
                  { name: "Spring Rolls (5pcs)", desc: "Pork Prawn Carrot Taro Pepper Spring Roll." },
                  { name: "Vermicelli Salad Bowl", desc: "Lettuce, carrot, sprout, mint, rice vermicelli, cucumber and fish sauce. A choice of spring rolls, barbecue pork, lemongrass barbecue pork and crackling pork." },
                  { name: "Salad Banh Mi", desc: "Lettuce, carrot, onion, cucumber, shallot, coriander, radish, chilli and soy sauce." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                    <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rice Paper Rolls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Rice Paper Rolls</h4>
              <div className="space-y-8">
                {[
                  { name: "Prawn Rice Paper Roll (3pcs)", desc: "Prawn, lettuce, carrot, mint and vermicelli." },
                  { name: "Chicken Rice Paper Roll (3pcs)", desc: "Chicken, lettuce, carrot, mint and vermicelli" },
                  { name: "Pork Rice Paper Roll (3pcs)", desc: "Pork, lettuce, carrot, mint and vermicelli." },
                  { name: "Barbecue Rice Paper Roll", desc: "Barbecue pork, lettuce, vermicelli noodle, cucumber and mint." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                    <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vegetarian */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Vegetarian (V)(VG)</h4>
              <div className="space-y-8">
                {[
                  { name: "Veggie and Vegan Rice Paper Roll", desc: "Three pieces. Tofu and vermicelli." },
                  { name: "Veggie Vegan Rice Paper Roll", desc: "Vegan rice paper roll filled with vegetables." },
                  { name: "Tofu Salad Roll", desc: "Tofu, pickle carrot, onion, coriander, shallot and soy sauce." },
                  { name: "Vegan Salad Bowl", desc: "Rice vermicelli, lettuce, carrot, shallot sprout and vegan ham." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                    <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Beverages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Beverages</h4>
              <div className="space-y-8">
                {[
                  { name: "Organic Vietnamese Iced Coffee", desc: "Black ice coffee or Condensed milk ice coffee." },
                  { name: "Avocado Smoothie", desc: "Creamy blend of avocado." },
                  { name: "Sugar Cane Juice", desc: "Strawberry, lime, apple or orange." },
                  { name: "Fresh Orange Juice", desc: "Freshly squeezed juice from oranges." },
                  { name: "Soft Drinks & Energy Drinks", desc: "" },
                  { name: "Bottle of Water", desc: "Spring water." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                    <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
