# Title-Case-Master
TitleCaseMaster is a lightweight JavaScript utility library designed to simplify the task of converting input names into a consistent sentence case format. It takes into account various scenarios and ensures proper capitalization for names, making it perfect for applications where accurate naming conventions are crucial.

## Installation

You can install `name-converter` using npm or yarn:

```bash
npm install name-converter

or

yarn add name-converter

```
# Usage

```bash
const nameConverter = require('name-converter');

const formattedName = nameConverter('faMba abdulNassIIR');

console.log(formattedName);

//output: 'Famba Abdulnassiir'

```
# Functionality
`nameConverter(nameString)`

- Parameters:
    - `nameString`: A string containing the name to be formatted.

- Returns:
    - A string with the name converted to sentence case.

- Example:

```bash
   const formattedName = nameConverter('eLiZaBeTh sMiTh');

   console.log(formattedName);

   // Output: 'Elizabeth Smith'

```
 # Contributing.
 Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or create a pull request on the https://github.com/Famba-Abdulnassiir/TitleCaseMaster.git

