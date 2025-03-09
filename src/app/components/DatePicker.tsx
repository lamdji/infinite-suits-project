import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface RDVPickerProps {
  onChange: (date: string) => void;
}

const RDVPicker: React.FC<RDVPickerProps> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      onChange(format(date, "yyyy-MM-dd HH:mm:ss")); // Format SQL DATETIME
    }
  };

  // 🔹 Limite les heures de rendez-vous (10h - 18h du mardi au samedi)
  const filterTime = (time: Date) => {
    const hour = time.getHours();
    return hour >= 10 && hour < 18;
  };

  // Désactive le dimanche et le lundi
  const filterDate = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1; // Bloque Dimanche (0) et Lundi (1)
  };

  return (
    <div>
      <label htmlFor="rdv-datepicker" className="block text-sm font-medium text-gray-700">
        Sélectionnez un créneau
      </label>
      <DatePicker
        id="rdv-datepicker"
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="yyyy-MM-dd HH:mm:ss"
        timeFormat="HH:mm"
        timeIntervals={30} // Créneaux toutes les 30 minutes
        minDate={new Date()} // Empêche de sélectionner une date passée
        filterTime={filterTime} // Applique la restriction des horaires (10h - 18h)
        filterDate={filterDate} // Applique la restriction des jours (mardi - samedi)
        className="border p-2 rounded-md w-full"
      />
    </div>
  );
};

export default RDVPicker;
