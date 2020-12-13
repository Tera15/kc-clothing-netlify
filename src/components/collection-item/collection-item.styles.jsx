import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';



export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    margin-bottom: 5px;
    &:hover{
        opacity: 0.8;
    }
   
`;

export const CollectionFooterContainer = styled.div`
    width: 60%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    @media screen and (max-width: 800px) {
        width: 100%;
    }  
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;

export const CustomButtonContainer = styled(CustomButton)`
    display: none;
    width: 40%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    
    @media screen and (max-width: 800px) {
        display: block;
        width: 100%;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10 0 10;
    }  
`;
export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover ${ImageContainer}{
        opacity: 0.8;
    } 
    ${CustomButtonContainer}{
        opacity: 0.85;
        display: flex;
    }

    @media screen and (max-width: 800px) {
            width: 40vw;
            &:hover {
                .image {
                    opacity: unset;
                }
                button{
                    opacity: unset;
                }
            }
        }
`;