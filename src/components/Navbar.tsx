import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>('first');
    const [underlineStyle, setUnderlineStyle] = useState<{ left?: number; width?: number }>({});
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('.sections > div');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLAnchorElement | null;
            if (activeLink) {
                setUnderlineStyle({
                    left: activeLink.offsetLeft,
                    width: activeLink.offsetWidth
                });
            }
        }
    }, [activeSection]);

    const handleLinkClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav ref={navRef} className="fixed top-0 w-full bg-black font-black text-white text-center p-4 z-20">
            <a href="#translations" className="mx-4" onClick={() => handleLinkClick('translations')}>Gherkin Termini</a>
            <a href="#features" className="mx-4" onClick={() => handleLinkClick('features')}>Funkcionālās iezīmes</a>
            <div
                className="absolute bottom-3 h-0.5 bg-white transition-all duration-300"
                style={underlineStyle}
            />
        </nav>
    );
}