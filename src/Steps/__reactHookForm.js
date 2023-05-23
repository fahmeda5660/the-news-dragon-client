/**https://react-hook-form.com/get-started
 * npm install react-hook-form
 * import { useForm } from "react-hook-form";
 * export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
 * */ 
/**https://github.com/JedWatson/react-select
 * npm i react-select
 * import Select from 'react-select';
 * copy options:
  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
 * copy usestate: const [selectedOption, setSelectedOption] = useState(null);
 *copy select:
       <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
 * isMulti props for multiple select
 *CreatableSelect for create new writen option
 * */ 