const TotalPrice = ({ price }) => {
    const iva = 0.21; // 21% de IVA
    const total = price + (price * iva); // Sumar el IVA 
    
    return <h2>El precio total con IVA es: {total}€</h2>; 
  };
  
  export default TotalPrice;