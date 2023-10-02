const nameConverter = (nameString) => {
    
    //convert all to lower case then slipt it ' '
    const lowerCaseName = nameString.toLowerCase().split(' ');
    
    const sentenceCase = lowerCaseName.map(lName => {
        if(lName !== 0){
            return lName.charAt(0).toUpperCase() + lName.slice(1);
        }
    });

    const finalName = sentenceCase.join(' ');

    return finalName;
    
}
module.exports = nameConverter;