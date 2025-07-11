import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { 
  Menu, 
  X, 
  Zap, 
  Shield, 
  Lock, 
  Sun, 
  Settings, 
  HeadphonesIcon,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8ad17c0b-3147-411d-b1e3-3e0a1f9f4c07");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Message sent successfully!",
        text: "You sent the message!",
        icon: "success"
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Systems",
      description: "Complete electrical installation, maintenance, and troubleshooting services for residential, commercial, and industrial properties with certified safety standards and energy efficiency optimization."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CCTV Installation",
      description: "Professional security camera systems installation and maintenance including IP cameras, DVR/NVR setup, remote monitoring capabilities, and comprehensive surveillance solutions for enhanced security."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Access Control Systems",
      description: "Advanced access control solutions including biometric systems, card readers, electronic locks, and integrated security platforms for buildings, offices, and restricted areas management."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Technology",
      description: "Complete solar energy solutions including system design, installation, grid-tie and off-grid systems, battery storage, and renewable energy consultation for sustainable power generation."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "System Integration",
      description: "Seamless integration of multiple security and electrical systems including automation, smart home solutions, and centralized control platforms for enhanced operational efficiency and convenience."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Expert technical consultation services for project planning, system design, technology selection, and implementation strategies tailored to specific client requirements and industry standards."
    }
  ];

  const projects = [
    {
      image: "/IMG-20250518-WA0033.jpg",
      title: "Commercial Solar Installation",
      description: "200kW solar system installation for manufacturing facility, reducing energy costs by 60% and providing sustainable power generation."
    },
    {
      image: "../images/IMG-20250518-WA0024.jpg",
      title: "Integrated Security System",
      description: "Complete CCTV and access control system for corporate headquarters with 50+ cameras and biometric access points."
    },
    {
      image: "../images/IMG-20250518-WA0008.jpg",
      title: "Smart Building Automation",
      description: "Comprehensive electrical and automation system for modern office complex with energy management and smart controls."
    },
    {
      image: "../images/IMG-20250518-WA0026.jpg",
      title: "Residential Security Package",
      description: "Complete home security solution with wireless CCTV, smart locks, and mobile app integration for remote monitoring."
    },
    {
      image: "../images/IMG-20250518-WA0016.jpg",
      title: "Industrial Power Distribution",
      description: "High-voltage electrical installation and power distribution system for manufacturing plant with backup generators."
    },
    {
      image: "../images/IMG-20250518-WA0004.jpg",
      title: "Off-Grid Solar Solution",
      description: "Complete off-grid solar system with battery storage for remote location, providing 24/7 reliable power supply."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-900">
              Erastus Ochieng
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="../images/ErastusHome.jpg"
                alt="Erastus Ochieng"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Erastus Ochieng
            </h1>
            <p className="text-xl sm:text-2xl text-teal-600 mb-6 font-medium">
              Tech Expert & Electrical Systems Specialist
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming spaces with cutting-edge electrical systems,
              comprehensive security solutions, and sustainable solar
              technology. Delivering innovative technical expertise for modern
              infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
              >
                View Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            As a dedicated technology expert with extensive experience in
            electrical systems, CCTV installation, access control, and solar
            technology, I bring innovative solutions to complex technical
            challenges. My expertise spans residential, commercial, and
            industrial applications, focusing on safety, efficiency, and
            cutting-edge technology integration. I'm passionate about delivering
            sustainable energy solutions and comprehensive security systems that
            enhance both functionality and peace of mind for every client.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive technical solutions for all your electrical and
              security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-blue-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing successful installations and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-blue-900" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="/projects.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-900 via-teal-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span className="mr-2">See More Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your next project? Let's connect and bring your
              vision to life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              onSubmit={onSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project requirements..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Erastus Ochieng</h3>
              <p className="text-gray-400 mb-4">
                Professional tech expert delivering innovative electrical and
                security solutions with sustainable energy focus.
              </p>
              <div className="flex space-x-4">
                <a
                  title="Linkedin"
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  title="Github"
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  title="Twitter"
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Electrical Systems</li>
                <li>CCTV Installation</li>
                <li>Access Control</li>
                <li>Solar Technology</li>
                <li>System Integration</li>
                <li>Technical Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>efluxtech01@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+254 797 191716</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Nakuru, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Erastus Ochieng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
