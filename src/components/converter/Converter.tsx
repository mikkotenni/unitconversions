import React from "react";
import { convert } from '../../api/converter';

/**
 * Represents the properties for the Converter component.
 */
interface ConverterProps {
  unitFrom: string;
  unitTo: string;
}

/**
 * Converter component with two input fields and a button to convert the value
 * from one unit to another.
 * @param unitFrom The unit to convert from.
 * @param unitTo The unit to convert to.
 * @returns The Converter component.
 */
const Converter: React.FC<ConverterProps> = ({ unitFrom, unitTo }) => {
  const value = 1.1;
  const handleConvert = async () => {
    try {
      const conversionResult = await convert(unitFrom, unitTo, value);
      console.log(conversionResult);
    } catch (error) {
      console.error("Conversion failed:", error);
    }
  };

  return (
    <div>
      Converting from {unitFrom} to {unitTo}
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Converter;
