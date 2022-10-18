import './ComboBox.css'

const ComboBox = ({label, items, ...props}) => {
  return (
    <div className='campo'>
      <label>{label}</label>
      <select {...props} >
        <option value=""></option>
        {items?.map(
          el => <option key={el.value} value={el.value}>{el.name}</option>
        )}
      </select>
    </div>
  )
}

export default ComboBox;