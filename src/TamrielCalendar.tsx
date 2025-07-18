import React from "react";

interface TamrielMonth {
    name: string;
    equivalent: string;
    number: number;
    
}

const months: TamrielMonth[] = [
    { name: "Morning Star", equivalent: "January", number: 1 },
    { name: "Sun's Dusk", equivalent: "February", number: 2 },
    { name: "First Seed", equivalent: "March", number: 3 },
    { name: "Rains Hand", equivalent: "April", number: 4 },
    { name: "Second Seed", equivalent: "May", number: 5 },
    { name: "Mid Year", equivalent: "June", number: 6 },
    { name: "Sun's Height", equivalent: "July", number: 7 },
    { name: "Last Seed", equivalent: "August", number: 8 },
    { name: "Hearthfire", equivalent: "September", number: 9 },
    { name: "Frostfall", equivalent: "October", number: 10 },
    { name: "Sun's Dusk", equivalent: "November", number: 11 },
    { name: "Evening Star", equivalent: "December", number: 12 }
];

export default function TamrielCalendar() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col item-center p-6">
            <h1 className="text-3xl font-bold mb-6">Tamriel Calendar</h1>
            <div className="overflow-x-auto w-full max-w-3x1">
                <table className="table-auto border-collapse w-full text-center shadow-md rounded-lg overflow-hidden">
                    <thread>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-3">Tamriel Month </th>
                            <th className="p-3">Equivalent </th>
                            <th className="p-3">Number </th> 
                        </tr>
                    </thread>
                </table>
                <tbody>
                    {months.map((m, index) = (
                        <tr
                        key={m.number}
                        className={index % 2=== 0 ? "bg-gray-200" : "bg-white"}
                        >
                            <td className="p-3 font-medium">{months.name}</td>
                            <td className="p3">{months.equivalent}</td>
                            <td className="p3">{months.number}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
        
    );
}