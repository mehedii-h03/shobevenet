import { useState } from "react";

const Item = ({ title, children, isLastItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`py-2 px-8 ${isLastItem ? '' : 'border-b border-[#D9D9D9]'}`}>
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-base font-medium text-secondary-color">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-[#585A5E] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 transform transition-transform duration-300">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const FAQ = () => {
    return (
        <div className="mb-36">
            <h2 className="text-3xl font-semibold text-center mb-11">Frequently Asked Question.</h2>
            <div className="mx-auto max-w-5xl border border-secondary-text-color rounded-3xl">
                <div className="space-y-4">
                    <Item title="How much does a Event Company cost?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="What do Event Companies do?" isLastItem>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                </div>
            </div>
        </div>
    );
};