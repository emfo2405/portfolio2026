import OneProject from "../components/OneProject";

function Projects() {


  return (
<div>
        <div id='projectHead'>
        <h2 id="projectTitle">Mina projekt</h2>
    <p id="linkInfo">Ha lite tålamod med länkarna, de är uppladdade på skolservrar och gratisservrar, vilket gör att laddningen går lite långsammare. </p>
        </div>

    <div id="projectContent">
            <OneProject
            title="Bokcirkeln"
            image="bokcirkeln.jpg"
            imageAlt="En bild på startsidan av hemsidan bokcirkeln"
            description="En bokrecensionsplattform skapad med react, django och google books API uppladdat till Netlify."
            link="https://bokcirkeln.netlify.app/"
            gitlink="https://github.com/emfo2405/readinglog-frontend.git"
            gitlink2="https://github.com/emfo2405/readinglog.git"
            extraInfo="En backendtjänst skapades med Django där full CRUD-funktionalitet implementerades för recensioner och lässtatus.
            Databasen är en Postgres-databas och är uppladdad till Render, även Backend-tjänsten är uppladdad till Render. Frontend-delen 
            skapades sedan med React och utnyttjar både Google Books API samt det egenskapade Django API:et. Webbplatsen
            är till för att en användare ska kunna skapa ett konto, lämna recensioner på olika böcker samt lägga till en lässtatus 
            på olika böcker. Recensioner kan sedan ses av andra användare men lässtatus behålls privat och visas endast för 
            den inloggade användaren."
            />

            <OneProject
            title="Bokklubb"
            image="bokhörnan.jpg"
            imageAlt="En bild på startsidan av bokklubbshemsidan bokhörnan"
            description="En hemsida skapad för en bokklubb i syfte att administrera och integragera med den. Postgres har använts som databas och applikationen är publicerad på railway. Webbplatsen är skapad som ett MVC-projekt med EF, Identity och AI-implementation. Skapad med C# och .NET."
            link="https://bookclub-dotnet-production.up.railway.app/"
            gitlink="https://github.com/emfo2405/BookClub-dotnet.git"
            extraInfo="Webbplatsen skapades som ett MVC-projekt där även Entity Framework och Identity användes för att både 
            kunna scaffolda fram CRUD-funktionalitet och även skapa funktionalitet för att registrera och hantera inloggningar. Webbplatsen 
            har en adminsida där admin kan administrera bokklubben, så som att lägga till böcker och författarprofiler. Den har även 
            diskussionsforum och recensionsformulär så att inloggade användare ska kunna bidra till sidan. Även AI-funktionalitet 
            är implementerad som bedömer diskussionsinlägg innan de publiceras i forumet."
            />

            <OneProject 
            title="Webbshop med WordPress"
            image="bildNSET.jpg"
            imageAlt="En bild på startsidan av webbshopen nästan som en tavla"
            description="En webbshop skapad med egenutvecklat WordPress-tema"
            link="https://studenter.miun.se/~emfo2405/writeable/nastansomentavla/"
            extraInfo="Webbshop och tema skapat med PHP och uppladdat till en skolserver. Plugins som användes i projektet är WooCommerce, Yoast SEO och Contact Form 7. Databas uppladdat till phpmyadmin."
            gitlink="https://github.com/emfo2405/nastansomentavla.git" 
             />

            <OneProject
            title="Lagerhantering med ramverk"
            image="furnitureStore.jpg"
            imageAlt="En bild på startsidan av lagerhanteringstjänsten för möbelaffären furnitureStore"
            description="En lagerhanteringstjänst skapades för det fiktiva företaget furnitureStore. Webbplatsen skapades med LoopBack, MongoDb och Vue."
            link="https://furniturestore-ramverk.netlify.app/"
            gitlink="https://github.com/emfo2405/furniture-frontend.git"
            gitlink2="https://github.com/emfo2405/furniture-backend.git"
            extraInfo="En backendtjänst skapades med full CRUD-funktionalitet för att lägga till kategorier/produkter och hantera lagersaldo. Backendtjänsten skapades
            med LoopBack och kopplades till en databas skapad med MongoDb. Frontend-tjänsten skapades med Vue och kopplades till den skapade backendtjänsten. För design
            användes CSS-ramverket Bootstrap. Backend-tjänsten är uppladdad på Render och det tar lite tid innan allt är laddat. Vid testning, låt helst kategorierna 
            ladda klart innan en ny användare skapas."
             />

    </div>
    </div>
  )
}

export default Projects