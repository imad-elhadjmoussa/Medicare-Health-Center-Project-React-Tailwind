
export const sections = [
    "About",
    "Services",
    "Doctors",
    "Researches",
    "Appointment"
];

export function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}