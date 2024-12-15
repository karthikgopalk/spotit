import React, { useState } from "react";
import BasicCard from "../Card";
import { postData } from "../../components/Api";
import Loader from "../../Loader";

interface Item {
  id: number;
  title: string;
}

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const handlePost = async (id: number) => {
    console.log("id", id);
    setLoading(true);
    try {
      const newData = { title: "foo", body: "bar", userId: 1 };
      const result = await postData(newData);
      setData([...data, result]);
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <Loader />}
      <h2>Item List</h2>
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {items.map((item) => (
          <BasicCard key={item.id} item={item} onClick={() => handlePost} />
        ))}
      </div>
    </div>
  );
};

export default List;
