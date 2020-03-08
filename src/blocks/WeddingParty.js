import React from "react";
import cx from 'classnames';
import './WeddingParty.css';

function WeddingPartyPerson({ imgSrc, name, relation, isDark=false }) {
    return (
        <div className="wedding-party-person">
            <div className="wedding-party__description">
                <h3>{name}</h3>
                {relation && <p><span className="wedding-party__spacer">|</span> {relation}</p>}
            </div>
            <div className={cx({
                    "wedding-party__img": true,
                    "wedding-party__img--dark": isDark
                    })}>
                <img src={imgSrc} alt={name} />
                <div className={cx({
                    "wedding-party__img-shadow": true,
                    "wedding-party__img-shadow--dark": isDark
                    })}
                />
            </div>
        </div>
    );
}

export default function WeddingParty() {
    return (
        <div className="contentContainer">
            <h1>Wedding Party</h1>
            <div className="wedding-party">
                <WeddingPartyPerson name="Katie and Brian" relation="Bride & Groom" imgSrc="../images/weddingParty/katieAndBrian.jpg" />
                <WeddingPartyPerson name="Joey Remsen" relation="Jersey Kids" imgSrc="../images/weddingParty/brianAndJoey.jpg" isDark />
                <WeddingPartyPerson name="Syneva Runyan" relation="Katie's Sister" imgSrc="../images/weddingParty/katieAndSyneva.jpg" isDark />
                <WeddingPartyPerson name="Benjamin Runyan" relation="New Brother in Law" imgSrc="../images/weddingParty/benji.jpg" />
                <WeddingPartyPerson name="Annie Kim" relation="Georgia Tech" imgSrc="../images/weddingParty/katieAndAnnie.jpg" isDark />
                <WeddingPartyPerson name="Jeff Petillo" relation="High School Friend" imgSrc="../images/weddingParty/jeffAndBrian.jpg" isDark/>
                <WeddingPartyPerson name="Gabrielle Wickizer" relation="New Sister in Law" imgSrc="../images/weddingParty/gabbyAndKatie.jpg" isDark />
                <WeddingPartyPerson name="Luke Runyan" relation="New Borther in Law" imgSrc="../images/weddingParty/luke.JPG" isDark />
                <WeddingPartyPerson name="Courtney Olson" relation="CapOne life" imgSrc="../images/weddingParty/courtneyAndkatie.jpg" />
                <WeddingPartyPerson name="Michael Runyan" relation="New Borther in Law" imgSrc="../images/weddingParty/mickey.jpg" isDark />
                <WeddingPartyPerson name="Esther Kim" relation="DC Roomate" imgSrc="../images/weddingParty/katieAndEsther.jpg" isDark />
                <WeddingPartyPerson name="Pramod Thammaiah" relation="Jersey Kid" imgSrc="../images/weddingParty/brianAndPromode.jpg" />
                <WeddingPartyPerson name="Heta Jangla" relation="Helluva Engineer" imgSrc="../images/weddingParty/katieAndHeta.jpg" isDark />
                <WeddingPartyPerson name="Tyler Stearns" relation="College Friend/Roommate" imgSrc="../images/weddingParty/tylerAndBrian.jpg" isDark/>
                <WeddingPartyPerson name="Gen Wickizer" relation="New Sister in Law" imgSrc="../images/weddingParty/genAndKatie.png" isDark />
            </div>
        </div>
    );
}