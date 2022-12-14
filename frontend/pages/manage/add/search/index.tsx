import { useEffect, useState } from "react";
import { SearchInput } from "../../../../common/Input";
import SearchCardList from "../../../../components/manage/add/search/SearchCardList";
import { Wrapper } from "../../../../styles/manage/add/search/styles";
import { StaticImageData } from "next/image";
import { fetchAllPlantsList } from "../../../../apis/manage";
import { NextPage } from "next";
import { ManageHomeAni } from "../../../../styles/animations/animation";

export interface SearchPlantType {
  image: StaticImageData;
  krName: string;
  egName: string;
  plantSeq: string;
}
export async function getStaticProps() {
  const plants = await fetchAllPlantsList();
  return {
    props: {
      plants,
    },
  };
}

export interface Plants {
  plantSeq: number;
  plantName: string;
  plantNeName: string;
  plantZRName?: string;
  imagePath: string;
  disnName?: string;
}

const SearchPlant: NextPage<{ plants: Plants[] }> = ({ plants }) => {
  const [searchInput, setSearchInput] = useState("");
  const [plantList, setPlantList] = useState(plants);
  useEffect(() => {
    if (searchInput === "" || searchInput === null) {
      setPlantList(plants);
      return;
    }
    const newData = plants.filter(plant => {
      return plant.plantName.includes(searchInput);
    });

    setPlantList(newData);
  }, [plants, searchInput]);

  return (
    <Wrapper variants={ManageHomeAni} initial="out" animate="in" exit="out">
      <SearchInput
        placeholder="찾는 식물 이름을 검색해주세요."
        disabled={false}
        setSearchInput={setSearchInput}
        value={searchInput}
      />
      <SearchCardList data={plantList} isDelivery={false} />
    </Wrapper>
  );
};

export default SearchPlant;
