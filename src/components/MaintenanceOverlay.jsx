import React from "react";

export default function MaintenanceOverlay() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-95">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">We&#8217;ll be back soon</h1>
                <p className="text-lg md:text-2xl text-gray-300">Our site is currently under maintenance. Thanks for your patience.</p>
            </div>
        </div >
    );
}
