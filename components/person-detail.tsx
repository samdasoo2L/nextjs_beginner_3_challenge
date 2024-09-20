import styles from "../styles/person-detail.module.css";
import Image from "next/image";

interface IPersonAssetsProps {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

export interface IPersonDetailProps {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IPersonAssetsProps[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export default function PersonDetail({
  squareImage,
  netWorth,
  bio,
  country,
  name,
  industries,
}: IPersonDetailProps) {
  return (
    <div className={styles.container}>
      <Image src={squareImage} alt={name} />
      <div>{name}</div>
      <div>{`Networth: ${Math.floor(netWorth / 1000)} Billions`}</div>
      <div>{`Country: ${country}`}</div>
      <div>{`Industry: ${industries ?? industries[0]}`}</div>
      {bio.map((thing, index) => (
        <div className={styles.bio} key={index}>
          {thing}
        </div>
      ))}
    </div>
  );
}
