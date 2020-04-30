import styles from './Categories.module.css';
import _ from 'lodash';
import React from 'react';
import AppContext from '../../contexts/appContext';

const Categories = () => {

  const game = React.useContext(AppContext);
  
  const toggelSelection = (tagName) => {
    game.setTags({
      ...game.tags, [tagName]: {
        name: tagName,
        isSelected: !game.tags[tagName].isSelected,
      }
    })
  };

  const isTagSelected = (tagName) => {
    return game.tags[tagName].isSelected;
  };

  return (
    <div className={styles.tagsWrapper}>
      {Object.values(game.tags).map((tag) => {
        return (
          <div key={tag.name}
            className={`${styles.tag} ${isTagSelected(tag.name) == true ? styles.tagSelected : null}`}
            onClick={() => toggelSelection(tag.name)}
          >
            {tag.name}
          </div>
        )
      })}
    </div>
  );
}

export default Categories;