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
    <div className="form-group">
      {title && <h3>{title}</h3>}
      {items.map(item => (
        <div key={item[idKey]}>
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item[idKey])}
              onChange={() => handleItemChange(item[idKey])}
            />
            {item[labelKey]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxList;