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
        population:'Population',
        infoPopulation: '91,770,900',
        region:'Region',
        infoRegion:'Europe',
        capital:'Capital',
        capitalName:'Berlin'
    },
    {
        image:imageUsa,
        title:'United States of America',
        population:'Population',
        infoPopulation: '323,947,000',
        region:'Region',
        infoRegion:'Americas',
        capital:'Capital',
        capitalName:'Washington.D.C'
    },
    {
        image:imageBrazil,
        title:'Brazil',
        population:'Population',
        infoPopulation: '206,135,893',
        region:'Region',
        infoRegion:'Americas',
        capital:'Capital',
        capitalName:'Brasilia'
    },
    {
        image:imageIceland,
        title:'Iceland',
        population:'Population',
        infoPopulation: '334,300',
        region:'Region',
        infoRegion:'Europe',
        capital:'Capital',
        capitalName:'Reykjavik'
    },
    {
        image:imageAfg,
        title:'Afghanistan',
        population:'Population',
        infoPopulation: '27,657,145',
        region:'Region',
        infoRegion:'Asia',
        capital:'Capital',
        capitalName:'Kabul'
    },
    {
        image:imageAlisl,
        title:'Aland Islands',
        population:'Population',
        infoPopulation: '28,875',
        region:'Region',
        infoRegion:'Europe',
        capital:'Capital',
        capitalName:'Mariehamn'
    },
    {
        image:imageAlbania,
        title:'Albania',
        population:'Population',
        infoPopulation: '2,886,026',
        region:'Region',
        infoRegion:'Europe',
        capital:'Capital',
        capitalName:'Tirana'
    },
    {
        image:imageAlgeria,
        title:'Algeria',
        population:'Population',
        infoPopulation: '40,400,000',
        region:'Region',
        infoRegion:'Africa',
        capital:'Capital',
        capitalName:'Algiers'
    }
]

class Cardlist extends Component{
    render(){
        const countrys = world.map((item,id)=>{
            const {image,title,population,infoPopulation,region,infoRegion,capital,capitalName} = item
            return <CardlistItem imageSrc = {image} title={title} population={population} infoPopulation={infoPopulation}
            region={region} infoRegion= {infoRegion} capital = {capital} capitalName = {capitalName}/>
        })

        return(
            <div className="countryies container">
                {countrys}
            </div>
        )
    }
}

export default Cardlist