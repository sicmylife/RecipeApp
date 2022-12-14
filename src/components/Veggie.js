import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';
import  './veggie.css'



function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const getVeggie = async () => {

    const check = localStorage.getItem('popular');
if (check){
  
}

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian&apiKey=8e6e8a67bccb4d3b978a39d440bdf3c0`
    );
    const data = await api.json();
    setVeggie(data.recipes);
    console.log(data.recipes);
  };

  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <div>
    <div className="wrap">
      <h3>Vegetarian Picks</h3>
      <Splide
      options={
        {
          perPage:3,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:'5rem'
        }
      }
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="Card">
              <Link to={'/recipe/' + recipe.id}>
                
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                {/* <Gradient/> */}
                </Link>

              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  </div>
  )
}

// const Wrapper = styled.div`
//   margin: 4rem 0rem;

//   h3{
//     padding-bottom:2rem;
//     font-size: 1.8rem;
//   }
// `;

// const Card = styled.div`
//   height: 15rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;
//   img {
//     border-radius: 1rem;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     object-fit: cover;

//   }
//   p{
//     position: absolute;
//     z-index:10;
//     left:50%;
//     bottom:-50px;
//     transform: translate(-50%,0);
//     color: #000;
//     width: 90%;
//     text-align: center;
//     font-size: 1rem;
//     font-weight: 600;
//    align-items: center;
//     height: 40%;
//   }
// `;

// const Gradient= styled.div`
// z-index:-1;
// position:absolute;
// width:100%;
// height:100%;
// background-color: #ffa931;
// `;



export default Veggie