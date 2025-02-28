import { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';

// Sidebar Overlay Component
function SidebarOverlay({ isOpen, toggleSidebar }) {
    return isOpen ? (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
        ></div>
    ) : null;
}

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleDropdown = (itemId) => {
        setActiveDropdown((prev) => (prev === itemId ? null : itemId));
    };

    const buttonClasses =
    "inline-flex items-center p-2 m-4 tiffin-text rounded-lg hover:tiffin-button-hover focus:outline-none md:hidden cursor-pointer";
  const linkClasses = "block p-2 text-tiffin-text hover:bg-tiffin-text-hover";
  
  const sidebarClasses = `fixed top-0 left-0 z-40 w-64 h-screen bg-tiffin-secondary-bg shadow-lg transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } md:w-48 lg:w-64 md:translate-x-0 md:block`;

    const menuItems = [
        {
            id: 'Product',
            label: 'Product',
            link: '#',
            hasDropdown: true,
            subItems: [
                { label: 'Add Product', link: '/product/add_product' },
                { label: 'View Product', link: '/product/view_product' },
            ],
        },
        {
            id: 'profile',
            label: 'Profile',
            link: '#',
        },
        {
            id: 'settings',
            label: 'Settings',
            hasDropdown: true,
            subItems: [
                { label: 'General', link: '#' },
                { label: 'Notifications', link: '#' },
                { label: 'Security', link: '#' },
            ],
        },
        {
            id: 'logout',
            label: 'Logout',
            link: '#',
        },
    ];

    return (
        <>
            <button onClick={toggleSidebar} className={buttonClasses}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6 fill-tiffin-text" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zM3 10h14a1 1 0 100-2H3a1 1 0 000 2zM3 15h14a1 1 0 100-2H3a1 1 0 000 2z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <SidebarOverlay isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <div className={sidebarClasses} aria-label="Sidebar Menu">
        <div className="py-10 px-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`${linkClasses} w-full text-left flex items-center justify-between cursor-pointer`}
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform transform fill-tiffin-text ${activeDropdown === item.id ? 'rotate-180' : ''
                    }`}

                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                    </button>
                    {item.subItems && (
                      <ul
                        className={`${
                          activeDropdown === item.id ? 'block' : 'hidden'
                        } pl-4`}
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link to={subItem.link} className={linkClasses}> {/* Use Link here */}
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={item.link} className={linkClasses}> {/* Use Link here */}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
      <div className="p-4">
        <Outlet /> {/* This is where child components will be displayed */}
      </div>
      </div>
        </>
    );
}

export default Sidebar;