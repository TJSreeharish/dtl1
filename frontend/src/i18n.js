import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        select_language: "Select Language",
        AboutUs: "About Us"
      }
    },
    kn: {
        translation: {
          welcome: "ಸ್ವಾಗತ",
          select_language: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
          "CliniNSync": "ಕ್ಲಿನಿನ್ಸಿಂಕ್",
          "About Us": "ನಮ್ಮ ಬಗ್ಗೆ",
          "Features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
          "Our clinics": "ನಮ್ಮ ಕ್ಲಿನಿಕ್‌ಗಳು",
          "Contact Us": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",

          // Hero Section
          "Optimize Your Healthcare Journey": "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸೇವಾ ಪ್ರಯಾಣವನ್ನು ಸುಧಾರಿಸಿ",
          "Revolutionizing patient care with real-time health management software for clinics and hospitals.":
            "ಕ್ಲಿನಿಕ್‌ಗಳು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳಿಗಾಗಿ ನೈಜ ಸಮಯದ ಆರೋಗ್ಯ ನಿರ್ವಹಣಾ ಸಾಫ್ಟ್‌ವೇರ್‌ನೊಂದಿಗೆ ರೋಗಿ ಆರೈಕೆಯನ್ನು ಕ್ರಾಂತಿಕಾರಿಯಾಗಿ ಸುಧಾರಿಸುವುದು.",
          "Improve efficiency, enhance patient experience, and streamline operations effortlessly.":
            "ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೆಚ್ಚಿಸಿ, ರೋಗಿ ಅನುಭವವನ್ನು ಉತ್ತಮಗೊಳಿಸಿ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಸುಲಭಗೊಳಿಸಿ.",
          "Login": "ಲಾಗಿನ್",
          "Register": "ನೋಂದಣಿ",

          // Info Boxes
          "Digital Health Record Access": "ಡಿಜಿಟಲ್ ಆರೋಗ್ಯ ದಾಖಲೆ ಪ್ರವೇಶ",
          "Seamless Patient Tracking": "ಸರಳ ರೋಗಿ ಹಂತ ಅನುಸರಣೆ",
          "Role Based Access": "ಪಾತ್ರ ಆಧಾರಿತ ಪ್ರವೇಶ",

          // Trusted Clinics
          "Our Trusted Clinics & Hospitals": "ನಮ್ಮ ನಂಬಿಗಸ್ಥ ಕ್ಲಿನಿಕ್‌ಗಳು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳು",
          "We collaborate with trusted clinics and hospitals offering specialties across pediatrics, dermatology, ENT, psychiatry, and more.":
            "ನಾವು ಮಕ್ಕಳ ವೈದ್ಯಕೀಯ, ಚರ್ಮರೋಗ, ಕಿವಿ ಮೂಗು ತೊಡೆ, ಮನೋವಿಜ್ಞಾನ ಮತ್ತು ಇತರ ತಜ್ಞತೆಗಳನ್ನು ಒದಗಿಸುವ ನಂಬಿಗಸ್ತ ಕ್ಲಿನಿಕ್‌ಗಳು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳೊಂದಿಗೆ ಸಹಕರಿಸುತ್ತೇವೆ.",

          // Achievements
          "What We Have Achieved": "ನಾವು ಸಾಧಿಸಿರುವದು",
          "Doctors who trust us": "ನಮಗೆ ನಂಬಿಕೆ ಹೊಂದಿರುವ ವೈದ್ಯರು",
          "People Using": "ಬಳಸಿ ಮುಂದು ವರಿದ ಜನರು",
          "Reduction in Wrong Treatment": "ತಪ್ಪಾದ ಚಿಕಿತ್ಸೆ 50% ಇಳಿಕೆಯಾಗುವಿಕೆ",
          "Satisfied patients": "ಸಂತೃಪ್ತ ರೋಗಿಗಳು",
          "Increased efficiency": "ಕಾರ್ಯಕ್ಷಮತೆ ಹೆಚ್ಚಾಗಿದೆ",

          // Features
          "Our Features": "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು",
          "Streamlining Patient Management with Advanced Tools":
            "ಆಧುನಿಕ ಉಪಕರಣಗಳೊಂದಿಗೆ ರೋಗಿ ನಿರ್ವಹಣೆಯನ್ನು ಸರಳಗೊಳಿಸುವುದು",
          "Digital Health Record Storage": "ಡಿಜಿಟಲ್ ಆರೋಗ್ಯ ದಾಖಲೆ ಸಂಗ್ರಹಣೆ",
          "Securely store, access, and manage patient records with cloud-enabled solutions, ensuring data safety and accessibility.":
            "ಮೇಘಸೇವೆಯ ಮೂಲಕ ರೋಗಿಗಳ ದಾಖಲೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಿ, ಪ್ರವೇಶಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
          "Role-Based Access with 24x7 Service": "24x7 ಸೇವೆಯೊಂದಿಗೆ ಪಾತ್ರ ಆಧಾರಿತ ಪ್ರವೇಶ",
          "Provide healthcare staff with secure, role-based access controls, supported by 24x7 availability.":
            "ಆರೋಗ್ಯ ಸೇವಾ ಸಿಬ್ಬಂದಿಗೆ ಸುರಕ್ಷಿತ, ಪಾತ್ರ ಆಧಾರಿತ ಪ್ರವೇಶ ನಿಯಂತ್ರಣ ಒದಗಿಸಿ.",
          "Effortless Appointment Booking": "ಸುಲಭ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ಕಿಂಗ್",
          "Simplify scheduling with a seamless, patient-friendly appointment booking system.":
            "ರೋಗಿ ಸ್ನೇಹಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಶೆಡ್ಯೂಲಿಂಗ್ ಸರಳಗೊಳಿಸಿ.",
          "Advanced Analytics and Reports": "ಆಧುನಿಕ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ವರದಿಗಳು",
          "Gain actionable insights into patient trends and clinic performance with real-time analytics.":
            "ನೈಜ ಸಮಯದ ವಿಶ್ಲೇಷಣೆ ಮೂಲಕ ರೋಗಿ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ಕ್ಲಿನಿಕ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಕುರಿತು ಅರ್ಥಪೂರ್ಣ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ.",

          // Team Section
          "Meet Our Team": "ನಮ್ಮ ತಂಡವನ್ನು ಭೇಟಿಯಾಗಿ",
          "Pratham M Mallya": "ಪ್ರಥಮ್ ಎಂ ಮಾಲ್ಯಾ",
          "Sreeharish TJ": "ಶ್ರೀಹರಿಶ್ ಟಿ.ಜೆ.",
          "Jay Sinha": "ಜಯ್ ಸಿನ್ಹಾ",
          "Developer": "ವಿಕಸಕ",
          "Sumedh Udupa U": "ಸುಮೇಧ ಉದುಪಾ ಉ",
          "Syed Muzammil Hussaini": "ಸಯದ್ ಮುಜಮ್ಮಿಲ್ ಹುಸೈನಿ",

          // Contact Section
          "Contact Us": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
          "If you have any questions, feel free to reach out to us.":
            "ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಮುಕ್ತವಾಗಿರಿ.",
          "Your Name": "ನಿಮ್ಮ ಹೆಸರು",
          "Your Email": "ನಿಮ್ಮ ಇಮೇಲ್",
          "Your Message": "ನಿಮ್ಮ ಸಂದೇಶ",
          "Send Message": "ಸಂದೇಶ ಕಳುಹಿಸಿ",

          // Buttons
          "Learn More": "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
        }
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback if language is not available
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
