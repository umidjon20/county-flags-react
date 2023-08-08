import { Component } from "react";


class CardlistItem extends Component{
    render(){
        const {imageSrc,title,population ,region, capital} = this.props
        return(
            <div className="card_item">
                <img src={imageSrc} alt="" />
                <h3>{title}</h3>
                <div className="info">
                    <span>
                        <strong>Population</strong>: {population}
                    </span>
                    <span>
                        <strong>Region</strong>: {region}
                    </span>
                    <span>
                        <strong>Capital</strong>: {capital}
                    </span>
                </div>
            </div>
        )
    }
}

export default CardlistItem