import React from 'react'
import styled from 'styled-components'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Stars = ({stars, reviews}) => {
    return <Wrapper>
        <div className="stars">
            <span>
                {Array.from({length: 5}).map((_, index) => {
                    let current = index + 1;
                    if (stars > current) {
                        return <BsStarFill key={index}/>
                    } else if (stars > current -1 + 0.5 && stars < current ) {
                        return <BsStarHalf key={index}/>
                    } else {
                        return <BsStar key={index}/>
                    }
                })}
            </span>
        </div>
        <div className="reviews">
            ({reviews}) customer reviews
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }

  margin-bottom: 0.5rem;
`
export default Stars
