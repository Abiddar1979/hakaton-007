import React from 'react';

const TypographyShowcase = () => {
  // Define an array of text styles to map through
  const textStyles = [
    { 
      weight: 'Regular', 
      styles: [
        { class: 'text-xs', size: '12px', lineHeight: 'Auto' },
        { class: 'text-sm', size: '14px', lineHeight: '140%' },
        { class: 'text-base', size: '16px', lineHeight: '140%' },
        { class: 'text-lg', size: '18px', lineHeight: '140%' },
        { class: 'text-lg', size: '20px', lineHeight: '140%' },
        { class: 'text-xl', size: '24px', lineHeight: '120%' },
        { class: 'text-xl', size: '32px', lineHeight: '140%' },
        { class: 'text-2xl', size: '36px', lineHeight: '120%' },
        { class: 'text-3xl', size: '40px', lineHeight: '120%' },
        { class: 'text-3xl', size: '60px', lineHeight: '110%' }
      ]
    },
    { 
      weight: 'Medium', 
      styles: [
        { class: 'text-xs font-medium', size: '12px', lineHeight: 'Auto' },
        { class: 'text-sm font-medium', size: '14px', lineHeight: '140%' },
        { class: 'text-base font-medium', size: '16px', lineHeight: '140%' },
        { class: 'text-lg font-medium', size: '18px', lineHeight: '140%' },
        { class: 'text-lg font-medium', size: '20px', lineHeight: '140%' },
        { class: 'text-xl font-medium', size: '24px', lineHeight: '120%' },
        { class: 'text-xl font-medium', size: '32px', lineHeight: '140%' },
        { class: 'text-2xl font-medium', size: '36px', lineHeight: '120%' },
        { class: 'text-2xl font-medium', size: '40px', lineHeight: '120%' },
        { class: 'text-3xl font-medium', size: '72px', lineHeight: '110%' }
      ]
    },
    { 
      weight: 'Semibold', 
      styles: [
        { class: 'text-xs font-semibold', size: '12px', lineHeight: 'Auto' },
        { class: 'text-sm font-semibold', size: '14px', lineHeight: '140%' },
        { class: 'text-base font-semibold', size: '16px', lineHeight: '140%' },
        { class: 'text-lg font-semibold', size: '18px', lineHeight: '140%' },
        { class: 'text-lg font-semibold', size: '20px', lineHeight: '140%' },
        { class: 'text-xl font-semibold', size: '24px', lineHeight: '120%' },
        { class: 'text-xl font-semibold', size: '32px', lineHeight: '140%' },
        { class: 'text-2xl font-semibold', size: '36px', lineHeight: '120%' },
        { class: 'text-2xl font-semibold', size: '40px', lineHeight: '120%' },
        { class: 'text-3xl font-semibold', size: '72px', lineHeight: '110%' }
      ]
    },
    { 
      weight: 'Bold', 
      styles: [
        { class: 'text-xs font-bold', size: '12px', lineHeight: 'Auto' },
        { class: 'text-sm font-bold', size: '14px', lineHeight: '140%' },
        { class: 'text-base font-bold', size: '16px', lineHeight: '140%' },
        { class: 'text-lg font-bold', size: '18px', lineHeight: '140%' },
        { class: 'text-lg font-bold', size: '20px', lineHeight: '140%' },
        { class: 'text-xl font-bold', size: '24px', lineHeight: '120%' },
        { class: 'text-xl font-bold', size: '32px', lineHeight: '140%' },
        { class: 'text-2xl font-bold', size: '36px', lineHeight: '120%' },
        { class: 'text-2xl font-bold', size: '40px', lineHeight: '120%' },
        { class: 'text-3xl font-bold', size: '72px', lineHeight: '110%' }
      ]
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Typography Showcase</h1>
      {textStyles.map((weightCategory) => (
        <div key={weightCategory.weight} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{weightCategory.weight}</h2>
          <div className="space-y-4">
            {weightCategory.styles.map((style, index) => (
              <div 
                key={index} 
                className="flex items-center border-b pb-2"
              >
                <div className="w-24 text-gray-500">{style.class}</div>
                <div className="w-24 text-gray-500">{style.size}</div>
                <div className="w-24 text-gray-500">{style.lineHeight}</div>
                <div 
                  className={`${style.class}`}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypographyShowcase;