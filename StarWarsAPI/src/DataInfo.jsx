import React from "react";

export default function DataInfo( { option, dataInfo, additionalData }) {
  while (option !== "") {
    switch (option){
      case "people":
        return (
          <div>
            <h2>{dataInfo.name}</h2>
            <p>{dataInfo.height}</p>
            <p>{dataInfo.mass}</p>
            <p>{dataInfo.hair_color}</p>
            <p>{dataInfo.skin_color}</p>
            <p>{dataInfo.eye_color}</p>
            <p>{dataInfo.birth_year}</p>
            <p>{dataInfo.gender}</p>
            <p>{additionalData.name}</p>
          </div>
          );
          
          case "planets":
            return(
              <div>
                <h2>{dataInfo.name}</h2>
                <p>{dataInfo.rotation_period}</p>
                <p>{dataInfo.orbital_period}</p>
                <p>{dataInfo.diameter}</p>
                <p>{dataInfo.climate}</p>
                <p>{dataInfo.graviy}</p>
                <p>{dataInfo.terrain}</p>
                <p>{dataInfo.surface_water}</p>
                <p>{dataInfo.population}</p>
                {/* Ska loopas genom och läggas till senare */}
                {/* <p>{residents}</p>
                <p>{films}</p> */}
              </div>
            )
    }

}
}
