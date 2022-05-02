Airbean
Ni ska bygga en webbapp där det går att beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

Figmaskiss: https://www.figma.com/file/kXZaZLMYQzXzgC2k6o4ne0/AirBean-v.1.2---React?node-id=0%3A1

Instruktioner
För att få Godkänt ska du:

Gjort enligt Figma skissen (viss variation på färger, typsnitt etc är tillåtet)
Använder sig av Redux med en Redux store
Gå att lägga till produkter i en varukorg (varukorgen ligger i din Redux store)
I varukorgen ändra antal/ta bort produkter
Hämta alla produkter med fetch
Kunna skicka sin order med fetch och alla produkter och få ett svar med en ETA och ordernummer
När en beställning är lagd så töms ens redux store
För att Väl Godkänt ska du:

Varukorgen sparas i localStorage och synkas vid uppdatering av varukorgen i gränssnittet.
När beställningen är lagd så töms localStorage.
Eftersom Göteborg fyllt 400 år vill Airbean fira med ett kampanjerbjudande! Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr (49 kr billigare totalt). Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.
API - anrop
Hämta meny: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu

Lägga en beställning: https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order