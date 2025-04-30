'use client';

import React from 'react';

const Carouse = () => {
    const videos = [
        { id: 'JQbjS0_ZfJ0?si=lFloBAqjzLZhEpJ5', title: 'Video 1' },
        { id: 'JQbjS0_ZfJ0?si=lFloBAqjzLZhEpJ5', title: 'Video 2' },
        { id: 'JQbjS0_ZfJ0?si=lFloBAqjzLZhEpJ5', title: 'Video 3' },
        { id: 'JQbjS0_ZfJ0?si=lFloBAqjzLZhEpJ5', title: 'Video 4' },
        { id: 'JQbjS0_ZfJ0?si=lFloBAqjzLZhEpJ5', title: 'Video 5' },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="relative w-full h-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        aria-current={index === activeIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1))}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => setActiveIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0))}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carouse;