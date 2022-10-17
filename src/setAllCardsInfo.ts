/* eslint-disable indent */

import { setCardInfo } from './setCardInfo.js';

export const setAllCardsInfo = (
    HTMLCardElementList: NodeList,
    characters: [],
    listOfImages: []
) => {
    HTMLCardElementList.forEach((item, i) => {
        setCardInfo(item, characters[i], listOfImages[i]);
    });
};
