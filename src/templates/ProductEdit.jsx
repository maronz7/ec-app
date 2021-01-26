import React, { useCallback, useState } from "react";
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit";

const ProductEdit = () => {
  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const categories = [
    { id: "tops", name: "トップス" },
    { id: "shirts", name: "シャツ" },
    { id: "pants", name: "パンツ" },
  ];

  const genders = [
    { id: "all", name: "全て" },
    { id: "male", name: "メンズ" },
    { id: "fenale", name: "レディース" },
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <TextInput
          fullWidth={true}
          label={"商品名"}
          multiline={false}
          requierd={true}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          fullWidth={true}
          label={"商品説明"}
          multiline={true}
          requierd={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
        <SelectBox
          label={"カテゴリー"}
          requierd={true}
          options={categories}
          select={setCategory}
          value={category}
        />
        <SelectBox
          label={"性別"}
          requierd={true}
          options={genders}
          select={setGender}
          value={gender}
        />
        <TextInput
          fullWidth={true}
          label={"価格"}
          multiline={false}
          requierd={true}
          rows={1}
          value={price}
          type={"number"}
          onChange={inputPrice}
        />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
            label={"商品情報を保存"}
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
