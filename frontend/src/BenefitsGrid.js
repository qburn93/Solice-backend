import React from 'react';
import './styles/MainPage.css'; // Assuming the CSS for this component is in MainPage.css

function BenefitsGrid() {
    return (
        <section className="benefits-grid">
            <div className="ben-1">
                <h2 className="hover-underline-animation">Profitability of solar cells</h2>
                <p>How many hours of sunshine are needed to cover electricity production for a property depends on the
                    electricity consumption, installation area, and direction of the wind.
                    Our objective is to design and dimension the facility so that the desired best possible output (kW) is
                    achieved.
                </p>
            </div>
            <div className="ben-1">
                <h2 className="hover-underline-animation">A good investment</h2>
                <p>Solar cell installations have low variable costs, rarely require servicing, and positively increase the
                    value of the property.
                    If you want to think big, there is an opportunity to become completely energy neutral.
                    With good planning and the right conditions, it is entirely possible.
                </p>
            </div>
            <div className="ben-1">
                <h2 className="hover-underline-animation">Add's value</h2>
                <p>Solar energy is considered an improvement to your home and can increase the overall value of the house.
                    The villa can thus become more attractive to potential buyers when and if you sell. Why? Reduced
                    operating costs result in reduced variable costs and annual savings.
                </p>
            </div>
            <div className="ben-1">
                <h2 className="hover-underline-animation">Renew smart</h2>
                <p>Even the passive income from sold electricity and the possibility of financing the rest of the
                    electricity bills have a value-enhancing effect when selling the villa.
                    Solar cells increase the property's standard regarding energy use. 
                    It is possible to carry out an energy
                    inspection and energy certification, which gives you a certificate that the villa is energy efficient.
                </p>
            </div>
        </section>
    );
}

export default BenefitsGrid;