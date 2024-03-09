// App.js

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./containers/Header";
import DataTable from "./containers/DataTable";
import { DataEntry } from "./types/dataTypes";
import './index.css';

const App = () => {
    const [data, setData] = useState<DataEntry[]>([]); 
    const [runningCount, setRunningCount] = useState<number>(0);
    const [tableSize, setTableSize] = useState<number>(0);
    const [isSmallTable, setIsSmallTable] = useState<boolean>(true); 
    const [selectedLanguage, setSelectedLanguage] = useState<string>('🇺🇸'); 
    useEffect(() => {
        const options: RequestInit = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (process.env.REACT_APP_TOKEN) {
            options.headers = {
                ...options.headers,
                "x-api-key": process.env.REACT_APP_TOKEN
            };
        }

        fetch(`${process.env.REACT_APP_API_URL}`, options)
            .then((res) => res.json())
            .then((data: DataEntry[]) => {
                console.log(data);
                setData(data);
                setTableSize(data.length);
                let running = 0;
                data.forEach((item) => {
                    if (item.State === "running") {
                        running++;
                    }
                });
                setRunningCount(running);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };

    const handleClickLeftArrow = () => {
        setIsSmallTable(prevState => !prevState);
    };

    return (
        <div className="w-full mx-auto">
            <Header
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
            />
            <DataTable
                data={data}
                runningCount={runningCount}
                tableSize={tableSize}
                isSmallTable={isSmallTable}
                selectedLanguage={selectedLanguage}
                handleClickLeftArrow={handleClickLeftArrow}
            />
        </div>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
