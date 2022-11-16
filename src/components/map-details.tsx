import React, { Fragment } from "react";

type DetailsProps = 
{
    details?: any
}

export function MapDetails(props: DetailsProps){  
    return(
        <Fragment>
            {
                props.details?.map((detail: any, key: any) => {
                    console.log(detail.name.common)
                    return(
                        <>
                            <h1>{detail.name.common}</h1>
            
                        </>
                    )
            
                })
            }
        </Fragment>
    )    
}