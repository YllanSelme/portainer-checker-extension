// Header.tsx

import React, { useState } from 'react';

interface HeaderProps {
    selectedLanguage: string;
    onLanguageChange: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedLanguage, onLanguageChange }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(prevState => !prevState);
    };

    const selectLanguage = (language: string) => {
        onLanguageChange(language);
        setShowOptions(false);
    };

    return (
        <header className="flex flex-row justify-end p-5">
            <div className="relative">
                <p className="text-xl cursor-pointer" onClick={toggleOptions}>{selectedLanguage}</p>
                {showOptions && (
                    <div className="absolute  bg-white shadow-md rounded-md">
                        <p className="p-3 text-lg cursor-pointer" onClick={() => selectLanguage('🇫🇷')}>🇫🇷</p>
                        <p className="p-3 text-lg cursor-pointer" onClick={() => selectLanguage('🇺🇸')}>🇺🇸</p>
                        <p className="p-3 text-lg cursor-pointer" onClick={() => selectLanguage('🇷🇺')}>🇷🇺</p>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
