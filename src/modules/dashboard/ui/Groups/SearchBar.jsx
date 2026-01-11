import React from 'react';
import { SearchIcon } from '../../../../components/ui/SvgIcons/SvgIcons';

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="relative">
        <input
          type="text"
          placeholder="البحث عن جروب أو مدرس..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          dir="rtl"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}