/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Stethoscope, 
  Activity, 
  FlaskConical, 
  Pill, 
  Calendar, 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  User,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>
                Kaniha<span className="text-blue-600">Medical</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white block px-3 py-3 rounded-md text-base font-medium text-center"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-blue-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100 rounded-l-full -mr-24 hidden lg:block opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Your Health, Our Priority
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Modern Healthcare <br />
              <span className="text-blue-600 text-6xl md:text-7xl">You Can Trust.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Kaniha Medical provides world-class healthcare services with state-of-the-art facilities and a team of expert doctors dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full border-2 border-blue-100 hover:border-blue-600 transition-all"
              >
                Our Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">20k+</span>
                <span className="text-sm text-gray-500">Happy Patients</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">50+</span>
                <span className="text-sm text-gray-500">Expert Doctors</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">15+</span>
                <span className="text-sm text-gray-500">Specializations</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                alt="Doctor" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-blue-50"
            >
              <div className="bg-green-100 p-2 rounded-lg">
                <Activity className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Heart Rate</p>
                <p className="text-lg font-bold text-blue-900">98 bpm</p>
              </div>
            </motion.div>
            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-blue-50"
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Next Appointment</p>
                <p className="text-lg font-bold text-blue-900">Today, 2:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCards = () => {
  const cards = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Care",
      desc: "24/7 support for critical medical needs.",
      contact: "+1 (800) 123-4567",
      color: "bg-red-600",
      textColor: "text-white"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      desc: "Mon - Fri: 8am - 8pm",
      contact: "Sat - Sun: 10am - 4pm",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Our Location",
      desc: "123 Medical Plaza, Health City",
      contact: "Get Directions",
      color: "bg-white",
      textColor: "text-blue-900"
    }
  ];

  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`${card.color} ${card.textColor === 'text-white' ? 'text-white' : 'text-blue-900'} p-8 rounded-3xl shadow-xl flex flex-col items-start gap-4 transition-all`}
          >
            <div className={`${card.color === 'bg-white' ? 'bg-blue-50 text-blue-600' : 'bg-white/20 text-white'} p-3 rounded-2xl`}>
              {card.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className={`text-sm ${card.textColor === 'text-white' ? 'text-blue-50' : 'text-gray-600'} mb-4`}>{card.desc}</p>
              <p className="font-bold">{card.contact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "General Checkup",
      desc: "Comprehensive health evaluations to keep you in peak condition."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Emergency Care",
      desc: "Immediate medical attention for urgent and life-threatening situations."
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "Lab Test",
      desc: "Advanced diagnostic testing with accurate and fast results."
    },
    {
      icon: <Pill className="w-10 h-10" />,
      title: "Pharmacy",
      desc: "Fully stocked pharmacy with expert guidance on medications."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Services</h2>
          <p className="text-4xl font-extrabold text-blue-900 mb-4">High Quality Medical Care</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group"
            >
              <div className="bg-white text-blue-600 p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" 
                alt="Hospital" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl text-white shadow-xl z-20 hidden md:block">
              <p className="text-5xl font-bold mb-1">25+</p>
              <p className="text-sm font-medium opacity-80">Years of Experience</p>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
              We Are Dedicated To Your <br />
              <span className="text-blue-600">Health And Well-being</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kaniha Medical has been a cornerstone of healthcare in our community for over two decades. Our mission is to provide compassionate, high-quality care that improves the lives of our patients.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine advanced medical technology with a patient-centered approach, ensuring that every individual receives personalized treatment in a comfortable and supportive environment.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Modern Medical Facilities",
                "Expert Professional Doctors",
                "24/7 Emergency Support",
                "Personalized Treatment Plans"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-blue-600 rounded-full p-1">
                    <ChevronRight className="text-white w-4 h-4" />
                  </div>
                  <span className="text-blue-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Robert Smith",
      specialty: "Orthopedic",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Team</h2>
          <p className="text-4xl font-extrabold text-blue-900 mb-4">Meet Our Expert Doctors</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-blue-50 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full -mr-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-blue-100 font-bold tracking-widest uppercase text-sm mb-3">Appointment</h2>
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">
              Ready To Book Your <br />
              <span className="text-blue-200">Consultation?</span>
            </h3>
            <p className="text-blue-100 mb-10 text-lg">
              Fill out the form and our team will get back to you within 24 hours to confirm your appointment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Call Us Directly</p>
                  <p className="text-xl font-bold">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Email Us</p>
                  <p className="text-xl font-bold">contact@kanihamedical.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Department</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white">
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-2">Message (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your concern..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Our Address</p>
                  <p className="text-gray-600 text-sm">123 Medical Plaza, Health City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Phone Number</p>
                  <p className="text-gray-600 text-sm">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Email Address</p>
                  <p className="text-gray-600 text-sm">info@kanihamedical.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden h-full min-h-[400px] shadow-xl border border-blue-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.98509668459377!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x5119f8783990b5b!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1638300000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Kaniha<span className="text-blue-400">Medical</span>
              </span>
            </div>
            <p className="text-blue-100/70 mb-8 leading-relaxed">
              Providing exceptional healthcare services with a focus on patient comfort and advanced medical technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Doctors', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-blue-100/70 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['General Checkup', 'Emergency Care', 'Cardiology', 'Neurology', 'Pediatrics'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-100/70 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-blue-100/70 mb-6">Subscribe to get the latest health tips and hospital updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 outline-none focus:border-blue-400 transition-all text-white placeholder:text-blue-100/40"
              />
              <button className="absolute right-2 top-2 bg-blue-600 p-1.5 rounded-lg hover:bg-blue-500 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-blue-100/50 text-sm">
          <p>© {new Date().getFullYear()} Kaniha Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <About />
        <Services />
        <Doctors />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      
      {/* Emergency Floating Button */}
      <motion.a
        href="tel:+18001234567"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-red-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Emergency Call
        </span>
      </motion.a>
    </div>
  );
}
