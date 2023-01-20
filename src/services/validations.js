const checkGamerTag = (gamerTag) => {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (gamerTag.length < 8) {
        return false;
    }
    if (!gamerTag.match(regex)) {
        return false;
    }
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, checkGamerTag };
