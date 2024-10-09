const FahrenheitToCelsius = ({ fahrenheit }) => {
    const celsius = (fahrenheit - 32) / 1.8; // Fórmula de conversión de ºF a ºC
    
    return <h2>{fahrenheit}°F son {celsius}°C</h2>; // Redondeamos el resultado a 2 decimales
  };
  
  export default FahrenheitToCelsius;