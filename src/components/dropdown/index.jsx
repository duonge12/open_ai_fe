import { useFormikContext } from 'formik';

export const Dropdown = ({ items, name, value }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const selectedIndex = parseInt(e.target.value, 10);
    setFieldValue(name, selectedIndex);
  };

  return (
    <div>
      <select name={name} value={value} onChange={handleChange}>
        {items.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>

      <p>Selected: {items[value]}</p>
    </div>
  );
};
