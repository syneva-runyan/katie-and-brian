import React from "react";
import cx from 'classnames';
import './WeddingParty.css';

function WeddingPartyPerson({ desktop, imgSrc, main, name, relation, role = null, isDark=false }) {
    return (
        <div className={cx({
            "wedding-party-person": true,
            "wedding-party-person--main": main,
            "desktop": desktop,
            })}
        >
            <div className="wedding-party__description">
                <h3>{name}</h3>
                {role && <h4>{role}</h4>}
                {relation && <p>{relation}</p>}
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
            <WeddingPartyPerson main name="Katie and Brian" relation="Bride & Groom" imgSrc="../images/weddingParty/katieAndBrian.jpg" />
            <div className="wedding-party">
                <h2 className="h1">Groomsmen</h2>
                <div className="wedding-party-column"> 
                    <WeddingPartyPerson name="Joey Remsen" role="Best man" relation="College friend and roomate" imgSrc="../images/weddingParty/brianAndJoey.jpg" isDark />
                    <WeddingPartyPerson name="Jeff Petillo" relation="High school friend" imgSrc="../images/weddingParty/jeffAndBrian.jpg" />
                    <WeddingPartyPerson name="Pramod Thammaiah" relation="High school friend" imgSrc="../images/weddingParty/brianAndPromode.jpg" />
                    <WeddingPartyPerson name="Tyler Stearns" relation="College friend and roommate" imgSrc="../images/weddingParty/tylerAndBrian.jpg" isDark/>
                    <WeddingPartyPerson name="Benjamin Runyan" relation="New brother-in-law" imgSrc="../images/weddingParty/benji.jpg" />
                    <WeddingPartyPerson name="Michael Runyan" relation="New brother-in-law" imgSrc="../images/weddingParty/mickey.jpg" isDark />
                    <WeddingPartyPerson name="Luke Runyan" relation="New brother-in-law" imgSrc="../images/weddingParty/luke.JPG" isDark />
                </div>
                <h2 className="h1">Bridesmaids</h2>
                <div className="wedding-party-column">
                    <WeddingPartyPerson name="Syneva Runyan" role="Maid of honor" relation="Katie's sister" imgSrc="../images/weddingParty/katieAndSyneva.jpg" isDark />
                    <WeddingPartyPerson name="Annie Kim" relation="Georgia tech" imgSrc="../images/weddingParty/katieAndAnnie.jpg" isDark />
                    <WeddingPartyPerson name="Courtney Olson" relation="CapOne life" imgSrc="../images/weddingParty/courtneyAndkatie.jpg" />
                    <WeddingPartyPerson name="Esther Kim" relation="DC roomate" imgSrc="../images/weddingParty/katieAndEsther.jpg" isDark />
                    <WeddingPartyPerson name="Heta Jangla" relation="Helluva engineer" imgSrc="../images/weddingParty/katieAndHeta.jpg" isDark />
                    <WeddingPartyPerson name="Gabrielle Wickizer" relation="New sister-in-law" imgSrc="../images/weddingParty/gabbyAndKatie.jpg" isDark />
                    <WeddingPartyPerson name="Gen Wickizer" relation="New sister-in-law" imgSrc="../images/weddingParty/genAndKatie.png" isDark />
                </div>
            </div>
        </div>
    );
}