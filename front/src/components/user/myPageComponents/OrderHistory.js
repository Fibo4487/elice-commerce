import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderCard from "./OrderCard";

import * as Api from "../../../api";

// test용 데이터
// const orderLists = [
//     {
//         orderNo: 1,
//         orderId: 56890014564,
//         orderProduct: ["jaket", "pinkpants", "redsocks"],
//         orderPrice: "15,000",
//         orderStatus: "done",
//     },
//     {
//         orderNo: 2,
//         orderId: 56890014544,
//         orderProduct: ["blouse", "trouser", "muffler"],
//         orderPrice: "37,000",
//         orderStatus: "doing",
//     },
//     {
//         orderNo: 3,
//         orderId: 56890014532,
//         orderProduct: ["skirt", "sunglass"],
//         orderPrice: "165,000",
//         orderStatus: "doing",
//     },
// ];
// 기본 주문 내역 최상단 컬럼 목록
const columns = ["주문번호", "주문상품", "합계", "결제여부"];

function OrderHistory() {
    const [orderList, setOrderList] = useState([]);
    const [isOrder, setIsOrder] = useState(false); // 주문 내역이 없을 경우 없다고 표기하기 위해 사용 하는 state

    const fetchOrderList = async () => {
        try {
            const res = await Api.get("orders");

            if (res.date) {
                setIsOrder(true);
                setOrderList(res.data);
            } else {
                console.log("빈내역 입니다");
                setIsOrder(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOrderList();
    }, []);

    return (
        <Container>
            <Title>주문 내역</Title>
            <ListContainer>
                <Columns>
                    {columns.map((column, idx) => (
                        <Items key={`item-${idx}`}>{column}</Items>
                    ))}
                </Columns>
                {isOrder ? (
                    orderList.map((order, idx) => (
                        <OrderCard key={`order-${idx}`} order={order} />
                    ))
                ) : (
                    <NoOrder>"주문 내역이 없습니다."</NoOrder>
                )}
            </ListContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 63.5%;
    padding: 5px 0 0 0;
    box-shadow: #5e5b52 0px 0px 0px 1px, #eefc57 5px 5px 0px 0px;
    flex-wrap: wrap;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-align: left;
    font-size: 20px;
    margin: 0 0 23px 23px;
`;

const ListContainer = styled.div`
    padding: 5px 0 0 0;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Columns = styled.div`
    width: 95%;
    margin-bottom: 10px;
    border: 1px solid #5e5b52;
    flex-wrap: wrap;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Items = styled.div`
    width: 20%;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-weight: bold;
`;

const NoOrder = styled.div`
    margin: 20px 0 30px 0;
    font-weight: bold;
    font-size: 13px;
    color: #5e5b52;
`;

export default OrderHistory;
