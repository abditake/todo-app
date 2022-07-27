import { useContext } from 'react';
import useForm from '../../hooks/forms.js';
import { SettingsContext} from "../../Context/Settings";




const SettingsForm = () => {

  const {showCompleted, changeItems, sortBy, storeSettings}  = useContext(SettingsContext);

  const { handleChange, handleSubmit } = useForm(changeSettings);


  function changeSettings(newSettings){
    showCompleted(newSettings.completed)
    changeItems(newSettings.pageItems)
    sortBy(newSettings.sort)
    storeSettings(newSettings.value)

  }
  return(
    <>
    <form onSubmit={handleSubmit}>

<h2>Add To Do Item</h2>

<label>
  <span>To Do Item</span>
  <input onChange={handleChange} name="completed" type="text" placeholder="Item Details" />
</label>

<label>
  <span>Assigned To</span>
  <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
</label>

<label>
  <span>Sort By</span>
  <input onChange={handleChange}  type="text" name="sort"

  />
</label>

<label>
  <button type="submit">Add Item</button>
</label>
</form>
    </>
  )
};


export default SettingsForm;

