# Airbean

Ni ska bygga en webbapp där det går att beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

**Figmaskiss:** https://www.figma.com/file/kXZaZLMYQzXzgC2k6o4ne0/AirBean-v.1.2---React?node-id=0%3A1

## Instruktioner

**För att få Godkänt ska du:**
* Gjort enligt Figma skissen (viss variation på färger, typsnitt etc är tillåtet)
* Använder sig av Redux med en Redux store
* Gå att lägga till produkter i en varukorg (varukorgen ligger i din Redux store)
* I varukorgen ändra antal/ta bort produkter
* Hämta alla produkter med `fetch`
* Kunna skicka sin order med `fetch` och alla produkter och få ett svar med en ETA och ordernummer
* När en beställning är lagd så töms ens redux store

**För att Väl Godkänt ska du:**
* Varukorgen sparas i localStorage och synkas vid uppdatering av varukorgen i gränssnittet.
* När beställningen är lagd så töms localStorage.
* Eftersom Göteborg fyllt 400 år vill Airbean fira med ett kampanjerbjudande! Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr (49 kr billigare totalt). Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.


## API - anrop
Hämta meny:  https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu

Lägga en beställning: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
