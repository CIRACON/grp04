export const CharacterPage = ({ id }) => {
    //let url = `https://swapi.dev/api/people/${id}`;
    //let Person = fetch(url).then(res => res.json());
    let Person;
    async function fetchPerson(id) {
        let url = `https://swapi.dev/api/people/${id}`;
        try {
            const person = await fetch(url)
                .then(res => res.json())
            Person = person;
        }
        catch (ex) {
            console.error(`Error reading person ${id} data.`, ex.message);
        }
    }
    return (
        <h1>ID:{id} Name: {Person.name}</h1>
    )
}

