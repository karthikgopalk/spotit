import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { ContentSection, StyledRow } from "./styles";
import SearchBar from "../../common/SearchBar";
import List from "../../common/List";
import { useEffect, useState } from "react";
import { getData, postData } from "../Api";
import Loader from "../../Loader";

const ContentBlock = ({ t, id, direction }: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [showCard, setShowCard] = useState(false);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="center"
          align="middle"
          id={id}
          direction={direction}
        >
          <div style={{ height: 200 }}>
            {loading && <Loader />}
            <SearchBar setShowCard={setShowCard} />
          </div>
          {showCard && <List items={data} />}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
