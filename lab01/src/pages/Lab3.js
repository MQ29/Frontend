import { peopleData } from "../data/peopleData";

const Lab3 = () => {
  return(
    <div>
        <h1>Laboratorium3</h1>
        <ul>
            {peopleData.map(person => 
            <li>key={person.id}
            <p><strong>Imię:</strong> {person.name}</p>
            <p><strong>Wiek:</strong> {person.age}</p>
            <p><strong>Zawód:</strong> {person.job}</p>
            <p><strong>Ocena:</strong> {person.rating}</p>
            </li>
            )}
        </ul>
    </div>
  ) 
};

export default Lab3;
