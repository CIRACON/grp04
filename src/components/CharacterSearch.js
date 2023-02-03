import { useEffect, useState } from "react";
let allCharacters = [];

export const CharacterSearch = () => {
    const [displayedCharacters, setDisplayed] = useState([]);
    const [searchTerm, setSearchTerm] = useState("a");


    //Populates allCharacters, ran once.
    useEffect(() => {
        getPeople();
    }, []);


    //Redraw whenever searchTerm is changed.
    useEffect(() => {
        const re = new RegExp(searchTerm, "i");
        setDisplayed(allCharacters.filter(character => re.test(character.name)));
    }, [searchTerm]);

    return (
        <>
            <p>Search for Star Wars Characters.</p>
            <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
            {displayedCharacters.map(character => <p><a href={character.url}>{character.name}</a></p>)}
        </>
    )
}

const getPersonIdFromUrl = (url) => {
    const re = /.*people\/(\d+).*/
    const matches = url.match(re)
    if (!matches) throw "Bad URL. Not a people URL."
    return matches[1]
}

async function getPeople() {
    let url = 'https://swapi.dev/api/people';

    while (url) {
        try {

            const newfetch = await fetch(url)
                .then(res => res.json())
                .then(res => { url = res.next; return res })
                .then(res => res.results)
                .then(res => res.map(p => ({ ...p, id: +getPersonIdFromUrl(p.url) })));
            allCharacters.push(...newfetch);

            //console.log(allCharacters);
        }
        catch (ex) {
            console.error(ex.message);
        }
    }
    console.log({ allCharacters });
}