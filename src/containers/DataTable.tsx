import React from "react";
import { formatTimestamp } from "../utils/TimeFormater";
import { DataEntry } from "../types/dataTypes";

interface DataTableProps {
    data: DataEntry[];
    runningCount: number;
    tableSize: number;
    isSmallTable: boolean;
    selectedLanguage: string;
    handleClickLeftArrow: () => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, runningCount, tableSize, isSmallTable, selectedLanguage, handleClickLeftArrow }) => {
    return (
        <div>
            <h1 className="px-3 py-1 rounded-sm bg-green-500 text-white font-semibold max-w-32 text-center mx-auto mt-5">
                {selectedLanguage === '🇫🇷' ? 'En cours d\'exécution' : selectedLanguage === '🇺🇸' ? 'Running' : 'Запуск'} : {runningCount}/{tableSize} 
            </h1>
            <div className="bg-slate-600 rounded-r-full p-3 max-w-8" onClick={handleClickLeftArrow}>
                <div className={`transition-transform duration-500 transform ${!isSmallTable ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="10" width="6.25" viewBox="0 0 320 512">
                        <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                </div>
            </div>
            <div className="p-5">
                {isSmallTable ? (
                    <table>
                        <thead>
                            <tr>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Nom' : selectedLanguage === '🇺🇸' ? 'Running' : 'Имя'}</th>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Etat' : selectedLanguage === '🇺🇸' ? 'State' : 'Состояние'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className="border-t border-gray-200 py-2" key={index}>
                                    <td className="text-blue-500 whitespace-nowrap py-3 pr-3">{item.Names}</td>
                                    <td className="font-black text-white py-3">
                                        <p className={`bg-${item.State === "running" ? "green" : "red"}-500 py-0.5 px-2 rounded-full`}>
                                            {item.State}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Nom' : selectedLanguage === '🇺🇸' ? 'Running' : 'Имя'}</th>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Etat' : selectedLanguage === '🇺🇸' ? 'State' : 'Состояние'}</th>
                                <th className="text-left pl-3">{selectedLanguage === '🇫🇷' ? 'Pile' : selectedLanguage === '🇺🇸' ? 'Stack' : 'Стек'}</th>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Image' : selectedLanguage === '🇺🇸' ? 'Image' : 'Образ'}</th>
                                <th className="text-left">{selectedLanguage === '🇫🇷' ? 'Création' : selectedLanguage === '🇺🇸' ? 'Created' : 'создано'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className="border-t border-gray-200 py-2" key={index}>
                                    <td className="text-blue-500 whitespace-nowrap py-3 pr-3">{item.Names}</td>
                                    <td className="font-black text-white py-3">
                                        <p className={`bg-${item.State === "running" ? "green" : "red"}-500 py-0.5 px-2 rounded-full`}>
                                            {item.State}
                                        </p>
                                    </td>
                                    <td className=" whitespace-nowrap py-3 pl-3 pr-3">{item.Labels["com.docker.compose.project"]}</td>
                                    <td className="text-blue-500 whitespace-nowrap py-3 pr-3">{item.Image}</td>
                                    <td className=" whitespace-nowrap py-3 pr-3">{formatTimestamp(item.Created)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DataTable;
