import React from 'react';

const Country = (props) => {
    const {name, population, area, flag, region} = props.country
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            <div className="country-info">
                <div className="country-img">
                    <img src={flag} alt="" />
                </div>
                <h3> Country: {name}</h3>
                <h4> Population: {population}</h4>
                <h5> Area: {area}</h5>
                <h4> Region: {region}</h4>
                <button onClick={() => handleAddCountry(props.country)}>Add Country:</button>
            </div>

        </div>
    );
};

export default Country;