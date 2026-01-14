// src/services/api.js

import KavitaImg from '../assets/Team/Kavita Iyer.webp';
import GauravImg from '../assets/Team/GauravChauhan.webp';
import ShilpaImg from '../assets/Team/Shilpa.webp';
import ShreeyaImg from '../assets/Team/shreeya.webp';
import RapeelliImg from '../assets/Team/Rapeelli.webp'; 
import SoumyaImg from '../assets/Team/Soumya.webp';

// 1. The Data with Multi-language Bios
const TEAM_DATA = [
  {
    id: 1,
    name: "Kavita Iyer",
    image: KavitaImg,
    // Changed 'bio' from a string to an object { en, kn }
    bio: {
      en: "Dedicated to empowering students, bridging educational inequities, and unlocking opportunities in Education. An alumnus of IIM Ahmedabad and IIT Delhi (where she was the Director’s Gold Medallist), Kavita’s corporate career spanned the Tata Administrative Service, Tanishq, and ICICI. She is an avid Hindustani classical vocalist and cofounder of SIFF Young Artiste, which makes music education accessible across schools nationally. She is also a Founder Trustee of Plaksha University, aiming to re-imagine higher education in technology in India.",
      kn: "ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು, ಶೈಕ್ಷಣಿಕ ಅಸಮಾನತೆಗಳನ್ನು ನಿವಾರಿಸಲು ಮತ್ತು ಶಿಕ್ಷಣದಲ್ಲಿ ಅವಕಾಶಗಳನ್ನು ತೆರೆಯಲು ಇವರು ಸಮರ್ಪಿತರಾಗಿದ್ದಾರೆ. IIM ಅಹಮದಾಬಾದ್ ಮತ್ತು IIT ದೆಹಲಿಯ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿನಿಯಾಗಿರುವ (ಅಲ್ಲಿ ಅವರು ನಿರ್ದೇಶಕರ ಚಿನ್ನದ ಪದಕ ವಿಜೇತರಾಗಿದ್ದರು), ಕವಿತಾ ಅವರ ವೃತ್ತಿಜೀವನವು ಟಾಟಾ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟಿವ್ ಸರ್ವಿಸ್, ತನಿಷ್ಕ್ ಮತ್ತು ICICI ಬ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ವ್ಯಾಪಿಸಿದೆ. ಅವರು ಹಿಂದೂಸ್ತಾನಿ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತಗಾರ್ತಿ ಮತ್ತು SIFF ಯಂಗ್ ಆರ್ಟಿಸ್ಟ್‌ನ ಸಹ-ಸಂಸ್ಥಾಪಕರು. ಪ್ಲಾಕ್ಷಾ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸ್ಥಾಪಕ ಟ್ರಸ್ಟಿಯಾಗಿಯೂ ಅವರು ಭಾರತದಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ ಶಿಕ್ಷಣವನ್ನು ಮರುರೂಪಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ."
    }
  },
  {
    id: 2,
    name: "Gaurav Chauhan",
    image: GauravImg,
    bio: {
      en: "A Computer Science graduate, Gaurav began his journey as a Teach For India fellow, where he taught Math, theatre, and public speaking while building student leadership structures. He went on to teach high school Math and lead program operations at SIFF Scholars before joining Parikshe as its first employee. At Parikshe, he works at the intersection of product, people, and process, driving scale and impact. He is passionate about creating equitable access to quality learning, especially in students’ mother tongues. Outside of work, he enjoys reading, running, meditating, and occasionally performing on stage.",
      kn: "ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಪದವೀಧರರಾದ ಗೌರವ್, ಟೀಚ್ ಫಾರ್ ಇಂಡಿಯಾ ಫೆಲೋ ಆಗಿ ತಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಅವರು ಗಣಿತ, ರಂಗಭೂಮಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಭಾಷಣವನ್ನು ಕಲಿಸುತ್ತಾ ವಿದ್ಯಾರ್ಥಿ ನಾಯಕತ್ವವನ್ನು ಬೆಳೆಸಿದರು. ಪರೀಕ್ಷೆಗೆ ಸೇರುವ ಮೊದಲು SIFF ಸ್ಕಾಲರ್ಸ್‌ನಲ್ಲಿ ಪ್ರೌಢಶಾಲಾ ಗಣಿತವನ್ನು ಕಲಿಸಿದರು ಮತ್ತು ಕಾರ್ಯಕ್ರಮದ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಮುನ್ನಡೆಸಿದರು. ಪರೀಕ್ಷೆಯಲ್ಲಿ, ಅವರು ಉತ್ಪನ್ನ, ಜನರು ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯ ಸಂಯೋಜನೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ. ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಗುಣಮಟ್ಟದ ಕಲಿಕೆಗೆ ಸಮಾನ ಪ್ರವೇಶವನ್ನು ಕಲ್ಪಿಸುವುದು ಅವರ ಆಸಕ್ತಿಯಾಗಿದೆ. ಓದುವುದು, ಓಡುವುದು ಮತ್ತು ಧ್ಯಾನ ಮಾಡುವುದು ಅವರ ಹವ್ಯಾಸಗಳಾಗಿವೆ."
    }
  },
  {
    id: 3,
    name: "Shilpa",
    image: ShilpaImg,
    bio: {
      en: "Shilpa blends science, finance, literature, and education into her approach to learning. She has an academic background in B.Sc in Biotechnology, MBA in Finance, M.A. in English Literature, TESOL, and PGDIE (IB). She brings over a decade of rich experience from both the corporate and education sectors, with corporate roles at Accenture and LinkedIn, Education Fellow at Teach For India (Chennai), Educator and Program Head at SIFF Scholars (2018–Present) At Parikshe, she channels her passion for teaching and strategy into designing impactful content that reaches thousands of learners. She believes Parikshe is a powerful platform to scale quality education. When she isn’t working, Shilpa enjoys reading, traveling, and exploring new cuisines.",
      kn: "ಶಿಲ್ಪಾ ಅವರು ವಿಜ್ಞಾನ, ಹಣಕಾಸು, ಸಾಹಿತ್ಯ ಮತ್ತು ಶಿಕ್ಷಣವನ್ನು ತಮ್ಮ ಕಲಿಕೆಯ ವಿಧಾನದಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತಾರೆ. ಅವರು ಬಯೋಟೆಕ್ನಾಲಜಿಯಲ್ಲಿ ಬಿ.ಎಸ್ಸಿ, ಹಣಕಾಸಿನಲ್ಲಿ ಎಂ.ಬಿ.ಎ, ಇಂಗ್ಲಿಷ್ ಸಾಹಿತ್ಯದಲ್ಲಿ ಎಂ.ಎ ಪದವಿಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಆಕ್ಸೆಂಚರ್ ಮತ್ತು ಲಿಂಕ್ಡ್‌ಇನ್‌ನಂತಹ ಕಾರ್ಪೊರೇಟ್ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಹಾಗೂ ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರದಲ್ಲಿ ಒಂದು ದಶಕಕ್ಕೂ ಹೆಚ್ಚು ಅನುಭವವನ್ನು ಅವರು ಹೊಂದಿದ್ದಾರೆ. ಪರೀಕ್ಷೆಯಲ್ಲಿ, ಸಾವಿರಾರು ಕಲಿಯುವವರನ್ನು ತಲುಪುವ ಪರಿಣಾಮಕಾರಿ ವಿಷಯವನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲು ಅವರು ಬೋಧನೆ ಮತ್ತು ತಂತ್ರಗಾರಿಕೆಯಲ್ಲಿ ತಮ್ಮ ಆಸಕ್ತಿಯನ್ನು ಬಳಸುತ್ತಾರೆ. ಓದುವುದು, ಪ್ರಯಾಣಿಸುವುದು ಮತ್ತು ಹೊಸ ಅಡುಗೆಗಳನ್ನು ಅನ್ವೇಷಿಸುವುದು ಅವರಿಗೆ ಇಷ್ಟ."
    }
  },
  {
    id: 4,
    name: "Shreeya Ramakrishnan",
    image: ShreeyaImg,
    bio: {
      en: "An SP Jain MBA and former Teach for India Fellow, she’s built ed-tech platforms, scaled YouTube channels past a million, and driven PAN-INDIA level Social impact with Google and Tata Trusts. With 10+ years across education, media, and tech, Shreeya brings together storytelling, strategy, and empathy to make education relatable and meaningful for the students at Parikshe. Her previous work in Tamil feature film helps her bring a unique creative lens to video content strategy and student engagement at Parikshe. Off work, she sings, dances, and believes every lesson should spark curiosity.",
      kn: "SP ಜೈನ್ MBA ಪದವೀಧರೆ ಮತ್ತು ಮಾಜಿ ಟೀಚ್ ಫಾರ್ ಇಂಡಿಯಾ ಫೆಲೋ ಆಗಿರುವ ಇವರು, ಎಡ್-ಟೆಕ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ನಿರ್ಮಿಸಿದ್ದಾರೆ ಮತ್ತು ಗೂಗಲ್ ಹಾಗೂ ಟಾಟಾ ಟ್ರಸ್ಟ್‌ಗಳೊಂದಿಗೆ ಸಾಮಾಜಿಕ ಪ್ರಭಾವ ಬೀರಿದ್ದಾರೆ. ಶಿಕ್ಷಣ, ಮಾಧ್ಯಮ ಮತ್ತು ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ 10+ ವರ್ಷಗಳ ಅನುಭವದೊಂದಿಗೆ, ಶ್ರೇಯಾ ಅವರು ಶಿಕ್ಷಣವನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅರ್ಥಪೂರ್ಣವಾಗಿಸಲು ಕಥೆ ಹೇಳುವಿಕೆ ಮತ್ತು ತಂತ್ರಗಾರಿಕೆಯನ್ನು ಬಳಸುತ್ತಾರೆ. ಅವರ ಹಿಂದಿನ ಚಲನಚಿತ್ರ ಅನುಭವವು ಪರೀಕ್ಷೆಯಲ್ಲಿ ವೀಡಿಯೊ ವಿಷಯ ತಂತ್ರಗಾರಿಕೆಗೆ ಹೊಸ ಆಯಾಮವನ್ನು ನೀಡುತ್ತದೆ. ಹಾಡುವುದು, ನೃತ್ಯ ಮಾಡುವುದು ಅವರ ಆಸಕ್ತಿಗಳಾಗಿವೆ."
    }
  },
  {
    id: 5,
    name: "Prashanthasai Rapelli",
    image: RapeelliImg,
    bio: {
      en: "With a background in Computer Science and a keen interest in Behavioural Psychology, and experience building scalable products at Physics Wallah and other leading institutions, Prashanth brings a sharp mix of product, tech, and growth thinking. At Parikshe, he’s driving the mission to make structured, high-impact learning accessible to every student across Karnataka blending data-led strategies with human-first design. Outside work, he’s a sketch artist, music enthusiast, and air gun shooter, believing that the best ideas live where empathy, structure, and vision come together.",
      kn: "ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಹಿನ್ನೆಲೆ ಮತ್ತು ವರ್ತನೆಯ ಮನೋವಿಜ್ಞಾನದಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಪ್ರಶಾಂತ್, ಫಿಸಿಕ್ಸ್ ವಾಲಾ ಮತ್ತು ಇತರ ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸ್ಕೇಲೆಬಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸಿದ ಅನುಭವವನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಪರೀಕ್ಷೆಯಲ್ಲಿ, ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರತಿಯೊಬ್ಬ ವಿದ್ಯಾರ್ಥಿಗೂ ರಚನಾತ್ಮಕ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಕಲಿಕೆಯನ್ನು ತಲುಪಿಸುವ ಧ್ಯೇಯವನ್ನು ಅವರು ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ. ಡೇಟಾ-ಆಧಾರಿತ ತಂತ್ರಗಳನ್ನು ಮಾನವ-ಕೇಂದ್ರಿತ ವಿನ್ಯಾಸದೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತಾರೆ. ಕೆಲಸದ ಹೊರಗೆ, ಅವರು ಸ್ಕೆಚ್ ಕಲಾವಿದರು, ಸಂಗೀತ ಪ್ರಿಯರು ಮತ್ತು ಏರ್ ಗನ್ ಶೂಟರ್ ಆಗಿದ್ದಾರೆ."
    }
  },
  {
    id: 6,
    name: "Soumya Ravi",
    image: SoumyaImg,
    bio: {
      en: "Soumya brings a strong analytical and strategic lens to her work, rooted in her deep foundation in Mathematics and MBA in Marketing & Strategy. She worked extensively in the education sector through roles at Teach For India, SIFF Young Artiste, and the Key Education Foundation, managing classrooms, training educators, and building EdTech products. At Parikshe, Soumya is driven by the opportunity to build meaningful products that solve real student challenges. She is committed to building systems that truly enrich education. When she’s not working, Soumya loves singing, travelling, and reading.",
      kn: "ಸೌಮ್ಯಾ ಅವರು ಗಣಿತ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್‌ನಲ್ಲಿ MBA ಹಿನ್ನೆಲೆಯೊಂದಿಗೆ ತಮ್ಮ ಕೆಲಸಕ್ಕೆ ಬಲವಾದ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಮತ್ತು ತಂತ್ರಾತ್ಮಕ ದೃಷ್ಟಿಕೋನವನ್ನು ತರುತ್ತಾರೆ. ಟೀಚ್ ಫಾರ್ ಇಂಡಿಯಾ, SIFF ಯಂಗ್ ಆರ್ಟಿಸ್ಟ್ ಮತ್ತು ಕೀ ಎಜುಕೇಶನ್ ಫೌಂಡೇಶನ್ ಮೂಲಕ ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರದಲ್ಲಿ ಅವರು ವ್ಯಾಪಕವಾಗಿ ಕೆಲಸ ಮಾಡಿದ್ದಾರೆ. ಪರೀಕ್ಷೆಯಲ್ಲಿ, ವಿದ್ಯಾರ್ಥಿಗಳ ನಿಜವಾದ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸುವ ಅರ್ಥಪೂರ್ಣ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸಲು ಸೌಮ್ಯಾ ಉತ್ಸುಕರಾಗಿದ್ದಾರೆ. ಶಿಕ್ಷಣವನ್ನು ನಿಜವಾಗಿಯೂ ಶ್ರೀಮಂತಗೊಳಿಸುವ ವ್ಯವಸ್ಥೆಗಳನ್ನು ನಿರ್ಮಿಸಲು ಅವರು ಬದ್ಧರಾಗಿದ್ದಾರೆ. ಹಾಡುವುದು, ಪ್ರಯಾಣಿಸುವುದು ಮತ್ತು ಓದುವುದು ಅವರ ಹವ್ಯಾಸಗಳು."
    }
  }
];

// 2. The Mock API Call
export const fetchTeamData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(TEAM_DATA);
    }, 1000); 
  });
};  