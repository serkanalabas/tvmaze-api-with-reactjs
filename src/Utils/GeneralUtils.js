const createSEOLink = (link) => {
    var trMap = {
        'çÇ':'c',
        'ğĞ':'g',
        'şŞ':'s',
        'üÜ':'u',
        'ıİ':'i',
        'öÖ':'o'
    };

    for(var key in trMap) {
        link = link.replace(new RegExp('['+key+']','g'), trMap[key]);
    }

    return  link.replace(/[^-a-zA-Z0-9\s]+/ig, '')
                .replace(/\s/gi, "-")
                .replace(/[-]+/gi, "-")
                .toLowerCase();
}


export {
    createSEOLink
}