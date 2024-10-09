import CalculateCircleArea from "./components/button/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/button/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/button/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/button/celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/button/fahrenheitToCelsius/FahrenheitToCelsius";
import SayHello from "./components/button/sayHello/SayHello";
import TotalPrice from "./components/button/totalPrice/TotalPrice";
import WriteMessage from "./components/button/writeMessage/WriteMessage";


const App = ()=> {
  return   <div>
   <h2><SayHello name='Marta'></SayHello></h2> 
   <h2><CalculateSquareArea length={3}></CalculateSquareArea></h2>
   <h2><CalculateTriangleArea base={10} height={5} ></CalculateTriangleArea></h2>
   <h2><CalculateCircleArea radius={7}></CalculateCircleArea></h2>
   <h2><CelsiusToFahrenheit celsius={33}></CelsiusToFahrenheit></h2>
   <h2><FahrenheitToCelsius fahrenheit={122}></FahrenheitToCelsius></h2>
   <h2><TotalPrice price={49.99}></TotalPrice></h2>
   <h2><WriteMessage name='Marta' material='plástico' size='grande'></WriteMessage></h2>
  </div>
};

export default App;