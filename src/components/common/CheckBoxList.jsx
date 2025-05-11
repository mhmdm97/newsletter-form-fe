import React from 'react';

/**
 * A reusable checkbox list component that can be used for multiple selection scenarios.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display as checkboxes
 * @param {Array} props.selectedItems - Array of selected item IDs
 * @param {Function} props.onChange - Callback when selections change, receives updated array of IDs
 * @param {String} props.title - Title to display above the list
 * @param {String} props.idKey - Property name to use as ID (default: 'id')
 * @param {String} props.labelKey - Property name to use as label text (default: 'name')
 */
const CheckBoxList = ({ 
  items, 
  selectedItems, 
  onChange, 
  title, 
  idKey = 'id', 
  labelKey = 'name' 
}) => {
  const handleItemChange = (itemId) => {
    const updatedItems = selectedItems.includes(itemId)
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId];

    onChange(updatedItems);
  };

  return (
    <div className="mb-4">
      {title && <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{title}</h3>}
      <div className="space-y-2">
        {items.map(item => (
          <div key={item[idKey]} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`checkbox-${item[idKey]}`}
                type="checkbox"
                checked={selectedItems.includes(item[idKey])}
                onChange={() => handleItemChange(item[idKey])}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label 
                htmlFor={`checkbox-${item[idKey]}`}
                className="font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                {item[labelKey]}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxList;