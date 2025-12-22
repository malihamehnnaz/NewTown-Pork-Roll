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
                { name: "Pork Roll", price: "$10.00", desc: "Pork, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "BBQ Pork Roll", price: "$10.00", desc: "Barbecue pork, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish, lettuce and chilli." },
                { name: "Meatball Roll", price: "$10.00", desc: "Meatballs, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Bacon and Egg Roll", price: "$10.00", desc: "Bacon, egg, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Chicken Roll", price: "$11.00", desc: "Chicken, pate, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "BBQ & Pork Skin Roll", price: "$11.00", desc: "Barbecue pork, pork skin, mayonnaise, carrots, onions, coriander, cucumber, shallots, radish and chilli." },
                { name: "Lemongrass Pork Roll", price: "$11.00", desc: "Lemongrass pork, mayo, pate, carrots, onions, coriander, cucumber, shallots, radish, chili." },
                { name: "Vietnamese Ham Roll & Pork Skin", price: "$11.00", desc: "Vietnamese ham, Pork Skin, mayo, pate, carrots, onions, coriander, cucumber, shallots, radish, chili." },
                { name: "Fish Cake Roll", price: "$12.00", desc: "Fish cake, mayo, carrots, onions, coriander, cucumber, shallots, radish, chili, sweet chili sauce." },
                { name: "Crackling Pork Roll", price: "$12.00", desc: "Crackling pork, pate, mayo, carrots, onions, coriander, cucumber, shallots, radish, lettuce, chili." },
                { name: "Lemongrass Beef Roll", price: "$12.00", desc: "Lemongrass beef, mayo, pate, carrots, onions, coriander, cucumber, shallots, radish, chili." },
                { name: "Lemongrass Chicken", price: "$11.00", desc: "Lemongrass BBQ Chicken, Mayo, Pate, Carrots, Onion, Coriander, Cucumber, Shallots, Radish, Chilli." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline">
                    <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                    {item.price && <span className="text-lg font-semibold text-npr-red ml-4">{item.price}</span>}
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Categories */}
          <div className="space-y-16">
            {/* Vegetarian */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Vegetarian Banh Mi</h4>
              <div className="space-y-8">
                {[
                  { name: "Salad Tofu Roll", price: "$10.00", desc: "Lettuce, carrot, onion, tofu, cucumber, shallot, coriander, radish, chilli, soy sauce." },
                  { name: "Salad & Cheese Roll", price: "$10.00", desc: "Lettuce, carrot, onion, cucumber, shallot, cheese, coriander, radish, chilli, soy sauce." },
                  { name: "Salad & Avocado Roll", price: "$10.00", desc: "Lettuce, carrot, onion, cucumber, shallot, avocado, coriander, radish, chilli, soy sauce." },
                  { name: "Salad Vegan Ham Roll", price: "$10.00", desc: "Lettuce, carrot, onion, Vegan Ham, cucumber, shallot, avocado, coriander, radish, chilli, soy sauce." },
                  { name: "Vegan Ham & Cheese Roll", price: "$11.00", desc: "Lettuce, carrot, onion, Vegan Ham, cheese cucumber, shallot, avocado, coriander, radish, chilli, soy sauce." },
                  { name: "Salad Roll", price: "$9.00", desc: "Lettuce, carrot, onion, tofu cucumber, shallot, coriander, radish, chilli, soy sauce." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                      {item.price && <span className="text-lg font-semibold text-npr-red ml-4">{item.price}</span>}
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Spring Rolls & Salads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Spring Rolls & Salads</h4>
              <div className="space-y-8">
                {[
                  { name: "Spring Rolls - Prawn & Cheese (5 rolls)", price: "$7.00", desc: "" },
                  { name: "Spring Rolls - Pork, Carrot & Vermicelli (5 rolls)", price: "$7.00", desc: "" },
                  { name: "Vermicelli Salad Bowls", price: "$14.00", desc: "Vermicelli Noodles, Lettuce, Carrots, Mint, Cucumber, Radish, Shallot, Chilli Fish Sauce. Toppings: Chicken, BBQ Pork, Crackling Pork, Lemongrass Pork, Lemongrass Beef, Spring Roll (Pork), Tofu." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                      {item.price && <span className="text-lg font-semibold text-npr-red ml-4">{item.price}</span>}
                    </div>
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
              <h4 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-npr-red/20 pb-2 inline-block">Summer (Rice Paper) Rolls</h4>
              <div className="space-y-8">
                {[
                  { name: "Prawn (3 rolls)", price: "$9.00", desc: "Prawn, lettuce, carrot, mint, vermicelli." },
                  { name: "Chicken (3 rolls)", price: "$9.00", desc: "Chicken, lettuce, carrot, mint, vermicelli." },
                  { name: "Pork (3 rolls)", price: "$9.00", desc: "Pork, lettuce, carrot, mint, vermicelli." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                      {item.price && <span className="text-lg font-semibold text-npr-red ml-4">{item.price}</span>}
                    </div>
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
                  { name: "Juices (Green, Mixed, Orange, Watermelon)", price: "R $7.00 | L $8.00", desc: "Green: Kale, celery, green apple, lime, mint, ginger. Mixed: Pineapple, orange, watermelon, passionfruit, kiwi. Orange: 100% fresh. Watermelon: 100% fresh." },
                  { name: "Smoothies (Avocado)", price: "R $8.00 | L $9.00", desc: "Avocado, Condensed Milk, Ice, Coconut, Soymilk." },
                  { name: "Vietnamese Sugarcane", price: "R $6.00 | L $7.00", desc: "Made from 100% Fresh Sugarcanes." },
                  { name: "Vietnamese Iced Coffee", price: "R $6.00 | L $7.00", desc: "Condensed milk, Organic Coffee Beans from Ngoc Nguyen." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-xl text-gray-800 group-hover:text-npr-red transition-colors">{item.name}</h5>
                      {item.price && <span className="text-lg font-semibold text-npr-red ml-4">{item.price}</span>}
                    </div>
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
