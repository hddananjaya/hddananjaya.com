import styles from './Cards.module.css';
import AppContext from '../../contexts/appContext';
import React from 'react';
import _ from 'lodash';

const Cards = ({ cardData }) => {
  const game = React.useContext(AppContext);  

  const showCard = (cardTags) => {
    let enabledTags = _.map((game.tags), (o) => {
      if (o.isSelected == true) return o;
    });
    enabledTags = _.without(enabledTags, undefined)
    if (enabledTags.length === 0) return true;
    const tagNames = enabledTags.map((o)=>{ return o.name })
    const hasCommonVals = _.xor(tagNames, cardTags).length < (tagNames.length + cardTags.length);
    return (hasCommonVals);
  }

  return (
    <>
      <div className={styles.cardHolder}>
        {cardData.map((card) => {
          return (
            <div key={card.title} className={styles.cardOuter}
            style={{display:`${showCard(card.tags) ? 'flex' : 'none'}`}}
            >
              <img className={styles.cardImage} src={card.image}></img>
              <p className={styles.title}>
                {card.description}
              </p>
              <div className={styles.btnHolder}>
                {card.liveURL ?
                  <a href={card.liveURL} target="_blank">
                    <input className={styles.btn} type="button" value="LIVE"></input>
                  </a>
                  : null
                }
                <a href={card.sourceURL} target="_blank">
                  <input className={styles.btn} type="button" value="SOURCE"></input>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
