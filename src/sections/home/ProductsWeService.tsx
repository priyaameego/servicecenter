import { Utensils, Shirt, Wind, Fan, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface ProductCategory {
  title: string;
  icon: typeof Utensils;
  items: string[];
}

const productCategories: ProductCategory[] = [
  {
    title: 'Kitchen Appliances',
    icon: Utensils,
    items: [
      'Air Fryers',
      'Blenders',
      'Mixers',
      'Grinders',
      'Choppers',
      'Juicers',
      'Food Processors',
      'Toasters',
      'Kettles',
      'Coffee Makers',
      'Rice Cookers',
      'Microwave Ovens',
    ],
  },
  {
    title: 'Garment Care',
    icon: Shirt,
    items: [
      'Steam Irons',
      'Garment Steamers',
    ],
  },
  {
    title: 'Home & Floor Care',
    icon: Wind,
    items: [
      'Vacuum Cleaners',
      'Handheld Vacuums',
      'Cleaning Appliances',
    ],
  },
  {
    title: 'Home Comfort',
    icon: Fan,
    items: [
      'Fans',
      'Air Coolers',
      'Heaters',
      'Humidifiers and selected home-comfort appliances',
    ],
  },
];

export function ProductsWeService() {
  return (
    <section className="section-padding bg-[#fafafa] relative overflow-hidden border-t border-b border-gray-200">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-300 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="section-eyebrow">Service Capabilities</span>
          <h2 className="section-title">PRODUCTS WE SERVICE</h2>
          <div className="section-divider-center mt-2 mb-4" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our service capabilities cover a broad range of <strong className="text-gray-900 font-semibold">Black+Decker appliances</strong>, including:
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal-group">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-[var(--color-primary)]/40 p-6 md:p-7 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group rounded-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3
                      className="text-lg font-bold text-gray-900 tracking-wide group-hover:text-[var(--color-primary)] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className="space-y-2.5">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-black transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Accent */}
                <div className="mt-8 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-[var(--color-primary)]">
                    Black+Decker Service
                  </span>
                  <span>Inspection Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Notice */}
        <div className="max-w-4xl mx-auto bg-white border border-amber-200/80 rounded-sm p-5 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left reveal">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Product serviceability may vary depending on model, spare-parts availability, warranty status, and product condition.
            </p>
          </div>
          <div className="shrink-0 mt-2 sm:mt-0">
            <Button to="/contact-us" variant="primary" className="!py-2.5 !px-5 !text-xs">
              Check Serviceability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
