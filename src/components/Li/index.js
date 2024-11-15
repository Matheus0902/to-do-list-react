export const Li = ({id, isDone, text, onCheckboxChange}) => {
  return (
    <li id={id}>
      <input className="checkbox" type="checkbox" onChange={onCheckboxChange}/>
      <input className={` taskCompleted-${isDone} taskDescription`} defaultValue={text}/>
      <div className="editOrRemove">
        <button className="edit buttons"></button>
        <button className="remove buttons"></button>
      </div>
    </li>
  )
}
