import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

const filtersData = [
    {
      label: "Должность",
      name: "Position",
      options: [
        { label: "Backend-разработчик", value: "Backend" },
        { label: "Frontend-разработчик", value: "Frontend" },
        { label: "Аналитик", value: "Analyst" },
        { label: "Менеджер", value: "Manager" },
        { label: "Дизайнер", value: "Designer" }
      ]
    },
    {
      label: "Пол",
      name: "Gender",
      options: [
        { label: "Мужчина", value: "Male" },
        { label: "Женщина", value: "Female" }
      ]
    },
    {
      label: "Стек технологий",
      name: "Stack",
      options: [
        { label: "CSharp", value: "CSharp" },
        { label: "React", value: "React" },
        { label: "Java", value: "Java" },
        { label: "PHP", value: "PHP" },
        { label: "Figma", value: "Figma" },
        { label: "Word", value: "Word" }
      ]
    }
  ];

const formatDate = (dateString) => {
    const parsedDate = parse(dateString, 'dd MMMM yyyy', new Date(), { locale: ru });
    const formattedDate = format(parsedDate, 'dd.MM.yyyy');
    return formattedDate;
}

const formatPhoneNumber = (phoneNumberString) => {
    return phoneNumberString.replace(/[()]/g, '');
};

export { formatDate, formatPhoneNumber, filtersData };