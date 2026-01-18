
import { useState, useEffect, useMemo } from "react";

interface TypewriterTextProps {
    className?: string;
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    className = "",
    speed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
}) => {

    const [currentText, setCurrentText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const texts = useMemo(() => {
        const textKeys: string[] = [
            "Tanımlıyoruz",
            "Kurguluyoruz",
            "Dönüştürüyoruz",
            "Boyutlandırıyoruz",
            "Şekillendiriyoruz",
        ];
        return textKeys.map((key) => (key));
    }, []);

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const currentFullText = texts[currentIndex];

                if (isDeleting) {
                    setIsTyping(true);
                    setCurrentText((prev) => prev.substring(0, prev.length - 1));

                    if (currentText === "") {
                        setIsDeleting(false);
                        setIsTyping(false);
                        setCurrentIndex((prev) => (prev + 1) % texts.length);
                    }
                } else {
                    setIsTyping(true);
                    setCurrentText(currentFullText.substring(0, currentText.length + 1));

                    if (currentText === currentFullText) {
                        setIsTyping(false);
                        setTimeout(() => setIsDeleting(true), pauseTime);
                        return;
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [
        currentText,
        currentIndex,
        isDeleting,
        texts,
        speed,
        deleteSpeed,
        pauseTime,
    ]);

    return (
        <span className={`inline-flex items-center ${className}`}>
            <span className="min-w-0">
                {currentText}
                <span
                    className={`inline-block w-0.5 h-[1em] bg-current align-middle ml-1
          ${!isTyping ? "cursor-blink" : ""}`}
                />
            </span>
        </span>
    );
};