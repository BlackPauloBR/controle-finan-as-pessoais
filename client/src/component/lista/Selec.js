import React from 'react';
import { Select } from 'react-materialize';
export default function Selec({ theYearMonth }) {
  const handleSelect = (event) => {
    theYearMonth(event.target.value);
  };

  return (
    <Select
      id="Select-9"
      multiple={false}
      onChange={handleSelect}
      options={{
        classes: '',
        dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        },
      }}
      value=""
    >
      <option disabled value="">
        Selecione uma data para verificação
      </option>
      <option value="2019-01">JAN/2019</option>
      <option value="2019-02">FEV/2019</option>
      <option value="2019-03">MAR/2019</option>
      <option value="2019-04">ABR/2019</option>
      <option value="2019-05">MAI/2019</option>
      <option value="2019-06">JUN/2019</option>
      <option value="2019-07">JUL/2019</option>
      <option value="2019-08">AGO/2019</option>
      <option value="2019-09">SET/2019</option>
      <option value="2019-10">OUT/2019</option>
      <option value="2019-11">NOV/2019</option>
      <option value="2019-12">DEZ/2019</option>

      <option value="2020-01">JAN/2020</option>
      <option value="2020-02">FEV/2020</option>
      <option value="2020-03">MAR/2020</option>
      <option value="2020-04">ABR/2020</option>
      <option value="2020-05">MAI/2020</option>
      <option value="2020-06">JUN/2020</option>
      <option value="2020-07">JUL/2020</option>
      <option value="2020-08">AGO/2020</option>
      <option value="2020-09">SET/2020</option>
      <option value="2020-10">OUT/2020</option>
      <option value="2020-11">NOV/2020</option>
      <option value="2020-12">DEZ/2020</option>

      <option value="2021-01">JAN/2021</option>
      <option value="2021-02">FEV/2021</option>
      <option value="2021-03">MAR/2021</option>
      <option value="2021-04">ABR/2021</option>
      <option value="2021-05">MAI/2021</option>
      <option value="2021-06">JUN/2021</option>
      <option value="2021-07">JUL/2021</option>
      <option value="2021-08">AGO/2021</option>
      <option value="2021-09">SET/2021</option>
      <option value="2021-10">OUT/2021</option>
      <option value="2021-11">NOV/2021</option>
      <option value="2021-12">DEZ/2021</option>
    </Select>
  );
}
