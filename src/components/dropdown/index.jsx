import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ items ,onSelect}) => {
  const [search, setSearch] = useState(items[0]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowDropdown(true);

    const filtered = items.filter(item =>
      item.data.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setShowAddButton(filtered.length === 0 && value.trim() !== '');
  };

  const handleSelectItem = (item) => {
    setSearch(item.data);
    setShowDropdown(false);
    setShowAddButton(false);
    onSelect(item)
  };

  const handleAddItem = () => {
    alert(`Adding new item: ${search}`);
    const newItem = { id: Date.now(), data: search };
    setFilteredItems([...filteredItems, newItem]);
    setSearch('');
    setShowAddButton(false);
    setShowDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <input
        type="text"
        value={search.data}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search..."
        className="w-full border p-2 rounded"
      />
      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow max-h-60 overflow-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.data}
            </div>
          ))}
          {showAddButton && (
            <div
              onClick={handleAddItem}
              className="p-2 text-blue-600 hover:bg-gray-100 cursor-pointer"
            >
              Add "{search}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
