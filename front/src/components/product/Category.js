import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Outlet } from "react-router";

const Category = () => {
    const category = ["T-shirt", "Sweater", "Trousers", "Skirt", "Sneakers"];

    const navigate = useNavigate();

    const handleCategoryClick = (e) => {
        const targetCategory = e.target.innerHTML;
        navigate(`/products/${targetCategory}`);
    };

    return (
        <>
            <div
                style={{
                    marginTop: "60px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            ></div>
            <CategoryBox>
                <Grid
                    container
                    spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
                    columns={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
                >
                    {category.map((item, index) => (
                        <Grid
                            item
                            key={index}
                            xs={10}
                            sm={10}
                            md={2}
                            lg={2}
                            xl={2}
                        >
                            <Item onClick={handleCategoryClick}>{item}</Item>
                        </Grid>
                    ))}
                </Grid>
            </CategoryBox>
            <Outlet />
        </>
    );
};

export default Category;

const CategoryBox = styled(Box)`
    width: 70%;
    margin: 30px auto;
`;

const Item = styled.div`
    border: solid #5e5b52;
    color: #5e5b52;
    padding: 10px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    :hover {
        background-color: #5e5b52;
        color: white;
        cursor: pointer;
    },
`;
