# Instruktioner

Du ska skapa början till ett "Bloggsystem" med klasser för att hantera användare, blogginlägg och kommentarer.

Användare ska kunna skapa blogginlägg och lägga till kommentarer till dessa inlägg. 

För strukturen med klasser, du ska implementera och hålla dig till, så finns detta illustrerat i ett förenklat s.k "klassdiagram".

Följande bild visar diagrammet:
![class diagram](https://raw.githubusercontent.com/node-programming-classroom-repos/assignment_blog/main/classdiagram.png)

(se filen classdiagram.png i det här repot).



Linjerna mellan klasserna symboliserar relationerna klasserna ska ha (som du ska implementera):
- En användare (User) har flera blogginlägg (BlogPost) och kommentarer (Comment).
- Ett blogginlägg (BlogPost) har flera kommentarer (Comment).
- En kommentar (Comment) tillhör en post (BlogPost).

Följ klassdiagrammet och skapa egna filer för respektive klass.
Till klasserna skapar du ett script main.js som skapar objekt samt "testkör" din lösning.
I detta repot medföljer ett script (main.js) som du kan använda och/eller utgå ifrån.

# Krav

Du ska implementera följande klasser i separata filer (User.js, Comment.js, BlogPost.js).
Implementera attribut, metoder och relationer enligt diagrammet och textbeskrivningen nedan:

### User

Attribut:
- username
- email
- password
- blogPosts[] - element som är objekt av BlogPost, dvs blogposter som användaren har skrivit
- comments[] - element som är objekt av Comments, dvs kommentarer som användare har skrivit på blogposter.

Metoder:
- createBlogPost(title, content): skapar en ny blogpost urifrån titeln och textinnehållet/content. Metoden ska returnera den nya posten (BlogPost).
- addComment(post, text): skapar en kommentar (text) till en befintilg post (post). Lägger till denna nya kommentar (Comment) till comments[].
- displayInfo(): skriver ut info om användaren, t ex username och email

### BlogPost 

Attribut:
- title
- content
- author - vilken användare som har skrivit den här blogposten
- comments[] - objekt av Comments. Alltså kommenterar för blogposten.

Metoder:
- addComment(comment): lägger till ny kommentar till den här posten. Parametern är en instans av Comment. Sparas till comments[].
- displayPost(): skriver ut posten och informationen som hör till


### Comment 

Attribut:
- author - vilken användare som har skrivit kommentaren
- post - vilken blogpost kommentaren hör till
-  text - textinnehållet

Metoder:
- displayComment(): skriver ut kommentaren med tillhörande information


**Lägg till ett script som du döper till 'main.js' och som testkör din lösning**
Detta script ska alltså "köra" din lösning med objekt/instanser och utskrifter av objekten.

Det är ok att använda main.js som följer med i repot.

Du får inte använda externa moduler eller paket förutom om du eventuellt skriver egna tester med jest.


