
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Name */}
        <p className="text-sm">
          © {new Date().getFullYear()} Soham Mondal. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-10 mt-3 md:mt-0">
          <a
            href="https://github.com/SOHAMMONDAL07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/soham-mondal-a3b388328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

