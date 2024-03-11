import { useNavigate } from "react-router";
import { useEffect } from "react";

const Countdown = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.countdownSeconds === 0) {
            props.resetFoodOrder();
            navigate("/food-order/popular");
        }
    });
    return ( 
        <p className="text-medium mb-0">Redirecting in...{props.countdownSeconds}</p>
     );
}
 
export default Countdown;