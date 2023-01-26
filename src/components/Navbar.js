
export default function Navbar() {
    return (
        <body>
    <nav className="nav">
        <a href="/" className={"Titel"}>m151 Mashup</a>
        <ul>
            <li>
                <a href={"/#"}>Home</a>
            </li>
        <li>
                <a href={""}>Flights</a>
        </li>
        <li>
                <a href={"/WeatherComponent"}>Weather</a>
    </li>
        </ul>
    </nav>
    <h1>Home</h1>

    <h3>Idee</h3>
    <p>Als unser Abschlussprojekt im Modul 151 haben wir uns entschieden, einen Mashup zu entwickeln.</p>

        <p>Unsere Idee war es, die Ankünfte/Abflüge vom Flughafen Zürich zu anusgeben, auch haben wir uns entschieden die verschiedenen Wetterberichte zu ausgeben.</p>

    </body>
    )
}