import Person, { IPersonProps } from "@/components/person";
import styles from "../../styles/home.module.css";
import { API_PERSON } from "../api";

async function getPersons() {
  const response = await fetch(API_PERSON);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const persons = await getPersons();
  return (
    <div className={styles.container}>
      {persons.map((person: IPersonProps) => (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          squareImage={person.squareImage}
          netWorth={person.netWorth}
          industries={person.industries}
        />
      ))}
    </div>
  );
}
