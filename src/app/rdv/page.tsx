"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const RdvPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // dimanches (0) et lundis (1) off
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1;
  };

  // horaires ouverts (10h - 18h mardi => samedi)
  const filterTime = (time: Date) => {
    const hour = time.getHours();
    return hour >= 10 && hour <= 18;
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    console.log(format(date, "yyyy-MM-dd HH:mm:ss")); // Formate la date en SQL DATETIME pour la base de données
  };


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="text-2xl font-bold text-center mb-4">Vos rendez-vous
      </header>

      {/* Contenu principal */}
      <main className="max-w-2xl mx-auto bg-white p-6 shadow-lg mt-6">
        
        <p className="text-gray-600 text-center mb-6">
          Vous pouvez prendre rendez-vous en boutique ou à domicile selon votre préférence.
        </p>

        {/* Sélection de créneau */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sélectionnez un créneau
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            filterDate={isWeekday}
            showTimeSelect
            filterTime={filterTime}
            dateFormat="yyyy-MM-dd HH:mm"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Liste des types de rendez-vous */}
        <div className="space-y-4">
          {[, "Rendez-vous en boutique", "Rendez-vous à domicile"].map((type, index) => (
            <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
              <span className="text-lg font-medium">{type}</span>
              <button className="bg-secondGold text-white px-4 py-2 rounded-lg">
                Programmer
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};


export default RdvPage;
