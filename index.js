function ily(name) {
    if (typeof name !== 'string') throw new Error('argument must be a string');
    return `i love you, ${name}
            **   **
          ***** *****
         *************
         *************
          ***********
            *******
              ***`;
    
}

module.exports.ily = ily;