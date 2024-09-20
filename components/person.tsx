"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/person.module.css";

export interface IPersonProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: [];
}

export default function Person({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IPersonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={squareImage} alt={name} />
      <div>{name}</div>
      <span>{`${Math.floor(netWorth / 1000)} Billions`}</span>
      <br />
      <span>{industries ?? industries[0]}</span>
    </div>
  );
}
