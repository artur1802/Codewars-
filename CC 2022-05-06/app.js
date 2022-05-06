String.prototype.toJadenCase = function () {
    return this.split(' ').map(text =>text[0].toUpperCase()+text.slice(1)).join(' ');
    
    }