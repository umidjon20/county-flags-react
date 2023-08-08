import { Component } from "react";

import CardlistItem from "../CardlistItem/CardlistItem";
import imageGermany from '../Img/1280px-Flag_of_Germany.jpg'
import imageUsa from '../Img/usa.jpg'
import imageBrazil from '../Img/1280px-Flag_of_Brazil.jpg'
import imageIceland from '../Img/iceland.jpg'
import imageAfg from '../Img/1280px-Flag_of_Afganistan.jpg'
import imageAlisl from '../Img/1280px-Flag_of_Islands.jpg'
import imageAlbania from '../Img/albania.jpg'
import imageAlgeria from '../Img/1280px-Flag_of_Aljir.jpg'
const world = [
    {
        image:imageGermany,
        title:'Germany',
        population:'91,770,900',
        region:'Europe',
        capital:'Berlin'
    },
    {
        image:imageUsa,
        title:'United States of America',
        population:'323,947,000',
        region:'Americas',
        capital:'Washington.D.C'
    },
    {
        image:imageBrazil,
        title:'Brazil',
        population:'206,135,893',
        region:'Americas',
        capital:'Brasilia'
    },
    {
        image:imageIceland,
        title:'Iceland',
        population:'334,300',
        region:'Europe',
        capital:'Reykjavik'
    },
    {
        image:imageAfg,
        title:'Afghanistan',
        population:'27,657,145',
        region:'Asia',
        capital:'Kabul'
    },
    {
        image:imageAlisl,
        title:'Aland Islands',
        population:'28,875',
        region:'Europe',
        capital:'Mariehamn'
    },
    {
        image:imageAlbania,
        title:'Albania',
        population:'2,886,026',
        region:'Europe',
        capital:'Tirana'
    },
    {
        image:imageAlgeria,
        title:'Algeria',
        population:'40,400,000',
        region:'Africa',
        capital:'Algiers'
        
    }
]

class Cardlist extends Component{
    render(){
        const countrys = world.map((item,id)=>{
            const {image,title,population,region,capital} = item
            return <CardlistItem imageSrc = {image} title={title} population={population}
            region={region} capital = {capital}/>
        })

        return(
            <div className="countryies container">
                {countrys}
            </div>
        )
    }
}

export default Cardlist