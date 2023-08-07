import { Component } from "react";


class CardlistItem extends Component{
    render(){
        const {imageSrc,title,population,infoPopulation ,region,infoRegion, capital,capitalName} = this.props
        return(
            <div className="card_item">
                <img src={imageSrc} alt="" />
                <h3>{title}</h3>
                <div className="info">
                    <span>
                        <strong>{population}</strong>: {infoPopulation}
                    </span>
                    <span>
                        <strong>{region}</strong>: {infoRegion}
                    </span>
                    <span>
                        <strong>{capital}</strong>: {capitalName}
                    </span>
                </div>
            </div>
        )
    }
}

export default CardlistItem