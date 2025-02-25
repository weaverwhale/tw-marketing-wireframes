import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useNavigation, type Navigation } from '@/hooks/useNavigation';

const NavigationHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState<keyof Navigation | null>(null);
  const navigation: Navigation = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Navigation Line */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="mr-8 text-xl font-bold text-blue-600">
              Triple Whale
            </a>

            {Object.entries(navigation).map(([key, section]) => (
              <button
                key={key}
                onClick={() =>
                  setActiveDropdown(activeDropdown === key ? null : (key as keyof Navigation))
                }
                className={`flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium ${
                  activeDropdown === key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>{section.label}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}

            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Whalies
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Pricing
            </a>
          </div>

          <a
            href="#"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book Demo
          </a>
        </div>

        {/* Dropdown Content */}
        {activeDropdown && (
          <div className="mt-4 rounded-lg bg-white p-6 shadow-xl">
            <div className="grid grid-cols-12 gap-8">
              {/* Main content columns */}
              <div className="col-span-8 grid grid-cols-2 gap-16">
                {navigation[activeDropdown].sections && activeDropdown !== 'resources' ? (
                  navigation[activeDropdown].sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="font-semibold text-gray-900">{section.label}</h3>
                      <div className="grid gap-4">
                        {section.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href || '#'}
                            className="flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50"
                          >
                            {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                            <div>
                              <div className="font-medium text-gray-900">{item.label}</div>
                              {item.description.length > 0 && (
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))
                ) : activeDropdown === 'resources' ? (
                  <div className="col-span-2 grid grid-cols-3 gap-8">
                    {navigation.resources.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="font-semibold text-gray-900">{section.label}</h3>
                        <div className="grid gap-4">
                          {section.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={item.href || '#'}
                              className="flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50"
                            >
                              {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                              <div>
                                <div className="font-medium text-gray-900">{item.label}</div>
                                {item.description.length > 0 && (
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Spotlight section */}
              <div className="col-span-4 rounded-lg bg-blue-50">
                <div className="flex flex-col h-full">
                  <div className="p-4">
                    <img
                      src={navigation[activeDropdown].spotlight.image}
                      alt="Spotlight"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {navigation[activeDropdown].spotlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {navigation[activeDropdown].spotlight.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        {navigation[activeDropdown].spotlight.cta}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationHeader;
