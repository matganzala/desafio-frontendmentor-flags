import React, { Fragment } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";

type detailsProps = 
{
    details?: any
}

export function Mapdetails(props: detailsProps){  
    var navigate = useNavigate();
    return(
        <>
        {
            props.details?.map((detail: any, key: any) => {
                return(
                    <>
                        <div className="container" key={key}>
                            <FadeIn>
                                <div className="content-page" style={{height: '100%'}}>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <button onClick={() => navigate("/")} className="details-btn">Back</button>
                                        </div>
                                    </div>
                                    <div className="row mt-3 align-items-center">
                                        <div className="col-12 col-md-6 mb-3">
                                            <img src={detail?.flags.svg} className="flags"/>
                                        </div>
                                        <div className="col mx-5">
                                            <div className="row">
                                                <h1 className="h1 h1-class">{detail?.name.common}</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="mt-2 p-class"><strong>Native Name: </strong>{detail?.name.common}</p>
                                                    <p className="mt-2 p-class"><strong>Population: </strong>{detail?.population}</p>
                                                    <p className="mt-2 p-class"><strong>Region: </strong>{detail?.region}</p>
                                                    <p className="mt-2 p-class"><strong>Sub Region: </strong>{detail?.subregion}</p>
                                                    <p className="mt-2 p-class"><strong>Capital: </strong>{detail?.capital === " " ? <p> No Capital</p> : detail?.capital}</p>
                                                </div>
                                                <div className="col">
                                                    <p className="mt-2 p-class"><strong>Top Level Domain: </strong>{detail.tld}.</p>
                                                    <p className="mt-2 p-class"><strong>Currencies: </strong>
                                                        {Object.values(detail.currencies).map((moeda: any) => {
                                                            return moeda.name;
                                                        })}
                                                    </p>
                                                    <p className="mt-2 p-class"><strong>Languages: </strong>
                                                        {Object.values(detail.languages).map((language: any) => {
                                                            return language;
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row mt-3" style={{ height: '100px'}}>
                                                <p className="align-self-center p-class"><strong>Border Countries:</strong>
                                                    {detail?.borders?.map((border: any) => {  
                                                        return (
                                                        <>
                                                            <a className="details-btn" style={{ marginLeft: '15px', marginTop: '15px' }}>
                                                                {border}
                                                            </a>
                                                            <button
                                                                className="details-btn"                                            
                                                                style={{ marginLeft: '15px', marginTop: '15px' }}
                                                            >                                                                
                                                            </button>
                                                        </>                                         
                                                        )
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </>
                )
            })
        }
        </>
    )
     
}