const checkGamerTag = (gamerTag) => {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regexNum = /[0-9]/;
    if (gamerTag.length < 8) {
        return false;
    }
    if (!gamerTag.match(regex)) {
        return false;
    }
    if (!gamerTag.match(regexNum)) {
        return false;
    }
    return true;
};

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, checkGamerTag };
