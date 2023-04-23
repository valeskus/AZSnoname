import {useMemo, useState} from 'react';

export const useDatePickerController = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePcikerVisible] = useState(false);

  const onChangeDate = (nextDate: Date) => {
    setDate(nextDate);
  };

  const closeDatePicker = () => {
    setDatePcikerVisible(false);
  };

  const openDatePicker = () => {
    setDatePcikerVisible(true);
  };

  const formattedDate = useMemo(() => {
    const year = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();

    let formattedMonth = mounth.toString();
    let formattedDay = day.toString();

    if (mounth < 10) {
      formattedMonth = '0' + mounth;
    }
    if (day < 10) {
      formattedDay = '0' + day;
    }

    return formattedDay + '.' + formattedMonth + '.' + year;
  }, [date]);

  return {
    date,
    isDatePickerVisible,
    formattedDate,
    onChangeDate,
    openDatePicker,
    closeDatePicker,
  };
};
