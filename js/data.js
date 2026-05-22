const HERO_SLIDES = [
  { src: "assets/images/home_page.jpg", alt: "Gurushree Hospital exterior" },
  { src: "assets/images/photo00.jpg", alt: "Gurushree Hospital" },
  { src: "assets/images/photo02.jpg", alt: "Gurushree Hospital campus" },
  { src: "assets/images/photo05.jpg", alt: "Gurushree Hospital building" }
];

const GALLERY_PHOTOS = [
  { src: "assets/images/photo00.jpg", alt: "Gurushree Hospital" },
  { src: "assets/images/photo02.jpg", alt: "Hospital view" },
  { src: "assets/images/photo05.jpg", alt: "Hospital building" }
];

const FACILITIES = [
  { title: "Emergency Trauma & Critical Care", img: "assets/images/emergency_trauma.jpg", desc: "Committed quality care for critically ill with round the clock emergency services by professionally trained staff." },
  { title: "ICU on Wheels", img: "assets/images/ICU-Ambulance.jpg", desc: "True critical care ambulance equipped with international standard ventilator, multi-para monitor, portable defibrillator." },
  { title: "ICU Facilities", img: "assets/images/ICU.jpg", desc: "DATEX-OHEMDA-GE high end dedicated ventilator equipped state of the art ICU bed (12 nos.) duly supported by professionally trained para-medical staff deployed to each bed, monitored by experienced intensivists." },
  { title: "Physiotherapy", img: "assets/images/facilities_page.jpg", desc: "Experienced physiotherapists with adequate facilities will supplement Physiotherapy which acts as a back bone for a true Trauma and critical care center." },
  { title: "Maternal & Foetal Care", img: "assets/images/Labor-ward.jpg", desc: "International standard labour ward capable of handling more than one labour at a time." },
  { title: "NICU", img: "assets/images/Geraff.jpg", desc: "Six bedded NICU equipped with the ultimate Neonatal care by 3 GE-GIRAFFEs along with high end dedicated Neonatal ventilators, BILLY BLANKET, monitored round the clock by Neonatalogists. Transport Incubator facility also available." },
  { title: "Operation Theater Complex", img: "assets/images/Opearation-B-3.jpg", desc: "Two major operation theaters built to international standards (13feet high ceiling, top to bottom granite cladding). Equipped with top end operation tables, operating microscope, operating laproscope, arthroscope, C-Arm, Anaesthesia workstation (AESTIVA-AESPIRE-GE) ready to accept any type of surgery." },
  { title: "DATEX-OHEMDA-GE Anaesthesia", img: "assets/images/aisys-work-station.jpg", desc: "Aisys Anaesthesia work station for advanced surgical support." },
  { title: "Dialysis", img: "assets/images/dialysis.jpg", desc: "A round the clock 5 bedded dialysis unit houses top end dialysers, duly monitored by a team of skilled professionals able to attend any type of Nephrological cases." },
  { title: "Clinical Analysis", img: "assets/images/Lab.jpg", desc: "Hi-Tech laboratory facility with experienced staff assures TRUE accurate and quick results — fully automatic analyzer, semi-automatic analyzer, electrolyte analyzer, blood gas analyzer, coagulation, ESR, urine analyzer - HUMAN (German make)." },
  { title: "Diagnostic Imaging", img: "assets/images/X--Ray-unit.jpg", desc: "Siemens brand 300 MN multiphos high end X-ray machine supported by a portable X-ray unit provides a complete Trauma and Critical care." },
  { title: "Ultra sound, Echo & Doppler", img: "assets/images/Doppler.jpg", desc: "Top-end Siemens diagnostic equipment has all diagnostic assessments in one machine." },
  { title: "Dental Care", img: "assets/images/Dental.jpg", desc: "Complete dental care with hi-tech dental facilities capable of handling maxillo facial surgery to implants." },
  { title: "Wards", img: "assets/images/Ward-Suite.jpg", desc: "20 years of professional and ethical medical service experience of the founder is instrumental in organising range of spacious well ventilated wards (with attached shower area) to suit one and all." }
];

const SPECIALITIES = [
  "Anaesthesiology", "Casualty / Emergency", "Dentistry", "Dermatology", "ENT",
  "General Surgery", "Internal Medicine", "Laboratory Medicine", "Nephrology",
  "Obstetrics and Gynecology", "Opthamology", "Orthopedics", "Physiotherapy",
  "Psychiatry", "Urology"
];

const SUPER_SPECIALITIES = [
  "Endocrinology / Diabetes", "Gastroenterology", "Maxillo - Facial Surgery",
  "Neurology", "Neuro Surgery", "Oncology", "Paediatric Surgery", "Plastic Surgery",
  "Cosmetic Surgery", "Pulmonary Medicine", "General & Minimal Invasive Surgery"
];

const TEAM = [
  { dept: "Anesthesiology", doctors: ["Dr. S.B. Gangadhar"] },
  { dept: "Dental Surgery", doctors: ["Dr. Sugandh", "Dr. Manjunath Sarangi"] },
  { dept: "Dermatology", doctors: ["Dr. Arathi"] },
  { dept: "ENT", doctors: ["Dr. Hemraj", "Dr. Shettykere", "Dr. Srinivas"] },
  { dept: "Gastroenterology", doctors: ["Dr. Ashwin Kumar"] },
  { dept: "General Surgery", doctors: ["Dr. Giridhar", "Dr. Rudresh"] },
  { dept: "Internal Medicine", doctors: ["Dr. Shankarlingaiah", "Dr. Niroop"] },
  { dept: "Laboratory Medicine", doctors: ["Dr. Padmanna Negli"] },
  { dept: "Maxillo-Facial Surgery", doctors: ["Dr. Anuradha", "Dr. Deepak"] },
  { dept: "Neurology", doctors: ["Dr. Dayanand"] },
  { dept: "Nephrology", doctors: ["Dr. Shivaprasad", "Dr. Ashish"] },
  { dept: "Neuro Surgery", doctors: ["Dr. Amresh"] },
  { dept: "Obstetric/Gynecology", doctors: ["Dr. Chaya", "Dr. Vijayalakshmi", "Dr. Susheelamma", "Dr. Nethra Dinesh", "Dr. Sunanda", "Dr. Anitha"] },
  { dept: "Oncology", doctors: ["Dr. Lokanath"] },
  { dept: "Opthamology", doctors: ["Dr. Nagabhushan", "Dr. Suresh"] },
  { dept: "Orthopaedics", doctors: ["Dr. Manjunath B", "Dr. Janardhan S"] },
  { dept: "Paediatric Surgery", doctors: ["Dr. Ravi Kiran K", "Dr. Somashekariah"] },
  { dept: "Plastic Surgery", doctors: ["Dr. Ramesh Babu"] },
  { dept: "Cosmetic Surgery", doctors: ["Dr. Ramesh babu"] },
  { dept: "Physiotherapy", doctors: ["Dr. Praveen"] },
  { dept: "Pulmonary Medicine", doctors: ["Dr. Saroja B.G"] },
  { dept: "Urology", doctors: ["Dr. Chandrashekar", "Dr. Nagarajaiah"] },
  { dept: "Psychiatry", doctors: ["Dr. Madhukar", "Dr. Prasanth"] },
  { dept: "Neonatology", doctors: ["Dr. Sunil", "Dr. Sowmini", "Dr. Rudramurthy"] },
  { dept: "Radiology", doctors: ["Dr. Vedraj"] },
  { dept: "Intensive Medicine", doctors: ["Dr. Harish", "Dr. Sridhar", "Dr. Anasuya", "Dr. Vijayalakshmi", "Dr. Poonam", "Dr. Sridhar J", "Dr. Raveesha", "Dr. Manoj", "Dr. Ravendra BK", "Dr. Bagat Ram", "Dr. Vishwanath", "Dr. Pradeep", "Dr. Naveen Gowda", "Dr. Madhusudhan", "Dr. Lakshmish", "Dr. Anand", "Dr. Vinay"] }
];
