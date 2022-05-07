import React from "react";
import { useNavigate } from "react-router-dom";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { Box } from "@mui/material";

function Paypal({ orderUser, subTotal, setOrderPayment, orderPayment }) {
  const navigate = useNavigate();
  // 스타일 커스텀
  const style = {
    size: "responsive",
    color: "white",
    shape: "rect",
    label: "checkout",
    tagline: "true",
  };
  let env = "sandbox";
  let currency = "USD";
  // 결제 금액
  let total = parseInt(subTotal / 1200);

  // 결제 성공
  const onSuccess = (payment) => {
    setOrderPayment((current) => {
      const newCurrent = {
        ...current,
        isPayed: true,
      };
      return newCurrent;
    });
    console.log("결제 성공", payment);
    navigate("complete", { state: { orderUser, orderPayment } });
  };

  // 결제 취소
  const onCancel = (data) => {
    console.log("결제 실패", data);
  };

  // 결제 실패
  const onError = (err) => {
    console.log("에러!", err);
  };

  // 클라이언트 정보
  const client = {
    sandbox:
      "AY7rQ4hfAbQU8tHMN46IvzE2ajvSKPbxprdGODAyFP-WCZ6nJCcGH4d72R5zIstR3s0Kzx6ex2Z_IjBL",
    production: "elice",
  };

  return (
    <Box>
      <PaypalExpressBtn
        style={style}
        env={env}
        client={client}
        total={total}
        currency={currency}
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
      />
    </Box>
  );
}

export default Paypal;
