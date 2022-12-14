import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?number=2&apiKey=8e6e8a67bccb4d3b978a39d440bdf3c0`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            {/* <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3> */}
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
        
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
margin: 0;
padding: 0;
width: 400px;
 img{
  width: 90%;
 }
 
  .active {
    background:linear-gradient(35deg,#494949,#313131);
    margin-bottom: 2rem;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    width:320px;
    font-size: 1.3rem;

  }
  p {
    width:320px;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 1rem;
    width: 300px;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: solid 2px black;
  margin: .7rem;
  font-weight: 600;
`;

const Info = styled.div`
  line-height: 1.6rem;
`;
export default Recipe;
