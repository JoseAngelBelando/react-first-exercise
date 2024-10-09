const CalculateCircleArea = ({ radius }) => {
    const area = 3.14 * (radius*radius); // Fórmula del área de un círculo: π * r^2
    
    return <h2>El área del círculo es: {area}</h2>;
  };
  
  export default CalculateCircleArea;