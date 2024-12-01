import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Transaction () {

    const navigate = useNavigate();

    function buttonClick () {
        navigate("/account")
    }

    return (
        <div className="transaction-container">
            <span style={{ fontSize: "25px", fontWeight: "900", }}>Оплата прошла успешно</span>
            <IoMdCheckmark style={{ fontSize: "70px", color: "green" }} />

            <button className="back-account" onClick={buttonClick}>Вернуться обратно</button>

        </div>
    )
}