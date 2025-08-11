import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-purple-950 to-black text-gray-300">
            <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        BitLogue
                    </h3>
                    <p className="text-sm mt-2 text-gray-400">
                        © 2025 BitLogue. All Rights Reserved.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Company</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Affiliate Program</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Press Kit</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Support</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Account</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Help</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Customer Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Legals</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Licensing</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
