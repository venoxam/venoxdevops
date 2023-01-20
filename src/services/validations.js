const checkGamerTag = (gamerTag) => {
    if (gamerTag.length < 8) {
        return false;
    }
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, checkGamerTag };
