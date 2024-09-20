import PersonDetail from "@/components/person-detail";
import styles from "../../../styles/person-page.module.css";
import { API_PERSON_DETAIL } from "@/app/api";

interface IParams {
  params: { id: string };
}

async function getPersonDetail(id: string) {
  const response = await fetch(API_PERSON_DETAIL + id);
  const json = await response.json();
  return json;
}

export default async function PersonPage({ params: { id } }: IParams) {
  const detail = await getPersonDetail(id);
  return (
    <div className={styles.container}>
      <PersonDetail
        key={detail.id}
        squareImage={detail.squareImage}
        netWorth={detail.netWorth}
        bio={detail.bio}
        country={detail.country}
        name={detail.name}
        industries={detail.industries}
        id={""}
        state={""}
        city={""}
        position={0}
        financialAssets={[]}
        thumbnail={""}
        about={[]}
      />
    </div>
  );
}
