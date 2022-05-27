import React, { useState, useEffect } from "react";
import styles from "../../res/css/main.module.css";
import fetchOffers from "../../api/offerApi";
import {useParams} from "react-router-dom";

const OfferList = () => {

  const {provider} = useParams();

  const [offers, setOffers] = useState([]);

  const pageNumber = 1;

  useEffect(()=>{
    fetchOffers(pageNumber,provider,setOffers);
  },[])

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <div className={styles.search_section}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
          <select className={styles.search_input} >
            <option value="all">Category</option>
            {offers.map((offer,index) => (
              <option key={index} value={"offer"}>{"value"}</option>
            ))}
          </select>
        </div>
      </div>
    </main>
  );
};

export default OfferList;
