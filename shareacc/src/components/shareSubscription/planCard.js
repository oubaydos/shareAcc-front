import "../../res/css/shareSubscription.css";
import allServices, {plans} from "../../res/allServices";
import {useParams} from "react-router-dom";
import {goto} from "../../utils/utils";
import {saveOrder} from "../../api/offerApi";
import createOfferAccount from "../../api/offerAccountApi";

export default (props) => {
    let plan = props.plan;
    let {id} = useParams();
    // if (plan == null) {
    //     plan = plan = plans[id].find(x => x.type === planChoice);
    // }
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
                // alert(plan.type)
                // createOfferAccount(id, plan.type, "tempUsername","tempPassword");
                // saveOrder(plan);
                goto(`/subscription/new/${id}/${plan.type}/credentials`)
            }}>
            <strong style={{color: "#229c9d", fontSize: "20px"}}>{plan.type}</strong>
            <br/>
            <span style={{color: "#909090"}}>{plan.description}</span>
            <br/>
            <strong>{plan.price} €/month</strong>
            &nbsp; | &nbsp;
            <small>
                {plan.maxUsers} users max.
            </small>
        </li>
    );
}
