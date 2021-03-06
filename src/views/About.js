import './About.css';
import Header from '../components/Header';
import eva from '../assets/graphics/eva-cortado.jpg';
import headerGraphic from '../assets/graphics/graphics-header.svg';
import footerGraphic from '../assets/graphics/graphics-footer.svg';
import { useEffect } from 'react';

function About(props) {
    const { showCartButton, setShowCartButton } = props
    useEffect(() => {
        setShowCartButton(false)
    }, [])

    return (
        <main className='about-section'>
            <img src={headerGraphic} alt="leaves" className="graphics graphics-header" />
            <Header showCartButton={showCartButton} />
            <section className='about-text'>
                <h1>Vårt kaffe</h1>
                <h3>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper,
                    crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
                </h3>
                <p>
                    Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste,
                    con panna milk black, arabica white rich beans single shot extra affogato. So affogato
                    macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin,
                    and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup
                    kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant
                    kopi-luwak.
                </p>
                <p>
                    Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half
                    and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich
                    grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body
                    as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant
                    shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste,
                    seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
                </p>
            </section>

            <figure className='about-eva'>
                <img src={eva} alt="Picture of founder, Eva Cortado" />
                <h2>Eva Cortado</h2>
                <p>VD & Grundare</p>
            </figure>
            <img src={footerGraphic} alt="leaves" className="graphics graphics-footer" />
        </main>
    )
}

export default About;