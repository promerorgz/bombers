import React, { useState, useEffect, memo } from "react";

const PaypalButton = () => {
  const [sdkReady, setSdkReady] = useState(false);

  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=Aa8a8BHzxUjISXFfxGInXx4ezL4lkg9BejzqRo7hHU--vRbG3Pq_qOLCm2aaHuoI6c9Z5Fx6Jv7nSawh&vault=true&intent=subscription`;
    script.setAttribute("data-sdk-integration-source", "button-factory");

    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    window.paypal ? setSdkReady(true) : addPayPalScript();
  }, []);

  useEffect(() => {
    window?.paypal
      ?.Buttons({
        style: {
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "subscribe",
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: "P-9NL41251R87142636MDWJ6MI",
          });
        },
        onApprove: function (data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        },
      })
      .render("#paypal-button-container-P-9NL41251R87142636MDWJ6MI");
  }, []);

  return <div id="paypal-button-container-P-9NL41251R87142636MDWJ6MI"></div>;
};

export default PaypalButton;
