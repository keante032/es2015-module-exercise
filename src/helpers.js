/** choose a random item */

function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx]
}

/** remove item from items
 * 
 * @param {array} items 
 * @param {any} item    This should match one of the elements in the array.
 * @returns updated items array with item removed if it was found, else returns undefined
 */

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export {choice, remove}