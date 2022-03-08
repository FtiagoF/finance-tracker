import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { Category } from "../TableItem/styles";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);
  const [errors, setErrors] = useState({
    date: "",
    category: "",
    title: "",
    value: "",
  });

  useEffect(() => {
    alert(JSON.stringify(errors))
    
  }, [errors])

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    if (isNaN(new Date(dateField).getTime())) {
      setErrors((prevState) => ({...prevState, date: 'Data inválida'}))
    }
    if (!categoryKeys.includes(categoryField)) {
      setErrors((prevState) => ({...prevState, category: 'Categoria Inválida'}))
    }
    if (titleField == "") {
      setErrors((prevState) => ({...prevState, title: 'Titulo inválido'}))
    }
    if (valueField <= 0) {
      setErrors((prevState) => ({...prevState, value: 'Valor inválido'}))
    }else {
      let [year, month, day] = dateField.split("-");
      console.log(year, month, day);
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearInput();
    }
  };

  const clearInput = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          id="dateInput"
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
          error={errors.date}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          id="categorySelect"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
          error={errors.category}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          id="titleInput"
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
          error={errors.title}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          id="valueInput"
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
          error={errors.value}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
