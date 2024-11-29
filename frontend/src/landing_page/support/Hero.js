import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h4 className='fs-2 '>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3 mb-5">
                    Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O" />
                    <br />
                    <a href="" className='p-4 mb-5'>Track account opening</a>
                    <a href="" className='p-6'>Track segment activation</a>
                    <br/>
                    <a href="" className='p-4 mb-5'>Intraday margins</a>
                    <a href="" className='p-4 mb-5'>Kite user manual</a>
                </div>

                <div className="col-6 p-3">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li className='mb-4' ><a href="" >Offer for sale (OFS) - November 2024</a></li>
                    
                        
                        <li><a href="" className='mb-5'>Surveillance measure on scrips - November 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;