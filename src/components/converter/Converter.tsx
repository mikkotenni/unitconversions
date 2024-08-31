import React from 'react'

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
function Converter({ unitFrom, unitTo}: ConverterProps) {
  return (
    <>
        Converting from {unitFrom} to {unitTo}
    </>
  )
}

export default Converter