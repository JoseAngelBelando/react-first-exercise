const CelsiusToFahrenheit = ({ celsius }) => {
    const fahrenheit = (celsius * 1.8) + 32; // Fórmula de conversión de ºC a ºF
    
    return <h2>{celsius}°C son {fahrenheit}°F</h2>; 
  };
  
  export default CelsiusToFahrenheit;