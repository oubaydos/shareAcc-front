import "../../res/css/shareSubscription.css";
import allServices from "../../res/allServices";

export default (props) => {
    if (props.id !== null){
        props.plan = allServices.products.find(x => x.id === this.props.id);
    }
    if (props.plan == null) {
        props.plan = {
            id: 1,
            type: "Standard",
            description: "Watch Netflix on 2 screens at once. HD available",
            price: 13.49,
            maxUsers: 2,
        }
    }
    return (
        <li id="planCard"
            style={{
                width: "100%",
                textAlign: "left",
                marginBottom: "30px",
                borderRadius: "40px",
                border: "2px solid #006D77",
                padding: "20px"
            }}
            onClick={() => {
                alert("clicked")
            }}>
            <strong style={{color: "#229c9d", fontSize: "20px"}}>{props.plan.type}</strong>
            <br/>
            <span style={{color: "#909090"}}>{props.plan.description}</span>
            <br/>
            <strong>{props.plan.price} €/month</strong>
            &nbsp; | &nbsp;
            <small>
                {props.plan.maxUsers} users max.
            </small>
        </li>
    );
}
